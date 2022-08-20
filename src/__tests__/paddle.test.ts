/**
 * @jest-environment jsdom
 */

import { Paddle } from '../game_objects/paddle';

function getCanvasContext() {
    const canvas = document.createElement('canvas');
    return canvas.getContext("2d");
}

test('paddle not moving', () => {
    const ctx = getCanvasContext();
    const paddle = new Paddle(ctx);
    expect(paddle.isMoving).toBe(false);
});