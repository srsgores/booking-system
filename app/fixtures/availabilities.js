const MAX_CAPACITY = 10;

/**
 * @typedef {Object} availabilityDate - Represents a date that could be potentially booked for the activity; hasMany availabilityTimes
 * @typedef {Object} availabilityTime - Represents a time that could be potentially booked for the activity; belongsTo an availabilityDate
 *
 * @property {string} date {string} - Date in YYYY-MM-DD format
 * @property {string} status (AVAILABLE, SOLD_OUT) - String that indicates whether tickets can be booked for that date (if all the times for that date are sold out, the status will be "SOLD_OUT", otherwise the status will be "AVAILABLE")
 * @property {array.<availabilityTime>} availabilityTimes - (Potentially) available times for the date
 *   @property {string} availabilityTime.time - Time in HH:MM A format
 *   @property {number} availabilityTime.spotsLeft - Number of tickets that can still be booked on the time
 *   @property {string} availabilityTime.status (AVAILABLE, SOLD_OUT) - String that indicates whether tickets can be booked for that time (if spotsLeft is 0, the status will be "SOLD_OUT", otherwise the status will be "AVAILABLE")
 **/
export const availabilityDates = [
	{
		date: "2024-06-01",
		status: "AVAILABLE",
		availabilityTimes: [
			{
				time: "8:00 AM",
				spotsLeft: 8,
				status: "AVAILABLE",
				capacity: MAX_CAPACITY
			},
			{
				time: "12:00 PM",
				spotsLeft: 8,
				status: "AVAILABLE",
				capacity: MAX_CAPACITY
			},
			{
				time: "3:00 PM",
				spotsLeft: 8,
				status: "AVAILABLE",
				capacity: MAX_CAPACITY
			}
		]
	},
	{
		date: "2024-06-02",
		status: "SOLD_OUT",
		availabilityTimes: [
			{
				time: "8:00 AM",
				spotsLeft: 0,
				status: "SOLD_OUT",
				capacity: MAX_CAPACITY
			},
			{
				time: "12:00 PM",
				spotsLeft: 0,
				status: "SOLD_OUT",
				capacity: MAX_CAPACITY
			},
			{
				time: "3:00 PM",
				spotsLeft: 0,
				status: "SOLD_OUT",
				capacity: MAX_CAPACITY
			}
		]
	},
	{
		date: "2024-06-03",
		status: "AVAILABLE",
		availabilityTimes: [
			{
				time: "8:00 AM",
				spotsLeft: 3,
				status: "AVAILABLE",
				capacity: MAX_CAPACITY
			},
			{
				time: "12:00 PM",
				spotsLeft: 2,
				status: "AVAILABLE",
				capacity: MAX_CAPACITY
			},
			{
				time: "3:00 PM",
				spotsLeft: 8,
				status: "AVAILABLE",
				capacity: MAX_CAPACITY
			}
		]
	},
	{
		date: "2024-06-04",
		status: "AVAILABLE",
		availabilityTimes: [
			{
				time: "8:00 AM",
				spotsLeft: 1,
				status: "AVAILABLE",
				capacity: MAX_CAPACITY
			},
			{
				time: "12:00 PM",
				spotsLeft: 0,
				status: "SOLD_OUT",
				capacity: MAX_CAPACITY
			},
			{
				time: "3:00 PM",
				spotsLeft: 0,
				status: "SOLD_OUT",
				capacity: MAX_CAPACITY
			}
		]
	},
	{
		date: "2024-06-05",
		status: "AVAILABLE",
		availabilityTimes: [
			{
				time: "8:00 AM",
				spotsLeft: 3,
				status: "AVAILABLE",
				capacity: MAX_CAPACITY
			},
			{
				time: "12:00 PM",
				spotsLeft: 9,
				status: "AVAILABLE",
				capacity: MAX_CAPACITY
			},
			{
				time: "3:00 PM",
				spotsLeft: 10,
				status: "AVAILABLE",
				capacity: MAX_CAPACITY
			}
		]
	},
	{
		date: "2024-06-06",
		status: "SOLD_OUT",
		availabilityTimes: [
			{
				time: "8:00 AM",
				spotsLeft: 0,
				status: "SOLD_OUT",
				capacity: MAX_CAPACITY
			},
			{
				time: "12:00 PM",
				spotsLeft: 0,
				status: "SOLD_OUT",
				capacity: MAX_CAPACITY
			},
			{
				time: "3:00 PM",
				spotsLeft: 0,
				status: "SOLD_OUT",
				capacity: MAX_CAPACITY
			}
		]
	},
	{
		date: "2024-06-07",
		status: "AVAILABLE",
		availabilityTimes: [
			{
				time: "8:00 AM",
				spotsLeft: 6,
				status: "AVAILABLE",
				capacity: MAX_CAPACITY
			},
			{
				time: "12:00 PM",
				spotsLeft: 2,
				status: "AVAILABLE",
				capacity: MAX_CAPACITY
			},
			{
				time: "3:00 PM",
				spotsLeft: 1,
				status: "AVAILABLE",
				capacity: MAX_CAPACITY
			}
		]
	}
];
