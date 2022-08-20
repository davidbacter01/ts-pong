import { Paddle } from "./game_objects/paddle";

const canvas: HTMLCanvasElement = document.getElementById('gameScreen') as undefined as HTMLCanvasElement;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight - 4;
canvas.style.backgroundColor = 'black';

const ctx = canvas.getContext('2d');

const playerOne = new Paddle(ctx, {x:50, y:canvas.height /2}, 'green');
playerOne.draw();