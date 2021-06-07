/**
 * @fileoverview no ts ignore comment
 * @author ban-ts-ignore
 */
'use strict';

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require('../../../lib/rules/ban-ts-ignore'),
    RuleTester = require('eslint').RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run('ban-ts-ignore', rule, {
    valid: [
        // give me some code that won't trigger a warning
        'var a = 1 // ts-ignore'
    ],
    invalid: [
        {
            code: `// @ts-ignore`,
            errors: [
                {
                    message: '@ts-ignore is not allow',
                    type: 'Program'
                }
            ]
        },
        {
            code: `function http(data){
                    // @ts-ignore
                    var res = data();
                    // @ts-ignore
                    return res
            }`,
            errors: [
                {
                    message: '@ts-ignore is not allow',
                    type: 'Program'
                },
                {
                    message: '@ts-ignore is not allow',
                    type: 'Program'
                }
            ]
        }
    ]
});
