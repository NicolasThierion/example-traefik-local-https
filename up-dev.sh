#!/bin/bash

cd "$(dirname "$0")"

ENV_FILE=.env

if [  ! -f ${ENV_FILE} ]; then
    cp .env.sample ${ENV_FILE}
fi;

source ${ENV_FILE};


#############
### Setup Local TLS certs
#############

mkcert -install
mkcert -cert-file ./traefik/certs/${MYAPP_HOST}-cert.pem -key-file ./traefik/certs/${MYAPP_HOST}-key.pem ${MYAPP_HOST}

## Start the stack

docker-compose \
    --env-file=${ENV_FILE} up --build --force-recreate --renew-anon-volumes 



