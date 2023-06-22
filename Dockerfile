# syntax=docker/dockerfile:1

FROM node:18 AS build 
WORKDIR /usr/app
COPY . .
RUN yarn install
RUN yarn build

FROM node:18 AS run
WORKDIR /usr/app
COPY package*.json ./
RUN yarn install --production
RUN mkdir build
COPY --from=build /usr/app/dist ./build
EXPOSE 3000
CMD ["yarn", "serve", "build"]
