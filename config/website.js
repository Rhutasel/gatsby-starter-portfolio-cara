const tailwind = require('../tailwind')

module.exports = {
  pathPrefix: '/',   // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle      : 'Logan Rhutasel Portfolio',            // Navigation and Site Title
  siteTitleAlt   : 'Rhutasel',                            // Alternative Site title for SEO
  siteTitleShort : 'Rhutasel',                            // short_name for manifest
  siteHeadline   : 'Web Designer | Web Developer',        // Headline for schema.org JSONLD
  siteUrl        : 'https://rhutasel.dev',                // Domain of your site. No trailing slash!
  siteLanguage   : 'en',                                  // Language Tag on <html> element
  siteLogo       : '/logo.png',                           // Used for SEO and manifest
  siteDescription: 'Logan Rhutasel Personal Portfolio',
  //author: 'LekoArts',   // Author for schema.org JSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  //userTwitter      : '@cara',           // Twitter Username
  //ogSiteName       : 'Logan Rhutasel',   // Facebook Site Name
  //ogLanguage       : 'en_US',            // Facebook Language
  //googleAnalyticsID: 'UA-47519312-5',

  // Manifest and Progress color
  themeColor     : tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
}
