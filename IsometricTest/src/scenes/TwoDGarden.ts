// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class TwoDGarden extends Phaser.Scene {
  constructor() {
    super("TwoDGarden");

    /* START-USER-CTR-CODE */
    // Write your code here.
    /* END-USER-CTR-CODE */
  }

  editorCreate(): void {
    this.events.emit("scene-awake");
  }

  /* START-USER-CODE */

  // Write your code here
  private levelData: number[][] = [
    [3, 1, 1, 1, 1, 4],
    [2, 0, 0, 0, 0, 2],
    [2, 0, 0, 0, 0, 2],
    [2, 0, 0, 0, 0, 2],
    [2, 0, 0, 0, 0, 2],
    [6, 1, 1, 1, 1, 5],
  ];
  private lookup: { [key: number]: string } = {
    0: "grass",
    1: "horizontalwall",
    2: "verticalwall",
    3: "topleft",
    4: "topright",
    5: "bottomright",
    6: "bottomleft",
  };
  private horizontalShift: number = 50;
  private verticalShift: number = 50;

  create() {
    this.editorCreate();

    for (let row = 0; row < 6; row++) {
      for (let column = 0; column < 6; column++) {
        let x = column * 50 + this.horizontalShift;
        let y = row * 50 + this.verticalShift;
        let tileType = this.levelData[row][column];
        let type = this.lookup[tileType];
        this.add.image(x, y, type);
      }
    }
  }

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
