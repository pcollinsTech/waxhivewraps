// /**
//  * Implement Gatsby's Node APIs in this file.
//  *
//  * See: https://www.gatsbyjs.org/docs/node-apis/
//  */
// const _ = require('lodash')
// const path = require('path')
// const { paginate } = require('gatsby-awesome-pagination')
// // You can delete this file if you're not using it
// const getOnlyPublished = edges =>
//   _.filter(edges, ({ node }) => node.status === 'publish')

// exports.createPages = ({ actions, graphql }) => {
//   const { createPage } = actions

//   return graphql(`
//     {
//       allWordpressPost {
//         edges {
//           node {
//             id
//             slug
//             status
//           }
//         }
//       }
//     }
//   `)
//     .then(result => {
//       if (result.errors) {
//         result.errors.forEach(e => console.error(e.toString()))
//         return Promise.reject(result.errors)
//       }

//       const postTemplate = path.resolve(`./src/templates/post.js`)
//       const blogTemplate = path.resolve(`./src/templates/blog.js`)

//       // In production builds, filter for only published posts.
//       const allPosts = result.data.allWordpressPost.edges
//       const posts =
//         process.env.NODE_ENV === 'production'
//           ? getOnlyPublished(allPosts)
//           : allPosts

//       // Iterate over the array of posts
//       _.each(posts, ({ node: post }) => {
//         // Create the Gatsby page for this WordPress post
//         createPage({
//           path: `/${post.slug}/`,
//           component: postTemplate,
//           context: {
//             id: post.id,
//           },
//         })
//       })

//       // Create a paginated blog, e.g., /, /page/2, /page/3
//       paginate({
//         createPage,
//         items: posts,
//         itemsPerPage: 10,
//         pathPrefix: ({ pageNumber }) => (pageNumber === 0 ? `/` : `/page`),
//         component: blogTemplate,
//       })
//     })
//     .then(() => {
//       return graphql(`
//         {
//           allWordpressWpEvent {
//             edges {
//               node {
//                 id
//                 slug
//               }
//             }
//           }
//         }
//       `)
//     })
//     .then(result => {
//       if (result.errors) {
//         result.errors.forEach(e => console.error(e.toString()))
//         return Promise.reject(result.errors)
//       }

//       const eventTemplate = path.resolve(`./src/templates/event.js`)
//       // const eventPaginateTemplate = path.resolve(
//       //   `./src/templates/eventPagingate.js`
//       // )

//       // In production builds, filter for only published events.
//       const events = result.data.allWordpressWpEvent.edges

//       // Iterate over the array of events
//       _.each(events, ({ node: event }) => {
//         // Create the Gatsby page for this WordPress event
//         createPage({
//           path: `/${event.slug}/`,
//           component: eventTemplate,
//           context: {
//             id: event.id,
//           },
//         })
//       })

//       // Create a paginated blog, e.g., /, /page/2, /page/3
//       // paginate({
//       //   createPage,
//       //   items: events,
//       //   itemsPerPage: 10,
//       //   pathPrefix: ({ pageNumber }) => (pageNumber === 0 ? `/` : `/page`),
//       //   component: eventPaginateTemplate,
//       // })
//     })
//     .then(() => {
//       return graphql(`
//         {
//           allWordpressCategory(filter: { count: { gt: 0 } }) {
//             edges {
//               node {
//                 id
//                 name
//                 slug
//               }
//             }
//           }
//         }
//       `)
//     })
//   // .then(result => {
//   //   if (result.errors) {
//   //     result.errors.forEach(e => console.error(e.toString()))
//   //     return Promise.reject(result.errors)
//   //   }

//   //   const categoriesTemplate = path.resolve(`./src/templates/category.js`)

//   //   // Create a Gatsby page for each WordPress Category
//   //   _.each(result.data.allWordpressCategory.edges, ({ node: cat }) => {
//   //     createPage({
//   //       path: `/categories/${cat.slug}/`,
//   //       component: categoriesTemplate,
//   //       context: {
//   //         name: cat.name,
//   //         slug: cat.slug,
//   //       },
//   //     })
//   //   })
//   // })
// }

// exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
//   if (stage === 'build-html') {
//     actions.setWebpackConfig({
//       module: {
//         rules: [
//           {
//             test: /bad-module/,
//             use: loaders.null(),
//           },
//         ],
//       },
//     })
//   }
// }
