
# Build
FROM node:16 as build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# 
FROM ubuntu
RUN apt-get update
RUN DEBIAN_FRONTEND=noninteractive apt-get install -y nginx 
COPY --from=build /app/build/. /var/www/html/.
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]