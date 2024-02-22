import { model, Schema } from 'npm:mongoose';
import bcrypt from 'npm:bcryptjs';
const userSchema = new Schema(
	{
		username: {
			type: String,
			required: true,
			// unique: true,
			trim: true,
		},
		image: {
			type: String,
		},
		email: {
			type: String,
			required: true,
			// unique: true,
			trim: true,
		},
		password: {
			type: String,
			required: true,
		},

		reservations: [
			{
				type: Schema.Types.ObjectId,
				ref: 'Order',
			},
		],
	},
	{
		timestamps: true,
		versionKey: false,
	},
);

userSchema.methods.generateHash = async function (password: string) {
	const salt = await bcrypt.genSalt(10);
	return await bcrypt.hash(password, salt);
};

userSchema.methods.validPassword = async function (password: string) {
	return await bcrypt.compare(password, this.password);
};
export default model('User', userSchema);
