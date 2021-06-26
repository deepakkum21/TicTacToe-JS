import { Game } from './game.js';
import GameView from './gameView.js';

let game = new Game();
let gameView = new GameView();

const newGame = document
  .querySelector('.restart')
  .addEventListener('click', () => {
    onRestartClick();
  });

let tiles = document.querySelectorAll('.board-tile');
tiles.forEach((tile) => {
  tile.addEventListener('click', () => {
    onTileClicked(tile.dataset.index);
  });
});

const onTileClicked = (index) => {
  game.makeMove(index);
  gameView.updateBoard(game);
};

const onRestartClick = () => {
  game = new Game();
  gameView.updateBoard(game);
};

gameView.updateBoard(game);
