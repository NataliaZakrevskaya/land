#!/bin/bash

BRANCH=master

echo "Start checkout..." && \

echo "Adding github ssh-key..." && \
eval "$(ssh-agent -s)" && \
ssh-add ~/.ssh/land-git && \
echo "Github ssh-key added successfully!" && \

echo "cd to target folder" && \
cd ~/sru/api && \
echo "cd to target folder done" && \

echo "Checkout branch $BRANCH..." && \
git checkout $BRANCH && \
echo "Checkout done" && \

echo "Pulling..." && \
git pull -f && \
echo "Pull done" && \

echo "Checkout done"