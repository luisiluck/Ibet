# Automated Tests Framework
 
This project was implemented along Cypress and Cucumber.js basis.

 # requirements
 - Node.js v18 or upper
 - Docker (optional)

# install
 on **automationtesting** directory run
 
 ```
 npm install
 ```
>[!important]
> It is required to export the next environment variables in order to set credential for Basic Auth and user login
>- CYPRESS_USER (basic auth)
>- CYPRESS_PASSWORD (basic auth)
>- CYPRESS_LOGIN_EMAIL (user login)
>- CYPRESS_LOGIN_PASSWORD (user login)
>
> #### example of export environment variable
>```
>export CYPRESS_USER=basic_auth_user
>```

## Running the tests

 - For debugging and visual excecution
   ```
   npm run cy:open
   ```
- For headless execution
  ```
  npm run cy:run
  ```
- Run along Chrome browser (Chrome browser should be intalled)
  ```
  npm run cy:run:chome
  ```
- Run along custom mobile viewport
  ```
  npm run cy:run:chome:mobile
  ``` 
- Run dockerized project
  > [!IMPORTANT]  
  > It is required to set credentials as env variables within container

  ```
  docker run --rm \
            -e CYPRESS_USER= \
            -e CYPRESS_PASSWORD= \
            -e CYPRESS_LOGIN_EMAIL= \
            -e CYPRESS_LOGIN_PASSWORD=\
            -v ./reports:/app/cypress/reports \
            ghcr.io/luisiluck/ibet/automationtesting:latest
  ```
