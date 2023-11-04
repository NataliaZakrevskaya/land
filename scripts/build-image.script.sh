#!/bin/bash

cd ..

echo "START BUILD"

docker build -file--env .  -f ./Dockerfile -t land:latest


