/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
 const path = require('path')
/*
 module.exports.createPages = async ({ graphql, actions }) => {
     const { createPage } = actions
     const projectTemplate = path.resolve('./src/templates/project.js')
     const res = await graphql(`
         query {
             allContentfulProject {
                 edges {
                     node {
                         slug
                     }
                 }
             }
         }
     `)

     res.data.allContentfulProject.edges.forEach((edge) => {
         createPage({
             component: projectTemplate,
             path: `/project/${edge.node.slug}`,
             context: {
                 slug: edge.node.slug
             }
         })
     })
 }
 */
// You can delete this file if you're not using it
