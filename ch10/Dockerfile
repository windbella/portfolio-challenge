FROM node:12.16.1-alpine

RUN mkdir -p /app
WORKDIR /app
ADD ./server /app/server
ADD ./client /app/client

WORKDIR /app/client
RUN yarn install
RUN yarn build

WORKDIR /app/server
RUN yarn install --production

WORKDIR /app

EXPOSE 3000

CMD node ./server/bin/www