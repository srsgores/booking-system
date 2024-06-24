import {module, test} from "qunit";
import {setupRenderingTest} from "booking-system-playground/tests/helpers";
import {render} from "@ember/test-helpers";
import {hbs} from "ember-cli-htmlbars";

const SELECTORS = {
	CONTROL: "[data-test-spot-reservation-control]",
	RADIO_BUTTON: "[data-test-spot-reservation-control-radio-button]"
};

module("Integration | Component | activity/booking/spot-reservation-control", function (hooks) {
		setupRenderingTest(hooks);

		test("it renders radio button controls equal to the total trip capacity", async function (assert) {
			this.trip = {
				spotsLeft: 3,
				capacity: 10
			};
			await render(hbs`<Activity::Booking::SpotReservationControl @trip={{this.trip}}/>`);
			assert.dom(SELECTORS.CONTROL).exists({count: this.trip.capacity});
		});

		test("it renders disabled radio button controls for each unavailable spot", async function (assert) {
			this.trip = {
				spotsLeft: 3,
				capacity: 10
			};
			await render(hbs`<Activity::Booking::SpotReservationControl @trip={{this.trip}}/>`);
			assert.dom(SELECTORS.RADIO_BUTTON).exists({count: this.trip.capacity - this.trip.spotsLeft});
			assert.dom(SELECTORS.RADIO_BUTTON).hasAttribute("disabled");
		});
	}
);
