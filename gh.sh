#!/bin/sh
npm run generate
git add .
git commit -m "deploy"
git subtree push --prefix .output/public origin gh-pages
git push origin `git subtree split --prefix .output/public main`:gh-pages --force