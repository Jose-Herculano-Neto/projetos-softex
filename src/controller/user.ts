import { error } from "console";
import { Request, Response } from "express";
import { AppDataSource } from "../database/data-source";

export const cadastrarUsuario = async (req: Request, res: Response) => {
  console.log(req.body, "ESTE É O CORPO DA REQUISIÇÃO");

  if(!req.body.cpf) {
    return res.status(400).send({ok: false, message: "O CPF é obrigatório"})
  }

  try {
    const user = new User();
    user.name = req.body.name;
    user.email = req.body.email;
    user.password = req.body.password;

    await AppDataSource.getRepository(User).save(user);

    return res.status(201).json({ ok: true });
  } catch {
    console.log(error, "Erro ao cadastrar usuário");
    return res.status(500).json({ ok: false, message: "Erro ao cadastrar usuário" });
  }

  return res.status(200).json({ ok: true });
};
