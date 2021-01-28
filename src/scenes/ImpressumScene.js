import { CST } from "../CST.js"

export class ImpressumScene extends Phaser.Scene {

    constructor() {
        super({
            key: CST.SCENES.IMPRESSUM
        });
    }

    create() {
        this.add.image(640, 360, 'impressum');

        let backButton = this.add.image(1200, 680, 'back_button');
        backButton.setInteractive();

        backButton.on("pointerup", () => {
            this.scene.start(CST.SCENES.MENU);
        });

        this.add.image(324, 277, 'qr_button')
            .setInteractive()
            .on("pointerup", () => {
                window.open("https://www.linkedin.com/in/monika-blaser/", "_blank");
            });

        this.add.image(513, 223, 'qr_button')
            .setInteractive()
            .on("pointerup", () => {
                window.open("https://www.linkedin.com/in/rafael-wampfler-b2a46214/", "_blank");
            });

        this.add.image(689, 240, 'qr_button')
            .setInteractive()
            .on("pointerup", () => {
                window.open("https://www.linkedin.com/in/daniela-bodmer/", "_blank");
            });

        this.add.image(871, 267, 'qr_button')
            .setInteractive()
            .on("pointerup", () => {
                window.open("mailto:hawkie@bluewin.ch", "_blank");
            });

        this.add.image(1050, 296, 'qr_button')
            .setInteractive()
            .on("pointerup", () => {
                window.open("https://www.linkedin.com/in/phollinger/", "_blank");
            });
    }

}