FROM node:lts-alpine

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY db.json .

EXPOSE 3000
CMD ["node", "/usr/local/bin/json-server", "--watch", "db.json", "--host", "0.0.0.0"]
