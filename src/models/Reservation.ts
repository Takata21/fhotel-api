import { model, Schema, Types } from 'npm:mongoose';

const reservationSchema = new Schema({
	// User who made the reservation
	user: {
		type: Types.ObjectId,
		ref: 'User',
		required: true,
	},
	// Reserved room
	room: {
		type: Types.ObjectId,
		ref: 'Room',
		required: true,
	},
	// Check-in date
	startDate: {
		type: Date,
		required: true,
	},
	// Check-out date
	endDate: {
		type: Date,
		required: true,
	},
	// Number of nights
	nights: {
		type: Number,
		required: true,
	},
	// Total reservation price
	totalPrice: {
		type: Number,
		required: true,
	},
	// Reservation status (pending, confirmed, canceled)
	status: {
		type: String,
		required: true,
		enum: ['Pending', 'Confirmed', 'Canceled'],
		default: 'Pending',
	},
	// Payment method
	paymentMethod: {
		type: String,
		enum: ['Credit card', 'Cash', 'Bank transfer'],
	},
	// Additional reservation notes
	notes: {
		type: String,
	},
}, {
	timestamps: true,
	versionKey: false,
});

export default model('Reservation', reservationSchema);
