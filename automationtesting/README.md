# Automated Tests Framework
 
 this project was implemented in good on Cypress and Cucumber.js basis.

 # requirements
 - Node.js v16 or upper

# install
 on **automationtesting** directory run
 
 ```
 npm install
 ```

It is required to export the next environment variables in order to set credential for Basic Auth and user login

- CYPRESS_USER (basic auth)
- CYPRESS_PASSWORD (basic auth)
- CYPRESS_LOGIN_EMAIL (user login)
- CYPRESS_LOGIN_PASSWORD (user login)

example of export environment variable

```
export CYPRESS_USER=basic_auth_user
```

## Running the tests

For debugging
```
npm run cy:open
```
For headless execution
```
npm run cy:run
```