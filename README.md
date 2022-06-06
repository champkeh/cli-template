# cli-template

<p align="left">
<a href="https://npmjs.com/package/sync-npm-mirror"><img src="https://img.shields.io/npm/v/cli-template.svg" alt="npm package"></a>
<a href="https://nodejs.org/en/about/releases/"><img src="https://img.shields.io/node/v/cli-template.svg" alt="node compatibility"></a>
<a href="https://github.com/champkeh/cli-template/actions/workflows/publish-and-release.yml"><img src="https://github.com/champkeh/cli-template/actions/workflows/publish-and-release.yml/badge.svg" alt="workflows status"></a>
</p>

开发命令行工具的模板仓库，内置了以下功能：

- typescript
- 各种 Lint 工具（`eslint/commitlint/prettier/husky/lint-staged`）
- 自动创建 Release 与发布 npm（需配置对应 token）

> 发布 npm 需要配置`NPM_TOKEN`<br/>
> 创建 Release 需要配置`GITHUB_TOKEN`
