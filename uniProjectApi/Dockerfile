FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

# expose the API port
EXPOSE 5000

# run the API server
CMD ["node", "server/index.js"]

