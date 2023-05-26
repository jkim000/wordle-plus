export interface StoreProps {
    word: string;
    guesses: string[];
    currentGuess: number;
    readonly won: boolean;
    readonly lost: boolean;
    readonly allGuesses: string[];
    readonly exactGuesses: string[];
    readonly inexactGuesses: string[];
    init(): void;
    submitGuess(): void;
    handleKeyup(e: { key: string }): void;
}
