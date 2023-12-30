const takeQuery = () => {
    const mario = document.querySelector(".mario");
    const floor = document.querySelector(".floor");
    const stage = document.querySelector(".stage");
    const audioStage = document.querySelector("audio")

    return {
        mario,
        floor,
        stage,
        audioStage
    }
}

const takeQuerySelector = takeQuery()

export default takeQuerySelector