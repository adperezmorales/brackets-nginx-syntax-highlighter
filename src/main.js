/*jslint devel:true */

define(function (require, exports, module) {
	'use strict';
	var LanguageManager = brackets.getModule("language/LanguageManager");
	
	LanguageManager.defineLanguage("nginx", {
		name: "Nginx",
		mode: "nginx",
		fileExtensions: ["conf"],
		lineComment: ["#"]
	});

	console.log("Nginx syntax highlighting extension loaded");
});
