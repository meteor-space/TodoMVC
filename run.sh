#!/usr/bin/env bash

export PACKAGE_DIRS='packages'

if [ "$PORT" ]; then
  meteor --port $PORT
else
  meteor 
fi
