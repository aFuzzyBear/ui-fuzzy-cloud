FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 4321
CMD ["npm", "run", "preview", "--", "--host", "0.0.0.0", "--allowedHosts", "hello.deploy.afuzzy.cloud"]