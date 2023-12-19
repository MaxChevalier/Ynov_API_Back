FROM node:latest

WORKDIR /usr/src/app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

EXPOSE 27017
EXPOSE 3000

CMD ["npm", "start"]