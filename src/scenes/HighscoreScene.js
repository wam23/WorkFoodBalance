import { CST } from "../CST.js"
import { LEADER_BOARD_URL } from "../CST.js"

export class HighscoreScene extends Phaser.Scene {

    constructor() {
        super({
            key: CST.SCENES.HIGHSCORE
        });

        this.topHighScores;
    }

    init(data) {
        this.getTopHighScores();
    }

    create() {
        this.add.image(640, 360, 'highscore');

        let backButton = this.add.image(1200, 680, 'back_button');
        backButton.setInteractive();

        backButton.on("pointerup", () => {
            this.scene.start(CST.SCENES.MENU);
        });

        this.topHighScoreText = [];

        for (var index = 0; index < 10; index++) {
            this.topHighScoreText[index] = this.add.text(500, 180 + (45 * index), '0', { fontSize: '30px', fill: '#000' });
            this.topHighScoreText[index].setText("");
        }
    }

    getTopHighScores() {
        this.topHighScores = [];
        const url = LEADER_BOARD_URL + 'get_top_high_scores';
        var request = new XMLHttpRequest();
    
        request.open('GET', url, true);
        request.send();

        request.onreadystatechange = (e) => {
            if (request.readyState == 4 && request.status == 200) {
                var jsonResponse = JSON.parse(request.responseText);
                for(let i = 0; i < jsonResponse.length; i++){
                    //console.log(jsonResponse[i].acronym + " " + jsonResponse[i].score);
                    this.topHighScores.push({acronym: jsonResponse[i].acronym, score: jsonResponse[i].score});
                    if (i < 10) {
                        var text = "" + (i + 1) + ". ";
                        if (i < 9) {
                            text += " ";
                        }
                        text += this.topHighScores[i].acronym + " " + this.topHighScores[i].score;
                        this.topHighScoreText[i].setText(text);
                    }
                }
            }
        }
    }

}