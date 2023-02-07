import {ref, reactive} from "@vue/reactivity";

export function usePicker() {
    const colors = ["green", "red", "blue", "purple"];
    let message = ref("Wanna see a magic trick? Pick a color");

    const matchColor = (value) => {
        const randomNumber = Math.floor(Math.random() * 3) + 1;

        if (colors[randomNumber] === value) {
            message.value = `Yes! You win. Answer is ${colors[randomNumber]}`;
            return;
        }
        message.value = `You lose! Answer is ${colors[randomNumber]}`;
    };
    return { colors, message, matchColor };
};