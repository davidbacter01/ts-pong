export enum Direction {
    Up = 'UP',
    Down = 'DOWN',
    None = 'NONE'
}

export type Position = {
    x: number;
    y: number;
}

export type Size = {
    width: number;
    height: number;
}

export type Velocity = {
    x: number;
    y: number;
}

export class Paddle {
    private _ctx: CanvasRenderingContext2D;
    private _movingDirection: Direction;
    private _color: string;
    private _size: Size = {
        width: 50,
        height: 150
    };

    private _position: Position;

    private _velocity: Velocity = {
        x: 0,
        y: 2
    };

    constructor(ctx: CanvasRenderingContext2D, position: Position, color: string) {
        this._ctx = ctx;
        this._movingDirection = Direction.None;
        this._position = {...position, y: position.y - this._size.height};
        this._color = color;
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

    public get size() {
        return this._size;
    }

    public moveUp() {
        this._movingDirection = Direction.Up;

        if (this._position.y - this._velocity.y < 0) {
            this._position.y = 0;
            this.stop();
        }        
    }

    public moveDown() {
        this._movingDirection = Direction.Down;
    }

    public stop() {
        this._movingDirection = Direction.None;
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

    public draw() {
        this._ctx.fillStyle = this._color;
        this._ctx.fillRect(this.position.x, this.position.y, this._size.width, this._size.height);
    }
}