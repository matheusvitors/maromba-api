import { Router, Request, Response } from "express";
import project from '../package.json';
import { exercicioPrismaRepository } from "@/infra/database/prisma";
import * as appRoutes from '@/infra/routes';

const routes = Router();

routes.get('/', (request: Request, response: Response) => {
	response.status(200).send({
		name: 'Maromba',
		version: project.version
	});
});

routes.get('/test', async (request: Request, response: Response) => {
	response.status(200).send({
		message: 'Test!',
		randomNumber: Math.random()
	});
});

routes.get('/exercicios', async (request: Request, response: Response) => {
	try {
		const exercicios =await exercicioPrismaRepository.list();
		response.status(200).send({
			exercicios
		});
	} catch (error) {
		response.status(500).send({
			error
		})
	}
});

routes.use(Object.values(appRoutes))

export { routes }
