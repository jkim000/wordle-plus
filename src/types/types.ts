export interface StoreProps {
    word: string;
    guesses: string[];
    currentGuess: number;
    animateGuess: boolean;
    readonly won: boolean;
    readonly lost: boolean;
    readonly allGuesses: string[];
    readonly exactGuesses: string[];
    readonly inexactGuesses: string[];
    init(): void;
    submitGuess(): boolean;
    handleKeyup(e: { key: string }): void;
}
