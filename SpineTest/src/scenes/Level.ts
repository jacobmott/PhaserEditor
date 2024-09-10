
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import { OnAwakeScript } from "@phaserjs/editor-scripts-core";
import { MoveInSceneActionScript } from "@phaserjs/editor-scripts-simple-animations";
import { SkinsAndAnimationBoundsProvider } from "@esotericsoftware/spine-phaser";
import { SpineGameObject } from "@esotericsoftware/spine-phaser";
import StartAnimationComp from "../components/StartAnimationComp";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Level extends Phaser.Scene {

	constructor() {
		super("Level");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// text
		const text = this.add.text(3231, 606, "", {});
		text.setOrigin(0.5, 0.5);
		text.text = "Phaser 3 + Spine + Phaser Editor v4\nWebpack + TypeScript";
		text.setStyle({ "align": "center", "fontFamily": "Arial", "fontSize": "3em" });

		// onAwakeScript
		const onAwakeScript = new OnAwakeScript(text);

		// moveInSceneActionScript
		const moveInSceneActionScript = new MoveInSceneActionScript(onAwakeScript);

		// goblin
		const goblin = this.add.spine(3045, 510, "goblins", "goblins-atlas", new SkinsAndAnimationBoundsProvider(null, ["goblin"]));
		goblin.skeleton.setSkinByName("goblin");

		// goblinGirl
		const goblinGirl = this.add.spine(3391, 510, "goblins", "goblins-atlas", new SkinsAndAnimationBoundsProvider(null, ["goblingirl"]));
		goblinGirl.skeleton.setSkinByName("goblingirl");
		goblinGirl.scaleX = -1;

		// spinegameobject_1
		const spinegameobject_1 = this.add.spine(595, 399, "Ship3AllLayersAlignedCenter", "Ship3AllLayersAlignedCenter-atlas");
		spinegameobject_1.skeleton.setSkinByName("default");
		spinegameobject_1.scaleX = 0.2849951581767961;
		spinegameobject_1.scaleY = 0.2849951581767961;

		// moveInSceneActionScript (prefab fields)
		moveInSceneActionScript.from = "BOTTOM";

		// goblin (components)
		const goblinStartAnimationComp = new StartAnimationComp(goblin);
		goblinStartAnimationComp.animationName = "walk";

		// goblinGirl (components)
		const goblinGirlStartAnimationComp = new StartAnimationComp(goblinGirl);
		goblinGirlStartAnimationComp.animationName = "walk";

		// spinegameobject_1 (components)
		const spinegameobject_1StartAnimationComp = new StartAnimationComp(spinegameobject_1);
		spinegameobject_1StartAnimationComp.animationName = "animation";

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
