#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 如果是发布到自定义域名
# echo '这里填你需要绑定的域名' > CNAME


git init
git add -A
git commit -m 'deploy-coding'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@dadifeihong:dadifeihong/dadifeihong.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages
git push git@github.com:Lennonleslie/Drawingguide.git main