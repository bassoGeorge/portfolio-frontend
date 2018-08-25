#!/usr/bin/env bash
cd ..
FILE=misc/webpack-config.js
vue inspect > $FILE
echo 'module.exports = ' | cat - $FILE > temp && mv temp $FILE