#! /bin/bash

rm -rf .git
npm install
npm run-script init
git init
git add --all
git commit -m "init by script"
