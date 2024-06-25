import Route from "@ember/routing/route";

export default class ActivitiesActivityBookingRoute extends Route {
	model() {
		return this.modelFor("activities.activity");
	}
}

