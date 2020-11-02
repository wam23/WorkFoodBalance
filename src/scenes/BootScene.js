import { CST } from "../CST.js"

export class BootScene extends Phaser.Scene {
    constructor() {
        super({
            key: CST.SCENES.BOOT
        });
    }

    init() {
        
    }

    preload() {
        this.load.image('splashscreen', './assets/splashscreen.png');
        this.load.on('complete', this.complete, {scene:this.scene});
    }

    complete() {
        this.scene.start(CST.SCENES.LOAD);
    }

    create() {
        //this.add.image(640, 360,'splashscreen');
    }

}