import {module, test} from "qunit";
import {setupRenderingTest} from "booking-system-playground/tests/helpers";
import {render} from "@ember/test-helpers";
import {hbs} from "ember-cli-htmlbars";

module("Integration | Component | activity/availability", function (hooks) {
	setupRenderingTest(hooks);

	test("it renders availability for each trip", async function (assert) {
		this.activities = [
			{
				date: "2024-06-05",
				status: "AVAILABLE",
				availabilityTimes: [
					{
						time: "8:00 AM",
						spotsLeft: 10,
						status: "AVAILABLE",
						capacity: 10
					},
					{
						time: "12:00 PM",
						spotsLeft: 10,
						status: "AVAILABLE",
						capacity: 10
					},
					{
						time: "3:00 PM",
						spotsLeft: 10,
						status: "AVAILABLE",
						capacity: 10
					}
				]
			},
			{
				date: "2024-06-06",
				status: "SOLD_OUT",
				availabilityTimes: [
					{
						time: "8:00 AM",
						spotsLeft: 0,
						status: "SOLD_OUT",
						capacity: 10
					},
					{
						time: "12:00 PM",
						spotsLeft: 0,
						status: "SOLD_OUT",
						capacity: 10
					},
					{
						time: "3:00 PM",
						spotsLeft: 0,
						status: "SOLD_OUT",
						capacity: 10
					}
				]
			},
			{
				date: "2024-06-07",
				status: "AVAILABLE",
				availabilityTimes: [
					{
						time: "8:00 AM",
						spotsLeft: 6,
						status: "AVAILABLE",
						capacity: 10
					},
					{
						time: "12:00 PM",
						spotsLeft: 2,
						status: "AVAILABLE",
						capacity: 10
					},
					{
						time: "3:00 PM",
						spotsLeft: 1,
						status: "AVAILABLE",
						capacity: 10
					}
				]
			}
		];
		await render(hbs`<Activity::Availability @activities={{this.activities}}/>`);
		const activitySlots = this.activities.reduce((count, activity) => count + activity.availabilityTimes.length, 0);
		assert.dom("[data-test-activity-availability]").exists({count: this.activities.length});
		assert.dom("[data-test-activity-availability-date]").exists({count: activitySlots});
	});
});
