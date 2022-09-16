import { Game } from "./game_objects/game";


const canvas: HTMLCanvasElement = document.getElementById('gameScreen') as undefined as HTMLCanvasElement;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight - 4;
canvas.style.backgroundColor = 'black';

const ctx = canvas.getContext('2d');

const game = new Game(ctx, canvas);
game.play();