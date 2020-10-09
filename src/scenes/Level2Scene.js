import { CST } from "../CST.js"
import { AbstractLevelScene } from "./AbstractLevelScene.js";

export class Level2Scene extends AbstractLevelScene {
    
    constructor() {
        super(CST.SCENES.LEVEL2);
    }

    create () {
        super.create();

        this.map = this.make.tilemap({
            key: 'Level2',
            tileWidth: 72,
            tileHeight: 72
        });
        
        this.afterCreate();
    }

}