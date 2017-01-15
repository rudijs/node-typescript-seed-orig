#!/usr/bin/env bash

rm -rf coverage

./node_modules/.bin/istanbul cover -x '**/*.spec.js' ./node_modules/.bin/_mocha -- dist 

cat coverage/coverage.json | ./node_modules/.bin/remap-istanbul -o coverage/coverage-ts.json

./node_modules/.bin/istanbul report html --include **/coverage-ts.json