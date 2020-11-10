// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"src/CST.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CST = void 0;
var CST = {
  SCENES: {
    BOOT: "BOOT",
    LOAD: "LOAD",
    MENU: "MENU",
    SCORE: "SCORE",
    LEVEL1: "LEVEL1",
    LEVEL2: "LEVEL2",
    LEVEL3: "LEVEL3",
    ANLEITUNG: "ANLEITUNG",
    IMPRESSUM: "IMPRESSUM"
  }
};
exports.CST = CST;
},{}],"src/scenes/BootScene.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BootScene = void 0;

var _CST = require("../CST.js");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var BootScene = /*#__PURE__*/function (_Phaser$Scene) {
  _inherits(BootScene, _Phaser$Scene);

  var _super = _createSuper(BootScene);

  function BootScene() {
    _classCallCheck(this, BootScene);

    return _super.call(this, {
      key: _CST.CST.SCENES.BOOT
    });
  }

  _createClass(BootScene, [{
    key: "init",
    value: function init() {}
  }, {
    key: "preload",
    value: function preload() {
      this.load.image('splashscreen', './assets/splashscreen.png');
      this.load.on('complete', this.complete, {
        scene: this.scene
      });
    }
  }, {
    key: "complete",
    value: function complete() {
      this.scene.start(_CST.CST.SCENES.LOAD);
    }
  }, {
    key: "create",
    value: function create() {//this.add.image(640, 360,'splashscreen');
    }
  }]);

  return BootScene;
}(Phaser.Scene);

exports.BootScene = BootScene;
},{"../CST.js":"src/CST.js"}],"src/scenes/LoadScene.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoadScene = void 0;

var _CST = require("../CST.js");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var LoadScene = /*#__PURE__*/function (_Phaser$Scene) {
  _inherits(LoadScene, _Phaser$Scene);

  var _super = _createSuper(LoadScene);

  function LoadScene() {
    _classCallCheck(this, LoadScene);

    return _super.call(this, {
      key: _CST.CST.SCENES.LOAD
    });
  }

  _createClass(LoadScene, [{
    key: "init",
    value: function init() {}
  }, {
    key: "preload",
    value: function preload() {
      var _this = this;

      this.add.image(640, 360, 'splashscreen');
      this.load.image('sky_level1', './assets/sky_level1.jpg');
      this.load.image('sky_level2', './assets/sky_level2.jpg');
      this.load.image('sky_level3', './assets/sky_level3.jpg');
      this.load.image('startscreen', './assets/startscreen2.png');
      this.load.image('scorescreen', './assets/scorescreen.png');
      this.load.image('anleitung', './assets/anleitung.jpg');
      this.load.image('impressum', './assets/impressum.jpg');
      this.load.image('ground', './assets/ground.png');
      this.load.image('platform', './assets/platform.png');
      this.load.image('coin', './assets/coin.png');
      this.load.image('bomb', './assets/bomb.png');
      this.load.image('beer', './assets/beer.png');
      this.load.image('sausage', './assets/sausage.png');
      this.load.image('flag', './assets/flag.png');
      this.load.image('ball', './assets/ball.png');
      this.load.image('heart', './assets/heart.png');
      this.load.image('level1_button', './assets/level1_button.png');
      this.load.image('level2_button', './assets/level2_button.png');
      this.load.image('level3_button', './assets/level3_button.png');
      this.load.image('wolf', './assets/wolf.png');
      this.load.image('play_button', './assets/play_button.png');
      this.load.image('play_icon', './assets/play_icon.png');
      this.load.image('game_over', './assets/game_over.png');
      this.load.image('tiles', './assets/tiles_spritesheet.png');
      this.load.tilemapTiledJSON('Level1', './assets/level1.json');
      this.load.tilemapTiledJSON('Level2', './assets/Level2.json');
      this.load.tilemapTiledJSON('Level3', './assets/level3.json');
      this.load.spritesheet('dude', '../assets/dude2.png', {
        frameWidth: 72,
        frameHeight: 72
      });
      this.load.spritesheet('dudeFast', '../assets/dude3.png', {
        frameWidth: 72,
        frameHeight: 72
      });
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
      this.load.audio('drehkreuz', './assets/sounds/drehkreuz.mp3'); // only for developping

      this.load.image('cheatmode_button', './assets/cheatmode_button.png');
      this.load.image('gravity1_button', './assets/gravity1_button.png');
      this.load.image('gravity2_button', './assets/gravity2_button.png');
      this.load.image('gravity3_button', './assets/gravity3_button.png');
      this.load.image('gravity4_button', './assets/gravity4_button.png');
      this.load.image('speed1_button', './assets/speed1_button.png');
      this.load.image('speed2_button', './assets/speed2_button.png');
      this.load.image('speed3_button', './assets/speed3_button.png');
      this.load.image('speed4_button', './assets/speed4_button.png');
      this.load.image('longjump_button', './assets/longjump_button.png'); // end only for developping

      var loadingBar = this.add.graphics({
        fillStyle: {
          color: 0xffcf00 // white

        }
      });
      this.load.on("progress", function (percent) {
        loadingBar.fillRect(0, 500, _this.game.renderer.width * percent, 50);
      });
      this.load.on('complete', this.complete, {
        scene: this.scene
      });
    }
  }, {
    key: "complete",
    value: function complete() {
      //console.log("COMPLETE!");
      this.scene.start(_CST.CST.SCENES.MENU);
    }
  }, {
    key: "create",
    value: function create() {//console.log("create");
    }
  }]);

  return LoadScene;
}(Phaser.Scene);

exports.LoadScene = LoadScene;
},{"../CST.js":"src/CST.js"}],"src/scenes/MenuScene.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MenuScene = void 0;

var _CST = require("../CST.js");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var MenuScene = /*#__PURE__*/function (_Phaser$Scene) {
  _inherits(MenuScene, _Phaser$Scene);

  var _super = _createSuper(MenuScene);

  function MenuScene() {
    _classCallCheck(this, MenuScene);

    return _super.call(this, {
      key: _CST.CST.SCENES.MENU
    });
  }

  _createClass(MenuScene, [{
    key: "init",
    value: function init(data) {
      if (this.game.gameOver) {
        // TODO: generic
        this.scene.get(_CST.CST.SCENES.LEVEL2).setAsUnavailable();
        this.scene.get(_CST.CST.SCENES.LEVEL3).setAsUnavailable();
      }
    }
  }, {
    key: "preload",
    value: function preload() {}
  }, {
    key: "create",
    value: function create() {
      var _this = this;

      this.add.image(640, 360, 'startscreen');
      this.rotateText = this.add.text(100, 100, 'Bitte Bildschirm drehen', {
        fontSize: '50px',
        fill: '#ffcf00'
      });
      this.rotateText.visible = window.innerHeight > window.innerWidth;
      window.addEventListener('orientationchange', function () {
        console.log('orientationchange', window.screen);
        _this.rotateText.visible = window.innerHeight < window.innerWidth;
      }, true);
      var playButton = this.add.image(1020, 350, 'level1_button');
      playButton.setInteractive();
      playButton.on("pointerup", function () {
        _this.scene.start(_CST.CST.SCENES.LEVEL1); // level 1 is always available

      });
      this.playButton2 = this.add.image(1020, 450, 'level2_button');
      this.playButton2.setInteractive();
      this.playButton2.on("pointerup", function () {
        if (_this.scene.get(_CST.CST.SCENES.LEVEL2).isAvailable || _this.game.cheatMode) {
          _this.scene.start(_CST.CST.SCENES.LEVEL2);
        }
      });
      this.playButton2.alpha = 0;
      this.playButton3 = this.add.image(1020, 550, 'level3_button');
      this.playButton3.setInteractive();
      this.playButton3.on("pointerup", function () {
        if (_this.scene.get(_CST.CST.SCENES.LEVEL3).isAvailable || _this.game.cheatMode) {
          _this.scene.start(_CST.CST.SCENES.LEVEL3);
        }
      });
      this.playButton3.alpha = 0;
      this.anleitungButton = this.add.text(800, 600, 'Anleitung', {
        fontSize: '35px',
        fill: '#ffcf00'
      });
      this.anleitungButton.setInteractive();
      this.anleitungButton.on("pointerup", function () {
        _this.scene.start(_CST.CST.SCENES.ANLEITUNG);
      });
      this.impressumButton = this.add.text(800, 650, 'Impressum', {
        fontSize: '35px',
        fill: '#ffcf00'
      });
      this.impressumButton.setInteractive();
      this.impressumButton.on("pointerup", function () {
        _this.scene.start(_CST.CST.SCENES.IMPRESSUM);
      });

      if (this.sound.get('background') == null) {
        var music = this.sound.add('background');
        music.loop = true;
        music.play();
      } // TODO:


      var fontStyle = {
        fontSize: '16px',
        fill: '#000',
        stroke: '#fff',
        strokeThickness: 1,
        fontWeight: 'bold'
      };
      this.cheatModeText = this.add.text(1030, 22, this.game.cheatMode ? "1" : "0", fontStyle);
      this.cheatModeText.setScrollFactor(0);
      var cheatModeButton = this.add.image(970, 30, 'cheatmode_button');
      cheatModeButton.setInteractive();
      cheatModeButton.on("pointerup", function () {
        _this.game.cheatMode = !_this.game.cheatMode;

        _this.cheatModeText.setText(_this.game.cheatMode ? "1" : "0");

        _this.playButton2.alpha = 100 * (_this.scene.get(_CST.CST.SCENES.LEVEL2).isAvailable || _this.game.cheatMode);
        _this.playButton3.alpha = 100 * (_this.scene.get(_CST.CST.SCENES.LEVEL3).isAvailable || _this.game.cheatMode);
      });

      if (this.game.developmentMode) {
        /*var fontStyle = { fontSize: '16px', fill: '#000', stroke: '#fff', strokeThickness: 1, fontWeight: 'bold' };
        this.cheatModeText = this.add.text(1030, 22, this.game.cheatMode ? "1" : "0", fontStyle);
        this.cheatModeText.setScrollFactor(0);
          var cheatModeButton = this.add.image(970, 30, 'cheatmode_button');
        cheatModeButton.setInteractive();
          cheatModeButton.on("pointerup", () => {
            this.game.cheatMode = !this.game.cheatMode;
            this.cheatModeText.setText(this.game.cheatMode ? "1" : "0");
              this.playButton2.alpha = 100 * (this.scene.get(CST.SCENES.LEVEL2).isAvailable || this.game.cheatMode);
            this.playButton3.alpha = 100 * (this.scene.get(CST.SCENES.LEVEL3).isAvailable || this.game.cheatMode);
        });*/
        this.longjumpText = this.add.text(1190, 22, this.game.enableLongJump ? "1" : "0", fontStyle);
        this.longjumpText.setScrollFactor(0);
        var longjumpButton = this.add.image(1130, 30, 'longjump_button');
        longjumpButton.setInteractive();
        longjumpButton.on("pointerup", function () {
          _this.game.enableLongJump = !_this.game.enableLongJump;

          _this.longjumpText.setText(_this.game.enableLongJump ? "1" : "0");
        });
        this.gravityText = this.add.text(915, 150, "Gravity: " + this.game.gravity, fontStyle);
        this.gravityText.setScrollFactor(0);
        var gravity1Button = this.add.image(970, 70, 'gravity1_button');
        gravity1Button.setInteractive();
        gravity1Button.on("pointerup", function () {
          _this.game.gravity = 250;

          _this.gravityText.setText("Gravity: " + _this.game.gravity);
        });
        var gravity2Button = this.add.image(970, 100, 'gravity2_button');
        gravity2Button.setInteractive();
        gravity2Button.on("pointerup", function () {
          _this.game.gravity = 350;

          _this.gravityText.setText("Gravity: " + _this.game.gravity);
        });
        var gravity3Button = this.add.image(970, 130, 'gravity3_button');
        gravity3Button.setInteractive();
        gravity3Button.on("pointerup", function () {
          _this.game.gravity = 450;

          _this.gravityText.setText("Gravity: " + _this.game.gravity);
        });
        this.speedText = this.add.text(1075, 150, "Speed: " + this.game.speedY, fontStyle);
        this.speedText.setScrollFactor(0);
        var speed1Button = this.add.image(1130, 70, 'speed1_button');
        speed1Button.setInteractive();
        speed1Button.on("pointerup", function () {
          _this.game.speedY = 330;

          _this.speedText.setText("Speed: " + _this.game.speedY);
        });
        var speed2Button = this.add.image(1130, 100, 'speed2_button');
        speed2Button.setInteractive();
        speed2Button.on("pointerup", function () {
          _this.game.speedY = 430;

          _this.speedText.setText("Speed: " + _this.game.speedY);
        });
        var speed3Button = this.add.image(1130, 130, 'speed3_button');
        speed3Button.setInteractive();
        speed3Button.on("pointerup", function () {
          _this.game.speedY = 530;

          _this.speedText.setText("Speed: " + _this.game.speedY);
        });
      }
    }
  }, {
    key: "update",
    value: function update() {}
  }]);

  return MenuScene;
}(Phaser.Scene);

exports.MenuScene = MenuScene;
},{"../CST.js":"src/CST.js"}],"src/scenes/ScoreScene.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ScoreScreen = void 0;

var _CST = require("../CST.js");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var ScoreScreen = /*#__PURE__*/function (_Phaser$Scene) {
  _inherits(ScoreScreen, _Phaser$Scene);

  var _super = _createSuper(ScoreScreen);

  function ScoreScreen() {
    var _this;

    _classCallCheck(this, ScoreScreen);

    _this = _super.call(this, {
      key: _CST.CST.SCENES.SCORE
    });
    _this.cheatModeText = "";
    return _this;
  }

  _createClass(ScoreScreen, [{
    key: "init",
    value: function init(data) {
      this.nextlevel = data.nextlevel;
      this.nextlevelNumber = data.nextlevelNumber;
      this.score = data.score;
    }
  }, {
    key: "create",
    value: function create() {
      var _this2 = this;

      this.add.image(640, 360, "scorescreen");
      this.foreverText = this.add.text(250, 140, '0', {
        fontSize: '120px',
        fill: '#ffcf00'
      });
      this.foreverText.setText(this.game.forever.join(''));
      this.scoreText = this.add.text(950, 30, '0', {
        fontSize: '40px',
        fill: '#000'
      });
      this.scoreText.setText("Score: " + this.score);

      if (this.nextlevel == _CST.CST.SCENES.MENU) {
        this.scoreText = this.add.text(950, 100, '0', {
          fontSize: '40px',
          fill: '#000'
        });
        this.scoreText.setText("GAME OVER");
        this.game.gameOver = true;
      }

      var nextButtonString = 'play_button';

      if (this.nextlevel != _CST.CST.SCENES.MENU) {
        nextButtonString = 'level' + this.nextlevelNumber + '_button';
      }

      var nextButton = this.add.image(1020, 450, nextButtonString);
      nextButton.setInteractive();
      nextButton.on("pointerup", function () {
        if (_this2.nextlevel != _CST.CST.SCENES.MENU) {
          var tempScene = _this2.scene.get(_this2.nextlevel);

          tempScene.setAsAvailable();
        } else {
          _this2.game.gameOver = true;
        }

        _this2.scene.start(_this2.nextlevel);
      });
    }
  }]);

  return ScoreScreen;
}(Phaser.Scene);

exports.ScoreScreen = ScoreScreen;
},{"../CST.js":"src/CST.js"}],"src/scenes/AbstractLevelScene.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AbstractLevelScene = void 0;

var _CST = require("../CST.js");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var AbstractLevelScene = /*#__PURE__*/function (_Phaser$Scene) {
  _inherits(AbstractLevelScene, _Phaser$Scene);

  var _super = _createSuper(AbstractLevelScene);

  function AbstractLevelScene(levelname, nextlevel, nextlevelNumber, bgimage) {
    var _this;

    _classCallCheck(this, AbstractLevelScene);

    _this = _super.call(this, {
      key: levelname
    });
    _this.backgroundimage = bgimage;
    _this.nextlevel = nextlevel;
    _this.nextlevelNumber = nextlevelNumber;
    _this.levelWidth = 15000;
    _this.gameOverTimer = 0;
    _this.levelHasEnded = false;
    _this.levelEndedTimer = 0;
    _this.finalImageShown = false;
    _this.escKey;
    _this.player;
    _this.beers;
    _this.sausages;
    _this.bombs;
    _this.platforms;
    _this.cursors;
    _this.collectedBeersScoreText = "";
    _this.collectedSausagesScoreText = "";
    _this.collectedCoinsScoreText = "";
    _this.collectedFlagsScoreText = "";
    _this.collectedBallsScoreText = "";
    _this.map;
    _this.lastInput = 0;
    _this.waitForInputRelease = false;
    _this.doubleJumpAllowed = false;
    _this.counterUntilClearTint = 0;
    _this.isAvailable = false;
    _this.jumpTimer = 0;
    _this.playerBlockedToLeft = false;
    _this.playerBlockedToRight = false;
    _this.lastBlockedYPosition = 0;
    _this.bouncingDisabled = false;
    _this.bouncingDisabledCounter = 0;
    _this.fastPlay = false;
    _this.lastPlayedAnim = null;
    return _this;
  }

  _createClass(AbstractLevelScene, [{
    key: "init",
    value: function init(data) {
      if (this.game.gameOver) {
        this.game.gameOver = false;
        this.game.forever = [' ', ' ', ' ', ' ', ' ', ' ', ' ']; // filled with FOREVER

        this.game.numberOfLives = 3;
        this.game.collectedSausages = 0;
        this.game.collectedBeers = 0;
        this.game.collectedCoins = 0;
        this.game.collectedFlags = 0;
        this.game.collectedBalls = 0;
      }

      this.game.speedX = this.game.SPEED_X;
      this.fastPlay = false;
      this.fanSoundPlayed = false;
      this.ybViertuStungStarted = false;
      this.drehkreuzSoundPlayed = false;
      this.levelHasEnded = false;
      this.finalImageShown = false;

      if (this.sound.get('final_win') != null) {
        this.sound.get('final_win').stop();
      }

      this.restoreBackgroundSoundLevel();
    }
  }, {
    key: "preload",
    value: function preload() {}
  }, {
    key: "create",
    value: function create() {
      this.add.image(this.levelWidth / 2, 360, this.backgroundimage);
      this.cameras.main.setBounds(0, 0, this.levelWidth, 720);
      this.physics.world.setBounds(0, 0, this.levelWidth, 720); //  The platforms group contains the ground and the 2 ledges we can jump on

      this.platforms = this.physics.add.staticGroup();

      for (var i = 0; i < this.levelWidth / 100; i++) {
        this.platforms.create(50 + i * 100, 715, "ground");
      } // The player and its settings


      this.player = this.physics.add.sprite(100, 100, 'dude');
      this.player.body.offset.x = 5;
      this.player.body.offset.y = 5;
      this.player.body.width = 62;
      this.player.body.height = 62;
      this.player.setGravityY(this.game.gravity);
      this.player.setCollideWorldBounds(true);
      this.cameras.main.startFollow(this.player, false, 1, 0);
      this.createDudeAnimations('dude', 'left', 'turn', 'right');
      this.createDudeAnimations('dudeFast', 'leftFast', 'turnFast', 'rightFast');
      var fontStyle = {
        fontSize: '32px',
        fill: '#000',
        stroke: '#fff',
        strokeThickness: 1,
        fontWeight: 'bold'
      };
      this.collectedBeersScoreText = this.add.text(75, 20, this.game.collectedBeers, fontStyle);
      this.collectedBeersScoreText.setScrollFactor(0);
      this.collectedSausagesScoreText = this.add.text(75, 90, this.game.collectedSausages, fontStyle);
      this.collectedSausagesScoreText.setScrollFactor(0);
      this.collectedCoinsScoreText = this.add.text(75, 160, this.game.collectedCoins, fontStyle);
      this.collectedCoinsScoreText.setScrollFactor(0);
      this.collectedFlagsScoreText = this.add.text(75, 230, this.game.collectedFlags, fontStyle);
      this.collectedFlagsScoreText.setScrollFactor(0);
      this.collectedBallsScoreText = this.add.text(75, 300, this.game.collectedBalls, fontStyle);
      this.collectedBallsScoreText.setScrollFactor(0);
      this.add.image(35, 35, 'beer').setScrollFactor(0);
      this.add.image(35, 105, 'sausage').setScrollFactor(0);
      this.add.image(35, 175, 'coin').setScrollFactor(0);
      this.add.image(35, 245, 'flag').setScrollFactor(0);
      this.add.image(35, 315, 'ball').setScrollFactor(0);
      this.livesText = this.add.text(1240, 20, this.game.numberOfLives, fontStyle);
      this.livesText.setScrollFactor(0);
      this.add.image(1200, 35, 'heart').setScrollFactor(0);
      this.cursors = this.input.keyboard.createCursorKeys();
      this.escKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC);
      this.collectBeerSound = this.sound.add('collect_beer');
      this.collectSausageSound = this.sound.add('collect_sausage');
      this.collectCoinSound = this.sound.add('collect_coin');
      this.collectFlagSound = this.sound.add('collect_flag');
      this.collectBallSound = this.sound.add('collect_ball');
      this.collectLetterSound = this.sound.add('collect_letter');
      this.collectCoronaSound = this.sound.add('collect_corona');
      this.jumpSound = this.sound.add('jump');
      this.gameoverSound = this.sound.add('gameover');
      this.levelEndSound = this.sound.add('levelend');
      this.sorrySound = this.sound.add('sorry');
      this.winSound = this.sound.add('win');
      this.finalwinSound = this.sound.add('final_win');
      this.fanSound = this.sound.add('fans');
      this.drehkreuzSound = this.sound.add('drehkreuz');
    }
  }, {
    key: "afterCreate",
    value: function afterCreate() {
      var tileset = this.map.addTilesetImage('tiles_spritesheet', 'tiles');
      this.layer = this.map.createStaticLayer('tile layer 1', tileset);
      this.layer.setCollisionByExclusion(-1, true);
      this.physics.add.collider(this.player, this.layer);
      this.collectibleLayer = this.map.createDynamicLayer('collectables', tileset);
      this.physics.add.overlap(this.player, this.collectibleLayer, this.collectItem, null, this);
      this.physics.add.collider(this.player, this.platforms);
    }
  }, {
    key: "update",
    value: function update() {
      var score = this.game.collectedCoins + this.game.collectedBeers + this.game.collectedSausages + this.game.collectedFlags + this.game.collectedBalls;

      if (this.escKey.isDown) {
        this.game.cheatMode = false;
        this.gameIsOver();
      }

      if (this.game.gameOver) {
        this.gameOverTimer++;

        if (this.gameOverTimer > 150) {
          this.scene.start(_CST.CST.SCENES.SCORE, {
            nextlevel: _CST.CST.SCENES.MENU,
            nextlevelNumber: 0,
            score: score
          });
        }

        return;
      } else {
        this.gameOverTimer = 0;
      }

      if (this.levelHasEnded) {
        this.levelEndedTimer++;

        if (this.levelEndedTimer > 150 && this.finalImageShown) {
          this.scene.start(_CST.CST.SCENES.SCORE, {
            nextlevel: this.nextlevel,
            nextlevelNumber: this.nextlevelNumber,
            score: score
          });
        }

        if (this.finalImage != null && this.finalImage.body.y > 0) {
          this.finalImage.body.velocity.y = 0;
          this.finalImage.body.moves = false;
          this.finalImageShown = true;
          this.levelEndedTimer = -150;
        }

        return;
      } else {
        this.levelEndedTimer = 0;
      }

      if (this.counterUntilClearTint > 0 && !this.gameOver && !this.levelHasEnded) {
        this.counterUntilClearTint--;

        if (this.counterUntilClearTint <= 0) {
          this.player.clearTint();
        }
      }

      if (this.scene.key == _CST.CST.SCENES.LEVEL3) {
        if (!this.fanSoundPlayed && this.player.body.position.x > 7300) {
          this.fanSoundPlayed = true;
          this.sound.get('background').volume = 0;
          this.fanSound.on('complete', this.restoreBackgroundSoundLevel, {
            sound: this.sound
          });
          this.fanSound.play();
        }

        if (!this.ybViertuStungStarted && this.player.body.position.x > 8600) {
          this.ybViertuStungStarted = true;
          this.game.speedX = this.game.SPEED_X * 1.5;
          this.player.setVelocityX(this.player.body.velocity.x * 1.5);
          this.fastPlay = true;
          this.updateAnim();
        }
      }

      if (this.scene.key == _CST.CST.SCENES.LEVEL1) {
        if (!this.drehkreuzSoundPlayed && this.player.body.position.x > 8300) {
          this.drehkreuzSoundPlayed = true;
          this.drehkreuzSound.play();
        }
      }

      var leftClick = this.input.activePointer.isDown && this.input.activePointer.position.x < 500 || this.cursors.left.isDown;
      var rightClick = this.input.activePointer.isDown && this.input.activePointer.position.x > 780 || this.cursors.right.isDown;
      var playerOnGround = this.player.body.blocked.down; //var playerOnGround = (this.player.body.velocity.y == 0);

      if (this.player.body.blocked.left) {
        this.playerBlockedToLeft = true;
        this.lastBlockedYPosition = this.player.body.position.y;
      }

      if (this.player.body.blocked.right) {
        this.playerBlockedToRight = true;
        this.lastBlockedYPosition = this.player.body.position.y;
      }

      if (this.player.body.velocity.x != 0 || Math.abs(this.lastBlockedYPosition - this.player.body.position.y) > 50) {
        this.playerBlockedToLeft = false;
        this.playerBlockedToRight = false;
      }

      if ((leftClick || rightClick) && this.waitForInputRelease && this.jumpTimer > 0) {
        if (this.jumpTimer < 40) {
          this.jumpTimer += 1;

          if (this.game.enableLongJump) {
            this.player.setVelocityY(-this.game.speedY * this.game.LONG_JUMP_FACTOR);
          }

          if (this.jumpTimer == 40) {//console.log('speed y:' + this.player.body.velocity.y);
          }
        }
      }

      var oldXSpeed = this.player.body.velocity.x;

      if (leftClick && !this.waitForInputRelease) {
        this.player.setVelocityX(-this.game.speedX); //this.player.anims.play('left', true);

        this.playAnim('left');

        if (this.lastInput == 1 && (oldXSpeed != 0 || playerOnGround && this.playerBlockedToLeft)) {
          if (playerOnGround || this.doubleJumpAllowed) {
            this.jumpTimer = 1;

            if (this.game.enableLongJump) {
              this.jumpTimer = 1;
              this.player.setVelocityY(-this.game.speedY * this.game.LONG_JUMP_FACTOR);
            } else {
              this.player.setVelocityY(-this.game.speedY);
            }

            this.jumpSound.play();

            if (!playerOnGround) {
              this.doubleJumpAllowed = false;
            }
          }
        }

        this.lastInput = 1;
        this.waitForInputRelease = true;
      } else if (rightClick && !this.waitForInputRelease) {
        this.player.setVelocityX(this.game.speedX); //this.player.anims.play('right', true);

        this.playAnim('right');

        if (this.lastInput == 2 && (oldXSpeed != 0 || playerOnGround && this.playerBlockedToRight)) {
          if (playerOnGround || this.doubleJumpAllowed) {
            if (this.game.enableLongJump) {
              this.jumpTimer = 1;
              this.player.setVelocityY(-this.game.speedY * this.game.LONG_JUMP_FACTOR);
            } else {
              this.player.setVelocityY(-this.game.speedY);
            }

            this.jumpSound.play();

            if (!playerOnGround) {
              this.doubleJumpAllowed = false;
            }
          }
        }

        this.lastInput = 2;
        this.waitForInputRelease = true;
      } else {//this.player.setVelocityX(0);
        //this.player.anims.play('turn');
      }

      if (playerOnGround) {
        this.doubleJumpAllowed = true;
      }

      if (!(leftClick || rightClick)) {
        this.waitForInputRelease = false;
        this.jumpTimer = 0;
      }

      if (this.player.body.velocity.x == 0) {
        //this.player.anims.play('turn');
        this.playAnim('turn');
      }

      if (this.bouncingDisabledCounter > 0) {
        this.bouncingDisabledCounter--;

        if (this.bouncingDisabledCounter <= 0) {
          this.bouncingDisabled = false;
        }
      } //console.log('player x:' + this.player.body.position.x);
      //console.log('speed x:' + this.player.body.velocity.x);
      //console.log("jumptimer: " + this.jumpTimer);

    }
  }, {
    key: "collectItem",
    value: function collectItem(player, item) {
      if (item.alpha == 0) {
        return;
      }

      switch (item.index) {
        case 2:
          // Coin
          item.alpha = 0;
          this.game.collectedCoins++;
          this.collectedCoinsScoreText.setText(this.game.collectedCoins);
          this.collectCoinSound.play();
          break;

        case 14:
          // Corona
          this.game.numberOfLives--;
          this.livesText.setText(this.game.numberOfLives);

          if (this.game.numberOfLives <= 0) {
            this.gameoverSound.play();
            this.gameIsOver();
          } else {
            item.alpha = 0;
            this.player.setTint(0xff0000);
            this.counterUntilClearTint = 50;
            this.collectCoronaSound.play();
          }

          break;

        case 25:
          // Ball
          item.alpha = 0;
          this.game.collectedBalls++;
          this.collectedBallsScoreText.setText(this.game.collectedBalls);
          this.collectBallSound.play();
          break;

        case 26:
          // Beer
          item.alpha = 0;
          this.game.collectedBeers++;
          this.collectedBeersScoreText.setText(this.game.collectedBeers);
          this.collectBeerSound.play();
          break;

        case 37:
          // Fähnli
          item.alpha = 0;
          this.game.collectedFlags++;
          this.collectedFlagsScoreText.setText(this.game.collectedFlags);
          this.collectFlagSound.play();
          break;

        case 38:
          // Wurscht
          item.alpha = 0;
          this.game.collectedSausages++;
          this.collectedSausagesScoreText.setText(this.game.collectedSausages);
          this.collectSausageSound.play();
          break;

        case 63:
          // F
          item.alpha = 0;
          this.game.forever[0] = 'F';
          this.collectLetterSound.play();
          break;

        case 64:
          // O
          item.alpha = 0;
          this.game.forever[1] = 'O';
          this.collectLetterSound.play();
          break;

        case 65:
          // R
          item.alpha = 0;
          this.game.forever[2] = 'R';
          this.collectLetterSound.play();
          break;

        case 66:
          // E
          item.alpha = 0;
          this.game.forever[3] = 'E';
          this.collectLetterSound.play();
          break;

        case 67:
          // V
          item.alpha = 0;
          this.game.forever[4] = 'V';
          this.collectLetterSound.play();
          break;

        case 75:
          // E
          item.alpha = 0;
          this.game.forever[5] = 'E';
          this.collectLetterSound.play();
          break;

        case 76:
          // R
          item.alpha = 0;
          this.game.forever[6] = 'R';
          this.collectLetterSound.play();
          break;

        case 70:
          // level end
          this.levelEnded();
          break;

        case 82:
          // level end
          this.levelEnded();
          break;

        case 143:
          // hooligan
          this.collidedWithHooligan();
          break;

        case 155:
          // hooligan
          this.collidedWithHooligan();
          break;

        case 49:
          // end game
          this.levelEnded();
          break;
      }
    }
  }, {
    key: "collidedWithHooligan",
    value: function collidedWithHooligan() {
      if (!this.bouncingDisabled) {
        this.player.setVelocityX(-this.player.body.velocity.x);
        this.player.setVelocityY(-this.player.body.velocity.y);
        this.sorrySound.play();
        this.bouncingDisabled = true;
        this.bouncingDisabledCounter = 30;
      }
    }
  }, {
    key: "gameIsOver",
    value: function gameIsOver() {
      if (!this.game.cheatMode) {
        this.physics.pause();
        this.player.setTint(0xff0000); //this.player.anims.play('turn');

        this.playAnim('turn');
        this.game.gameOver = true;
      }
    }
  }, {
    key: "levelEnded",
    value: function levelEnded() {
      this.player.body.moves = false;
      this.player.setTint(0x00ff00); //this.player.anims.play('turn');

      this.playAnim('turn');
      this.fanSound.stop();

      if (this.nextlevel == _CST.CST.SCENES.MENU) {
        this.sound.get('background').volume = 0;
        this.finalwinSound.on('complete', this.restoreBackgroundSoundLevel, {
          sound: this.sound
        });
        this.finalwinSound.play();
        this.finalImage = this.physics.add.sprite(13840, -300, 'wolf');
        this.finalImage.body.velocity.y = 150;
      } else {
        this.levelEndSound.play();
        this.finalImageShown = true;
      }

      this.levelHasEnded = true;
    }
  }, {
    key: "setAsAvailable",
    value: function setAsAvailable() {
      this.isAvailable = true;
    }
  }, {
    key: "setAsUnavailable",
    value: function setAsUnavailable() {
      this.isAvailable = false;
    }
  }, {
    key: "restoreBackgroundSoundLevel",
    value: function restoreBackgroundSoundLevel() {
      if (this.sound.get('background') != null) {
        this.sound.get('background').volume = 1.0;
      }
    }
  }, {
    key: "createDudeAnimations",
    value: function createDudeAnimations(key, keyLeft, keyTurn, keyRight) {
      //  Our player animations, turning, walking left and walking right.
      this.anims.create({
        key: keyLeft,
        frames: this.anims.generateFrameNumbers(key, {
          start: 0,
          end: 3
        }),
        frameRate: 10,
        repeat: -1
      });
      this.anims.create({
        key: keyTurn,
        frames: [{
          key: key,
          frame: 4
        }],
        frameRate: 20
      });
      this.anims.create({
        key: keyRight,
        frames: this.anims.generateFrameNumbers(key, {
          start: 5,
          end: 8
        }),
        frameRate: 10,
        repeat: -1
      });
    }
  }, {
    key: "playAnim",
    value: function playAnim(key) {
      var keyToUse = this.fastPlay ? key + 'Fast' : key;
      this.player.anims.play(keyToUse, true);
      this.lastPlayedAnim = key;
    }
  }, {
    key: "updateAnim",
    value: function updateAnim() {
      this.playAnim(this.lastPlayedAnim);
    }
  }]);

  return AbstractLevelScene;
}(Phaser.Scene);

exports.AbstractLevelScene = AbstractLevelScene;
},{"../CST.js":"src/CST.js"}],"src/scenes/Level1Scene.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Level1Scene = void 0;

var _CST = require("../CST.js");

var _AbstractLevelScene2 = require("./AbstractLevelScene.js");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Level1Scene = /*#__PURE__*/function (_AbstractLevelScene) {
  _inherits(Level1Scene, _AbstractLevelScene);

  var _super = _createSuper(Level1Scene);

  function Level1Scene() {
    _classCallCheck(this, Level1Scene);

    return _super.call(this, _CST.CST.SCENES.LEVEL1, _CST.CST.SCENES.LEVEL2, 2, 'sky_level1');
  }

  _createClass(Level1Scene, [{
    key: "create",
    value: function create() {
      _get(_getPrototypeOf(Level1Scene.prototype), "create", this).call(this);

      this.map = this.make.tilemap({
        key: 'Level1',
        tileWidth: 72,
        tileHeight: 72
      });
      this.afterCreate();
    }
  }]);

  return Level1Scene;
}(_AbstractLevelScene2.AbstractLevelScene);

exports.Level1Scene = Level1Scene;
},{"../CST.js":"src/CST.js","./AbstractLevelScene.js":"src/scenes/AbstractLevelScene.js"}],"src/scenes/Level2Scene.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Level2Scene = void 0;

var _CST = require("../CST.js");

var _AbstractLevelScene2 = require("./AbstractLevelScene.js");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Level2Scene = /*#__PURE__*/function (_AbstractLevelScene) {
  _inherits(Level2Scene, _AbstractLevelScene);

  var _super = _createSuper(Level2Scene);

  function Level2Scene() {
    _classCallCheck(this, Level2Scene);

    return _super.call(this, _CST.CST.SCENES.LEVEL2, _CST.CST.SCENES.LEVEL3, 3, 'sky_level2');
  }

  _createClass(Level2Scene, [{
    key: "create",
    value: function create() {
      _get(_getPrototypeOf(Level2Scene.prototype), "create", this).call(this);

      this.map = this.make.tilemap({
        key: 'Level2',
        tileWidth: 72,
        tileHeight: 72
      });
      this.afterCreate();
    }
  }]);

  return Level2Scene;
}(_AbstractLevelScene2.AbstractLevelScene);

exports.Level2Scene = Level2Scene;
},{"../CST.js":"src/CST.js","./AbstractLevelScene.js":"src/scenes/AbstractLevelScene.js"}],"src/scenes/Level3Scene.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Level3Scene = void 0;

var _CST = require("../CST.js");

var _AbstractLevelScene2 = require("./AbstractLevelScene.js");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Level3Scene = /*#__PURE__*/function (_AbstractLevelScene) {
  _inherits(Level3Scene, _AbstractLevelScene);

  var _super = _createSuper(Level3Scene);

  function Level3Scene() {
    _classCallCheck(this, Level3Scene);

    return _super.call(this, _CST.CST.SCENES.LEVEL3, _CST.CST.SCENES.MENU, 0, 'sky_level3');
  }

  _createClass(Level3Scene, [{
    key: "create",
    value: function create() {
      _get(_getPrototypeOf(Level3Scene.prototype), "create", this).call(this);

      this.map = this.make.tilemap({
        key: 'Level3',
        tileWidth: 72,
        tileHeight: 72
      });
      this.afterCreate();
    }
  }]);

  return Level3Scene;
}(_AbstractLevelScene2.AbstractLevelScene);

exports.Level3Scene = Level3Scene;
},{"../CST.js":"src/CST.js","./AbstractLevelScene.js":"src/scenes/AbstractLevelScene.js"}],"src/scenes/ImpressumScene.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImpressumScene = void 0;

var _CST = require("../CST.js");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var ImpressumScene = /*#__PURE__*/function (_Phaser$Scene) {
  _inherits(ImpressumScene, _Phaser$Scene);

  var _super = _createSuper(ImpressumScene);

  function ImpressumScene() {
    _classCallCheck(this, ImpressumScene);

    return _super.call(this, {
      key: _CST.CST.SCENES.IMPRESSUM
    });
  }

  _createClass(ImpressumScene, [{
    key: "create",
    value: function create() {
      var _this = this;

      this.add.image(640, 360, 'impressum');
      var backButton = this.add.image(950, 570, 'play_button');
      backButton.setInteractive();
      backButton.on("pointerup", function () {
        _this.scene.start(_CST.CST.SCENES.MENU);
      });
    }
  }]);

  return ImpressumScene;
}(Phaser.Scene);

exports.ImpressumScene = ImpressumScene;
},{"../CST.js":"src/CST.js"}],"src/scenes/AnleitungScene.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AnleitungScene = void 0;

var _CST = require("../CST.js");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var AnleitungScene = /*#__PURE__*/function (_Phaser$Scene) {
  _inherits(AnleitungScene, _Phaser$Scene);

  var _super = _createSuper(AnleitungScene);

  function AnleitungScene() {
    _classCallCheck(this, AnleitungScene);

    return _super.call(this, {
      key: _CST.CST.SCENES.ANLEITUNG
    });
  }

  _createClass(AnleitungScene, [{
    key: "create",
    value: function create() {
      var _this = this;

      this.add.image(640, 360, 'anleitung');
      var backButton = this.add.image(1150, 650, 'play_button');
      backButton.setInteractive();
      backButton.on("pointerup", function () {
        _this.scene.start(_CST.CST.SCENES.MENU);
      });
    }
  }]);

  return AnleitungScene;
}(Phaser.Scene);

exports.AnleitungScene = AnleitungScene;
},{"../CST.js":"src/CST.js"}],"src/main.js":[function(require,module,exports) {
"use strict";

var _BootScene = require("./scenes/BootScene.js");

var _LoadScene = require("./scenes/LoadScene.js");

var _MenuScene = require("./scenes/MenuScene.js");

var _ScoreScene = require("./scenes/ScoreScene.js");

var _Level1Scene = require("./scenes/Level1Scene.js");

var _Level2Scene = require("./scenes/Level2Scene.js");

var _Level3Scene = require("./scenes/Level3Scene.js");

var _ImpressumScene = require("./scenes/ImpressumScene.js");

var _AnleitungScene = require("./scenes/AnleitungScene.js");

/** @type {import("../typings/phaser")} */
var config = {
  type: Phaser.CANVAS,
  scale: {
    parent: 'Hackathon - Work Food Balance',
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: 1280,
    height: 720
  },
  physics: {
    default: 'arcade',
    arcade: {
      gravity: {
        y: 0
      },
      debug: false
    }
  },
  scene: [_BootScene.BootScene, _LoadScene.LoadScene, _MenuScene.MenuScene, _ScoreScene.ScoreScreen, _Level1Scene.Level1Scene, _Level2Scene.Level2Scene, _Level3Scene.Level3Scene, _ImpressumScene.ImpressumScene, _AnleitungScene.AnleitungScene]
};
var game = new Phaser.Game(config);
game.forever = [' ', ' ', ' ', ' ', ' ', ' ', ' ']; // filled with FOREVER

game.numberOfLives = 3;
game.collectedSausages = 0;
game.collectedBeers = 0;
game.collectedCoins = 0;
game.collectedFlags = 0;
game.collectedBalls = 0;
game.cheatMode = false;
game.fastMode = false;
game.SPEED_X = 350;
game.speedX = game.SPEED_X;
game.speedY = 430;
game.gravity = 450;

if (game.fastMode) {
  game.speedX = 600;
}

game.gameOver = false;
game.developmentMode = false;
game.enableLongJump = true;
game.LONG_JUMP_FACTOR = 0.7;
game.LOW_SOUND_LEVEL = 0.2;
},{"./scenes/BootScene.js":"src/scenes/BootScene.js","./scenes/LoadScene.js":"src/scenes/LoadScene.js","./scenes/MenuScene.js":"src/scenes/MenuScene.js","./scenes/ScoreScene.js":"src/scenes/ScoreScene.js","./scenes/Level1Scene.js":"src/scenes/Level1Scene.js","./scenes/Level2Scene.js":"src/scenes/Level2Scene.js","./scenes/Level3Scene.js":"src/scenes/Level3Scene.js","./scenes/ImpressumScene.js":"src/scenes/ImpressumScene.js","./scenes/AnleitungScene.js":"src/scenes/AnleitungScene.js"}],"C:/Users/hawki/AppData/Roaming/npm/node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "54305" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["C:/Users/hawki/AppData/Roaming/npm/node_modules/parcel/src/builtins/hmr-runtime.js","src/main.js"], null)
//# sourceMappingURL=/main.1e43358e.js.map