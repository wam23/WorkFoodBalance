import { CST } from "../CST.js"
import { LEADER_BOARD_URL } from "../CST.js"

export class ScoreScreen extends Phaser.Scene {
    
    constructor() {
        super({
            key: CST.SCENES.SCORE
        });

        this.cheatModeText = "";

        this.userAcronym = "";
        this.scoreSubmitted = false;

        this.highScores;
    }

    init(data) {
        this.nextlevel = data.nextlevel;
        this.nextlevelNumber = data.nextlevelNumber;
        this.score = data.score;
        this.scoreSubmitted = false;
        if (this.nextlevel == CST.SCENES.MENU) {
            this.getHighScores();
        }
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

        var nextButtonString = 'play_button';
        if (this.nextlevel != CST.SCENES.MENU) {
            nextButtonString = 'level' + this.nextlevelNumber + '_button';
        }
        let nextButton = this.add.image(1020, 450, nextButtonString);
        nextButton.setInteractive();

        nextButton.on("pointerup", () => {
            if (this.nextlevel != CST.SCENES.MENU) {
                var tempScene = this.scene.get(this.nextlevel);
                tempScene.setAsAvailable();
            } else {
                this.game.gameOver = true;
            }
            this.scene.start(this.nextlevel);
        });

        this.highScoreText = [];
        this.highScoreText[0] = this.add.text(100, 30, '0', { fontSize: '20px', fill: '#000' });
        this.highScoreText[0].setText("");
        this.highScoreText[1] = this.add.text(100, 90, '0', { fontSize: '20px', fill: '#000' });
        this.highScoreText[1].setText("");
        this.highScoreText[2] = this.add.text(100, 150, '0', { fontSize: '20px', fill: '#000' });
        this.highScoreText[2].setText("");

        if (this.game.gameOver) {
            this.nameInput = this.add.dom(200, 240).createFromCache("form");

            this.returnKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
    
            this.returnKey.on("down", event => {
                let name = this.nameInput.getChildByName("name");
                if(name.value != "") {
                    //console.log("text input: " + name.value);
                    this.userAcronym = name.value;
                    if (!this.scoreSubmitted) {
                        this.submitScore();
                        this.scoreSubmitted = true;
                        this.nameInput.setVisible(false);
                        this.getHighScores();
                    }
                }
            });
        }
        
    }

    submitScore() {
        const url = LEADER_BOARD_URL + 'leader_board_entries';
        var formData = new FormData();
        //(:acronym, :coins, :sausages, :flags, :characters, :remainingtime, :version)
        formData.append("leader_board_entry[acronym]", this.userAcronym);
        formData.append("leader_board_entry[coins]", this.game.collectedCoins);
        formData.append("leader_board_entry[sausages]", this.game.collectedSausages);
        formData.append("leader_board_entry[flags]", this.game.collectedFlags);
        var collectedChars = 0;
        for (var index = 0; index < this.game.forever.length; index++) {
            if (this.game.forever[index].trim().length == 1) {
                collectedChars++;
            }
        }
        formData.append("leader_board_entry[characters]", collectedChars);
        formData.append("leader_board_entry[remainingtime]", this.game.collectedRemainingTime);
        formData.append("leader_board_entry[version]", 1);
        var request = new XMLHttpRequest();
    
        request.open('POST', url, true);
        request.send(formData);

        request.onreadystatechange = (e) => {
            //console.log(request.responseText)
        }
    
    }

    getHighScore() {
        const url = LEADER_BOARD_URL + 'get_high_score';
        var request = new XMLHttpRequest();
    
        request.open('GET', url, true);
        request.send();

        request.onreadystatechange = (e) => {
            if (request.readyState == 4 && request.status == 200) {
                var jsonResponse = JSON.parse(request.responseText);
                //console.log(jsonResponse.highscore);
            }
        }
    }

    getHighScores() {
        this.highScores = [];
        const url = LEADER_BOARD_URL + 'get_high_scores';
        var request = new XMLHttpRequest();
    
        request.open('GET', url, true);
        request.send();

        request.onreadystatechange = (e) => {
            if (request.readyState == 4 && request.status == 200) {
                var jsonResponse = JSON.parse(request.responseText);
                for(let i = 0; i < jsonResponse.length; i++){
                    //console.log(jsonResponse[i].acronym + " " + jsonResponse[i].score);
                    this.highScores.push({acronym: jsonResponse[i].acronym, score: jsonResponse[i].score});
                    if (i < 3) {
                        this.highScoreText[i].setText("" + (i + 1) + ". " + this.highScores[i].acronym + " - " + this.highScores[i].score);
                    }
                }
            }
        }
    }

}