var key = process.env.WOOCOMMERCE_CONSUMER_KEY;
var secret = process.env.WOOCOMMERCE_CONSUMER_SECRET;

const config = {
  siteMetadata: {
    title: "WaxHiveWraps",
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
    //   resolve: "gatsby-source-wordpress",
    //   options: {
    //     baseUrl: "waxhivewraps.com",
    //     protocol: "https",
    //     useACF: true,
    //     // Blacklisted routes using glob patterns
    //     excludedRoutes: [
    //       "**/settings",
    //       "**/options",
    //       "**/stats",
    //       "**/alert",
    //       "**/configurator",
    //       "**/reindex_posts",
    //       "**/ryte",
    //       "**/statistics",
    //       "***/users",
    //       "***/options",
    //       "**/key",
    //       "**/products "
    //     ],
    //     // use a custom normalizer which is applied after the built-in ones.
    //     normalizer: function({ entities }) {
    //       return entities;
    //     }
    //   }
    // },
    {
      resolve: "@pasdo501/gatsby-source-woocommerce",
      options: {
        // Base URL of Wordpress site
        api: "waxhivewraps.com",
        // true if using https. otherwise false.
        https: true,
        api_keys: {
          consumer_key: "ck_0b6796df821a1796bd71165adca3fd534a1e23c4",
          consumer_secret: "cs_39dba003c293d020db68125bd2387851b2e3657b"
        },
        // Array of strings with fields you'd like to create nodes for...
        fields: ["products", "products/categories"],
        // Send the API keys as query string parameters instead of using the authorization header
        // OPTIONAL: defaults to false
        query_string_auth: false,
        // OPTIONAL: How many results to retrieve *per request*
        per_page: 20,
        // OPTIONAL: Custom Axios config (see https://github.com/axios/axios) - note that this can override other options.
        axios_config: {
          // Axios config options
        }
      }
    },
    {
      resolve: `gatsby-source-stripe`,
      options: {
        objects: ["Sku"],
        secretKey: "sk_test_2ohG0bd7PUHkQeU3ZQFXXxu1",
        downloadFiles: true
      }
    },
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
