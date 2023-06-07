module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    // vue3 api 无需引入配置
    'vue/setup-compiler-macros': true
  },
  // 引入推荐的语法校验规则
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended', // 在最后面新增extends
    './.eslintrc-auto-import.json'
  ],
  overrides: [],
  /* 
   这里一定要配置对 先使用vue-eslint-parser 再使用@typescript-eslint/parser
   先解析 <template> 标签中的内容 然后再解析 vue <script> 标签中的 TS 代码
   */
  // 选择使用的解析器
  parser: 'vue-eslint-parser',
  // 解析器的详细配置
  parserOptions: {
    // 使用最新版 ES 语法
    ecmaVersion: 'latest',
    // 使用 ESLint TS 解析器
    parser: '@typescript-eslint/parser',
    // 使用 ES 模块化规范
    sourceType: 'module'
  },
  // 使用的插件
  plugins: ['vue', '@typescript-eslint'],
  // 自定义规则
  rules: {
    semi: 0,
    'no-console': 'off',
    'generator-star-spacing': 'off',
    'no-mixed-operators': 0,
    'vue/attribute-hyphenation': 0,
    'vue/html-self-closing': 0,
    'vue/component-name-in-template-casing': 0,
    'vue/html-closing-bracket-spacing': 0,
    'vue/singleline-html-element-content-newline': 0,
    'vue/no-unused-components': 0,
    'vue/multiline-html-element-content-newline': 0,
    'vue/no-use-v-if-with-v-for': 0,
    'vue/html-closing-bracket-newline': 0,
    'vue/no-parsing-error': 0,
    'space-before-function-paren': 0,
    'no-tabs': 0,
    'no-delete-var': 2,
    'no-async-promise-executor': 0,
    'template-curly-spacing': 'off',
    indent: 'off',
    '@typescript-eslint/no-explicit-any': 0,
    'vue/multi-word-component-names': 0,
    '@typescript-eslint/no-non-null-assertion': 0,
    'vue/no-v-html': 0,
    '@typescript-eslint/ban-types': [
      'error',
      {
        extendDefaults: true,
        types: {
          '{}': false
        }
      }
    ],
    'prefer-const': [
      2,
      {
        ignoreReadBeforeAssign: false
      }
    ],
    quotes: [
      // 引号
      2,
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true
      }
    ],
    'vue/max-attributes-per-line': [
      0,
      {
        singleline: 5,
        multiline: {
          max: 1,
          allowFirstLine: false
        }
      }
    ],
    'prettier/prettier': [
      'warn',
      {
        singleQuote: true,
        semi: false,
        trailingComma: 'none'
      }
    ]
  }
}
