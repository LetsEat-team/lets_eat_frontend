# build stage
FROM node:16.20.1-alpine AS build

# 작업 디렉토리 설정
WORKDIR /app

# 패키지 설치
COPY package*.json ./
RUN npm ci

# 소스 복사 및 빌드
COPY . .
RUN npm run build

# nginx로 정적 파일 서빙
FROM nginx:1.25-alpine

# react 빌드 결과 복사
COPY --from=build /app/build /usr/share/nginx/html

# 포트 노출
EXPOSE 80

# Nginx 실행 
CMD ["nginx", "-g", "daemon off;"]

