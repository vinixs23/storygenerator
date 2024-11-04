// Definindo um tipo para uma escolha na história
export interface Choice {
    nextId: string;
    text: string;      // O texto que será mostrado ao usuário
    nextChapter: string; // O capítulo que será carregado após a escolha
}

// Definindo um tipo para um capítulo da história
export interface Chapter {
    id: string;
    title: string;     // Título do capítulo
    text: string;      // Texto do capítulo
    choices: Choice[]; // Array de escolhas que o usuário pode fazer
}

// Definindo um tipo para a história
export interface Story {
    description: any;
    title: string;     // Título da história
    chapters: Chapter[]; // Array de capítulos na história
}
