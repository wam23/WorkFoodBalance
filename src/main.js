/** @type {import("../typings/phaser")} */

import {LoadScene} from "./scenes/LoadScene.js";
import {MenuScene} from "./scenes/MenuScene.js";
import {Level1Scene} from "./scenes/Level1Scene.js";

const roundHalf = num => Math.round(num * 2) / 2;

const graphicsSettings = { best: 1, medium: 0.75, low: 0.5 };
const DPR = window.devicePixelRatio * graphicsSettings.best;
const { width, height } = window.screen;

// Set width and height.
const WIDTH = Math.round(Math.max(width, height) * DPR);
const HEIGHT = Math.round(Math.min(width, height) * DPR);

export const assetsDPR = roundHalf(Math.min(Math.max(HEIGHT / 360, 1), 4))

console.log('DPR = ', DPR)
console.log('assetsDPR = ', assetsDPR)
console.log('WIDTH = ', WIDTH)
console.log('HEIGHT = ', HEIGHT)

let config = {
    type: Phaser.AUTO,
    scale: {
        parent: 'phaser-game',
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: WIDTH,
        height: HEIGHT
      },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 250 },
            debug: false
        }
    },
    scene: [
        LoadScene, MenuScene, Level1Scene
    ]
};

let game = new Phaser.Game(config);