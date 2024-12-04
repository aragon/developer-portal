#!/usr/bin/env sh

set -o xtrace -o errexit

log() {
  echo "$*" >&2
}


## Antora

antora --stacktrace "$@"

## Redirections

# node scripts/latest-redirects.js

## Headers

sh scripts/custom_headers.sh