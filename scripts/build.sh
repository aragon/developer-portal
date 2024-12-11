#!/usr/bin/env sh

set -o xtrace -o errexit

log() {
  echo "$*" >&2
}

yarn install --frozen-lockfile

cd ui

rm -rf theme/dist

yarn install --frozen-lockfile

yarn build:theme


## Antora

antora --stacktrace "$@"

## Redirections

# node scripts/latest-redirects.js

## Headers

sh scripts/custom_headers.sh