#!/bin/bash

MINUTES=$[($RANDOM%25)]
echo "Now will execute script after $MINUTES minutes."
sleep $MINUTES
node ncu_sign.js $1 $2 $3 $4 
