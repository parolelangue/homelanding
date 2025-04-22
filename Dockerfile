# FROM node:18-alpine AS dependencies
FROM node:20-alpine AS dependencies
# RUN npm install -g yarn
WORKDIR /app
COPY package.json ./

# FROM node:18-alpine AS builder
FROM node:20-alpine AS builder
WORKDIR /app
COPY . .

# RUN yarn install
RUN npm install --legacy-peer-deps
RUN npm run build

# FROM node:18-alpine AS runner
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV production

COPY --from=builder /app/next.config.ts ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

EXPOSE 80
CMD ["npm", "run", "start"]