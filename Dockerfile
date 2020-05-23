FROM node:14.3-alpine

WORKDIR /client/

COPY package.json /client/
RUN npm install

COPY . /client/