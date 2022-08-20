import { Paddle } from '../game_objects/paddle';


test('paddle not moving', () => {
  const paddle = new Paddle();
  expect(paddle.isMoving).toBe(false);
});