sap.ui.define([
	"sap/ui/test/Opa5",
	"sap/ui/test/matchers/BindingPath",
	"sap/ui/test/actions/Press"
], function (
	Opa5,
	BindingPath,
	Press) {
	"use strict";

	Opa5.createPageObjects({
		onTheHomePage : {
			viewName : "Home",

			actions : {
				// Add your iPressOnTheFlatScreensCategory function here

			},

			assertions: {
				iShouldSeeTheCategoryList :  function () {
					return this.waitFor({
						// your selector
						// success : function () {
						// 	Opa5.assert.ok(true, "Found the category List");
						// }
					});
				}
			}
		}
	});
});