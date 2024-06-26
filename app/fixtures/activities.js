const DEFAULT_TICKET_PRICING = [
	{
		id: "ticket_1",
		name: "Adult",
		price: {
			amount: "10.00",
			currency: "USD",
			formatted: "$10.00"
		}
	},
	{
		id: "ticket_2",
		name: "Child",
		price: {
			amount: "5.00",
			currency: "USD",
			formatted: "$5.00"
		}
	}
];

/**
 * Use this file to get the data for the model for your route as if it's coming back from the server.
 *
 * @typedef {Object} activity - Represents an activity that can be booked; hasMany tickets
 * @typedef {Object} ticket - Represents a ticket type that can be selected for the activity; belongsTo an activity
 *
 * @property {string} id - Unique identifier of the activity
 * @property {string} name - Name of the activity
 * @property {string} description - Description of the activity
 * @property {array.<ticket>} tickets - Tickets that are available to book on the activity
 *   @property {string} ticket.id - Unique identifier of the ticket
 *   @property {string} ticket.name - Name of the ticket
 *   @property {object} ticket.price - Price details for how much an individual ticket costs
 *     @property {string} price.amount - Raw string for the price amount
 *     @property {string} price.currency - Currency code for the price
 *     @property {string} price.formatted - Formatted version of the price with currency
 **/

export const hikingTourActivity = {
	id: "activity_1",
	name: "Castle Falls Walking Tour",
	description: "Embark on a breathtaking guided walking tour through the picturesque Beaver Falls, where you'll learn about the history of the historic Albertan town Pincher Creek.  Forage local soap berries, saskatoon berries, and oogle at the expansive view of Table Mountain",
	image: "/assets/images/hiking-tour.jpg",
	tickets: DEFAULT_TICKET_PRICING
};

export const foodTourActivity = {
	id: "activity_2",
	name: "Portland Vegan Food Tour",
	description: "Embark on a vegan culinary adventure through the heart of Portland.  Sample the best food Portland has to offer, from the finest dining to the best street food.",
	image: "/assets/images/vegan-tour1.jpg",
	tickets: DEFAULT_TICKET_PRICING
};

export const activities = [
	hikingTourActivity,
	foodTourActivity
];
