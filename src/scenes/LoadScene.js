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
        this.load.image('sky', './assets/sky.png');
        this.load.image('ground', './assets/ground.png');
        this.load.image('platform', './assets/platform.png');
        this.load.image('star', './assets/star.png');
        this.load.image('bomb', './assets/bomb.png');
        this.load.image('beer', './assets/beer.png');
        this.load.image('sausage', './assets/sausage.png');

        this.load.image('play_button', './assets/play_button.png');
        this.load.image('play_icon', './assets/play_icon.png');
        this.load.image('game_over', './assets/game_over.png');

        this.load.image('tiles', './assets/tiles_spritesheet.png');
        this.load.tilemapTiledJSON('Level1', './assets/level1.json');
        this.load.tilemapTiledJSON('Level2', './assets/Level2.json');

        this.load.spritesheet('dude', '../assets/dude.png', { frameWidth: 32, frameHeight: 48 });
        
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