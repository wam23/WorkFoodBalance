import { CST } from "../CST.js"

export class AbstractLevelScene extends Phaser.Scene {
    
    constructor(levelname) {
        super({
            key: levelname
        });

        this.levelWidth = 15000;

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

        this.map;
        
        this.lastInput = 0;
        this.waitForInputRelease = false;

        this.collectedSausages = 0;
        this.collectedBeers = 0;

        this.collectedBeersScoreText = "";
        this.collectedSausagesScoreText = "";

        this.doubleJumpAllowed = false;

        this.speedX = 250;
        this.speedY = 330;
    }

    preload () {
        
    }

    create () {
        this.add.image(this.levelWidth / 2, 360,"sky");
        
        this.cameras.main.setBounds(0, 0, this.levelWidth, 720);
        this.physics.world.setBounds(0, 0, this.levelWidth, 720);

        //  The platforms group contains the ground and the 2 ledges we can jump on
        this.platforms = this.physics.add.staticGroup();

        for (var i = 0; i < (this.levelWidth / 100); i++) {
            this.platforms.create(50 + (i * 100), 704, "ground");
        }
        
        // The player and its settings
        this.player = this.physics.add.sprite(100, 100, 'dude');
        
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

        this.collectBeerSound = this.sound.add('collect_beer');
        this.collectSausageSound = this.sound.add('collect_sausage');
        this.jumpSound = this.sound.add('jump');
        this.gameoverSound = this.sound.add('gameover');
    }

    afterCreate() {
        var tileset = this.map.addTilesetImage('tiles_spritesheet', 'tiles');
        this.layer = this.map.createStaticLayer('Tile Layer 1', tileset);
        this.layer.setCollisionByExclusion(-1, true);
        this.physics.add.collider(this.player, this.layer);

        this.collectibleLayer = this.map.createDynamicLayer('collectables', tileset);
        this.physics.add.overlap(this.player, this.collectibleLayer, this.collectItem, null, this);

        this.physics.add.collider(this.player, this.platforms);
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
        if (item.index == 14) { // corona
            this.gameoverSound.play();
            this.gameIsOver();
        } else if (item.index == 26) { // beer
            item.alpha = 0;
            this.collectedBeers++;
            this.collectedBeersScoreText.setText(this.collectedBeers);
            this.collectBeerSound.play();
        } else if (item.index == 38) { // sausage
            item.alpha = 0;
            this.collectedSausages++;
            this.collectedSausagesScoreText.setText(this.collectedSausages);
            this.collectSausageSound.play();
        }
    }

    gameIsOver() {
        this.gameOverIcon.setVisible(true);

        this.physics.pause();
        this.player.setTint(0xff0000);
        this.player.anims.play('turn');

        this.gameOver = true;
    }

}