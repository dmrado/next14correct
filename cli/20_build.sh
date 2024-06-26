docker build -t beit-yehoshua-image -f beit-yehoshua.Dockerfile ../
docker build -t beit-yehoshua-db-image -f mysql.Dockerfile .
docker build -t root-nginx-proxy-image -f nginx.Dockerfile .
