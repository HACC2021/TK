FROM node:16
LABEL version="1.0"
LABEL description="Development image for frontend"
WORKDIR /app
COPY package.json ./
RUN npm install && npm cache clean --force
COPY . .
EXPOSE 3000
CMD ["npm", "run", "start"]

