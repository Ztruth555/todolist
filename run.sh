#!/bin/bash

if [ -z "$1" ]; then
    echo './run <dev|test|dist|karma>'
    exit
fi

if [ $1 == 'dev' ]; then
    export NODE_ENV=develop
    export NODE_WATCH=true
    npm run dev
elif [ $1 == 'karma' ]; then
    export NODE_ENV=test
    export NODE_WATCH=true
    npm test
elif [ $1 == 'dist' ]; then
    export NODE_ENV=production
    export NODE_WATCH=false
    npm run dist
elif [ $1 == 'test' ]; then
    export NODE_ENV=production
    export NODE_WATCH=false
    npm test
    npm run dist
else
    echo './run <dev|test|dist|karma>'
    exit
fi
