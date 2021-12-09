#!/usr/bin/env sh

# Run with git bash

# abort on errors
set -e

# build
npm run build

# Deploying
firebase deploy
