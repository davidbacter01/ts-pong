export class Paddle {
    isMoving: boolean;
    private _ctx: CanvasRenderingContext2D;
    constructor(ctx: CanvasRenderingContext2D) {
        this.isMoving = false;
        this._ctx = ctx;
    }
}