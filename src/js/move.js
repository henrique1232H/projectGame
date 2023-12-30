import takeQuerySelector from "./takeQuery.js";

const moveSet = [];
let pixel = 0;


const moveToLeft = () => {

    window.addEventListener("keydown", (e) => {

        if(e.key === "d") {
            moveSet.push("front")
            pixel = pixel + 5;
            console.log(pixel)

            for(let i = 0; i < moveSet.length; i++) {
                takeQuerySelector.mario.style.left = `${pixel}px`
            }

            

            console.log(moveSet)
        }
    })
}

const moveToRight = () => {
    window.addEventListener("keydown", (e) => {
        if(e.key === "a") {
            pixel = pixel - 5;

            if (pixel < 0) {
                pixel = 0;
            }

            console.log(pixel)
            moveSet.pop();
            console.log(moveSet)

            for(let i = 0; i < moveSet.length; i++) {
                takeQuerySelector.mario.style.right = `${pixel}px`
            }
        }
    })
}

const jump = () => {
    window.addEventListener("keydown", (e) => {
        if(e.key === "w") {

            takeQuerySelector.mario.classList.add("jumpMario");

            setTimeout(() => {
                takeQuerySelector.mario.classList.remove("jumpMario")
            }, 500)
        }
    })
}


export {moveToLeft, moveToRight,jump}