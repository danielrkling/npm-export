(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@headlessui/react')) :
	typeof define === 'function' && define.amd ? define(['exports', '@headlessui/react'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.Blueprint = {}, global.react));
})(this, (function (exports, react) { 'use strict';

	Object.keys(react).forEach(function (k) {
		if (k !== 'default' && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
			enumerable: true,
			get: function () { return react[k]; }
		});
	});

}));
