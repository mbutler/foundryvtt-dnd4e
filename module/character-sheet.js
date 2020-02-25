/**
 * Extend the basic ActorSheet with some very simple modifications
 */
export class Dnd4eSheet extends ActorSheet {
    constructor(...args) {
      super(...args);
  
      /**
       * Keep track of the currently active sheet tab
       * @type {string}
       */
      this._sheetTab = "description";
    }
  
    /* -------------------------------------------- */
  
    /**
     * Extend and override the default options used by the Actor Sheet
     * @returns {Object}
     */
      static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
          classes: ["dnd4e", "sheet", "actor"],
          template: "systems/dnd4e/templates/character-sheet.html",
        width: 600,
        height: 600
      });
    }
  
    
  }
  