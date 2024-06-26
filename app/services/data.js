import Service from "@ember/service";
import {activities as activityFixture} from "../fixtures/activities";
import {availabilityDates} from "../fixtures/availabilities";

export default class DataService extends Service {
	activities = activityFixture;
	availabilities = availabilityDates;
	getActivityById(id) {
		return this.activities.find(activity => activity.id === id);
	}
}
