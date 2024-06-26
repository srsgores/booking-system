import {module, test} from "qunit";
import {setupTest} from "booking-system-playground/tests/helpers";

module("Unit | Service | data", function (hooks) {
	setupTest(hooks);

	let service;
	hooks.beforeEach(function() {
		service = this.owner.lookup("service:data");
	});

	test("it exists", function (assert) {
		assert.ok(service);
	});

	test("it finds an activity by activity ID", function (assert) {
		const [firstActivity] = service.activities;
		const activity = service.getActivityById(firstActivity.id);
		assert.deepEqual(activity, firstActivity);
	});
});
