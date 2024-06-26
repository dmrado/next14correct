#!/bin/bash

#sudo docker-comdopose -f docker-compose.yml --env-file=../.env -d up
docker-compose -f docker-compose.yml --env-file=../.env up
