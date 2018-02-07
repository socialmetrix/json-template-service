FROM node:9.5.0-alpine

WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install --only=production

EXPOSE 80

COPY . .

CMD [ "npm", "start" ]
