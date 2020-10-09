import { CST } from "../CST.js"

export class Level1Scene extends Phaser.Scene {
    
    constructor() {
        super({
            key: CST.SCENES.LEVEL1
        });

        this.levelWidth = 10;

        this.player;
        this.stars;
        this.bombs;
        this.platforms;
        this.cursors;
        this.score = 0;
        this.gameOver = false;
        this.scoreText;
        this.gameOverIcon;
        this.gameOverTimer = 0;
        this.escKey;

        this.lastInput = 0;
        this.waitForInputRelease = false;
    }

    preload () {
        
    }

    create () {
        for(var i = 0; i < this.levelWidth; i++) {
            this.add.image(640 + (1280 * i), 360,"sky");
        }
        
        this.cameras.main.setBounds(0, 0, 1280 * this.levelWidth, 720);
        this.physics.world.setBounds(0, 0, 1280 * this.levelWidth, 720);

        //  The platforms group contains the ground and the 2 ledges we can jump on
        this.platforms = this.physics.add.staticGroup();

        for(var i = 0; i < this.levelWidth; i++) {
            this.platforms.create(640 + (1280 * i), 704, "ground");
        }
        
        //  Now let's create some ledges
        this.platforms.create(600, 400, 'platform');
        this.platforms.create(50, 250, 'platform');
        this.platforms.create(750, 220, 'platform');

        // The player and its settings
        this.player = this.physics.add.sprite(100, 450, 'dude');
        
        //  Player physics properties. Give the little guy a slight bounce.
        this.player.setBounceX(0);
        this.player.setBounceY(0.2);
        this.player.setCollideWorldBounds(true);

        //this.cameras.main.startFollow(this.player, true, 0.05, 0.05);
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

        //  Input Events
        this.cursors = this.input.keyboard.createCursorKeys();

        //  Some stars to collect, 12 in total, evenly spaced 70 pixels apart along the x axis
        this.stars = this.physics.add.group({
            key: 'star',
            repeat: 11,
            setXY: { x: 12, y: 0, stepX: 70 }
        });

        this.stars.children.iterate(function (child) {

            //  Give each star a slightly different bounce
            child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));

        });

        this.bombs = this.physics.add.group();

        //  The score
        this.scoreText = this.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });

        //  Collide the player and the stars with the platforms
        this.physics.add.collider(this.player, this.platforms);
        this.physics.add.collider(this.stars, this.platforms);
        this.physics.add.collider(this.bombs, this.platforms);

        //  Checks to see if the player overlaps with any of the stars, if he does call the collectStar function
        this.physics.add.overlap(this.player, this.stars, this.collectStar, null, this);

        this.physics.add.collider(this.player, this.bombs, this.hitBomb, null, this);

        this.gameOverIcon = this.physics.add.sprite(300, 300, 'game_over');
        this.gameOverIcon.setVisible(false);
        this.gameOver = false;

        this.escKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC);
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

        /* if (this.cursors.left.isDown) {
            this.player.setVelocityX(-160);
            this.player.anims.play('left', true);
        }
        else if (this.cursors.right.isDown) {
            this.player.setVelocityX(160);
            this.player.anims.play('right', true);
        }
        else {
            this.player.setVelocityX(0);
            this.player.anims.play('turn');
        } */
        
        if (this.input.activePointer.isDown && (this.input.activePointer.position.x < 100) && (!this.waitForInputRelease)) {
            if (this.lastInput != 1) {
                this.player.setVelocityX(-160);
                this.player.anims.play('left', true);
            } else if (this.lastInput == 1) {
                if (this.player.body.touching.down) {
                    this.player.setVelocityY(-330);
                }
            }
            this.lastInput = 1;
            this.waitForInputRelease = true;
            
        } else if (this.input.activePointer.isDown && (this.input.activePointer.position.x > 1180) && (!this.waitForInputRelease)) {
            if (this.lastInput != 2) {
                this.player.setVelocityX(160);
                this.player.anims.play('right', true);
            } else if (this.lastInput == 2) {
                if (this.player.body.touching.down) {
                    this.player.setVelocityY(-330);
                }
            }
            this.lastInput = 2;
            this.waitForInputRelease = true;
        } else {
            //this.player.setVelocityX(0);
            //this.player.anims.play('turn');
        }

        if (!this.input.activePointer.isDown) {
            this.waitForInputRelease = false;
        }
    }

    collectStar (player, star) {
        star.disableBody(true, true);

        //  Add and update the score
        this.score += 10;
        this.scoreText.setText('Score: ' + this.score);

        if (this.stars.countActive(true) === 0) {
            //  A new batch of stars to collect
            this.stars.children.iterate(function (child) {

                child.enableBody(true, child.x, 0, true, true);

            });

            var x = (this.player.x < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);

            var bomb = this.bombs.create(x, 16, 'bomb');
            bomb.setBounce(1);
            bomb.setCollideWorldBounds(true);
            bomb.setVelocity(Phaser.Math.Between(-200, 200), 20);
            bomb.allowGravity = false;

        }
    }

    hitBomb (player, bomb) {
        this.gameIsOver();
    }

    gameIsOver () {
        this.gameOverIcon.setVisible(true);

        this.physics.pause();
        this.player.setTint(0xff0000);
        this.player.anims.play('turn');

        this.gameOver = true;
    }

}