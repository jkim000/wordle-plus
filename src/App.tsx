import { observer, useLocalObservable } from "mobx-react-lite";
import { useEffect } from "react";

import Guess from "./components/Guess";
import Keyboard from "./components/Keyboard";
import WordleStore from "./store/WordleStore";

const App = observer(() => {
    const store = useLocalObservable(() => WordleStore);

    useEffect(() => {
        store.init();

        window.addEventListener("keyup", store.handleKeyup);
        return () => {
            window.removeEventListener("keyup", store.handleKeyup);
        };
    }, [store]);

    return (
        <div className="flex flex-col justify-center h-screen w-screen">
            <h1 className="m-2 text-center text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-red-700 to-orange-300">
                6-Letter Wordle
            </h1>
            <h3 className="m-2 text-center text-xl">
                To be impressive, your mode result should be 3 guess attempts
            </h3>
            <div className="mt-4">
                {store.guesses.map((_, i) => (
                    <Guess
                        key={i}
                        word={store.word}
                        guess={store.guesses[i]}
                        isGuessed={i < store.currentGuess}
                        currentRow={i}
                        store={store}
                    />
                ))}
            </div>
            <div className="flex justify-center h-12 my-4">
                {(store.won || store.lost) && (
                    <button
                        className="h-12 w-36 rounded-full text-xl bg-green-600"
                        onClick={store.init}
                    >
                        Play Again
                    </button>
                )}
            </div>
            <div className="flex flex-col items-center">
                <Keyboard store={store} />
                word: {store.word}
                guesses: {JSON.stringify(store.guesses)}
            </div>
        </div>
    );
});

export default App;
