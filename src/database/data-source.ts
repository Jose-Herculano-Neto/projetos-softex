import { DataSource } from "typeorm"
import { User } from "../entities/users";
import { Product } from "../entities/product";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "testando",
    password: "123@duuh",
    database: "api_softex",
    entities: [User, Product],
    synchronize: true,
});

