function robots() {
   return {
      rules: [
         {
            userAgent: '*',
            allow: ['/'],
            disallow: '/analytics',
         },
      ],
      // sitemap: 'https://acme.com/sitemap.xml',
   }
}

export default robots