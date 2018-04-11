#!/bin/sh

UID=$(id -u ${USER})
GID=$(id -g ${USER})

docker build --build-arg USERNAME=${USER} --build-arg USERUID=${UID} --build-arg USERGID=${GID} . -t preact-cli:latest
