import Component from "@glimmer/component";
import {guidFor} from "@ember/object/internals";
import {action} from "@ember/object";
import {tracked} from "@glimmer/tracking";
import {dasherize} from "@ember/string";

export default class ActivityBookingSpotReservationControlComponent extends Component {
	elementId = guidFor(this);
	@tracked ticketCount = 0;

	constructor() {
		super(...arguments);
		if (this.args.selectedTicketCount) {
			this.ticketCount = this.args.selectedTicketCount;
		}
	}
	/**
	 * @returns Array<Spot> the spots available for the trip
	 */
	get tripSpots() {
		return Array(this.args.trip.capacity).fill().map((spot, index) => {
			const count = index + 1;
			const id = this.generateSpotId(count, index);
			return {
				id,
				count,
				checked: this.ticketCount === count,
				hasCheckedAfter: count < this.ticketCount,
				isUnavailable: count > this.args.trip.spotsLeft
			};
		});
	}

	generateSpotId(count, index) {
		return [
			this.elementId,
			index,
			dasherize(this.args.trip.time),
			count
		].join("-");
	}
	get controlIds() {
		return this.tripSpots.map((spot, index) => {
			return [
				this.elementId,
				index,
				dasherize(this.args.trip.time),
				spot.count
			].join("-");
		}).join(" ");
	}
	@action onAddTickets(formChangeEvent) {
		this.ticketCount = parseInt(formChangeEvent.target.value);
		this.args?.onAddTickets(this.args.trip, this.ticketCount, this.args.date);
	}
}
