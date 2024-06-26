FROM nginx:stable-alpine3.19

COPY  nginx.conf /etc/nginx/conf.d/default.conf

WORKDIR /app

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
