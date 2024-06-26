import Service from "@ember/service";
import {tracked} from "@glimmer/tracking";
import {dasherize} from "@ember/string";
import deepMerge from "../utils/deep-merge";

export default class CartService extends Service {
	@tracked pendingTickets = {};
	get ticketCount() {
		return Object.values(this.pendingTickets).reduce((total, activity) => {
			return total + Object.values(activity.reservedSpotsByDate).reduce((total, date) => {
				return total + Object.values(date).reduce((total, time) => {
					return total + time.ticketCount;
				}, 0);
			}, 0);
		}, 0);
	}
	clearPendingTickets() {
		this.pendingTickets = {};
	}

	removePendingTickets(activity, trip, date) {
		delete this.pendingTickets[activity.id].reservedSpotsByDate[date][dasherize(trip.time)];
		if (!Object.keys(this.pendingTickets[activity.id].reservedSpotsByDate[date]).length) {
			delete this.pendingTickets[activity.id].reservedSpotsByDate[date];
		}
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
		this.pendingTickets = deepMerge(this.pendingTickets, ticket);
	}
}
