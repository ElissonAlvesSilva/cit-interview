FROM node:12.18.3-alpine

ENV CODE /usr/src/app

RUN \
  apk add --update --no-cache git openssh-client \
  && npm install -g nodemon

RUN mkdir -p $CODE

WORKDIR $CODE
