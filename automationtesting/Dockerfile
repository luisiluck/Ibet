FROM cypress/included:latest

WORKDIR /app

COPY . .

RUN npm install

ENTRYPOINT ["npx", "cypress", "run"]