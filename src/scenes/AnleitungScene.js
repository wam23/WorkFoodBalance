import { CST } from "../CST.js"

export class AnleitungScene extends Phaser.Scene {

    constructor() {
        super({
            key: CST.SCENES.ANLEITUNG
        });
    }

    create() {
        this.add.image(640, 360, 'anleitung');

        let backButton = this.add.image(1150, 650, 'play_button');
        backButton.setInteractive();

        backButton.on("pointerup", () => {
            this.scene.start(CST.SCENES.MENU);
        });
    }

}