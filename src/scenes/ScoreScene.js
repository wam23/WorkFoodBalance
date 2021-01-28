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
        //if (this.nextlevel == CST.SCENES.MENU) {
        //    this.getHighScores();
        //}
    }

    create () {
        this.add.image(640, 360,"scorescreen");

        this.foreverText = this.add.text(250, 140, '0', { fontSize: '120px', fill: '#ffcf00' });
        this.foreverText.setText(this.game.forever.join(''));

        this.scoreText = this.add.text(830, 30, '0', { fontSize: '40px', fill: '#000' });
        this.scoreText.setText("Score: " + this.score);

        if (this.nextlevel == CST.SCENES.MENU) {
            this.gameOverText = this.add.text(830, 100, '0', { fontSize: '40px', fill: '#000' });
            this.gameOverText.setText("GAME OVER");
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

        if (this.game.gameOver) {
            this.highscoreText = this.add.text(830, 170, '0', { fontSize: '20px', fill: '#000' });
            this.highscoreText.setText("Hier in Highscore-Liste eintragen:");

            this.nameInput = this.add.dom(886, 240).createFromCache("form");

            this.returnKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
    
            this.returnKey.on("down", event => {
                this.acronymEntered();
            });

            this.submitButton = this.add.image(1020, 240, 'submit_button');
            this.submitButton.setInteractive();

            this.submitButton.on("pointerup", () => {
                this.acronymEntered();
            });
        }
        
    }

    acronymEntered() {
        let name = this.nameInput.getChildByName("acronym");
        if(name.value != "") {
            //console.log("text input: " + name.value);
            this.userAcronym = name.value;
            if (!this.scoreSubmitted) {
                this.submitScore();
                this.scoreSubmitted = true;
                this.nameInput.setVisible(false);
                this.submitButton.setVisible(false);
                this.highscoreText.setVisible(false);

                this.time.delayedCall(1000, this.changeToHighscoreScene, [], this);
            }
        }
    }

    changeToHighscoreScene() {
        this.scene.start(CST.SCENES.HIGHSCORE);
    }

    submitScore() {
        var url = LEADER_BOARD_URL + 'get_score_token';
        var request1 = new XMLHttpRequest();
        
        request1.open('GET', url, true);
        request1.send();

        request1.onreadystatechange = (e) => {
            if (request1.readyState == 4 && request1.status == 200) {
                var jsonResponse = JSON.parse(request1.responseText);
                
                url = LEADER_BOARD_URL + 'leader_board_entries';
                var formData = new FormData();
                formData.append("leader_board_entry[score]", this.score);
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
                formData.append("leader_board_entry[hash]", this.getHash("YB" + this.score + "rocks"));
                formData.append("leader_board_entry[token]", jsonResponse.token);
                formData.append("leader_board_entry[version]", 1);
                var request = new XMLHttpRequest();
            
                try {
                    request.open('POST', url, true);
                    request.send(formData);
                } catch (exception) {
                    // TODO
                }
                request.onreadystatechange = (e) => {
                    //console.log(request.responseText)
                }
            }
        }

    }

    getHash(scoreString) {
        var hash = 0;
        if (scoreString.length == 0) {
            return hash;
        }
        for (var i = 0; i < scoreString.length; i++) {
            var char = scoreString.charCodeAt(i);
            hash = ((hash << 2)-hash)+char;
            hash = hash & hash;
        }
        return hash;
    }

}