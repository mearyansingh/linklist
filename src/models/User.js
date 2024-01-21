/**User schema */
import mongoose, { model, models } from 'mongoose';
const { Schema } = mongoose;

const UserSchema = new Schema({
	name: String,
	email: String,
	image: String,
	emailVerified: Date,
})


export const User = models?.User || model('User', UserSchema)