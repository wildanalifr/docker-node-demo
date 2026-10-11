FROM node:22.22.0-alpine

WORKDIR /app

COPY package.json ./
COPY app.js ./

CMD ["npm", "start"]
