FROM node:16.13.2-alpine
WORKDIR /www
EXPOSE 3000
# node server.js
CMD ["node", "server.js"]