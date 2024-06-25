import Component from "@glimmer/component";
import {action} from "@ember/object";
import {inject as service} from "@ember/service";
export default class ActivityComponent extends Component {
	@service cart;
	@service store;
	@action onAddTickets(trip, ticketCount, date) {
		this.cart.addTickets(this.args.activity, trip, ticketCount, date);
	}
}
