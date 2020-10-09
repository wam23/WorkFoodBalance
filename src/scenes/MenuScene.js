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
        this.add.image(2500, 360,"sky_level1"); // TODO

        let playButton = this.add.image(1100, 300, 'play_button');
        playButton.setInteractive();

        playButton.on("pointerup", () => {
            this.scene.start(CST.SCENES.LEVEL1);
        });

        let playButton2 = this.add.image(1100, 400, 'play_button');
        playButton2.setInteractive();

        playButton2.on("pointerup", () => {
            this.scene.start(CST.SCENES.LEVEL2);
        });

        let playButton3 = this.add.image(1100, 500, 'play_button');
        playButton3.setInteractive();

        playButton3.on("pointerup", () => {
            this.scene.start(CST.SCENES.LEVEL3);
        });

    }

    update () {
        
    }

}