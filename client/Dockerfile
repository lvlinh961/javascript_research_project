# Install node image
FROM node:12.2.0-alpine as client

WORKDIR /app

ENV PATH=/app/node_modules/.bin:$PATH

COPY ./package*.json /app/

RUN npm install --silent

RUN npm install react-scripts -g --silent

COPY . .

# Build the application
RUN yarn build

# Build nginx server
FROM nginx:latest

COPY --from=client /app/build /var/www/html

COPY ./nginx/default.conf /etc/nginx/conf.d

CMD [ "nginx", "-g", "daemon off;" ]