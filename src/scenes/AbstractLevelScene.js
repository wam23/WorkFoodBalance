import { CST } from "../CST.js"

export class AbstractLevelScene extends Phaser.Scene {

    constructor(levelname, nextlevel, bgimage) {
        super({
            key: levelname
        });

        this.cheatMode = true;
        this.fastMode = true;

        this.backgroundimage = bgimage;
        this.nextlevel = nextlevel;

        this.levelWidth = 15000;

        this.gameOver = false;
        this.gameOverTimer = 0;

        this.levelHasEnded = false;
        this.levelEndedTimer = 0;

        this.escKey;

        this.player;
        this.beers;
        this.sausages;
        this.bombs;
        this.platforms;
        this.cursors;

        this.map;

        this.lastInput = 0;
        this.waitForInputRelease = false;

        this.collectedSausages = 0;
        this.collectedBeers = 0;
        this.collectedCoins = 0;
        this.collectedVuvuzelas = 0;
        this.collectedBalls = 0;

        this.collectedBeersScoreText = "";
        this.collectedSausagesScoreText = "";
        this.collectedCoinsScoreText = "";
        this.collectedVuvuzelasScoreText = "";
        this.collectedBallsScoreText = "";

        this.doubleJumpAllowed = false;

        this.speedX = 250;
        this.speedY = 330;

        if (this.fastMode) {
            this.speedX = 600;
        }
    }

    preload() {

    }

    create() {
        this.add.image(this.levelWidth / 2, 360, this.backgroundimage);

        this.cameras.main.setBounds(0, 0, this.levelWidth, 720);
        this.physics.world.setBounds(0, 0, this.levelWidth, 720);

        //  The platforms group contains the ground and the 2 ledges we can jump on
        this.platforms = this.physics.add.staticGroup();

        for (var i = 0; i < (this.levelWidth / 100); i++) {
            this.platforms.create(50 + (i * 100), 715, "ground");
        }

        // The player and its settings
        this.player = this.physics.add.sprite(100, 100, 'dude');

        this.player.body.offset.x = 5;
        this.player.body.offset.y = 5;
        this.player.body.width = 62;
        this.player.body.height = 62;

        this.player.setCollideWorldBounds(true);

        this.cameras.main.startFollow(this.player, false, 1, 0);

        //  Our player animations, turning, walking left and walking right.
        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'turn',
            frames: [{ key: 'dude', frame: 4 }],
            frameRate: 20
        });

        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
            frameRate: 10,
            repeat: -1
        });

        var fontStyle = { fontSize: '32px', fill: '#000', stroke: '#fff', strokeThickness: 1, fontWeight: 'bold' };
        this.collectedBeersScoreText = this.add.text(75, 20, '0', fontStyle);
        this.collectedBeersScoreText.setScrollFactor(0);
        this.collectedSausagesScoreText = this.add.text(75, 90, '0', fontStyle);
        this.collectedSausagesScoreText.setScrollFactor(0);
        this.collectedCoinsScoreText = this.add.text(75, 160, '0', fontStyle);
        this.collectedCoinsScoreText.setScrollFactor(0);
        this.collectedVuvuzelasScoreText = this.add.text(75, 230, '0', fontStyle);
        this.collectedVuvuzelasScoreText.setScrollFactor(0);
        this.collectedBallsScoreText = this.add.text(75, 300, '0', fontStyle);
        this.collectedBallsScoreText.setScrollFactor(0);
        this.add.image(35, 35, 'beer').setScrollFactor(0);
        this.add.image(35, 105, 'sausage').setScrollFactor(0);
        this.add.image(35, 175, 'coin').setScrollFactor(0);
        this.add.image(35, 245, 'vuvuzela').setScrollFactor(0);
        this.add.image(35, 315, 'ball').setScrollFactor(0);

        this.cursors = this.input.keyboard.createCursorKeys();

        this.gameOver = false;

        this.escKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC);

        this.collectBeerSound = this.sound.add('collect_beer');
        this.collectSausageSound = this.sound.add('collect_sausage');
        this.collectCoinSound = this.sound.add('collect_coin');
        this.collectVuvuzelaSound = this.sound.add('collect_vuvuzela');
        this.collectBallSound = this.sound.add('collect_ball');
        this.collectLetterSound = this.sound.add('collect_letter');
        this.jumpSound = this.sound.add('jump');
        this.gameoverSound = this.sound.add('gameover');
        this.levelEndSound = this.sound.add('levelend');
        this.sorrySound = this.sound.add('sorry');
        this.winSound = this.sound.add('win');
        this.finalwinSound = this.sound.add('final_win');
    }

    afterCreate() {
        var tileset = this.map.addTilesetImage('tiles_spritesheet', 'tiles');
        this.layer = this.map.createStaticLayer('tile layer 1', tileset);
        this.layer.setCollisionByExclusion(-1, true);
        this.physics.add.collider(this.player, this.layer);

        this.collectibleLayer = this.map.createDynamicLayer('collectables', tileset);
        this.physics.add.overlap(this.player, this.collectibleLayer, this.collectItem, null, this);

        this.physics.add.collider(this.player, this.platforms);
    }

    update() {
        var score = this.collectedCoins + this.collectedBeers + this.collectedSausages + this.collectedVuvuzelas + this.collectedBalls;

        if (this.escKey.isDown) {
            this.cheatMode = false;
            this.gameIsOver();
        }
        if (this.gameOver) {
            this.gameOverTimer++;
            if (this.gameOverTimer > 150) {
                this.scene.start(CST.SCENES.SCORE, {nextlevel: CST.SCENES.MENU, score: score});
            }
            return;
        } else {
            this.gameOverTimer = 0;
        }

        if (this.levelHasEnded) {
            this.levelEndedTimer++;
            if (this.levelEndedTimer > 150) {
                this.scene.start(CST.SCENES.SCORE, {nextlevel: this.nextlevel, score: score});
            }
            return;
        } else {
            this.levelEndedTimer = 0;
        }

        var leftClick = (this.input.activePointer.isDown && (this.input.activePointer.position.x < 100)) || this.cursors.left.isDown;
        var rightClick = (this.input.activePointer.isDown && (this.input.activePointer.position.x > 1180)) || this.cursors.right.isDown;

        //var playerOnGround = this.player.body.touching.down;
        var playerOnGround = (this.player.body.velocity.y == 0);

        if (leftClick && (!this.waitForInputRelease)) {
            this.player.setVelocityX(-this.speedX);
            this.player.anims.play('left', true);
            if (this.lastInput == 1) {
                if (playerOnGround || this.doubleJumpAllowed) {
                    this.player.setVelocityY(-this.speedY);
                    this.jumpSound.play();
                    if (!playerOnGround) {
                        this.doubleJumpAllowed = false;
                    }
                }
            }
            this.lastInput = 1;
            this.waitForInputRelease = true;

        } else if (rightClick && (!this.waitForInputRelease)) {
            this.player.setVelocityX(this.speedX);
            this.player.anims.play('right', true);
            if (this.lastInput == 2) {
                if (playerOnGround || this.doubleJumpAllowed) {
                    this.player.setVelocityY(-this.speedY);
                    this.jumpSound.play();
                    if (!playerOnGround) {
                        this.doubleJumpAllowed = false;
                    }
                }
            }
            this.lastInput = 2;
            this.waitForInputRelease = true;
        } else {
            //this.player.setVelocityX(0);
            //this.player.anims.play('turn');
        }

        if (playerOnGround) {
            this.doubleJumpAllowed = true;
        }

        if (!(leftClick || rightClick)) {
            this.waitForInputRelease = false;
        }

        if (this.player.body.velocity.x == 0) {
            this.player.anims.play('turn');
        }
    }

    collectItem(player, item) {
        if (item.alpha == 0) {
            return;
        }

        switch (item.index) {
            case 2: // Coin
                item.alpha = 0;
                this.collectedCoins++;
                this.collectedCoinsScoreText.setText(this.collectedCoins);
                this.collectCoinSound.play();
                break;
            case 14: // Corona
                this.gameoverSound.play();
                this.gameIsOver();
                break;
            case 25: // Ball
                item.alpha = 0;
                this.collectedBalls++;
                this.collectedBallsScoreText.setText(this.collectedBalls);
                this.collectBallSound.play();
                break;
            case 26: // Beer
                item.alpha = 0;
                this.collectedBeers++;
                this.collectedBeersScoreText.setText(this.collectedBeers);
                this.collectBeerSound.play();
                break;
            case 37: // Ball
                item.alpha = 0;
                this.collectedVuvuzelas++;
                this.collectedVuvuzelasScoreText.setText(this.collectedVuvuzelas);
                this.collectVuvuzelaSound.play();
                break;
            case 38: // Wurscht
                item.alpha = 0;
                this.collectedSausages++;
                this.collectedSausagesScoreText.setText(this.collectedSausages);
                this.collectSausageSound.play();
                break;
            case 63: // F
                item.alpha = 0;
                this.game.forever[0] = 'F';
                this.collectLetterSound.play();
                break;
            case 64: // O
                item.alpha = 0;
                this.game.forever[1] = 'O';
                this.collectLetterSound.play();
                break;
            case 65: // R
                item.alpha = 0;
                this.game.forever[2] = 'R';
                this.collectLetterSound.play();
                break;
            case 66: // E
                item.alpha = 0;
                this.game.forever[3] = 'E';
                this.collectLetterSound.play();
                break;
            case 67: // V
                item.alpha = 0;
                this.game.forever[4] = 'V';
                this.collectLetterSound.play();
                break;
            case 75: // E
                item.alpha = 0;
                this.game.forever[5] = 'E';
                this.collectLetterSound.play();
                break;
            case 76: // R
                item.alpha = 0;
                this.game.forever[6] = 'R';
                this.collectLetterSound.play();
                break;
            case 70: // level end
                this.levelEnded();
                break;
            case 82: // level end
                this.levelEnded();
                break;
            case 143: // hooligan
                this.player.setVelocityX(-this.player.body.velocity.x);
                this.player.setVelocityY(-this.player.body.velocity.y);
                this.sorrySound.play();
                break;
            case 155: // hooligan
                this.player.setVelocityX(-this.player.body.velocity.x);
                this.player.setVelocityY(-this.player.body.velocity.y);
                this.sorrySound.play();
                break;
            case 133: // end game
                this.levelEnded();
                break;
            case 145: // end game
                this.levelEnded();
                break;
        }
    }

    gameIsOver() {
        if (!this.cheatMode) {
            this.physics.pause();
            this.player.setTint(0xff0000);
            this.player.anims.play('turn');

            this.gameOver = true;
        }
    }

    levelEnded() {
        this.physics.pause();
        this.player.setTint(0x00ff00);
        this.player.anims.play('turn');
        if (this.nextlevel == CST.SCENES.MENU) {
            this.finalwinSound.play();
        } else {
            this.levelEndSound.play();
        }
        
        this.levelHasEnded = true;
    }

}