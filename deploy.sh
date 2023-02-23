#!/usr/bin/env sh

# 当发生错误时中止脚本
set -e

# 构建
# pnpm start

git init
git add -A
git commit -m 'deploy'


# 部署到 https://<USERNAME>.github.io/<REPO>
git push -f 


# cd 到构建输出的目录下 
cd dist

# 部署到自定义域域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 部署到 https://<USERNAME>axing-website.gitee.io
git push -f git@gitee.com:axing-website/axing-cv.git master:gh-pages

rm -rf .git



cd -
# git remote add origin https://gitee.com/axing-website/lemon-ui-website.git