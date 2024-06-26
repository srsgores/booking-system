import Component from "@glimmer/component";
import {action} from "@ember/object";
export default class ActivityAvailabilityComponent extends Component {
	@action onAddTickets(trip, ticketCount, date) {
		this.args.onAddTickets(trip, ticketCount, date);
	}

	@action onReset(activity, trip, date) {
		this.args?.onReset(activity, trip, date);
	}
}
