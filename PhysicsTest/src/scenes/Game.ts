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

		// fufuSuperDino
		const fufuSuperDino = this.add.image(135, 536, "FufuSuperDino") as Phaser.GameObjects.Image & { body: Phaser.Physics.Arcade.Body };
		fufuSuperDino.scaleX = 0.5142123582324836;
		fufuSuperDino.scaleY = 0.5142123582324836;
		this.physics.add.existing(fufuSuperDino, false);
		fufuSuperDino.body.setOffset(-15, -19);
		fufuSuperDino.body.setSize(269, 267, false);

		// ground
		const ground = this.add.image(643, 683, "ground") as Phaser.GameObjects.Image & { body: Phaser.Physics.Arcade.StaticBody };
		ground.scaleX = 1.2827096216090252;
		ground.scaleY = 0.24471428064095632;
		this.physics.add.existing(ground, true);
		ground.body.setSize(1050, 340, false);

		// collider
		const collider = this.physics.add.collider(fufuSuperDino, ground);

		this.fufuSuperDino = fufuSuperDino;
		this.ground = ground;
		this.keyboard_key = keyboard_key;
		this.collider = collider;
		this.keyboard_key_1 = keyboard_key_1;

		this.events.emit("scene-awake");
	}

	private fufuSuperDino!: Phaser.GameObjects.Image & { body: Phaser.Physics.Arcade.Body };
	private ground!: Phaser.GameObjects.Image & { body: Phaser.Physics.Arcade.StaticBody };
	private keyboard_key!: Phaser.Input.Keyboard.Key;
	private collider!: Phaser.Physics.Arcade.Collider;
	private keyboard_key_1!: Phaser.Input.Keyboard.Key;

	/* START-USER-CODE */

  // Write your code here
  private cursors!: Phaser.Types.Input.Keyboard.CursorKeys;
  create() {
    this.editorCreate();
    this.ground.body.immovable = true;
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

    if (leftDown) {
      this.fufuSuperDino.body.setVelocityX(-speed);
    } else if (rightDown) {
      this.fufuSuperDino.body.setVelocityX(speed);
    } else {
      this.fufuSuperDino.body.setVelocityX(0);
    }
  }

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
