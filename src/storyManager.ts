
import * as fs from 'fs';
import { Story, Chapter, Choice } from './types'; // Importando a definição de tipos
const inquirer = require('inquirer'); // Certifique-se de que inquirer está carregado aqui

// Função para carregar a história do arquivo JSON
export function loadStory(filePath: string): Story {
    const data = fs.readFileSync(filePath, 'utf-8'); // Lê o arquivo JSON
    return JSON.parse(data); // Converte os dados JSON em um objeto JavaScript
}

// Função para exibir um capítulo e suas escolhas
export function displayChapter(chapter: Chapter): void {
    console.log(`\n${chapter.text}`); // Exibe o texto do capítulo
    chapter.choices.forEach((choice, index) => {
        console.log(`${index + 1}: ${choice.text}`); // Exibe as escolhas
    });
}

// Função para gerenciar a história
export async function startStory(story: Story): Promise<void> {
    console.log(`Título: ${story.title}`); // Exibe o título da história
    console.log(`Descrição: ${story.description}\n`); // Exibe a descrição

    let currentChapterId = 'inicio'; // Começa pelo capítulo inicial

    while (true) {
        const chapter = story.chapters.find(ch => ch.id === currentChapterId);
        if (!chapter) break; // Se o capítulo não for encontrado, encerra

        displayChapter(chapter); // Exibe o capítulo atual

        const choice = await promptUserChoice(chapter.choices); // Solicita ao usuário uma escolha
        currentChapterId = choice.nextId; // Atualiza o ID do capítulo com base na escolha
    }
}

// Função para solicitar ao usuário uma escolha
async function promptUserChoice(choices: Choice[]): Promise<Choice> {
    const answer = await inquirer.prompt([{
        type: 'list',
        name: 'selectedChoice',
        message: 'Escolha uma opção:',
        choices: choices.map(choice => choice.text) // Mapeia as escolhas para o formato do inquirer
    }]);

    const selectedIndex = choices.findIndex(choice => choice.text === answer.selectedChoice); // Encontra o índice da escolha selecionada
    return choices[selectedIndex]; // Retorna a escolha correspondente
}
