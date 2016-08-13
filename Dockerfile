FROM node:latest

WORKDIR /Angular2TS-Starter-Kit

ADD . /Angular2TS-Starter-Kit
RUN npm install

EXPOSE 3000
CMD npm start
