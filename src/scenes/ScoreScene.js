import { CST } from "../CST.js"

export class ScoreScreen extends Phaser.Scene {
    
    constructor() {
        super({
            key: CST.SCENES.SCORE
        });
    }

    create () {
        this.add.image(2500, 360,"sky_level1");

        this.foreverText = this.add.text(100, 150, '0', { fontSize: '150px', fill: '#ffcf00' });
        this.foreverText.setText(this.game.forever.join(''));

        let nextButton = this.add.image(400, 400, 'play_button');
        nextButton.setInteractive();

        nextButton.on("pointerup", () => {
            this.scene.start(CST.SCENES.LEVEL2);
        });
    }

}