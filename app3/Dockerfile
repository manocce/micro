FROM node:14

WORKDIR /user/src/app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3003

CMD ["node", "server.js"]
