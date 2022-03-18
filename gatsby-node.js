exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query ProjectSlugs {
      allMarkdownRemark {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `)
  const { createPage } = actions

  data.allMarkdownRemark.nodes.forEach(node => {
    createPage({
      path: `projects/${node.frontmatter.slug}`,
      component: require.resolve("./src/templates/project-details.js"),
      context: { slug: node.frontmatter.slug },
    })
  })

  // createPage({
  //   path: "/using-dsg",
  //   component: require.resolve("./src/templates/using-dsg.js"),
  //   context: {},
  //   defer: true,
  // })
}
