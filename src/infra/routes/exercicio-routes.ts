import { Router, Response, Request } from "express";
import { exercicioPrismaRepository } from "@/infra/database/prisma";
import { newID } from "@/infra/adapters/newID";


const router = Router();

const path = '/exercicios'

router.get(`${path}`, async (request: Request, response: Response) => {
	const exercicios = await exercicioPrismaRepository.list();

	response.status(200).json({exercicios})
});

router.post(`${path}`, async (request: Request, response: Response) => {
	await exercicioPrismaRepository.create({ id: newID(),  nome: request.body.nome});
	return response.status(201).end()
})



export { router as exercicioRouter };
