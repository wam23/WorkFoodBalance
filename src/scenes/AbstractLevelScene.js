import { CST } from "../CST.js"

export class AbstractLevelScene extends Phaser.Scene {
    
    constructor(levelname) {
        super({
            key: levelname
        });

        this.levelWidth = 4;

        this.gameOver = false;
        this.gameOverIcon;
        this.gameOverTimer = 0;

        this.escKey;

        this.player;
        this.beers;
        this.sausages;
        this.bombs;
        this.platforms;
        this.cursors;
        
        this.lastInput = 0;
        this.waitForInputRelease = false;

        this.collectedSausages = 0;
        this.collectedBeers = 0;

        this.collectedBeersScoreText = "";
        this.collectedSausagesScoreText = "";

        this.doubleJumpAllowed = false;
    }

    preload () {
        
    }

    create () {
        /* for(var i = 0; i < this.levelWidth; i++) {
            this.add.image(640 + (1280 * i), 360,"sky");
        } */
        this.add.image(2500, 360,"sky");
        
        this.cameras.main.setBounds(0, 0, 5000, 720);
        this.physics.world.setBounds(0, 0, 5000 * this.levelWidth, 720);

        //  The platforms group contains the ground and the 2 ledges we can jump on
        this.platforms = this.physics.add.staticGroup();

        for(var i = 0; i < this.levelWidth; i++) {
            this.platforms.create(640 + (1280 * i), 704, "ground");
        }
        
        // The player and its settings
        this.player = this.physics.add.sprite(100, 450, 'dude');
        
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
            frames: [ { key: 'dude', frame: 4 } ],
            frameRate: 20
        });

        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
            frameRate: 10,
            repeat: -1
        });

        this.collectedBeersScoreText = this.add.text(50, 19, '0', { fontSize: '32px', fill: '#000' });
        this.collectedSausagesScoreText = this.add.text(50, 57, '0', { fontSize: '32px', fill: '#000' });
        this.collectedBeersScoreText.setScrollFactor(0);
        this.collectedSausagesScoreText.setScrollFactor(0);
        this.add.image(32, 32, 'beer').setScrollFactor(0);
        this.add.image(32, 70, 'sausage').setScrollFactor(0);

        this.cursors = this.input.keyboard.createCursorKeys();

        this.gameOverIcon = this.physics.add.sprite(300, 300, 'game_over');
        this.gameOverIcon.setVisible(false);
        this.gameOver = false;

        this.escKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC);
    }

    afterCreate() {
        //  Collide the player and the stars with the platforms
        this.physics.add.collider(this.player, this.platforms);
        this.physics.add.collider(this.beers, this.platforms);
        this.physics.add.collider(this.sausages, this.platforms);
        //this.physics.add.collider(this.bombs, this.platforms);

        //  Checks to see if the player overlaps with any of the stars, if he does call the collectStar function
        this.physics.add.overlap(this.player, this.beers, this.collectBeer, null, this);
        this.physics.add.overlap(this.player, this.sausages, this.collectSausage, null, this);

        //this.physics.add.collider(this.player, this.bombs, this.hitBomb, null, this);
    }

    update () {
        if (this.escKey.isDown) {
            this.gameIsOver();
        }
        if (this.gameOver) {
            this.gameOverTimer++;
            if (this.gameOverTimer > 150) {
                this.scene.start(CST.SCENES.MENU);
            }
            return;
        } else {
            this.gameOverTimer = 0;
        }

        var leftClick = (this.input.activePointer.isDown && (this.input.activePointer.position.x < 100)) || this.cursors.left.isDown;
        var rightClick = (this.input.activePointer.isDown && (this.input.activePointer.position.x > 1180)) || this.cursors.right.isDown;
        
        if (leftClick && (!this.waitForInputRelease)) {
            this.player.setVelocityX(-160);
            this.player.anims.play('left', true);
            if (this.lastInput == 1) {
                if (this.player.body.touching.down || this.doubleJumpAllowed) {
                    this.player.setVelocityY(-330);
                    if (!this.player.body.touching.down) {
                        this.doubleJumpAllowed = false;
                    }
                }
            }
            this.lastInput = 1;
            this.waitForInputRelease = true;
            
        } else if (rightClick && (!this.waitForInputRelease)) {
            this.player.setVelocityX(160);
            this.player.anims.play('right', true);
            if (this.lastInput == 2) {
                if (this.player.body.touching.down || this.doubleJumpAllowed) {
                    this.player.setVelocityY(-330);
                    if (!this.player.body.touching.down) {
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

        if (this.player.body.touching.down) {
            this.doubleJumpAllowed = true;
        }

        if (!(leftClick || rightClick)) {
            this.waitForInputRelease = false;
        }

        if (this.player.body.velocity.x == 0) {
            this.player.anims.play('turn');
        }
    }

    collectBeer(player, beer) {
        beer.disableBody(true, true);
        this.collectedBeers++;
        this.collectedBeersScoreText.setText(this.collectedBeers);
    }

    collectSausage(player, sausage) {
        sausage.disableBody(true, true);
        this.collectedSausages++;
        this.collectedSausagesScoreText.setText(this.collectedSausages);
    }

    hitBomb(player, bomb) {
        this.gameIsOver();
    }

    gameIsOver() {
        this.gameOverIcon.setVisible(true);

        this.physics.pause();
        this.player.setTint(0xff0000);
        this.player.anims.play('turn');

        this.gameOver = true;
    }

}