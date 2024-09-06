import Phaser from "phaser";
import Level from "./scenes/Level";
import preloadAssetPackUrl from "../static/assets/preload-asset-pack.json";
import Preload from "./scenes/Preload";
import FirstProjectMain from "./scenes/FirstProjectMain";

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
    width: 1280,
    height: 720,
    backgroundColor: "#0099db",
    scale: {
      mode: Phaser.Scale.ScaleModes.FIT,
      autoCenter: Phaser.Scale.Center.CENTER_BOTH,
    },
    physics: {
      default: "arcade",
      arcade: {
        // gravity: {
        //   y: 98,
        //   x: 0,
        // },
      },
    },
    scene: [Boot, Preload, Level, FirstProjectMain],
  });

  game.scene.start("Boot");
});
