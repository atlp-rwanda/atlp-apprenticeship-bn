FROM node:18
WORKDIR /app
COPY . ./
RUN npm install
RUN npm run build
EXPOSE 4000
CMD ["npm","start"]