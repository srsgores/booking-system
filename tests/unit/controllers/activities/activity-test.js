import {module, test} from "qunit";
import {setupTest} from "booking-system-playground/tests/helpers";

module("Unit | Controller | activities/activity", function (hooks) {
	setupTest(hooks);

	// TODO: Replace this with your real tests.
	test("it exists", function (assert) {
		let controller = this.owner.lookup("controller:activities/activity");
		assert.ok(controller);
	});
});
