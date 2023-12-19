FROM node:latest

WORKDIR /usr/src/app

COPY package.json package-lock.json .

RUN npm install
RUN npm install express
RUN npm install body-parser
RUN npm install mongoose
RUN npm install bcrypt
RUN npm install jsonwebtoken
RUN npm install winston
RUN npm install compression

COPY . .

EXPOSE 3000

CMD ["npm", "start"]