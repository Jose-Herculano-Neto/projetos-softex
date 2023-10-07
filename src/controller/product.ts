import { Request, Response} from "express";
import { AppDataSource } from "../database/data-source";
import { Product } from "../entities/product";


class ProductController {
    async createProduct(req: Request, res: Response) {
        const { title, price, color, size} = req.body;

        if(!title) {
            res.status(500).json({message: "O campo title é obrigatório!"});
        }

        try {
            const product = await AppDataSource.getRepository(Product).save({
                title,
                price,
                color,
                size
            })

            return res.status(201).json(product);

        } catch (error) {
            console.log(error, 'Erro ao listar produtos')
            return res.status(500).json({ message: 'Erro ao criar produto, tente novamente'});
        }        
    }
    async listProducts(req: Request, res: Response){
        const products = await AppDataSource.getRepository(Product).find();
        //return res.status()
    }
}

export default new ProductController();