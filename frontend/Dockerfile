FROM node:18.9-alpine

WORKDIR /app

EXPOSE 3000

COPY package.json package-lock.json yarn.lock ./

RUN npm install --silent

COPY . ./

CMD ["yarn", "start"]