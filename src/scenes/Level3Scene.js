import { CST } from "../CST.js"
import { AbstractLevelScene } from "./AbstractLevelScene.js";

export class Level3Scene extends AbstractLevelScene {
    
    constructor() {
        super(CST.SCENES.LEVEL3, CST.SCENES.MENU, 'sky_level3');
    }

    create () {
        super.create();

        this.map = this.make.tilemap({
            key: 'Level3',
            tileWidth: 72,
            tileHeight: 72
        });
        
        this.afterCreate();
    }

}