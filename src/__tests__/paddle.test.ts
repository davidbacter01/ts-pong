/**
 * @jest-environment jsdom
 */

import { Paddle } from '../game_objects/paddle';

function getCanvasContext() {
    const canvas = document.createElement('canvas');
    return canvas.getContext("2d");
}

function getPaddle() {
    return new Paddle(getCanvasContext(), {x: 50, y: 100});
}

test('paddle not moving', () => {
    const paddle = getPaddle();
    const initialPosition = paddle.position;
    paddle.update();
    expect(paddle.isMoving).toBe(false);
    expect(paddle.position).toBe(initialPosition);
});

test('paddle is moving up', () => {
    const paddle = getPaddle();
    paddle.moveUp();
    expect(paddle.isMovingUp).toBe(true);
})

test('paddle is moving down', () => {
    const paddle = getPaddle();
    paddle.moveDown();
    expect(paddle.isMovingDown).toBe(true);
})