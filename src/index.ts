const canvas: HTMLCanvasElement = document.getElementById('gameScreen') as undefined as HTMLCanvasElement;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight - 4;
canvas.style.backgroundColor = 'black';

const ctx = canvas.getContext('2d');

ctx.fillStyle = 'red';
ctx.fillRect(100, 100, 40, 200);