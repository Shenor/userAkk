FROM node:14.15

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3001
CMD [ "npm", "start" ]
#CMD [ "NODE_ENV=production", "&&", "node", "./app.js"]