# BUILDER
FROM node:lts-alpine AS builder

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm ci --silent
RUN npm install react-scripts -g --silent

COPY . .

RUN npm run build

# RUNNER - Production image
FROM nginx:stable-alpine

COPY --from=builder /app/build /usr/share/nginx/html
COPY --from=builder /app/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
