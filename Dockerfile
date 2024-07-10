FROM node:20.13.1-alpine3.20 AS builder

WORKDIR /app
COPY package.json ./
RUN npm install

COPY . .
WORKDIR /app
RUN npm run build


FROM node:20.13.1-alpine3.20
USER node:node
WORKDIR /app

COPY --from=builder --chown=node:node /app/build ./build
COPY --from=builder --chown=node:node /app/node_modules ./node_modules
COPY --chown=node:node package.json .
CMD ["node","build"]