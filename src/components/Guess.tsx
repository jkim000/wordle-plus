import classNames from "classnames";

interface GuessProps {
    word: string;
    guess: string;
    isGuessed: boolean;
}

export default function Guess({ word, guess, isGuessed }: GuessProps) {
    // const wordCounter: { [letter: string]: number } = {};
    // for (let i = 0; i < word.length; i++) {
    //     if (!wordCounter[word[i]]) wordCounter[word[i]] = 1;
    //     else wordCounter[word[i]]++;
    // }

    // { p: 1, h: 1, o: 2, t: 1, n: 1 }

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
                                : guess[i] === word[i]
                                ? "bg-green-600"
                                : word.includes(guess[i])
                                ? "bg-yellow-500"
                                : "bg-gray-700"
                        )}
                    >
                        {guess[i]}
                    </div>
                );
            })}
        </div>
    );
}
