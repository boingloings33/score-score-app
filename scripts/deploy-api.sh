#!/bin/bash

ssh -t -i ~/.ssh/intern-summer-2023.pem ubuntu@18.234.35.166 '
export PATH=$PATH:/home/ubuntu/.nvm/versions/node/v18.16.1/bin/
export PATH=$PATH:/home/ubuntu/.local/share/pnpm
export NODE_PATH=/home/ubuntu/.nvm/versions/node/v18.16.1/bin/
PNPM_HOME=/home/ubuntu/.local/share/pnpm

# GIT
BRANCH="main"
cd ~/score-score
git checkout $BRANCH
git reset --hard $BRANCH
git pull origin $BRANCH

if ! pnpm i; then
    echo "==================== pnpm FAILED, exiting... ===================="
    exit 1
fi

# PRISMA
# cd apps/api
cd packages/database
pnpm prisma generate
pnpm prisma migrate status

if ! pnpm prisma migrate deploy; then
    echo "==================== migration FAILED, exiting... ===================="
    exit 1
fi

# BUILD
cd ../..

if ! pnpm build:api; then
    echo "==================== build:api FAILED, exiting... ===================="
    exit 1
fi

pm2 restart all --time --update-env
'