import Service from "@ember/service";
import {tracked} from "@glimmer/tracking";
import {dasherize} from "@ember/string";

export default class CartService extends Service {
	@tracked pendingTickets = {};
	get ticketCount() {
		return this.pendingTickets.reduce((total, {ticketCount}) => total + ticketCount, 0);
	}
	clearPendingTickets() {
		this.pendingTickets = {};
	}
	addTickets(activity, trip, ticketCount) {
		const ticket = {
			[activity.id]: {
				activity,
				reservedSpotsByDate: {
					[trip.date]: {
						[dasherize(trip.time)]: {
							ticketCount,
							trip
						}
					}
				}
			}
		};
		this.pendingTickets = {
			...ticket,
			...this.pendingTickets
		}
	}
}
