import {module, test} from "qunit";
import {setupRenderingTest} from "booking-system-playground/tests/helpers";
import {render} from "@ember/test-helpers";
import {hbs} from "ember-cli-htmlbars";

module("Integration | Component | navigation", function (hooks) {
	setupRenderingTest(hooks);

	test("it renders", async function (assert) {
		await render(hbs`<Navigation/>`);

		assert.dom().hasText("");

		// Template block usage:
		await render(hbs`<Navigation>template block text</Navigation>`);

		assert.dom().hasText("template block text");
	});
});
