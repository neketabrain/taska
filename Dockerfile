FROM node:14.3-alpine

WORKDIR /app

COPY package.json ./
RUN npm install

COPY . ./