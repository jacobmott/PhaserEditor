// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Scene extends Phaser.Scene {

	constructor() {
		super("Scene");

		/* START-USER-CTR-CODE */
    // Write your code here.
    /* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// arcadeimage_1
		const arcadeimage_1 = this.physics.add.image(311, 383, "FufuSuperDino");
		arcadeimage_1.body.setCircle(126);

		// arcadeimage_2
		const arcadeimage_2 = this.physics.add.staticImage(638, 635, "ground");
		arcadeimage_2.scaleX = 1.305785619429478;
		arcadeimage_2.scaleY = 0.656756091303812;
		arcadeimage_2.body.setSize(1050, 340, false);

		this.events.emit("scene-awake");
	}

	/* START-USER-CODE */

  // Write your code here


  create() {
    this.editorCreate();
   


  }


  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
