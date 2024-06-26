#!/bin/bash

sudo docker-compose -f docker-compose.develop.yml --env-file=.env.develop down
