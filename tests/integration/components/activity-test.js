import {module, test} from "qunit";
import {setupRenderingTest} from "booking-system-playground/tests/helpers";
import {render} from "@ember/test-helpers";
import {hbs} from "ember-cli-htmlbars";
import {activity} from "../../../app/routes/activities/activity";

const SELECTORS = {
	ACTIVITY: {
		HEADER: {
			NAME: ".activity-name",
			DESCRIPTION: ".activity-description"
		}
	}
};
module("Integration | Component | activity", function (hooks) {
	setupRenderingTest(hooks);

	test("it renders", async function (assert) {

		this.activity = activity;
		await render(hbs`<Activity @activity={{this.activity}}/>`);

		assert.dom(SELECTORS.ACTIVITY.HEADER.NAME).hasText(this.activity.name);
		assert.dom(SELECTORS.ACTIVITY.HEADER.DESCRIPTION).hasText(this.activity.description);
	});
});
