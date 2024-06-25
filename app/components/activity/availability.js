import Component from "@glimmer/component";
import {action} from "@ember/object";
export default class ActivityAvailabilityComponent extends Component {
	@action onAddTickets(trip, ticketCount) {
		this.args.onAddTickets(trip, ticketCount);
	}
}
