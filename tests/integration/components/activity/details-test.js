import {module, test} from "qunit";
import {setupRenderingTest} from "booking-system-playground/tests/helpers";
import {render} from "@ember/test-helpers";
import {hbs} from "ember-cli-htmlbars";
import {activity} from "../../../app/routes/activities/activity";

const SELECTORS = {
	ACTIVITY: {
		NAME: ".activity-name",
		DESCRIPTION: ".activity-description"
	}
}
module("Integration | Component | activity/details", function (hooks) {
	setupRenderingTest(hooks);

	test("it renders", async function (assert) {
		this.activity = activity;
		await render(hbs`<Activity::Details @activity={{this.activity}}/>`);

		assert.dom(SELECTORS.ACTIVITY.NAME).hasText(this.activity.name);
		assert.dom(SELECTORS.ACTIVITY.DESCRIPTION).hasText(this.activity.description);
	});
});
