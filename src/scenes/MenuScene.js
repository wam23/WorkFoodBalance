import { CST } from "../CST.js"
import { LEADER_BOARD_URL } from "../CST.js"

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
        this.add.image(640, 360,'startscreen');

        this.rotateText = this.add.text(100, 100, 'Bitte Bildschirm drehen', { fontSize: '50px', fill: '#ffcf00' });
        this.rotateText.visible = window.innerHeight > window.innerWidth;

        window.addEventListener('orientationchange', () => {
            console.log('orientationchange', window.screen)
            this.rotateText.visible = window.innerHeight < window.innerWidth;
        }, true);

        let playButton = this.add.image(1020, 250, 'level1_button');
        playButton.setInteractive();

        playButton.on("pointerup", () => {
            this.scene.start(CST.SCENES.LEVEL1); // level 1 is always available
        });

        this.playButton2 = this.add.image(1020, 350, 'level2_button');
        this.playButton2.setInteractive();

        this.playButton2.on("pointerup", () => {
            if (this.scene.get(CST.SCENES.LEVEL2).isAvailable || this.game.cheatMode) {
                this.scene.start(CST.SCENES.LEVEL2);
            }
        });
        this.playButton2.alpha = 0;

        this.playButton3 = this.add.image(1020, 450, 'level3_button');
        this.playButton3.setInteractive();

        this.playButton3.on("pointerup", () => {
            if (this.scene.get(CST.SCENES.LEVEL3).isAvailable || this.game.cheatMode) {
                this.scene.start(CST.SCENES.LEVEL3);
            }
        });
        this.playButton3.alpha = 0;

        this.highscoreButton = this.add.image(1020, 550, 'highscore_button');
        this.highscoreButton.setInteractive();

        this.highscoreButton.on("pointerup", () => {
            this.scene.start(CST.SCENES.HIGHSCORE);
        });

        this.anleitungButton = this.add.image(942, 634, 'anleitung_button');
        this.anleitungButton.setInteractive();

        this.anleitungButton.on("pointerup", () => {
            this.scene.start(CST.SCENES.ANLEITUNG);
        });

        this.impressumButton = this.add.image(1098, 634, 'impressum_button');
        this.impressumButton.setInteractive();

        this.impressumButton.on("pointerup", () => {
            this.scene.start(CST.SCENES.IMPRESSUM);
        });

        if (this.sound.get('background') == null) {
            var music = this.sound.add('background');
            music.loop = true;
            music.play();
        }
        
        this.soundOnButton = this.add.image(1130, 30, 'sound_on_button');
        this.soundOnButton.setInteractive();

        this.soundOnButton.on("pointerup", () => {
            this.game.sound.mute = true;
            this.updateSoundButtonState();
        });

        this.soundOffButton = this.add.image(1130, 30, 'sound_off_button');
        this.soundOffButton.setInteractive();

        this.soundOffButton.on("pointerup", () => {
            this.game.sound.mute = false;
            this.updateSoundButtonState();
        });

        this.updateSoundButtonState();

        if (this.game.developmentMode) {
            var fontStyle = { fontSize: '16px', fill: '#000', stroke: '#fff', strokeThickness: 1, fontWeight: 'bold' };
            this.cheatModeText = this.add.text(1030, 22, this.game.cheatMode ? "1" : "0", fontStyle);
            this.cheatModeText.setScrollFactor(0);

            var cheatModeButton = this.add.image(970, 30, 'cheatmode_button');
            cheatModeButton.setInteractive();

            cheatModeButton.on("pointerup", () => {
                this.game.cheatMode = !this.game.cheatMode;
                this.cheatModeText.setText(this.game.cheatMode ? "1" : "0");

                this.playButton2.alpha = 100 * (this.scene.get(CST.SCENES.LEVEL2).isAvailable || this.game.cheatMode);
                this.playButton3.alpha = 100 * (this.scene.get(CST.SCENES.LEVEL3).isAvailable || this.game.cheatMode);
            });

            /* this.longjumpText = this.add.text(1190, 22, this.game.enableLongJump ? "1" : "0", fontStyle);
            this.longjumpText.setScrollFactor(0);

            var longjumpButton = this.add.image(1130, 30, 'longjump_button');
            longjumpButton.setInteractive();

            longjumpButton.on("pointerup", () => {
                this.game.enableLongJump = !this.game.enableLongJump;
                this.longjumpText.setText(this.game.enableLongJump ? "1" : "0");
            });

            this.gravityText = this.add.text(915, 150, "Gravity: " + this.game.gravity, fontStyle);
            this.gravityText.setScrollFactor(0);

            var gravity1Button = this.add.image(970, 70, 'gravity1_button');
            gravity1Button.setInteractive();

            gravity1Button.on("pointerup", () => {
                this.game.gravity = 250;
                this.gravityText.setText("Gravity: " + this.game.gravity);
            });

            var gravity2Button = this.add.image(970, 100, 'gravity2_button');
            gravity2Button.setInteractive();

            gravity2Button.on("pointerup", () => {
                this.game.gravity = 350;
                this.gravityText.setText("Gravity: " + this.game.gravity);
            });

            var gravity3Button = this.add.image(970, 130, 'gravity3_button');
            gravity3Button.setInteractive();

            gravity3Button.on("pointerup", () => {
                this.game.gravity = 450;
                this.gravityText.setText("Gravity: " + this.game.gravity);
            });

            this.speedText = this.add.text(1075, 150, "Speed: " + this.game.speedY, fontStyle);
            this.speedText.setScrollFactor(0);

            var speed1Button = this.add.image(1130, 70, 'speed1_button');
            speed1Button.setInteractive();

            speed1Button.on("pointerup", () => {
                this.game.speedY = 330;
                this.speedText.setText("Speed: " + this.game.speedY);
            });

            var speed2Button = this.add.image(1130, 100, 'speed2_button');
            speed2Button.setInteractive();

            speed2Button.on("pointerup", () => {
                this.game.speedY = 430;
                this.speedText.setText("Speed: " + this.game.speedY);
            });

            var speed3Button = this.add.image(1130, 130, 'speed3_button');
            speed3Button.setInteractive();

            speed3Button.on("pointerup", () => {
                this.game.speedY = 530;
                this.speedText.setText("Speed: " + this.game.speedY);
            }); */
        }
    }

    update () {
        
    }

    updateSoundButtonState() {
        this.soundOnButton.setVisible(!this.game.sound.mute);
        this.soundOffButton.setVisible(this.game.sound.mute);
    }

}