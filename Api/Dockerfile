
FROM node:18

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

# CMD ["npm", "start"]
CMD ["nodemon", "./app/app.js"]

EXPOSE 3000