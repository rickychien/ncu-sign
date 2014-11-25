#!/bin/bash

BASEDIR=$(dirname $0)

MIN=$[($RANDOM % 10)] # Random Number 0-10 for minutes
SEC=$[($RANDOM % 60)] # Random Number 0-60 for seconds
TIME=$[$MIN*60+$SEC]  # Sleep Time

sleep $TIME
node $BASEDIR/ncu_sign.js $1 $2 $3 $4
