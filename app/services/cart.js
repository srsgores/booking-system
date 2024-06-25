import Service from "@ember/service";
import {tracked} from "@glimmer/tracking";
import {dasherize} from "@ember/string";

export default class CartService extends Service {
	@tracked pendingTickets = {};
	get ticketCount() {
		return Object.values(this.pendingTickets).reduce((acc, activity) => {
			return acc + Object.values(activity.reservedSpotsByDate).reduce((acc, time) => {
				return acc + Object.values(time).reduce((acc, ticket) => {
					return acc + ticket.ticketCount;
				}, 0);
			}, 0);
		}, 0);
	}
	clearPendingTickets() {
		this.pendingTickets = {};
	}
	addTickets(activity, trip, ticketCount, date) {
		const ticket = {
			[activity.id]: {
				activity,
				reservedSpotsByDate: {
					[date]: {
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
