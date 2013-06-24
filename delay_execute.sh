#!/bin/bash

BASEDIR=$(dirname $0)
MINUTES=$[($RANDOM%25)]
echo "Now will execute script after $MINUTES minutes."
sleep $MINUTES
node $BASEDIR/ncu_sign.js $1 $2 $3 $4 
