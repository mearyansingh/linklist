/**Event schema */
import mongoose, { model, models } from 'mongoose';
const { Schema } = mongoose;

const EventSchema = new Schema({
	type: String,//click or view
	page: String, //for example 'aryan'
	uri: String// /aryan | https://
}, { timestamps: true })


export const Event = models?.Event || model('Event', EventSchema)