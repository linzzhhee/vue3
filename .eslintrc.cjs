/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    'prettier/prettier': [
      'warn',
      {
        singleQuote: true, //单引号
        semi: false, //无分号
        printWidth: 80, //每行宽度至多80字符
        trailingComma: 'none', //不加对象|数组最后逗号
        endOfLine: 'auto' //换行符不限制(win mac 不一致)
      }
    ],
    'vue/multi-word-component-names': [
      'warn',
      {
        ignores: ['index'] //vue组件多单词组成
      }
    ],
    'vue/no-setup-props-destructure': ['off'], //关闭props解构的校验
    'no-undef': 'error' //添加位定义变量错误提示
  }
}
