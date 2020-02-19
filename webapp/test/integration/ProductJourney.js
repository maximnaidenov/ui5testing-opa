/* global QUnit */

sap.ui.define([
	"sap/ui/test/opaQunit",
	"./pages/Home",
	"./pages/Category",
], function (opaTest) {
	"use strict";

	QUnit.module("Buy Product Journey");

	opaTest("Should see the category list", function (Given, When, Then) {
		// Arrangements
		Given.iStartMyApp();

		// Assertions
		Then.onTheHomePage.iShouldSeeTheCategoryList();
	});

	opaTest("Should see the product list", function (Given, When, Then) {
		// Actions
		When.onTheHomePage.iPressOnTheFlatScreensCategory();

		// Assertions
		Then.onTheCategoryPage.iShouldBeTakenToTheFlatScreensCategory().
			and.iShouldSeeTheProductList();

		// Cleanup
		Then.iTeardownMyApp();
	});
});
