import Route from "@ember/routing/route";
import {inject as service} from "@ember/service";

export default class ActivitiesActivityRoute extends Route {
	@service data;
	model(params) {
		const {activityId} = params;
		const activity = this.data.getActivityById(activityId);
		const availabilityDates = this.data.availabilities;
		return {
			activity,
			availabilityDates
		};
	}
}
