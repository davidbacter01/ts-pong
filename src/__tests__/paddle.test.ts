/**
 * @jest-environment jsdom
 */

import { Paddle } from '../game_objects/paddle';

function getCanvasContext() {
    const canvas = document.createElement('canvas');
    return canvas.getContext("2d");
}

function getPaddle() {
    return new Paddle(getCanvasContext());
}

test('paddle not moving', () => {
    const paddle = getPaddle();
    expect(paddle.isMoving).toBe(false);
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