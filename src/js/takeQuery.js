const takeQuery = () => {
    const mario = document.querySelector(".mario");
    const floor = document.querySelector(".floor");
    const stage = document.querySelector(".stage");
    const menu = document.querySelector(".menu");
    const shadow = document.querySelector(".shadow")
    const audioStage = document.querySelector("audio");
    const buttonMenuNodeList = document.querySelectorAll("button");
    const form = document.querySelector("form");

    const buttonMenu = Array.from(buttonMenuNodeList)

    return {
        mario,
        floor,
        stage,
        audioStage,
        menu,
        shadow,
        buttonMenu,
        form
    }
}

const takeQuerySelector = takeQuery()

export default takeQuerySelector