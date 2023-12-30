import takeQuerySelector from "./takeQuery.js";

const menu = () => {

    takeQuerySelector.stage.classList.add("hide");

    takeQuerySelector.form.onsubmit = (e) => {
        e.preventDefault();

        takeQuerySelector.audioStage.play();
        takeQuerySelector.stage.classList.remove("hide");
        takeQuerySelector.shadow.classList.add("hide")

    } 
    
}

menu()