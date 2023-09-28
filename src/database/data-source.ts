import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "duuhnetoh",
    password: "123@duuh",
    database: "api-softex",
});

export const startDatabase = async () => {
    try{
        await AppDataSource.initialize();
    }
    catch(error){
        console.log(error, 'Erro ao conectar com o banco de dados')
    }
};