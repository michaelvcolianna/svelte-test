#!/usr/bin/env bash

PROJECT_ROOT="${SCRIPT_FOLDER}/.."

if [ ! -d "${PROJECT_ROOT}/_cache" ]; then
    echo "${PROJECT_ROOT}/_cache does not exist, creating"
    mkdir -p "_cache"
fi

cd _cache

for i in {1..25};
    do dd if=/dev/urandom bs=1 count=1 of=file$i;
done
