#!/usr/bin/env bash
FILE=webpack-config.js
vue inspect > $FILE
echo 'module.exports = ' | cat - $FILE > temp && mv temp $FILE