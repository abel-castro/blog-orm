import "reflect-metadata"
import { DataSource } from "typeorm"
import { Post } from "./entity/Post"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "blog",
    synchronize: true,
    logging: false,
    entities: [Post],
    migrations: [],
    subscribers: [],
})
