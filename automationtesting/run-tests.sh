#!/bin/bash

IMAGE_NAME=automationtesting

echo "Running tests in Docker container"
echo "-------------------------------------"

echo "Set the Basic Auth credentials"
read -p "USER?" USER
read -p "PASSWORD?" PASSWORD
echo "Set the user login credentials"
read -p "Login email?" LOGIN_EMAIL
read -p "Login password?" LOGIN_PASSWORD

npx cypress run --env USER=$USER,PASSWORD=$PASSWORD,LOGIN_EMAIL=$LOGIN_EMAIL,LOGIN_PASSWORD=$LOGIN_PASSWORD