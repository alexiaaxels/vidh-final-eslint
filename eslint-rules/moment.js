export default {
    meta: {
      type: "problem",
      docs: {
        description: "ban use of the moment library",
      },
      fixable: "code",
      schema: [],
    },
    create(context) {
      return {
        ImportDeclaration(node) {
          if (node.source.value === "moment") {
            context.report({
              node,
              message: '"moment" library is forbidden.',
              fix(fixer) {
                return fixer.remove(node);
              },
            });
          }
        },
        CallExpression(node) {
          if (
            node.callee.name === "moment" ||
            (node.callee.object && node.callee.object.name === "moment")
          ) {
            context.report({
              node,
              message: '"moment" is forbidden.',
            });
          }
        },
      };
    },
  };
  