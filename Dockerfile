FROM node:14.17.0-alpine

WORKDIR /code

ENV PATH /code/node_modules/.bin:$PATH

COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
RUN npm install react-scripts@4.0.3 -g --silent

COPY . ./

CMD ["npm", "start"]