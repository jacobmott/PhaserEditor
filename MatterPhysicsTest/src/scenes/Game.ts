// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import { SpineGameObject } from "@esotericsoftware/spine-phaser";
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
		const ground_1 = matterphysics.createLayer("ground", ["iso-64x64-outside"], 0, 0)!;

		// skele_1
		const skele_1 = matterphysics.createLayer("skele", ["singleskele"], 0, 0)!;

		// ships_1
		const ships_1 = matterphysics.createLayer("ships", ["ship3"], 0, -960)!;

		// image_1
		const image_1 = this.add.image(-326, 10635, "_MISSING");

		// spinegameobject_1
		const spinegameobject_1 = this.add.spine(-119, 11036, "Ship3AllLayersAlignedCenter", "Ship3AllLayersAlignedCenter-atlas");
		spinegameobject_1.skeleton.setSkinByName("default");

		this.ground_1 = ground_1;
		this.skele_1 = skele_1;
		this.ships_1 = ships_1;
		this.image_1 = image_1;
		this.keyboard_key = keyboard_key;
		this.keyboard_key_1 = keyboard_key_1;
		this.matterphysics = matterphysics;

		this.events.emit("scene-awake");
	}

	private ground_1!: Phaser.Tilemaps.TilemapLayer;
	private skele_1!: Phaser.Tilemaps.TilemapLayer;
	private ships_1!: Phaser.Tilemaps.TilemapLayer;
	private image_1!: Phaser.GameObjects.Image;
	private keyboard_key!: Phaser.Input.Keyboard.Key;
	private keyboard_key_1!: Phaser.Input.Keyboard.Key;
	private matterphysics!: Phaser.Tilemaps.Tilemap;

	/* START-USER-CODE */

  // Write your code here

  isoDirectionNegativeX: Phaser.Geom.Point;
  isoDirectionPositiveX: Phaser.Geom.Point;
  isoDirectionNegativeY: Phaser.Geom.Point;
  isoDirectionPositiveY: Phaser.Geom.Point;
  // player: Phaser.GameObjects.Image;
  player: Phaser.Physics.Matter.Sprite;
  playerId: number;
  enemyId: number;
  // enemyPlayer: Phaser.GameObjects.Image;
  enemyPlayer: Phaser.Physics.Matter.Sprite;
  keyA: Phaser.Input.Keyboard.Key;
  keyS: Phaser.Input.Keyboard.Key;
  keyD: Phaser.Input.Keyboard.Key;
  keyW: Phaser.Input.Keyboard.Key;

  speed: number = 75;
  private cursors!: Phaser.Types.Input.Keyboard.CursorKeys;
  create() {
    this.editorCreate();

    this.cameras.main.setZoom(0.1);
    this.cameras.main.setScroll(-2000, 6000);
    // this.cameras.main.setSize(2048, 2048);
    // this.cameras.main.setBounds(-1024, -1024, 2048, 2048, true);

    // this.player = new Phaser.GameObjects.Image(
    //   this,
    //   3930,
    //   8066,
    //   "ship3",
    //   0
    // ).setDepth(100);
    // this.add.existing(this.player);
    // this.enemyPlayer = new Phaser.GameObjects.Image(
    //   this,
    //   5930,
    //   9066,
    //   "ship3",
    //   0
    // ).setDepth(100);
    // this.add.existing(this.enemyPlayer);

    // this.player.setScrollFactor(1);
    // this.ground_1.skipCull = true;
    const point = new Phaser.Geom.Point(-1, 0);
    this.isoDirectionNegativeX = this.cartesianToIsometric(point);
    const point2 = new Phaser.Geom.Point(1, 0);
    this.isoDirectionPositiveX = this.cartesianToIsometric(point2);
    const point3 = new Phaser.Geom.Point(0, 1);
    this.isoDirectionPositiveY = this.cartesianToIsometric(point3);
    const point4 = new Phaser.Geom.Point(0, -1);
    this.isoDirectionNegativeY = this.cartesianToIsometric(point4);

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

    this.input.on("pointermove", (pointer: any) => {
      const px = Math.trunc(pointer.x);
      const py = Math.trunc(pointer.y);
      const pwx = Math.trunc(pointer.worldX);
      const pwy = Math.trunc(pointer.worldY);
      let xOffsetAmount = 40;
      let yOffsetAmount = 40;
      if (px > this.game.canvas.width / 2) {
        xOffsetAmount = -160;
      }
      if (py > this.game.canvas.height / 2) {
        yOffsetAmount = -40;
      }
      // this.label.setText("world(iso)X/Y: (" + pwx + ", " + pwy + ")");
      // this.label2.setText("pointerX/Y: (" + px + ", " + py + ")");
      // this.label.x = pwx + xOffsetAmount;
      // this.label.y = pwy + yOffsetAmount;
      // this.label2.x = pwx + xOffsetAmount;
      // this.label2.y = pwy + yOffsetAmount + 20;
    });

    this.input.on(
      "wheel",
      (
        pointer: any,
        gameObjects: any,
        deltaX: number,
        deltaY: number,
        deltaZ: number
      ) => {
        if (deltaY > 0) {
          const newZoom = this.cameras.main.zoom - 0.1;
          if (newZoom > 0.00001) {
            this.cameras.main.zoom = newZoom;
          }
        }

        if (deltaY < 0) {
          const newZoom = this.cameras.main.zoom + 0.1;
          if (newZoom < 7.0) {
            this.cameras.main.zoom = newZoom;
          }
        }

        // this.camera.centerOn(pointer.worldX, pointer.worldY);
        // this.camera.pan(pointer.worldX, pointer.worldY, 2000, "Power2");
      }
    );

    this.input.on("pointermove", (pointer: any) => {
      if (!pointer.isDown) return;

      this.cameras.main.scrollX -=
        (pointer.x - pointer.prevPosition.x) / this.cameras.main.zoom;
      this.cameras.main.scrollY -=
        (pointer.y - pointer.prevPosition.y) / this.cameras.main.zoom;
    });

    this.keyA = this.input.keyboard!.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    this.keyS = this.input.keyboard!.addKey(Phaser.Input.Keyboard.KeyCodes.S);
    this.keyD = this.input.keyboard!.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    this.keyW = this.input.keyboard!.addKey(Phaser.Input.Keyboard.KeyCodes.W);

    this.loadPhysics();

    // this.matter.world.on(
    //   "collisionstart",
    //   function (event: any, bodyA: any, bodyB: any) {
    //     console.log("collision");
    //   }
    // );
  }

  loadPhysics() {
    //  Load body shapes from JSON file generated using PhysicsEditor
    // this.load.json("ship3-physics-data", "ship3-matter-physics.json");
    const shipShapePhysicsData = this.cache.json.get("ship3-matter-physics");
    // console.dir(shipShapePhysicsData);

    // this.matter.add.gameObject(this.player, {
    //   shape: shipShapePhysicsData.ship3Physics,
    // });
    this.player = this.matter.add.sprite(5000, 6000, "ship3", "", {
      shape: shipShapePhysicsData.ship3Physics,
      label: "player",
    });
    console.dir(shipShapePhysicsData.ship3Physics);
    this.enemyPlayer = this.matter.add.sprite(7000, 8000, "ship3", "", {
      shape: shipShapePhysicsData.ship3Physics,
      isStatic: true,
      label: "enemy",
    });
    const enemyBody = this.enemyPlayer.body as MatterJS.BodyType;
    enemyBody.label = "enemy";
    this.enemyId = enemyBody.id;

    this.enemyPlayer.setZ(100);
    this.player.setZ(100);
    this.player.setBounce(1);
    this.enemyPlayer.setBounce(0);
    // this.player.setFrictionAir(0.1);
    this.player.setFriction(0);

    const body = this.player.body as MatterJS.BodyType;
    body.label = "player";
    this.playerId = body.id;
    // body.inertia = Infinity;
    this.matter.body.setInertia(body, Infinity);

    this.matter.world.on("collisionstart", (event: any) => {
      //  Loop through all of the collision pairs
      const pairs = event.pairs;

      for (let i = 0; i < pairs.length; i++) {
        const bodyA = pairs[i].bodyA;
        const bodyB = pairs[i].bodyB;
        // console.dir(bodyA);
        // console.dir(bodyB);
        if (
          (bodyA.parent.id === this.playerId &&
            bodyB.parent.id === this.enemyId) ||
          (bodyB.parent.id === this.playerId &&
            bodyA.parent.id === this.enemyId)
        ) {
          console.log("collide");
          this.player.setVelocity(0, 0);
        }
        //  We only want sensor collisions
        // if (pairs[i].isSensor) {
        //   let blockBody;
        //   let playerBody;

        //   if (bodyA.isSensor) {
        //     blockBody = bodyB;
        //     playerBody = bodyA;
        //   } else if (bodyB.isSensor) {
        //     blockBody = bodyA;
        //     playerBody = bodyB;
        //   }

        //  You can get to the Sprite via `gameObject` property
        // const playerSprite = playerBody.gameObject;
        // const blockSprite = blockBody.gameObject;

        // let color;

        // if (playerBody.label === "left") {
        //   color = 0xff0000;
        // } else if (playerBody.label === "right") {
        //   color = 0x00ff00;
        // } else if (playerBody.label === "top") {
        //   color = 0x0000ff;
        // } else if (playerBody.label === "bottom") {
        //   color = 0xffff00;
        // }

        //   blockSprite.setTintFill(color);
        // }
      }
    });

    // body.onCollideCallback = (pair: MatterJS.Pair) => void {
    //   console.log('collide');
    // };

    // Define the collision callback
    //this.matter.query
    //this.matter.detector
    // body.setOnCollideWith(this.enemyPlayer.body as MatterJS.BodyType, () => {
    //   console.log("collide");
    // });
    // this.matter.world.on(
    //   "collisionstart",
    //   (event: any, bodyA: MatterJS.BodyType, bodyB: MatterJS.BodyType) => {
    //     if (
    //       (bodyA == this.player.body && bodyB == this.enemyPlayer.body) ||
    //       (bodyB == this.player.body && bodyA == this.enemyPlayer.body)
    //     ) {
    //       console.log("collide");
    //     }
    //   }
    // );
    // this.matter.world.on(
    //   "collisionstart",
    //   (event: any, bodyA: MatterJS.BodyType, bodyB: MatterJS.BodyType) => {
    //     console.log("collide");
    //     console.dir(bodyA);
    //     console.dir(bodyB);
    //     console.dir(event);
    //   }
    // );
    // this.player.setVelocity(0, 0);
    // this.enemyPlayer.setVelocity(0, 0);
    // this.player.setIgnoreGravity(true);
    // this.enemyPlayer.setIgnoreGravity(true);
    // this.enemyPlayer = this.matter.add.image(5000, 6000, "ship3", "", {
    //   shape: shipShapePhysicsData.ship3Physics,
    // });
    // this.matter.add.sprite(200, 50, "sheet", "crate", { shape: shapes.crate });
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

    const speed = 25;

    const leftDown = this.cursors.left?.isDown;
    const rightDown = this.cursors.right?.isDown;

    if (this.keyA.isDown) {
      // let xPos = this.player.x;
      // let yPos = this.player.y;

      this.player.setVelocityX(-this.speed);

      // this.player.x += this.isoDirectionNegativeX.x * this.speed;
      // this.player.y += this.isoDirectionNegativeX.y * this.speed;

      // this.player.setPosition(newX, newY);

      // const newX = xPos + this.isoDirectionNegativeX.x * this.speed;
      // const newY = yPos + this.isoDirectionNegativeX.y * this.speed;
      // this.player.setVelocityY(-1);
      // if (this.player.body && this.player.body.position) {
      //   this.player.body.position.x = newX;
      //   this.player.body.position.y = newY;
      // }
    }
    if (this.keyS.isDown) {
      this.player.setVelocityY(this.speed);

      // this.player.x += this.isoDirectionPositiveY.x * this.speed;
      // this.player.y += this.isoDirectionPositiveY.y * this.speed;
      // this.player.setPosition(newX, newY);
      // let xPos = this.player.x;
      // let yPos = this.player.y;
      // const newX = xPos + this.isoDirectionPositiveY.x * this.speed;
      // const newY = yPos + this.isoDirectionPositiveY.y * this.speed;
      // if (this.player.body && this.player.body.position) {
      //   this.player.body.position.x = newX;
      //   this.player.body.position.y = newY;
      // }
    }
    if (this.keyD.isDown) {
      this.player.setVelocityX(this.speed);
      // this.player.x += this.isoDirectionPositiveX.x * this.speed;
      // this.player.y += this.isoDirectionPositiveX.y * this.speed;
      // this.player.setPosition(newX, newY);
      // let xPos = this.player.x;
      // let yPos = this.player.y;
      // const newX = xPos + this.isoDirectionPositiveX.x * this.speed;
      // const newY = yPos + this.isoDirectionPositiveX.y * this.speed;
      // if (this.player.body && this.player.body.position) {
      //   this.player.body.position.x = newX;
      //   this.player.body.position.y = newY;
      // }
    }
    if (this.keyW.isDown) {
      this.player.setVelocityY(-this.speed);
      // this.player.x += this.isoDirectionNegativeY.x * this.speed;
      // this.player.y += this.isoDirectionNegativeY.y * this.speed;

      // this.player.setPosition(newX, newY);
      // let xPos = this.player.x;
      // let yPos = this.player.y;
      // const newX = xPos + this.isoDirectionNegativeY.x * this.speed;
      // const newY = yPos + this.isoDirectionNegativeY.y * this.speed;
      // if (this.player.body && this.player.body.position) {
      //   this.player.body.position.x = newX;
      //   this.player.body.position.y = newY;
      // }
    }

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

  isometricToCartesian(isoPt: Phaser.Geom.Point): Phaser.Geom.Point {
    const tempPt = new Phaser.Geom.Point();
    tempPt.x = (2 * isoPt.y + isoPt.x) / 2;
    tempPt.y = (2 * isoPt.y - isoPt.x) / 2;
    return tempPt;
  }

  cartesianToIsometric(cartPt: Phaser.Geom.Point): Phaser.Geom.Point {
    const tempPt = new Phaser.Geom.Point();
    tempPt.x = cartPt.x - cartPt.y;
    tempPt.y = (cartPt.x + cartPt.y) / 2;
    return tempPt;
  }

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
