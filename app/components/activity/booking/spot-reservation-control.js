import Component from "@glimmer/component";
import {guidFor} from "@ember/object/internals";
import {tracked} from "@glimmer/tracking";
import {action} from "@ember/object";

export default class ActivityBookingSpotReservationControlComponent extends Component {
	id = guidFor(this);
	@tracked ticketCount = 0;
	/**
	 * @returns Array<Spot> the spots available for the trip
	 */
	get tripSpots() {
		return Array(this.args.trip.capacity).fill().map((spot, index) => {
			const count = index + 1;
			return {
				count,
				isUnavailable: count > this.args.trip.spotsLeft
			};
		});
	}

	@action updateTicketCount(formChangeEvent) {
		this.ticketCount = formChangeEvent.target.value;
	}

	get hasNoPendingTickets() {
		return this.ticketCount === 0;
	}
}
