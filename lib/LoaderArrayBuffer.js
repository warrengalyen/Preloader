/**
 * This module will contain everything related to preloading.
 *
 * @module preloader
 */
var Class = require('js-oop');
var LoaderBase = require('./LoaderBase');

var LoaderArrayBuffer = new Class({

    Extends: LoaderBase,

    initialize: function() {
        this.parent();
        this.loadtype = LoaderBase.typeArraybuffer;
    }
});

module.exports = LoaderArrayBuffer;