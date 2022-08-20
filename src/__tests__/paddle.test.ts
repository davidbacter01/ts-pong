/**
 * @jest-environment jsdom
 */

import { Paddle } from '../game_objects/paddle';
import { getCanvasAndContext } from './utils';


function getPaddle() {
    const [, ctx] = getCanvasAndContext()
    return new Paddle(ctx as CanvasRenderingContext2D, {x: 50, y: 100}, 'green');
}

test('paddle not moving, position is same before and after update', () => {
    const paddle = getPaddle();
    const initialPosition = paddle.position;
    paddle.update();
    expect(paddle.isMoving).toBe(false);
    expect(paddle.position).toBe(initialPosition);
});

test('paddle is moving up, position x is same after update and y is less', () => {
    const paddle = getPaddle();
    const { x, y } = paddle.position;
    paddle.moveUp();
    paddle.update();
    expect(paddle.isMovingUp).toBe(true);
    expect(paddle.position.y).toBeLessThan(y);
    expect(paddle.position.x).toBe(x);
});

test('paddle is moving down, position x is same after update and y is greater', () => {
    const paddle = getPaddle();
    const { x, y } = paddle.position;
    paddle.moveDown();
    paddle.update();
    expect(paddle.isMovingDown).toBe(true);
    expect(paddle.position.y).toBeGreaterThan(y);
    expect(paddle.position.x).toBe(x);
});

test('paddle not moving after stop, x and y are the same after update', () => {
    const paddle = getPaddle();
    paddle.moveDown();
    paddle.update();
    const { x, y } = paddle.position;
    paddle.stop();
    paddle.update();
    expect(paddle.position.x).toBe(x);
    expect(paddle.position.y).toBe(y);
});

test('paddle is drawn on canvas', () => {
    const paddle = getPaddle();
    const [,ctx] = getCanvasAndContext();
    let imageData = (ctx as CanvasRenderingContext2D).getImageData(paddle.position.x, paddle.position.y, paddle.size.x, paddle.size.y).data
    expect(imageData.every((val, _index, _arr) => val === 0)).toBe(true);
    paddle.draw();
    imageData = (ctx as CanvasRenderingContext2D).getImageData(paddle.position.x, paddle.position.y, paddle.size.x, paddle.size.y).data
    // @ts-ignore
    const events = ctx.__getEvents();
    expect(events).toMatchSnapshot();
})