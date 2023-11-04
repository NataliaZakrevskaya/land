#!/bin/bash

docker stop land
docker rm land

docker run -d -p 3000:3000 --name  land -t land:latest