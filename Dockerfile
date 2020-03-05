FROM node:latest

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json /app/package.json
RUN npm install
RUN yarn add yup
CMD ["yarn", "start" ]
