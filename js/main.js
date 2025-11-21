
class Player {
    constructor() {
        this.width = 20;
        this.height = 10;
        this.positionX = 50 - this.width / 2;
        this.positionY = 0;

        this.updateUI()
    }
    updateUI() {
        const playerElm = document.getElementById("player")
        playerElm.style.width = this.width + "vw"
        playerElm.style.height = this.height + "vh"
        playerElm.style.left = this.positionX + "vw"
        playerElm.style.bottom = this.positionY + "vh"
    }
    moveLeft() {
        if (this.positionX > 0) {
            this.positionX--;
            this.updateUI()
        }
    }
    moveRight() {
        if (this.positionX < 100 - this.width) {
            this.positionX++;
            this.updateUI()
        }
    }
}


class Obstacle {
    constructor() {
        this.width = 10
        this.height = 20
        this.positionX = Math.floor(Math.random() * (100 - this.width + 1)); // generate a random number between 0 and (100 - this.width)
        this.positionY = 100
        this.obstacleElm = null

        this.createDomElement()
        this.updateUI()

    }
    createDomElement() {
        // step1: create the element with document.createElement()
        this.obstacleElm = document.createElement("div")

        // step2: add content or modify
        this.obstacleElm.className = "obstacle"

        //step3: append to the dom: `parentElm.appendChild()`
        const parentElm = document.getElementById("board")
        parentElm.appendChild(this.obstacleElm)
    }
    updateUI() {
        this.obstacleElm.style.width = this.width + "vw"
        this.obstacleElm.style.height = this.height + "vh"
        this.obstacleElm.style.left = this.positionX + "vw"
        this.obstacleElm.style.bottom = this.positionY + "vh"
    }
    moveDown() {
        this.positionY--;
        this.updateUI()
    }
}


const player = new Player()

const obstaclesArr = [] // will store instances of the class Obstacle


// create obstacles
setInterval(() => {
    const newObstacle = new Obstacle()
    obstaclesArr.push(newObstacle)
}, 5000)


// move obstacles
setInterval(() => {
    obstaclesArr.forEach((obstacleInstance, i, arr) => {
        obstacleInstance.moveDown()
    })
}, 40)


document.addEventListener('keydown', (e) => {
    if (e.code === 'ArrowLeft') {
        player.moveLeft()
    } else if (e.code === 'ArrowRight') {
        player.moveRight()
    }
});
