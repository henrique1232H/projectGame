const takeQuery = () => {
    const mario = document.querySelector(".mario");
    const floor = document.querySelector(".floor");
    const stage = document.querySelector(".stage");
    const menu = document.querySelector(".menu");
    const shadow = document.querySelector(".shadow")
    const audioStage = document.querySelector("audio");

    return {
        mario,
        floor,
        stage,
        audioStage,
        menu,
        shadow
    }
}

const takeQuerySelector = takeQuery()

export default takeQuerySelector