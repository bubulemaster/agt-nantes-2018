#!/bin/sh

docker run -it --rm -v ${PWD}/..:/src -p 8080:8080 preact-cli /bin/bash -c 'cd /src; exec "${SHELL:-sh}"'
