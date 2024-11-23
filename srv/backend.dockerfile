FROM node:20

WORKDIR /app

COPY package*.json ./

COPY . .

EXPOSE 4000

CMD [ "node", "src/index.js" ]