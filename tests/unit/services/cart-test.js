import {module, test} from "qunit";
import {setupTest} from "booking-system-playground/tests/helpers";
import {dasherize} from "@ember/string";

module("Unit | Service | cart", function (hooks) {
	setupTest(hooks);

	let service;

	hooks.beforeEach(function () {
		service = this.owner.lookup("service:cart");
	});

	test("it exists", function (assert) {
		assert.ok(service);
	});

	test("it adds tickets to the cart by activity ID, trip, and time", function (assert) {
		const activity = {id: "1"};
		const trip = {time: "8:00 AM"};
		const date = "2024-06-05";
		const ticketCount = 3;
		service.addTickets(activity, trip, ticketCount, date);
		assert.deepEqual(service.pendingTickets, {
			[activity.id]: {
				reservedSpotsByDate: {
					[date]: {
						[dasherize(trip.time)]: ticketCount,
						trip
					}
				}
			}
		});
		assert.equal(service.ticketCount, ticketCount);
	});

	test("it removes tickets from the cart by activity ID, trip, and time", function (assert) {
		const activity = {id: "1"};
		const trip = {time: "8:00 AM"};
		const date = "2024-06-05";
		const ticketCount = 3;
		service.addTickets(activity, trip, ticketCount, date);
		service.removePendingTickets(activity, trip, date);
		assert.deepEqual(service.pendingTickets, {});
		assert.equal(service.ticketCount, 0);
	});

	test("it clears all pending tickets", function (assert) {
		const activity = {id: "1"};
		const trip = {time: "8:00 AM"};
		const date = "2024-06-05";
		const ticketCount = 3;
		service.addTickets(activity, trip, ticketCount, date);
		service.clearPendingTickets();
		assert.deepEqual(service.pendingTickets, {});
		assert.equal(service.ticketCount, 0);
	});
});
