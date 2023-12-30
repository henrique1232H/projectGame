const takeQuery = () => {
    const mario = document.querySelector(".mario");
    const floor = document.querySelector(".floor");
    const stage = document.querySelector(".stage")

    return {
        mario,
        floor,
        stage
    }
}

const takeQuerySelector = takeQuery()

export default takeQuerySelector