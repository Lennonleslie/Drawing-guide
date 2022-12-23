#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
# npm run build
# pnpm vuepress build
pnpm docs:build

# 进入生成的文件夹
cd ./docs/.vuepress/dist

# 如果是发布到自定义域名
# echo '这里填你需要绑定的域名' > CNAME


git init
git config user.name "lennonleslie"
git config user.email ""
git add -A
git commit -m 'deploy-coding'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@dadifeihong:dadifeihong/dadifeihong.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages
git push -f git@github.com:Lennonleslie/Drawingguide.git main:guide-page
cd -
rm -rf .vuepress
rm -rf docs/.vuepress/dist

pnpm run upload