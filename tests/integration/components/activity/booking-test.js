import {module, test} from "qunit";
import {setupRenderingTest} from "booking-system-playground/tests/helpers";
import {click, render, fillIn} from "@ember/test-helpers";
import {hbs} from "ember-cli-htmlbars";

const SELECTORS = {
	BOOKING: {
		FORM: "[name=booking]",
		FORM_SUBMIT: ".booking-form-submit",
		NAME: "[name=name]",
		EMAIL: "[name=email]"
	}
};
module("Integration | Component | activity/booking", function (hooks) {
	setupRenderingTest(hooks);

	test("it renders", async function (assert) {
		this.templateBlockText = "template block text";
		await render(hbs`<Activity::Booking/>`);

		assert.dom().hasText("");

		// Template block usage:
		await render(hbs`
			<Activity::Booking>{{this.templateBlockText}}</Activity::Booking>
		`);

		assert.dom().hasText(this.templateBlockText);
	});

	test("it fires onSave when form submitted", async function (assert) {
		assert.expect(1);
		this.onSave = function (booking) {
			assert.ok(booking, "onSave action was called with booking");
		};
		await render(hbs`<Activity::Booking @onSave={{this.onSave}}/>`);
		await fillIn(SELECTORS.BOOKING.NAME, "Test User");
		await fillIn(SELECTORS.BOOKING.EMAIL, "sample@gmail.com");
		await click(SELECTORS.BOOKING.FORM_SUBMIT);
	});
});
