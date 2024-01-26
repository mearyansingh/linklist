function robots() {
   return {
      rules: [
         {
            userAgent: '*',
            allow: '/',
            disallow: ['/account', '/analytics'],
         },
      ],
      sitemap: `${process.env.VERCEL_PUBLIC_BASE_URL}/sitemap.xml`,
   }
}

export default robots