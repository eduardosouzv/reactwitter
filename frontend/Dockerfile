FROM node:16.5.0-alpine

WORKDIR /home/app/client

COPY package.json ./
RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent
COPY . .

CMD ["npm", "start"]