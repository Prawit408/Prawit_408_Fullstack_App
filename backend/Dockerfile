# Stage 1: Build stage
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

# Stage 2: Production stage
FROM node:18-alpine
WORKDIR /app
# ก๊อปปี้เฉพาะส่วนที่จำเป็นมาจาก build stage
COPY --from=build /app .
EXPOSE 3000

# เพิ่ม Healthcheck (ตามโจทย์ระบุ)
HEALTHCHECK --interval=30s --timeout=3s \
  CMD wget --quiet --tries=1 --spider http://localhost:3000/api/demo || exit 1

CMD ["node", "server.js"]