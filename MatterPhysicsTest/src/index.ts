import Phaser from "phaser";
import Level from "./scenes/Level";
import preloadAssetPackUrl from "../static/assets/preload-asset-pack.json";
import Preload from "./scenes/Preload";
import Game from "./scenes/Game";
import { SpinePlugin } from "@esotericsoftware/spine-phaser";

class Boot extends Phaser.Scene {
  constructor() {
    super("Boot");
  }

  preload() {
    this.load.pack("pack", preloadAssetPackUrl);
  }

  create() {
    this.scene.start("Preload");
  }
}

window.addEventListener("load", function () {
  const game = new Phaser.Game({
    width: 1920,
    height: 1080,
    backgroundColor: "#2f2f2f",
    scale: {
      mode: Phaser.Scale.ScaleModes.FIT,
      autoCenter: Phaser.Scale.Center.CENTER_BOTH,
    },
    scene: [Boot, Preload, Level, Game],
    plugins: {
      scene: [
        { key: "spine.SpinePlugin", plugin: SpinePlugin, mapping: "spine" },
      ],
    },
    physics: {
      default: "matter",
      matter: {
        gravity: {
          y: 0,
          x: 0,
        },
        debug: {
          showBody: true,
          showStaticBody: true,
        },
        //If you turn on this sleeping.. it affects collision when gravity is off
        //enableSleeping: true,
      },
    },
  });

  game.scene.start("Boot");
});
