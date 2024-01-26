function robots() {
   return {
      rules: [
         {
            userAgent: '*',
            allow: '/',
            disallow: ['/analytics'],
         },
      ],
      sitemap: `${process.env.VERCEL_PUBLIC_BASE_URL}/sitemap.xml`,
   }
}

export default robots