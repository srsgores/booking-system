import EmberRouter from "@ember/routing/router";
import config from "booking-system-playground/config/environment";

export default class Router extends EmberRouter {
	location = config.locationType;
	rootURL = config.rootURL;
}

Router.map(function () {
	this.route("activities", function () {
		this.route("activity", {path: "/:activityID"});
	});
});
