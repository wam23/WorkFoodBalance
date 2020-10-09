import { CST } from "../CST.js"

export class MenuScene extends Phaser.Scene {
    
    constructor() {
        super({
            key: CST.SCENES.MENU
        });
    }

    preload () {
        
    }

    create () {
        //  A simple background for our game
        this.add.image(2500, 360,"sky");

        let playIcon = this.add.sprite(300, 400, 'play_icon');
        playIcon.setVisible(false);

        // use as play button...
        let playButton = this.add.image(400, 400, 'play_button');

        playButton.setInteractive();

        playButton.on("pointerup", () => {
            this.scene.start(CST.SCENES.LEVEL1);
        });

        playButton.on("pointerover", () => {
            playIcon.setVisible(true);
        });

        playButton.on("pointerout", () => {
            playIcon.setVisible(false);
        });

    }

    update () {
        
    }

}