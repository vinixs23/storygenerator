import { loadStory } from './storyManager'; // Importa a função para carregar a história
import { startStory } from './storyManager'; // Importa a função para iniciar a história
import { Story } from './types'; // Importa a definição de tipos Story

async function main() {
    const story: Story = loadStory('caminho/para/seu/arquivo.json'); // Carrega a história de um arquivo JSON
    await startStory(story); // Inicia a história
}

main().catch(error => {
    console.error('Erro ao executar a história:', error);
});
