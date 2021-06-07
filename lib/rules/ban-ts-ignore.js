/**
 * @fileoverview no ts ignore comment
 * @author ban-ts-ignore
 */
'use strict';

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: 'no ts ignore comment',
            category: 'Fill me in',
            recommended: false
        },
        fixable: null, // or "code" or "whitespace"
        schema: [
            // fill in your schema
        ]
    },

    create: function (context) {
        const sourceCode = context.getSourceCode();

        return {
            Program(node) {
                // 获取源代码中所有的注释
                const comments = sourceCode.getAllComments();

                const tsIgnore = comments.filter(({ value }) => value.indexOf('@ts-ignore') > -1);
                tsIgnore.length &&
                    context.report({
                        node: node,
                        message: 'must without ts-ignore'
                    });
            }
        };
    }
};
