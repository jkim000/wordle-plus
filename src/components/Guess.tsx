import { useState, useEffect } from "react";
import { observer } from "mobx-react-lite";
import classNames from "classnames";
import { StoreProps } from "../types/types";

interface GuessProps {
    word: string;
    guess: string;
    isGuessed: boolean;
    currentRow: number;
    store: StoreProps;
}

const Guess = observer(
    ({ word, guess, isGuessed, currentRow, store }: GuessProps) => {
        const [animateGuess, setAnimateGuess] = useState(false);

        useEffect(() => {
            setAnimateGuess(
                store.currentGuess === currentRow && store.animateGuess
            );
        }, [currentRow, store.animateGuess, store.currentGuess]);

        const wordCounter: { [letter: string]: number } = {};
        for (let i = 0; i < word.length; i++) {
            if (!wordCounter[word[i]]) wordCounter[word[i]] = 1;
            else wordCounter[word[i]]++;
        }

        return (
            <div className="flex justify-center gap-2 my-4">
                {new Array(6).fill(0).map((_, i) => {
                    return (
                        <div
                            key={i}
                            className={classNames(
                                "flex justify-center items-center h-16 w-16 border-2 font-bold uppercase text-slate-50 text-3xl",
                                !isGuessed
                                    ? "bg-stone-950"
                                    : guess[i] === word[i] &&
                                      wordCounter[guess[i]]-- > 0
                                    ? "bg-green-600"
                                    : word.includes(guess[i]) &&
                                      wordCounter[guess[i]]-- > 0
                                    ? "bg-yellow-500"
                                    : "bg-gray-700",
                                animateGuess && "animate-ping" // Tailwind doesn't have a better animation style option, so just stuck with this
                            )}
                        >
                            {guess[i]}
                        </div>
                    );
                })}
            </div>
        );
    }
);

export default Guess;
