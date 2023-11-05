FROM node:18.16.0-alpine3.17
WORKDIR /app
COPY package*.json ./


ARG NODE_ENV
RUN if [ "$NODE_ENV" = "development" ]; \
        then npm install; \
        else npm install --only=production; \
        fi
  

COPY . ./
#EXPOSE 3000
ENV PORT 3000
EXPOSE $PORT
#CMD ["npm", "start"]
#CMD ["node", "./src/index.tsx"]
CMD ["node", "index.js"]