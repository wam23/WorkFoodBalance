import { CST } from "../CST.js"
import { AbstractLevelScene } from "./AbstractLevelScene.js";

export class Level1Scene extends AbstractLevelScene {
    
    constructor() {
        super(CST.SCENES.LEVEL1);
    }

    preload () {
        
    }

    create () {
        super.create();

        // this.platforms.create(600, 520, 'platform');
        // this.platforms.create(50, 670, 'platform');
        // this.platforms.create(750, 620, 'platform');

        var map = this.make.tilemap({
            key: 'Level2',
            tileWidth: 72,
            tileHeight: 72
        });
        map.setCollision([3, 9, 44, 81, 69]);
        var tileset = map.addTilesetImage('tiles');
        this.layer = map.createStaticLayer('layer', tileset);
        this.physics.add.collider(this.player, this.layer);

        this.beers = this.physics.add.group({
            key: 'beer',
            repeat: 11,
            setXY: { x: 12, y: 0, stepX: 70 }
        });
        this.beers.children.iterate(function (child) {
            child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
        });

        this.sausages = this.physics.add.group({
            key: 'sausage',
            repeat: 5,
            setXY: { x: 35, y: 0, stepX: 70 }
        });
        this.sausages.children.iterate(function (child) {
            child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
        });

        this.afterCreate();
    }

    update () {
        super.update();
    }

}