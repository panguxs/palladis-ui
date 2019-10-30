module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', '@vue/prettier', 'eslint:recommended'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        semi: false,
        // 行尾逗号,默认none,可选 none|es5|all
        // es5 包括es5中的数组、对象
        // all 包括函数对象等所有可选
        trailingComma: 'none',
        // 对象中的空格 默认true
        // true: { foo: bar }
        // false: {foo: bar}
        bracketSpacing: true,
        // 箭头函数参数括号 默认avoid 可选 avoid| always
        // avoid 能省略括号的时候就省略 例如x => x
        // always 总是有括号
        arrowParens: 'avoid'
      }
    ],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        jest: true
      }
    }
  ]
}
