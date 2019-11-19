const config = {
  siteMetadata: {
    title: "Podium Ice Skate",
    description: ""
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `src/assets/images`
      }
    },
    // {
    //   resolve: "@pasdo501/gatsby-source-woocommerce",
    //   options: {
    //     // Base URL of Wordpress site
    //     api: "waxhivewraps.com",
    //     // true if using https. otherwise false.
    //     https: true,
    //     api_keys: {
    //       consumer_key: process.env(WOOCOMMERCE_CONSUMER_KEY),
    //       consumer_secret: process.env(WOOCOMMERCE_CONSUMER_SECRET)
    //     },
    //     // Array of strings with fields you'd like to create nodes for...
    //     fields: ["products", "products/categories"],
    //     // Send the API keys as query string parameters instead of using the authorization header
    //     // OPTIONAL: defaults to false
    //     query_string_auth: false,
    //     // OPTIONAL: How many results to retrieve *per request*
    //     per_page: 20,
    //     // OPTIONAL: Custom Axios config (see https://github.com/axios/axios) - note that this can override other options.
    //     axios_config: {
    //       // Axios config options
    //     }
    //   }
    // },
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        start_url: "/",
        icon: "src/assets/images/favicon.png" // This path is relative to the root of the site.
      }
    },

    "gatsby-plugin-sass",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp"
  ]
};

module.exports = config;
