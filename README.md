# eslint-plugin-tiger

inner rules

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-tiger-rules`:

```
$ npm install eslint-plugin-tiger-rules --save-dev
```

## Usage

Add `tiger` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": ["tiger-rules"]
}
```

Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "tiger-rules/rule-name": 2
    }
}
```

## Supported Rules

-   Fill in provided rules here
