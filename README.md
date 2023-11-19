# Blog-ORM: a express + TypeORM demo

This project is a demonstration of how to build a REST API using Express that interacts with a PostgreSQL database using TypeORM.

Another goal of the project was to demonstrate how to create an endpoint that provides a stream response.

## Provided endpoints

- `GET http://localhost:3000/api/posts/` -> normal response
- `GET http://localhost:3000/api/posts/stream` -> stream response

## Steps to run this project

1. Run `npm i` command
2. Start the DB `docker-compose up -d`
3. Compile the code `npx tsc`
4. Create test data `npm run create_test_data`
5. Start `node dist/index.js`
