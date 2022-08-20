export enum Direction {
    Up = 'UP',
    Down = 'DOWN',
    None = 'NONE'
}

export class Paddle {
    private _ctx: CanvasRenderingContext2D;
    private _movingDirection: Direction;
    constructor(ctx: CanvasRenderingContext2D) {
        this._ctx = ctx;
        this._movingDirection = Direction.None;
    }

    public get isMoving() {
        return this._movingDirection != Direction.None;
    }

    public get isMovingUp() {
        return this._movingDirection === Direction.Up;
    }

    public moveUp() {
        this._movingDirection = Direction.Up;
    }
}