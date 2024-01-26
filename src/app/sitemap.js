import mongoose from 'mongoose';
import { Page } from '@/models/Page'

async function sitemap() {

   mongoose.connect(process.env.MONGODB_URI);
   const page = await Page.find({});

   const pageEntries = page.map(({ uri, updatedAt }) => ({
      url: `${process.env.VERCEL_PUBLIC_BASE_URL}/${uri}`,
      lastModified: new Date(updatedAt)
   }))


   return [
      ...pageEntries
   ]
}

export default sitemap