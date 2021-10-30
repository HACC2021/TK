FROM node:16
LABEL version="1.0"
LABEL description="Development image for API"
WORKDIR /app
COPY package*.json /app
RUN npm install && npm cache clean --force
COPY . /app
EXPOSE 5000
CMD ["npm", "run", "dev"]

