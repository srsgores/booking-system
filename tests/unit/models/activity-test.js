import {setupTest} from "booking-system-playground/tests/helpers";
import {module, test} from "qunit";

module("Unit | Model | activity", function (hooks) {
	setupTest(hooks);

	// Replace this with your real tests.
	test("it exists", function (assert) {
		const store = this.owner.lookup("service:store");
		const model = store.createRecord("activity", {});
		assert.ok(model, "model exists");
	});
});
