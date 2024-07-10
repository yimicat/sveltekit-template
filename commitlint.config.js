/**
 * comommitlint config
 * @author Yimi by yimicat.com
 */
export default {
  extends: ['@commitlint/config-conventional'],
  // @see: https://commitlint.js.org/#/reference-rules
  rules: {
    // @see: https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines
    // @see: https://github.com/conventional-changelog/commitlint/#what-is-commitlint
    'type-enum': [
      2,
      'always',
      [
        'build', //用于修改项目构建系统，例如修改依赖库、外部接口或者升级 Node 版本等
        'bug', // 此项特别针对bug号，用于向测试反馈bug列表的bug修改情况
        'feat', // 新功能
        'fix', // 修补bug
        'perf', //提高性能的代码更改
        'docs', // 仅文档更改，例如修改 README 文件、API 文档等
        'style', // 不影响代码含义的更改（空格、格式设置、缺少分号等）
        'refactor', // 用于重构代码（即不是新增功能，也不是修改bug的代码变动），例如修改代码结构、变量名、函数名等但不修改功能逻辑
        'test', // 用于修改测试用例，例如添加、删除、修改代码的测试用例等
        'chore', // 用于对非业务性代码进行修改，例如修改构建流程或者工具配置等
        'revert', // feat(pencil): add ‘graphiteWidth’ option (撤销之前的commit)
        'merge' // 合并分支， 例如： merge（前端页面）： feature-xxxx修改线程地址
      ]
    ]
  }
}
