FROM node:14-alpine3.14

ENV PORT 3000
ENV BASE_URL http://localhost:8080

COPY . /app
WORKDIR /app
RUN yarn install --silent && yarn generate

EXPOSE $PORT

CMD [ "yarn", "start" ]