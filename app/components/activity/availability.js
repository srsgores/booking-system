import Component from "@glimmer/component";
import {action} from "@ember/object";
export default class ActivityAvailabilityComponent extends Component {
	@action onAddTickets(trip, ticketCount, date) {
		this.args.onAddTickets(trip, ticketCount, date);
	}
}
