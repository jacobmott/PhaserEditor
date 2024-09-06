// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Game extends Phaser.Scene {

	constructor() {
		super("Game");

		/* START-USER-CTR-CODE */
    // Write your code here.
    /* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// keyboard_key
		const keyboard_key = this.input.keyboard!.addKey(Phaser.Input.Keyboard.KeyCodes.D);

		// keyboard_key_1
		const keyboard_key_1 = this.input.keyboard!.addKey(Phaser.Input.Keyboard.KeyCodes.A);

		// matterphysics
		const matterphysics = this.add.tilemap("matterphysics");
		matterphysics.addTilesetImage("iso-64x64-outside", "iso-64x64-outside");
		matterphysics.addTilesetImage("singleskele", "singleskele");
		matterphysics.addTilesetImage("ship3", "ship3");

		// ground_1
		matterphysics.createLayer("ground", ["iso-64x64-outside"], 0, 0);

		// skele_1
		matterphysics.createLayer("skele", ["singleskele"], 0, 0);

		// ships_1
		matterphysics.createLayer("ships", ["ship3"], 0, -960);

		this.keyboard_key = keyboard_key;
		this.keyboard_key_1 = keyboard_key_1;
		this.matterphysics = matterphysics;

		this.events.emit("scene-awake");
	}

	private keyboard_key!: Phaser.Input.Keyboard.Key;
	private keyboard_key_1!: Phaser.Input.Keyboard.Key;
	private matterphysics!: Phaser.Tilemaps.Tilemap;

	/* START-USER-CODE */

  // Write your code here
  private cursors!: Phaser.Types.Input.Keyboard.CursorKeys;
  create() {
    this.editorCreate();
    // this.ground.body.immovable = true;
    // this.keyboard_key.on("down", () => {
    //   this.fufuSuperDino.body.setVelocityX(160);
    // });
    // this.keyboard_key.on("up", () => {
    //   this.fufuSuperDino.body.setVelocityX(0);
    // });
    // this.keyboard_key_1.on("down", () => {
    //   this.fufuSuperDino.body.setVelocityX(-160);
    // });
    // this.keyboard_key_1.on("up", () => {
    //   this.fufuSuperDino.body.setVelocityX(0);
    // });
  }

  preload() {
    this.cursors = this.input.keyboard!.createCursorKeys();
    this.cursors.left = this.input.keyboard!.addKey(
      Phaser.Input.Keyboard.KeyCodes.A
    );
    this.cursors.right = this.input.keyboard!.addKey(
      Phaser.Input.Keyboard.KeyCodes.D
    );
  }

  override update() {
    if (!this.cursors) {
      return;
    }

    if (Phaser.Input.Keyboard.JustDown(this.cursors.space!)) {
    }

    const speed = 100;

    const leftDown = this.cursors.left?.isDown;
    const rightDown = this.cursors.right?.isDown;
    //   const upDown = cursors.up?.isDown
    //   const downDown = cursors.down?.isDown

    // if (leftDown) {
    //   this.fufuSuperDino.body.setVelocityX(-speed);
    // } else if (rightDown) {
    //   this.fufuSuperDino.body.setVelocityX(speed);
    // } else {
    //   this.fufuSuperDino.body.setVelocityX(0);
    // }
  }

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
