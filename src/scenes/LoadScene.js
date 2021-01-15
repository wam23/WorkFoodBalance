import { CST } from "../CST.js"

export class LoadScene extends Phaser.Scene {
    constructor() {
        super({
            key: CST.SCENES.LOAD
        });
    }

    init() {
        
    }

    preload() {
        this.add.image(640, 360,'splashscreen');
        
        this.load.image('sky_level1', './assets/sky_level1.jpg');
        this.load.image('sky_level2', './assets/sky_level2.jpg');
        this.load.image('sky_level3', './assets/sky_level3.jpg');
        this.load.image('startscreen', './assets/startscreen2.png');
        this.load.image('scorescreen', './assets/scorescreen.png');
        this.load.image('anleitung', './assets/anleitung.jpg');
        this.load.image('impressum', './assets/impressum.jpg');
        this.load.image('anleitung_button', './assets/button_anleitung.jpg');
        this.load.image('impressum_button', './assets/button_impressum.jpg');
        this.load.image('back_button', './assets/back.jpg');
        this.load.image('ground', './assets/ground.png');
        this.load.image('platform', './assets/platform.png');
        this.load.image('coin', './assets/coin.png');
        this.load.image('bomb', './assets/bomb.png');
        this.load.image('beer', './assets/beer.png');
        this.load.image('sausage', './assets/sausage.png');
        this.load.image('flag', './assets/flag.png');
        this.load.image('ball', './assets/ball.png');
        this.load.image('heart', './assets/heart.png');
        this.load.image('time', './assets/time.png');
        this.load.image('level1_button', './assets/level1_button.png');
        this.load.image('level2_button', './assets/level2_button.png');
        this.load.image('level3_button', './assets/level3_button.png');
        this.load.image('wolf', './assets/wolf.png');
        this.load.image('geyoungboyst', './assets/geyoungboyst.png');

        this.load.image('play_button', './assets/play_button.png');
        this.load.image('play_icon', './assets/play_icon.png');
        this.load.image('game_over', './assets/game_over.png');
        this.load.image('sound_on_button', './assets/sound_on_button.png');
        this.load.image('sound_off_button', './assets/sound_off_button.png');

        this.load.image('tiles', './assets/tiles_spritesheet.png');
        this.load.tilemapTiledJSON('Level1', './assets/level1.json');
        this.load.tilemapTiledJSON('Level2', './assets/Level2.json');
        this.load.tilemapTiledJSON('Level3', './assets/level3.json');

        this.load.spritesheet('dude', '../assets/dude2.png', { frameWidth: 72, frameHeight: 72 });
        this.load.spritesheet('dudeFast', '../assets/dude3.png', { frameWidth: 72, frameHeight: 72 });
        
        this.load.audio('collect_beer', './assets/sounds/collect_beer.mp3');
        this.load.audio('collect_sausage', './assets/sounds/collect_sausage.mp3');
        this.load.audio('collect_coin', './assets/sounds/collect_coin.mp3');
        this.load.audio('collect_flag', './assets/sounds/collect_flag.mp3');
        this.load.audio('collect_ball', './assets/sounds/collect_ball.mp3');
        this.load.audio('collect_letter', './assets/sounds/collect_letter.mp3');
        this.load.audio('collect_corona', './assets/sounds/collect_virus.mp3');
        this.load.audio('jump', './assets/sounds/jump.mp3');
        this.load.audio('gameover', './assets/sounds/gameover.mp3');
        this.load.audio('levelend', './assets/sounds/win.mp3');
        this.load.audio('sorry', './assets/sounds/tschuldigung.mp3');
        this.load.audio('win', './assets/sounds/win.mp3');
        this.load.audio('final_win', './assets/sounds/final_win.mp3');
        this.load.audio('background', './assets/sounds/background.mp3');
        this.load.audio('fans', './assets/sounds/baenkli.mp3');
        this.load.audio('drehkreuz', './assets/sounds/hie.mp3');

        // only for developping
        this.load.image('cheatmode_button', './assets/cheatmode_button.png');
        this.load.image('gravity1_button', './assets/gravity1_button.png');
        this.load.image('gravity2_button', './assets/gravity2_button.png');
        this.load.image('gravity3_button', './assets/gravity3_button.png');
        this.load.image('gravity4_button', './assets/gravity4_button.png');
        this.load.image('speed1_button', './assets/speed1_button.png');
        this.load.image('speed2_button', './assets/speed2_button.png');
        this.load.image('speed3_button', './assets/speed3_button.png');
        this.load.image('speed4_button', './assets/speed4_button.png');
        this.load.image('longjump_button', './assets/longjump_button.png');
        // end only for developping
        
        var loadingBar = this.add.graphics({
            fillStyle: {
                color: 0xffcf00 // white
            }
        });
        
        this.load.on("progress", (percent) => {
            loadingBar.fillRect(0, 500, this.game.renderer.width * percent, 50);
        });

        this.load.on('complete', this.complete, {scene:this.scene});
    }

    complete() {
        //console.log("COMPLETE!");
        this.scene.start(CST.SCENES.MENU);
    }

    create() {
        //console.log("create");
    }

}