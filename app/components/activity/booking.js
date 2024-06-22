import Component from "@glimmer/component";
import {action} from "@ember/object";

export default class ActivityBookingComponent extends Component {
	ticketCount = 1;
	@action confirmBooking(submitEvent) {
		submitEvent.preventDefault();
		const user = submitEvent;
		const {activity, tickets} = this.args;
		const booking = this.store.createRecord("booking", {
			activityId: activity.id,
			reservationStatus: "pending",
			date: activity.date,
			time: activity.time,
			tickets: Array(this.ticketCount).fill().map(() => ({ticketId: tickets[0].id, reservationStatus: "pending"})),
			primaryGuest: this.user
		});
		this.args?.onSave(booking);
	}
}
