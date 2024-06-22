import {module, test} from "qunit";
import {setupTest} from "booking-system-playground/tests/helpers";

module("Unit | Route | activities", function (hooks) {
	setupTest(hooks);

	test("it exists", function (assert) {
		let route = this.owner.lookup("route:activities");
		assert.ok(route);
	});
});
