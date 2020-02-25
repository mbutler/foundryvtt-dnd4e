/**
 * Dungeons & Dragons 4th Edition
 * Author: mbutler
 * Software License: MIT
 */

// Import Modules
import { Dnd4eSheet } from "./character-sheet.js";

/* -------------------------------------------- */
/*  Foundry VTT Initialization                  */
/* -------------------------------------------- */

Hooks.once("init", async function() {
  console.log(`Initializing DnD4e`);

	/**
	 * Set an initiative formula for the system
	 * @type {String}
	 */
	CONFIG.initiative.formula = "1d20";

  // Register sheet application classes
  Actors.unregisterSheet("core", ActorSheet);
  Actors.registerSheet("dnd4e", Dnd4eSheet, { makeDefault: true });
});
