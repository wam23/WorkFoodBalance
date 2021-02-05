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

        this.link("https://www.linkedin.com/in/monika-blaser/", 324, 277, 64, 64);
        this.link("https://www.linkedin.com/in/rafael-wampfler-b2a46214/", 513, 223, 64, 64);
        this.link("https://www.linkedin.com/in/daniela-bodmer/", 689, 240, 64, 64);
        this.link("mailto:hawkie@bluewin.ch", 871, 267, 64, 64);
        this.link("https://www.linkedin.com/in/phollinger/", 1050, 296, 64, 64);

        this.link("https://tactummotum.ch/", 260, 374, 160, 45);
        this.link("http://www.xhuma.ch/", 602, 368, 115, 40);
        this.link("https://www.bscyb.ch/", 250, 493, 85, 85);
        this.link("https://www.belikegrace.ch/", 450, 500, 105, 90);
        this.link("https://hackathon.bscyb.ch/de", 678, 497, 160, 75);
        this.link("https://azure.microsoft.com/", 941, 494, 230, 50);
        this.link("mailto:marketing@bscyb.ch", 671, 578, 185, 40);
    }

    link(url, x, y, width, height) {
        this.add.image(x, y, 'qr_button') // coin
            .setScale(width / 64, height / 64)
            .setAlpha(0.2)
            .setInteractive()
            .on("pointerup", () => {
                window.open(url, "_blank");
            });
    }
}