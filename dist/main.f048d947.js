parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"pukg":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.CST=void 0;var E={SCENES:{LOAD:"LOAD",MENU:"MENU",SCORE:"SCORE",LEVEL1:"LEVEL1",LEVEL2:"LEVEL2",LEVEL3:"LEVEL3"}};exports.CST=E;
},{}],"Ycqt":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.LoadScene=void 0;var e=require("../CST.js");function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var s=0;s<t.length;s++){var o=t[s];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function a(e,t,s){return t&&o(e.prototype,t),s&&o(e,s),e}function n(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function i(e){var t=c();return function(){var s,o=d(e);if(t){var a=d(this).constructor;s=Reflect.construct(o,arguments,a)}else s=o.apply(this,arguments);return r(this,s)}}function r(e,s){return!s||"object"!==t(s)&&"function"!=typeof s?u(e):s}function u(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function c(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var p=function(t){n(l,Phaser.Scene);var o=i(l);function l(){return s(this,l),o.call(this,{key:e.CST.SCENES.LOAD})}return a(l,[{key:"init",value:function(){}},{key:"preload",value:function(){var e=this;this.load.image("sky_level1","./assets/sky_level1.png"),this.load.image("sky_level2","./assets/sky_level2.png"),this.load.image("sky_level3","./assets/sky_level3.png"),this.load.image("startscreen","./assets/startscreen2.png"),this.load.image("ground","./assets/ground.png"),this.load.image("platform","./assets/platform.png"),this.load.image("coin","./assets/coin.png"),this.load.image("bomb","./assets/bomb.png"),this.load.image("beer","./assets/beer.png"),this.load.image("sausage","./assets/sausage.png"),this.load.image("vuvuzela","./assets/vuvuzela.png"),this.load.image("ball","./assets/ball.png"),this.load.image("level1_button","./assets/level1_button.png"),this.load.image("level2_button","./assets/level2_button.png"),this.load.image("level3_button","./assets/level3_button.png"),this.load.image("play_button","./assets/play_button.png"),this.load.image("play_icon","./assets/play_icon.png"),this.load.image("game_over","./assets/game_over.png"),this.load.image("tiles","./assets/tiles_spritesheet.png"),this.load.tilemapTiledJSON("Level1","./assets/level1.json"),this.load.tilemapTiledJSON("Level2","./assets/Level2.json"),this.load.tilemapTiledJSON("Level3","./assets/level3.json"),this.load.spritesheet("dude","../assets/dude2.png",{frameWidth:72,frameHeight:72}),this.load.audio("collect_beer","./assets/sounds/collect_beer.mp3"),this.load.audio("collect_sausage","./assets/sounds/collect_sausage.mp3"),this.load.audio("collect_coin","./assets/sounds/collect_coin.mp3"),this.load.audio("collect_vuvuzela","./assets/sounds/vuvuzela.mp3"),this.load.audio("collect_ball","./assets/sounds/collect_ball.mp3"),this.load.audio("collect_letter","./assets/sounds/collect_letter.mp3"),this.load.audio("jump","./assets/sounds/jump.mp3"),this.load.audio("gameover","./assets/sounds/gameover.mp3"),this.load.audio("levelend","./assets/sounds/win.mp3"),this.load.audio("sorry","./assets/sounds/tschuldigung.mp3"),this.load.audio("win","./assets/sounds/win.mp3"),this.load.audio("final_win","./assets/sounds/final_win.mp3");var t=this.add.graphics({fillStyle:{color:16777215}});this.load.on("progress",function(s){t.fillRect(0,e.game.renderer.height/2,e.game.renderer.width*s,50)})}},{key:"create",value:function(){this.scene.start(e.CST.SCENES.MENU)}}]),l}();exports.LoadScene=p;
},{"../CST.js":"pukg"}],"qGid":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.MenuScene=void 0;var t=require("../CST.js");function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}function u(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&c(t,e)}function c(t,e){return(c=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function i(t){var e=s();return function(){var n,r=l(t);if(e){var o=l(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return f(this,n)}}function f(t,n){return!n||"object"!==e(n)&&"function"!=typeof n?a(t):n}function a(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function s(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}function l(t){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var p=function(e){u(c,Phaser.Scene);var r=i(c);function c(){return n(this,c),r.call(this,{key:t.CST.SCENES.MENU})}return o(c,[{key:"preload",value:function(){}},{key:"create",value:function(){var e=this;this.add.image(640,360,"startscreen");var n=this.add.image(1020,350,"level1_button");n.setInteractive(),n.on("pointerup",function(){e.scene.start(t.CST.SCENES.LEVEL1)});var r=this.add.image(1020,450,"level2_button");r.setInteractive(),r.on("pointerup",function(){e.scene.start(t.CST.SCENES.LEVEL2)});var o=this.add.image(1020,550,"level3_button");o.setInteractive(),o.on("pointerup",function(){e.scene.start(t.CST.SCENES.LEVEL3)})}},{key:"update",value:function(){}}]),c}();exports.MenuScene=p;
},{"../CST.js":"pukg"}],"xaEN":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.ScoreScreen=void 0;var t=require("../CST.js");function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function o(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&c(t,e)}function c(t,e){return(c=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function u(t){var e=l();return function(){var r,n=a(t);if(e){var o=a(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return f(this,r)}}function f(t,r){return!r||"object"!==e(r)&&"function"!=typeof r?s(t):r}function s(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function l(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}function a(t){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var p=function(e){i(c,Phaser.Scene);var n=u(c);function c(){return r(this,c),n.call(this,{key:t.CST.SCENES.SCORE})}return o(c,[{key:"init",value:function(t){this.nextlevel=t.nextlevel,this.score=t.score}},{key:"create",value:function(){var e=this;this.add.image(2500,360,"sky_level1"),this.foreverText=this.add.text(250,140,"0",{fontSize:"120px",fill:"#ffcf00"}),this.foreverText.setText(this.game.forever.join("")),this.scoreText=this.add.text(1100,30,"0",{fontSize:"80px",fill:"#000"}),this.scoreText.setText("Score: "+this.score),this.nextlevel==t.CST.SCENES.MENU&&(this.scoreText=this.add.text(1100,150,"0",{fontSize:"80px",fill:"#000"}),this.scoreText.setText("GAME OVER"));var r=this.add.image(1100,400,"play_button");r.setInteractive(),r.on("pointerup",function(){e.scene.start(e.nextlevel)})}}]),c}();exports.ScoreScreen=p;
},{"../CST.js":"pukg"}],"c9Lq":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.AbstractLevelScene=void 0;var e=require("../CST.js");function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var s=0;s<t.length;s++){var l=t[s];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}function i(e,t,s){return t&&l(e.prototype,t),s&&l(e,s),e}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)}function o(e,t){return(o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function r(e){var t=h();return function(){var s,l=d(e);if(t){var i=d(this).constructor;s=Reflect.construct(l,arguments,i)}else s=l.apply(this,arguments);return c(this,s)}}function c(e,s){return!s||"object"!==t(s)&&"function"!=typeof s?n(e):s}function n(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var u=function(t){a(o,Phaser.Scene);var l=r(o);function o(e,t,i){var a;return s(this,o),(a=l.call(this,{key:e})).cheatMode=!1,a.fastMode=!1,a.backgroundimage=i,a.nextlevel=t,a.levelWidth=15e3,a.gameOver=!1,a.gameOverTimer=0,a.levelHasEnded=!1,a.levelEndedTimer=0,a.escKey,a.player,a.beers,a.sausages,a.bombs,a.platforms,a.cursors,a.map,a.lastInput=0,a.waitForInputRelease=!1,a.collectedSausages=0,a.collectedBeers=0,a.collectedCoins=0,a.collectedVuvuzelas=0,a.collectedBalls=0,a.collectedBeersScoreText="",a.collectedSausagesScoreText="",a.collectedCoinsScoreText="",a.collectedVuvuzelasScoreText="",a.collectedBallsScoreText="",a.doubleJumpAllowed=!1,a.speedX=350,a.speedY=330,a.fastMode&&(a.speedX=600),a}return i(o,[{key:"preload",value:function(){}},{key:"create",value:function(){this.add.image(this.levelWidth/2,360,this.backgroundimage),this.cameras.main.setBounds(0,0,this.levelWidth,720),this.physics.world.setBounds(0,0,this.levelWidth,720),this.platforms=this.physics.add.staticGroup();for(var e=0;e<this.levelWidth/100;e++)this.platforms.create(50+100*e,715,"ground");this.player=this.physics.add.sprite(100,100,"dude"),this.player.body.offset.x=5,this.player.body.offset.y=5,this.player.body.width=62,this.player.body.height=62,this.player.setCollideWorldBounds(!0),this.cameras.main.startFollow(this.player,!1,1,0),this.anims.create({key:"left",frames:this.anims.generateFrameNumbers("dude",{start:0,end:3}),frameRate:10,repeat:-1}),this.anims.create({key:"turn",frames:[{key:"dude",frame:4}],frameRate:20}),this.anims.create({key:"right",frames:this.anims.generateFrameNumbers("dude",{start:5,end:8}),frameRate:10,repeat:-1});var t={fontSize:"32px",fill:"#000",stroke:"#fff",strokeThickness:1,fontWeight:"bold"};this.collectedBeersScoreText=this.add.text(75,20,"0",t),this.collectedBeersScoreText.setScrollFactor(0),this.collectedSausagesScoreText=this.add.text(75,90,"0",t),this.collectedSausagesScoreText.setScrollFactor(0),this.collectedCoinsScoreText=this.add.text(75,160,"0",t),this.collectedCoinsScoreText.setScrollFactor(0),this.collectedVuvuzelasScoreText=this.add.text(75,230,"0",t),this.collectedVuvuzelasScoreText.setScrollFactor(0),this.collectedBallsScoreText=this.add.text(75,300,"0",t),this.collectedBallsScoreText.setScrollFactor(0),this.add.image(35,35,"beer").setScrollFactor(0),this.add.image(35,105,"sausage").setScrollFactor(0),this.add.image(35,175,"coin").setScrollFactor(0),this.add.image(35,245,"vuvuzela").setScrollFactor(0),this.add.image(35,315,"ball").setScrollFactor(0),this.cursors=this.input.keyboard.createCursorKeys(),this.gameOver=!1,this.escKey=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC),this.collectBeerSound=this.sound.add("collect_beer"),this.collectSausageSound=this.sound.add("collect_sausage"),this.collectCoinSound=this.sound.add("collect_coin"),this.collectVuvuzelaSound=this.sound.add("collect_vuvuzela"),this.collectBallSound=this.sound.add("collect_ball"),this.collectLetterSound=this.sound.add("collect_letter"),this.jumpSound=this.sound.add("jump"),this.gameoverSound=this.sound.add("gameover"),this.levelEndSound=this.sound.add("levelend"),this.sorrySound=this.sound.add("sorry"),this.winSound=this.sound.add("win"),this.finalwinSound=this.sound.add("final_win")}},{key:"afterCreate",value:function(){var e=this.map.addTilesetImage("tiles_spritesheet","tiles");this.layer=this.map.createStaticLayer("tile layer 1",e),this.layer.setCollisionByExclusion(-1,!0),this.physics.add.collider(this.player,this.layer),this.collectibleLayer=this.map.createDynamicLayer("collectables",e),this.physics.add.overlap(this.player,this.collectibleLayer,this.collectItem,null,this),this.physics.add.collider(this.player,this.platforms)}},{key:"update",value:function(){var t=this.collectedCoins+this.collectedBeers+this.collectedSausages+this.collectedVuvuzelas+this.collectedBalls;if(this.escKey.isDown&&(this.cheatMode=!1,this.gameIsOver()),this.gameOver)return this.gameOverTimer++,void(this.gameOverTimer>150&&this.scene.start(e.CST.SCENES.SCORE,{nextlevel:e.CST.SCENES.MENU,score:t}));if(this.gameOverTimer=0,this.levelHasEnded)return this.levelEndedTimer++,void(this.levelEndedTimer>150&&this.scene.start(e.CST.SCENES.SCORE,{nextlevel:this.nextlevel,score:t}));this.levelEndedTimer=0;var s=this.input.activePointer.isDown&&this.input.activePointer.position.x<100||this.cursors.left.isDown,l=this.input.activePointer.isDown&&this.input.activePointer.position.x>1180||this.cursors.right.isDown,i=0==this.player.body.velocity.y;s&&!this.waitForInputRelease?(this.player.setVelocityX(-this.speedX),this.player.anims.play("left",!0),1==this.lastInput&&(i||this.doubleJumpAllowed)&&(this.player.setVelocityY(-this.speedY),this.jumpSound.play(),i||(this.doubleJumpAllowed=!1)),this.lastInput=1,this.waitForInputRelease=!0):l&&!this.waitForInputRelease&&(this.player.setVelocityX(this.speedX),this.player.anims.play("right",!0),2==this.lastInput&&(i||this.doubleJumpAllowed)&&(this.player.setVelocityY(-this.speedY),this.jumpSound.play(),i||(this.doubleJumpAllowed=!1)),this.lastInput=2,this.waitForInputRelease=!0),i&&(this.doubleJumpAllowed=!0),s||l||(this.waitForInputRelease=!1),0==this.player.body.velocity.x&&this.player.anims.play("turn")}},{key:"collectItem",value:function(e,t){if(0!=t.alpha)switch(t.index){case 2:t.alpha=0,this.collectedCoins++,this.collectedCoinsScoreText.setText(this.collectedCoins),this.collectCoinSound.play();break;case 14:this.gameoverSound.play(),this.gameIsOver();break;case 25:t.alpha=0,this.collectedBalls++,this.collectedBallsScoreText.setText(this.collectedBalls),this.collectBallSound.play();break;case 26:t.alpha=0,this.collectedBeers++,this.collectedBeersScoreText.setText(this.collectedBeers),this.collectBeerSound.play();break;case 37:t.alpha=0,this.collectedVuvuzelas++,this.collectedVuvuzelasScoreText.setText(this.collectedVuvuzelas),this.collectVuvuzelaSound.play();break;case 38:t.alpha=0,this.collectedSausages++,this.collectedSausagesScoreText.setText(this.collectedSausages),this.collectSausageSound.play();break;case 63:t.alpha=0,this.game.forever[0]="F",this.collectLetterSound.play();break;case 64:t.alpha=0,this.game.forever[1]="O",this.collectLetterSound.play();break;case 65:t.alpha=0,this.game.forever[2]="R",this.collectLetterSound.play();break;case 66:t.alpha=0,this.game.forever[3]="E",this.collectLetterSound.play();break;case 67:t.alpha=0,this.game.forever[4]="V",this.collectLetterSound.play();break;case 75:t.alpha=0,this.game.forever[5]="E",this.collectLetterSound.play();break;case 76:t.alpha=0,this.game.forever[6]="R",this.collectLetterSound.play();break;case 70:case 82:this.levelEnded();break;case 143:case 155:this.player.setVelocityX(-this.player.body.velocity.x),this.player.setVelocityY(-this.player.body.velocity.y),this.sorrySound.play();break;case 133:case 145:this.levelEnded()}}},{key:"gameIsOver",value:function(){this.cheatMode||(this.physics.pause(),this.player.setTint(16711680),this.player.anims.play("turn"),this.gameOver=!0)}},{key:"levelEnded",value:function(){this.physics.pause(),this.player.setTint(65280),this.player.anims.play("turn"),this.nextlevel==e.CST.SCENES.MENU?this.finalwinSound.play():this.levelEndSound.play(),this.levelHasEnded=!0}}]),o}();exports.AbstractLevelScene=u;
},{"../CST.js":"pukg"}],"oNuL":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Level1Scene=void 0;var t=require("../CST.js"),e=require("./AbstractLevelScene.js");function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function c(t,e,r){return e&&o(t.prototype,e),r&&o(t,r),t}function u(t,e,r){return(u="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,r){var n=i(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(r):o.value}})(t,e,r||t)}function i(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=b(t)););return t}function f(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function a(t){var e=y();return function(){var r,n=b(t);if(e){var o=b(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return s(this,r)}}function s(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?p(t):e}function p(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function y(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}function b(t){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var h=function(r){f(i,e.AbstractLevelScene);var o=a(i);function i(){return n(this,i),o.call(this,t.CST.SCENES.LEVEL1,t.CST.SCENES.LEVEL2,"sky_level1")}return c(i,[{key:"create",value:function(){u(b(i.prototype),"create",this).call(this),this.map=this.make.tilemap({key:"Level1",tileWidth:72,tileHeight:72}),this.afterCreate()}}]),i}();exports.Level1Scene=h;
},{"../CST.js":"pukg","./AbstractLevelScene.js":"c9Lq"}],"FB8z":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Level2Scene=void 0;var t=require("../CST.js"),e=require("./AbstractLevelScene.js");function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function c(t,e,r){return e&&o(t.prototype,e),r&&o(t,r),t}function u(t,e,r){return(u="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,r){var n=i(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(r):o.value}})(t,e,r||t)}function i(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=b(t)););return t}function f(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function a(t){var e=y();return function(){var r,n=b(t);if(e){var o=b(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return s(this,r)}}function s(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?p(t):e}function p(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function y(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}function b(t){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var h=function(r){f(i,e.AbstractLevelScene);var o=a(i);function i(){return n(this,i),o.call(this,t.CST.SCENES.LEVEL2,t.CST.SCENES.LEVEL3,"sky_level2")}return c(i,[{key:"create",value:function(){u(b(i.prototype),"create",this).call(this),this.map=this.make.tilemap({key:"Level2",tileWidth:72,tileHeight:72}),this.afterCreate()}}]),i}();exports.Level2Scene=h;
},{"../CST.js":"pukg","./AbstractLevelScene.js":"c9Lq"}],"htBg":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Level3Scene=void 0;var t=require("../CST.js"),e=require("./AbstractLevelScene.js");function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function c(t,e,r){return e&&o(t.prototype,e),r&&o(t,r),t}function u(t,e,r){return(u="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,r){var n=i(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(r):o.value}})(t,e,r||t)}function i(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=b(t)););return t}function f(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function a(t){var e=y();return function(){var r,n=b(t);if(e){var o=b(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return s(this,r)}}function s(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?p(t):e}function p(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function y(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}function b(t){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var h=function(r){f(i,e.AbstractLevelScene);var o=a(i);function i(){return n(this,i),o.call(this,t.CST.SCENES.LEVEL3,t.CST.SCENES.MENU,"sky_level3")}return c(i,[{key:"create",value:function(){u(b(i.prototype),"create",this).call(this),this.map=this.make.tilemap({key:"Level3",tileWidth:72,tileHeight:72}),this.afterCreate()}}]),i}();exports.Level3Scene=h;
},{"../CST.js":"pukg","./AbstractLevelScene.js":"c9Lq"}],"HJDO":[function(require,module,exports) {
"use strict";var e=require("./scenes/LoadScene.js"),c=require("./scenes/MenuScene.js"),r=require("./scenes/ScoreScene.js"),s=require("./scenes/Level1Scene.js"),n=require("./scenes/Level2Scene.js"),a=require("./scenes/Level3Scene.js"),S={type:Phaser.AUTO,scale:{parent:"Hackathon - Work Food Balance",mode:Phaser.Scale.FIT,autoCenter:Phaser.Scale.CENTER_BOTH,width:1280,height:720},physics:{default:"arcade",arcade:{gravity:{y:250},debug:!1}},scene:[e.LoadScene,c.MenuScene,r.ScoreScreen,s.Level1Scene,n.Level2Scene,a.Level3Scene]},u=new Phaser.Game(S);u.forever=[" "," "," "," "," "," "," "];
},{"./scenes/LoadScene.js":"Ycqt","./scenes/MenuScene.js":"qGid","./scenes/ScoreScene.js":"xaEN","./scenes/Level1Scene.js":"oNuL","./scenes/Level2Scene.js":"FB8z","./scenes/Level3Scene.js":"htBg"}]},{},["HJDO"], null)