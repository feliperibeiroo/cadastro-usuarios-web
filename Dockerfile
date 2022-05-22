FROM node:14-alpine3.14

COPY . /app
WORKDIR /app
RUN yarn install --silent && yarn build

EXPOSE $PORT

CMD [ "yarn", "start" ]