'use server';
/**This is a server component */
/**GrabUsername component:: This component handles logic to select the username if available. */
import mongoose from "mongoose";
import { getServerSession } from "next-auth";
import { Page } from "@/models/Page";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

async function GrabUsername(formData) {

   const username = formData.get('username');
   mongoose.connect(process.env.MONGODB_URI);

   const existingPageDoc = await Page.findOne({ uri: username });

   if (existingPageDoc) {
      return false;
   } else {
      const session = await getServerSession(authOptions)
      return await Page.create({ uri: username, owner: session?.user?.email });
   }
}
export default GrabUsername