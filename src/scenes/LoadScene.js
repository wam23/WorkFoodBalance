import { CST } from "../CST.js"

export class LoadScene extends Phaser.Scene {
    constructor() {
        super({
            key: CST.SCENES.LOAD
        });
    }

    init() {
        
    }

    preload() {
        this.load.image('sky_level1', './assets/sky_level1.png');
        this.load.image('sky_level2', './assets/sky_level2.png');
        this.load.image('sky_level3', './assets/sky_level3.png');
        this.load.image('ground', './assets/ground.png');
        this.load.image('platform', './assets/platform.png');
        this.load.image('coin', './assets/coin.png');
        this.load.image('bomb', './assets/bomb.png');
        this.load.image('beer', './assets/beer.png');
        this.load.image('sausage', './assets/sausage.png');
        this.load.image('vuvuzela', './assets/vuvuzela.png');
        this.load.image('ball', './assets/ball.png');

        this.load.image('play_button', './assets/play_button.png');
        this.load.image('play_icon', './assets/play_icon.png');
        this.load.image('game_over', './assets/game_over.png');

        this.load.image('tiles', './assets/tiles_spritesheet.png');
        this.load.tilemapTiledJSON('Level1', './assets/level1.json');
        this.load.tilemapTiledJSON('Level2', './assets/Level2.json');
        this.load.tilemapTiledJSON('Level3', './assets/level3.json');

        this.load.spritesheet('dude', '../assets/dude.png', { frameWidth: 32, frameHeight: 48 });

        this.load.audio('collect_beer', './assets/sounds/collect_beer.mp3');
        this.load.audio('collect_sausage', './assets/sounds/collect_sausage.mp3');
        this.load.audio('collect_coin', './assets/sounds/collect_coin.mp3');
        this.load.audio('collect_vuvuzela', './assets/sounds/vuvuzela.wav');
        this.load.audio('collect_ball', './assets/sounds/collect_ball.mp3');
        this.load.audio('collect_letter', './assets/sounds/collect_letter.mp3');
        this.load.audio('jump', './assets/sounds/jump.mp3');
        this.load.audio('gameover', './assets/sounds/gameover.mp3');
        this.load.audio('levelend', './assets/sounds/win.mp3');
        
        let loadingBar = this.add.graphics({
            fillStyle: {
                color: 0xffffff // white
            }
        });
        
        this.load.on("progress", (percent) => {
            loadingBar.fillRect(0, this.game.renderer.height / 2, this.game.renderer.width * percent, 50);
        });
    }

    create() {
        this.scene.start(CST.SCENES.MENU);
    }

}