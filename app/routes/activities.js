import Route from "@ember/routing/route";
import {inject as service} from "@ember/service";

export default class ActivitiesRoute extends Route {
	@service data;
	model() {
		return this.data.activities;
	}
}
