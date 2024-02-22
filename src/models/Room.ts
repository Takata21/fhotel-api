// Importing the necessary components from 'mongoose' package
import { model, Schema } from 'npm:mongoose';

// Defining the schema for a room
const roomSchema = new Schema({
	number: {
		type: Number,
		required: true,
		unique: true, // Room number must be unique
	},
	type: {
		type: String,
		required: true,
		enum: ['Single', 'Double', 'Triple', 'Family', 'Suite'], // Types of rooms
	},
	price: {
		type: Number,
		required: true, // Price is required
	},
	description: {
		type: String,
		trim: true, // Trims the whitespace
	},
	images: [
		{
			type: String, // URLs or paths to the room images
		},
	],
	status: {
		type: String,
		required: true,
		enum: ['Available', 'Occupied', 'Cleaning', 'Maintenance'], // Room status
		default: 'Available', // Default status is 'Available'
	},
	lastReservation: {
		startDate: {
			type: Date,
		},
		endDate: {
			type: Date,
		},
	},
	amenities: [
		{
			type: String,
			enum: [
				'Wifi',
				'Air conditioning',
				'TV',
				'Minibar',
				'Safe',
			], // List of amenities
		},
	],
	maxGuests: {
		type: Number,
		required: true, // Maximum number of guests allowed
	},
	view: {
		type: String,
		enum: ['City', 'Sea', 'Mountain', 'Garden'], // Types of views
	},
	floor: {
		type: Number, // Floor where the room is located
	},
	accessible: {
		type: Boolean,
		default: false, // If the room is accessible or not
	},
	smoking: {
		type: Boolean,
		default: false, // If smoking is allowed or not
	},
	reservations: {
		type: [Types.ObjectId],
		ref: 'Room',
		required: true,
	},
}, {
	timestamps: true, // Adds createdAt and updatedAt timestamps
	versionKey: false, // Disables the __v version key
});

// Exporting the model
export default model('Room', roomSchema);
