import { CST } from "../CST.js"

export class ScoreScreen extends Phaser.Scene {
    
    constructor() {
        super({
            key: CST.SCENES.SCORE
        });
    }

    init(data) {
        this.nextlevel = data.nextlevel;
    }

    create () {
        this.add.image(2500, 360,"sky_level1");

        this.foreverText = this.add.text(250, 140, '0', { fontSize: '120px', fill: '#ffcf00' });
        this.foreverText.setText(this.game.forever.join(''));

        let nextButton = this.add.image(1100, 400, 'play_button');
        nextButton.setInteractive();

        nextButton.on("pointerup", () => {
            this.scene.start(this.nextlevel);
        });
    }

}