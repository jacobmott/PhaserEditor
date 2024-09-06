// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class FirstProjectMain extends Phaser.Scene {

	constructor() {
		super("FirstProjectMain");

		/* START-USER-CTR-CODE */
    // Write your code here.
    /* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// RightKey
		const rightKey = this.input.keyboard!.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);

		// hedgehog
		const hedgehog = this.add.image(523, 458, "hedgehog") as Phaser.GameObjects.Image & { body: Phaser.Physics.Arcade.Body };
		hedgehog.scaleX = 0.9715353276036582;
		hedgehog.scaleY = 0.9715353276036582;
		this.physics.add.existing(hedgehog, false);
		hedgehog.body.moves = false;
		hedgehog.body.setSize(184, 212, false);

		// ground_dark_cloud
		const ground_dark_cloud = this.add.image(182, 466, "realistic-white-cloud");
		ground_dark_cloud.scaleX = 0.81209018292158;
		ground_dark_cloud.scaleY = 0.81209018292158;
		ground_dark_cloud.tintTopLeft = 2513986;
		ground_dark_cloud.tintTopRight = 2513986;
		ground_dark_cloud.tintBottomLeft = 2513986;
		ground_dark_cloud.tintBottomRight = 2513986;

		// ground_dark_cloud_2
		const ground_dark_cloud_2 = this.add.image(791, 464, "realistic-white-cloud");
		ground_dark_cloud_2.scaleX = 0.81209018292158;
		ground_dark_cloud_2.scaleY = 0.81209018292158;
		ground_dark_cloud_2.tintTopLeft = 2513986;
		ground_dark_cloud_2.tintTopRight = 2513986;
		ground_dark_cloud_2.tintBottomLeft = 2513986;
		ground_dark_cloud_2.tintBottomRight = 2513986;

		// ground_dark_cloud_1
		const ground_dark_cloud_1 = this.add.image(527, 459, "realistic-white-cloud");
		ground_dark_cloud_1.scaleX = 0.81209018292158;
		ground_dark_cloud_1.scaleY = 0.81209018292158;
		ground_dark_cloud_1.tintTopLeft = 2513986;
		ground_dark_cloud_1.tintTopRight = 2513986;
		ground_dark_cloud_1.tintBottomLeft = 2513986;
		ground_dark_cloud_1.tintBottomRight = 2513986;

		// ground_dark_cloud_4
		const ground_dark_cloud_4 = this.add.image(1123, 459, "realistic-white-cloud");
		ground_dark_cloud_4.scaleX = 0.81209018292158;
		ground_dark_cloud_4.scaleY = 0.81209018292158;
		ground_dark_cloud_4.tintTopLeft = 2513986;
		ground_dark_cloud_4.tintTopRight = 2513986;
		ground_dark_cloud_4.tintBottomLeft = 2513986;
		ground_dark_cloud_4.tintBottomRight = 2513986;

		// rectangle_1
		const rectangle_1 = this.add.rectangle(631, 616, 128, 128);
		rectangle_1.scaleX = 10.457476836820037;
		rectangle_1.scaleY = -1.8901163305277446;
		rectangle_1.isFilled = true;
		rectangle_1.fillColor = 4098376;

		// realistic_white_cloud
		const realistic_white_cloud = this.add.image(134, 69, "realistic-white-cloud");
		realistic_white_cloud.scaleX = 0.5;
		realistic_white_cloud.scaleY = 0.5;

		// realistic_white_cloud_1
		const realistic_white_cloud_1 = this.add.image(1090, 144, "realistic-white-cloud");
		realistic_white_cloud_1.scaleX = 0.5;
		realistic_white_cloud_1.scaleY = 0.5;

		// realistic_white_cloud_2
		const realistic_white_cloud_2 = this.add.image(555, 170, "realistic-white-cloud");
		realistic_white_cloud_2.scaleX = 0.5;
		realistic_white_cloud_2.scaleY = 0.5;

		// ground_white_cloud_3
		const ground_white_cloud_3 = this.add.image(115, 472, "realistic-white-cloud");
		ground_white_cloud_3.scaleX = 0.5;
		ground_white_cloud_3.scaleY = 0.5;
		ground_white_cloud_3.tintTopLeft = 6539085;
		ground_white_cloud_3.tintTopRight = 6539085;
		ground_white_cloud_3.tintBottomLeft = 6539085;
		ground_white_cloud_3.tintBottomRight = 6539085;

		// ground_white_cloud
		const ground_white_cloud = this.add.image(1121, 491, "realistic-white-cloud");
		ground_white_cloud.scaleX = 0.5;
		ground_white_cloud.scaleY = 0.5;
		ground_white_cloud.tintTopLeft = 6539085;
		ground_white_cloud.tintTopRight = 6539085;
		ground_white_cloud.tintBottomLeft = 6539085;
		ground_white_cloud.tintBottomRight = 6539085;

		// ground_white_cloud_1
		const ground_white_cloud_1 = this.add.image(391, 483, "realistic-white-cloud");
		ground_white_cloud_1.scaleX = 0.5;
		ground_white_cloud_1.scaleY = 0.5;
		ground_white_cloud_1.tintTopLeft = 6539085;
		ground_white_cloud_1.tintTopRight = 6539085;
		ground_white_cloud_1.tintBottomLeft = 6539085;
		ground_white_cloud_1.tintBottomRight = 6539085;

		// ground_white_cloud_2
		const ground_white_cloud_2 = this.add.image(790, 483, "realistic-white-cloud");
		ground_white_cloud_2.scaleX = 0.5;
		ground_white_cloud_2.scaleY = 0.5;
		ground_white_cloud_2.tintTopLeft = 6539085;
		ground_white_cloud_2.tintTopRight = 6539085;
		ground_white_cloud_2.tintBottomLeft = 6539085;
		ground_white_cloud_2.tintBottomRight = 6539085;

		// apple
		const apple = this.add.image(503, -14, "apple") as Phaser.GameObjects.Image & { body: Phaser.Physics.Arcade.Body };
		this.physics.add.existing(apple, false);
		apple.body.setSize(100, 119, false);

		// text_1
		const text_1 = this.add.text(1057, 10, "", {});
		text_1.text = "Score:";
		text_1.setStyle({ "fontSize": "48px" });

		// text
		const text = this.add.text(1231, 14, "", {});
		text.text = "0";
		text.setStyle({ "fontSize": "48px" });

		// collider
		const collider = this.physics.add.overlap(hedgehog, apple, this.collide);

		this.hedgehog = hedgehog;
		this.ground_dark_cloud = ground_dark_cloud;
		this.ground_dark_cloud_2 = ground_dark_cloud_2;
		this.ground_dark_cloud_1 = ground_dark_cloud_1;
		this.ground_dark_cloud_4 = ground_dark_cloud_4;
		this.realistic_white_cloud = realistic_white_cloud;
		this.realistic_white_cloud_1 = realistic_white_cloud_1;
		this.realistic_white_cloud_2 = realistic_white_cloud_2;
		this.apple = apple;
		this.text_1 = text_1;
		this.text = text;
		this.rightKey = rightKey;
		this.collider = collider;

		this.events.emit("scene-awake");
	}

	private hedgehog!: Phaser.GameObjects.Image & { body: Phaser.Physics.Arcade.Body };
	private ground_dark_cloud!: Phaser.GameObjects.Image;
	private ground_dark_cloud_2!: Phaser.GameObjects.Image;
	private ground_dark_cloud_1!: Phaser.GameObjects.Image;
	private ground_dark_cloud_4!: Phaser.GameObjects.Image;
	private realistic_white_cloud!: Phaser.GameObjects.Image;
	private realistic_white_cloud_1!: Phaser.GameObjects.Image;
	private realistic_white_cloud_2!: Phaser.GameObjects.Image;
	private apple!: Phaser.GameObjects.Image & { body: Phaser.Physics.Arcade.Body };
	private text_1!: Phaser.GameObjects.Text;
	private text!: Phaser.GameObjects.Text;
	private rightKey!: Phaser.Input.Keyboard.Key;
	private collider!: Phaser.Physics.Arcade.Collider;

	/* START-USER-CODE */
  // Write your code here
  private positions: any[] = [];

  create() {
    this.editorCreate();
    // World gravity
    this.physics.world.gravity.y = 150;

    const bushes = [
      this.ground_dark_cloud,
      this.ground_dark_cloud_1,
      this.ground_dark_cloud_2,
      this.ground_dark_cloud_4,
    ];

    bushes.forEach((b) => {
      this.positions.push({ x: b.x, y: b.y });
    });

    const first_position = this.positions[0];

    this.hedgehog.x = first_position.x;
    this.hedgehog.y = first_position.y;

    let current_position_index = 0;

    this.rightKey.on("down", () => {
      current_position_index = current_position_index + 1;
      if (current_position_index > this.positions.length - 1) {
        current_position_index = 0;
      }

      const new_hedgehog_position = this.positions[current_position_index];
      this.hedgehog.x = new_hedgehog_position.x;
      this.hedgehog.y = new_hedgehog_position.y;

      this.apple.body.reset(first_position.x, 0);
      //   this.apple.x = first_position.x;
      //   this.apple.y = 0;
    });

    // 		const clouds = [this.realistic_white_cloud, this.realistic_white_cloud_1, this.realistic_white_cloud_2]

    // clouds.forEach(cloud => {
    //     cloud.setInteractive()
    //     cloud.on('pointerdown', () => {
    //       const t = this.tweens.add({
    //             targets: [cloud],
    //             x: {from: cloud.x, to:cloud.x + 2000},
    //             duration: 200,
    //             easing: 'bounce',
    //             yoyo: false,
    //             paused: true
    //         })
    //       t.play()
    //     })
    // })
  }

  collide = (a: any, b: any) => {
    this.text.text = String(Number(this.text.text) + 1);
    const random_index = Phaser.Math.Between(0, 3);
    const random_position = this.positions[random_index];
    b.x = random_position.x;
    b.y = 0;
  };

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
