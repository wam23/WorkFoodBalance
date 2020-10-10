/** @type {import("../typings/phaser")} */

import {LoadScene} from "./scenes/LoadScene.js";
import {MenuScene} from "./scenes/MenuScene.js";
import {ScoreScreen} from "./scenes/ScoreScene.js";
import {Level1Scene} from "./scenes/Level1Scene.js";
import {Level2Scene} from "./scenes/Level2Scene.js";
import {Level3Scene} from "./scenes/Level3Scene.js";

let config = {
    type: Phaser.AUTO,
    scale: {
        parent: 'Hackathon - Work Food Balance',
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1280,
        height: 720,
      },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 250 },
            debug: false
        }
    },
    scene: [
        LoadScene, MenuScene, ScoreScreen, Level1Scene, Level2Scene, Level3Scene
    ]
};

let game = new Phaser.Game(config);
game.forever = [' ',' ',' ', ' ', ' ', ' ', ' ']; // filled with FOREVER