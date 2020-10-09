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
        this.load.image('ground', './assets/platform.png');
        this.load.image('star', './assets/star.png');
        this.load.image('bomb', './assets/bomb.png');

        this.load.image('play_button', './assets/play_button.png');
        this.load.image('play_icon', './assets/play_icon.png');
        this.load.image('game_over', './assets/game_over.png');

        this.load.spritesheet('dude', '../assets/dude.png', { frameWidth: 32, frameHeight: 48 });
        
        let loadingBar = this.add.graphics({
            fillStyle: {
                color: 0xffffff // white
            }
        });

        // simulate large load: TODO: remove
        //for(let i = 0; i < 100; i++) {
        //    this.load.image('star' + i, './src/assets/star.png');
        //}
        
        this.load.on("progress", (percent) => {
            loadingBar.fillRect(0, this.game.renderer.height / 2, this.game.renderer.width * percent, 50);
        });
    }

    create() {
        this.scene.start(CST.SCENES.MENU);
    }

}