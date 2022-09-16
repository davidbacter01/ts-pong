import { GameObject } from "./interfaces";
import { Paddle } from "./paddle";

enum State {
    Running,
    Pause
}


export class Game {
    gameObjects: Array<GameObject>;
    playerOne: Paddle;
    playerTwo: Paddle;
    ball: GameObject;
    gameState: State = State.Running;

    constructor(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
        this.playerOne = new Paddle(ctx, {x:50, y:canvas.height /2}, 'green');
        this.playerTwo = new Paddle(ctx, {x:canvas.width - 100, y:canvas.height /2}, 'blue');
        this.gameObjects = [this.playerOne, this.playerTwo, this.ball];
    }

    play() {
        if (this.gameState === State.Pause) {
            return;
        }
        requestAnimationFrame(this.play);
        for (const el of this.gameObjects) {
            el.update();
            el.draw();
        }
    }
}