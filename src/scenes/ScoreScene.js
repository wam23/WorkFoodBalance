import { CST } from "../CST.js"

export class ScoreScreen extends Phaser.Scene {
    
    constructor() {
        super({
            key: CST.SCENES.SCORE
        });
    }

    init(data) {
        this.nextlevel = data.nextlevel;
        this.score = data.score;
    }

    create () {
        this.add.image(640, 360,"scorescreen");

        this.foreverText = this.add.text(250, 140, '0', { fontSize: '120px', fill: '#ffcf00' });
        this.foreverText.setText(this.game.forever.join(''));

        this.scoreText = this.add.text(950, 30, '0', { fontSize: '40px', fill: '#000' });
        this.scoreText.setText("Score: " + this.score);

        if (this.nextlevel == CST.SCENES.MENU) {
            this.scoreText = this.add.text(950, 100, '0', { fontSize: '40px', fill: '#000' });
            this.scoreText.setText("GAME OVER");
            this.game.gameOver = true;
        }

        let nextButton = this.add.image(1020, 450, 'play_button');
        nextButton.setInteractive();

        nextButton.on("pointerup", () => {
            this.scene.start(this.nextlevel);
        });
    }

}