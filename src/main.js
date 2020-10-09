/** @type {import("../typings/phaser")} */

import {LoadScene} from "./scenes/LoadScene.js";
import {MenuScene} from "./scenes/MenuScene.js";
import {Level1Scene} from "./scenes/Level1Scene.js";

let config = {
    type: Phaser.AUTO,
    width: 1280,
    height: 720,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    scene: [
        LoadScene, MenuScene, Level1Scene
    ]
};

let game = new Phaser.Game(config);