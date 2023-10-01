import { DataSource } from "typeorm"
import { User } from "../entities/users";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "testando",
    password: "123@duuh",
    database: "api_softex",
    entities: [User],
    synchronize: true,
});

