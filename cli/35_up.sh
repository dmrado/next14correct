#!/bin/bash

#sudo docker-comdopose -f docker-compose.yml --env-file=../.env -d up
#docker-compose -f docker-compose.yml --env-file=../.env up


docker network create beit-yehoshua-network
docker run --name beit-yehoshua-container    --network beit-yehoshua-network -p 3000:3000 -d beit-yehoshua-image
docker run --name beit-yehoshua-db-container --network beit-yehoshua-network -p 3306:3306 -d beit-yehoshua-db-image
docker run --name root-nginx-proxy-container --network beit-yehoshua-network -p 80:80     -d root-nginx-proxy-image
