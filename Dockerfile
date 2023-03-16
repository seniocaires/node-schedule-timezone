FROM node:16

WORKDIR /app

ADD . .

RUN npm i

ENTRYPOINT ["node", "index.js"]