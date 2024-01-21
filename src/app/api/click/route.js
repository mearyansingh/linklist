import mongoose from "mongoose";
import { Event } from "@/models/Event";

export async function POST(req) {
	mongoose.connect(process.env.MONGODB_URI)

	const url = new URL(req.url)
	const clickedLink = atob(url.searchParams.get('url'))//decode

	const page = url.searchParams.get('page')

	await Event.create({ type: 'click', uri: clickedLink, page });
	return Response.json(true);
}