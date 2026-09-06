#!/usr/bin/env sh

set -o xtrace -o errexit

log() {
  echo "$*" >&2
}

yarn install --ignore-scripts --frozen-lockfile
cd ui
rm -rf theme/dist
yarn install --ignore-scripts --frozen-lockfile
yarn build
cd ..

## Antora

antora --stacktrace "$@"

## Redirections

node scripts/latest-redirects.js

## Root-absolute URLs on pages Vercel serves without a trailing slash

node scripts/absolutize-dotted-root-urls.js

## Headers

sh scripts/custom_headers.sh
