export enum Direction {
    Up = 'UP',
    Down = 'DOWN',
    None = 'NONE'
}

export type Position = {
    x: number;
    y: number;
}

export type TwoDSize = {
    x: number;
    y: number;
}

export type Velocity = {
    x: number;
    y: number;
}

export class Paddle {
    private _ctx: CanvasRenderingContext2D;
    private _movingDirection: Direction;
    private _size: TwoDSize = {
        x: 50,
        y: 150
    };

    private _position: Position;

    private _velocity: Velocity = {
        x: 0,
        y: 2
    };

    constructor(ctx: CanvasRenderingContext2D, position: Position) {
        this._ctx = ctx;
        this._movingDirection = Direction.None;
        this._position = {...position, y: position.y - this._size.y};
    }

    public get isMoving() {
        return this._movingDirection != Direction.None;
    }

    public get isMovingUp() {
        return this._movingDirection === Direction.Up;
    }

    public get isMovingDown() {
        return this._movingDirection === Direction.Down;
    }

    public get position() {
        return this._position;
    }

    public moveUp() {
        this._movingDirection = Direction.Up;
    }

    public moveDown() {
        this._movingDirection = Direction.Down;
    }

    public update() {
        switch(this._movingDirection) {
            case Direction.None:
                return;
            case Direction.Up:
                this._position.y -= this._velocity.y;
                break;
            case Direction.Down:
                this._position.y += this._velocity.y;
                break;
        }
    }
}