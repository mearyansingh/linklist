function robots() {
   return {
      rules: [
         {
            userAgent: '*',
            allow: '/',
            disallow: ['/analytics'],
         },
      ],
      sitemap: 'https://linklist-app.vercel.app/sitemap.xml',
   }
}

export default robots