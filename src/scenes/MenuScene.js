import { CST } from "../CST.js"

export class MenuScene extends Phaser.Scene {
    
    constructor() {
        super({
            key: CST.SCENES.MENU
        });
    }

    init(data) {
        if (this.game.gameOver) { // TODO: generic
            this.scene.get(CST.SCENES.LEVEL2).setAsUnavailable();
            this.scene.get(CST.SCENES.LEVEL3).setAsUnavailable();
        }
    }

    preload () {
        
    }

    create () {
        this.add.image(640, 360,"startscreen");

        let playButton = this.add.image(1020, 350, 'level1_button');
        playButton.setInteractive();

        playButton.on("pointerup", () => {
            this.scene.start(CST.SCENES.LEVEL1); // level 1 is always available
        });

        if (this.scene.get(CST.SCENES.LEVEL2).isAvailable || this.game.cheatMode) {
            let playButton2 = this.add.image(1020, 450, 'level2_button');
            playButton2.setInteractive();

            playButton2.on("pointerup", () => {
                this.scene.start(CST.SCENES.LEVEL2);
            });
        }

        if (this.scene.get(CST.SCENES.LEVEL3).isAvailable || this.game.cheatMode) {
            let playButton3 = this.add.image(1020, 550, 'level3_button');
            playButton3.setInteractive();

            playButton3.on("pointerup", () => {
                this.scene.start(CST.SCENES.LEVEL3);
            });
        }

        var music = this.sound.add('background');
        music.loop = true;
        music.play();

    }

    update () {
        
    }

}