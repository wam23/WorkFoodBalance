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

        this.playButton2 = this.add.image(1020, 450, 'level2_button');
        this.playButton2.setInteractive();

        this.playButton2.on("pointerup", () => {
            if (this.scene.get(CST.SCENES.LEVEL2).isAvailable || this.game.cheatMode) {
                this.scene.start(CST.SCENES.LEVEL2);
            }
        });
        this.playButton2.alpha = 0;

        this.playButton3 = this.add.image(1020, 550, 'level3_button');
        this.playButton3.setInteractive();

        this.playButton3.on("pointerup", () => {
            if (this.scene.get(CST.SCENES.LEVEL3).isAvailable || this.game.cheatMode) {
                this.scene.start(CST.SCENES.LEVEL3);
            }
        });
        this.playButton3.alpha = 0;

        var music = this.sound.add('background');
        music.loop = true;
        music.play();

        // TODO: remove later
        var fontStyle = { fontSize: '16px', fill: '#000', stroke: '#fff', strokeThickness: 1, fontWeight: 'bold' };
        this.cheatModeText = this.add.text(930, 662, "0", fontStyle);
        this.cheatModeText.setScrollFactor(0);

        let cheatModeButton = this.add.image(870, 670, 'cheatmode_button');
        cheatModeButton.setInteractive();

        cheatModeButton.on("pointerup", () => {
            this.game.cheatMode = !this.game.cheatMode;
            var tempText = this.game.cheatMode ? "1" : "0";
            this.cheatModeText.setText(tempText);

            this.playButton2.alpha = 100 * (this.scene.get(CST.SCENES.LEVEL2).isAvailable || this.game.cheatMode);
            this.playButton3.alpha = 100 * (this.scene.get(CST.SCENES.LEVEL3).isAvailable || this.game.cheatMode);
        });

    }

    update () {
        
    }

}