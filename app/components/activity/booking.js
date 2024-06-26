import Component from "@glimmer/component";
import {action} from "@ember/object";
import {inject as service} from "@ember/service";
import {tracked} from "@glimmer/tracking";

export default class ActivityBookingComponent extends Component {
	@service cart;

	@tracked user = {
		name: "",
		email: "",
		phone: ""
	};
	@action async confirmBooking(submitEvent) {
		submitEvent.preventDefault();
		for (let activityID of Object.keys(this.cart.pendingTickets)) {
			const activity = this.cart.pendingTickets[activityID];
			const booking = this.store.createRecord("booking", {
				activityId: activityID,
				reservationStatus: "PENDING",
				date: activity.date,
				time: activity.time
			});
			await booking.save();
			this.args?.onSave(booking);
		}
		const booking = this.store.createRecord("booking", {
			activityId: activity.id,
			reservationStatus: "PENDING",
			date: activity.date,
			time: activity.time
		});
		this.args?.onSave(booking);
	}
	@action updateCartTickets(activity, trip, ticketCount) {
		this.cart.addTickets(this.args.activity, trip, ticketCount);
	}

	@action onReset(activity, trip, date) {
		this.cart.removePendingTickets(activity, trip, date);
	}
}
