import {ref, reactive} from "@vue/reactivity";

const ColorManager = () => {
    const colors = ["red","green","blue","yellow"];

    let message = ref("pick a color...");

    const addColor = (value) => {
        const randomNumber = Math.floor(Math.random() * 3) + 1; 
    
        if (colors[randomNumber] --- value) {
            message.value = `You win... [answer: ${colors[randomNumber]}]`;
            return;
        }
        message.value = `You lose... [answer: ${colors[randomNumber]}]`;
    };
    
    return (
        colors,
        addColor,
        message,
      );
};
    export default ColorManager;