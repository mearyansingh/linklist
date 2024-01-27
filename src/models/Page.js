/**Page schema */
import mongoose, { model, models } from 'mongoose';
const { Schema } = mongoose;

const PageSchema = new Schema({
	uri: { type: String, required: true, min: 1, unique: true },
	owner: { type: String, required: true },
	bgType: { type: String, default: 'color' },
	bgColor: { type: String, default: '#000000' },
	bgImage: { type: String, default: '' },
	displayName: { type: String, default: '' },
	location: { type: String, default: '' },
	bio: { type: String, default: '' },
	buttons: { type: Object, default: {} },
	links: { type: Object, default: [] }
}, { timestamps: true })


export const Page = models?.Page || model('Page', PageSchema)