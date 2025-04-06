FROM cypress/included:latest

WORKDIR /app

COPY . .

RUN npm install
RUN chmod +x run-tests.sh

ENTRYPOINT ["npx", "cypress", "run"]