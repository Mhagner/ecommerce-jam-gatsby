exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })
}

/* exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  // type definitions go here
  const typeDefs = `
    type Products implements Node {
      atributtes: !
      description: String
      variants: [Variants] @link(from: "variants")
    }
    type Variants implements Node {
      color: String!
      size: String!
    }
  `;
  createTypes(typeDefs);
};
 */
