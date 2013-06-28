#!/bin/bash

BASEDIR=$(dirname $0)
SEC=$[($RANDOM % 25) * 60]
sleep $SEC
node $BASEDIR/ncu_sign.js $1 $2 $3 $4 
