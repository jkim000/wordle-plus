import { observer } from "mobx-react-lite";
import { StoreProps } from "../types/types";

interface KeyboardProps {
    store: StoreProps;
}

const Keyboard = observer(({ store }: KeyboardProps) => {
    const keyboardKeys = ["QWERTYUIOP", "ASDFGHJKL", "ZXCVBNM"];

    return (
        <>
            {keyboardKeys.map((row, rowIndex) => (
                <div key={rowIndex} className="flex justify-center">
                    {row.split("").map((key, charIndex) => {
                        const bgColor = store.exactGuesses.includes(key)
                            ? "bg-green-600"
                            : store.inexactGuesses.includes(key)
                            ? "bg-yellow-500"
                            : store.allGuesses.includes(key)
                            ? "bg-gray-700"
                            : "bg-gray-500";
                        return (
                            <div
                                key={rowIndex + charIndex}
                                className={`flex justify-center items-center m-1 h-12 w-12 rounded-md text-xl ${bgColor}`}
                            >
                                {key}
                            </div>
                        );
                    })}
                </div>
            ))}
        </>
    );
});

export default Keyboard;
