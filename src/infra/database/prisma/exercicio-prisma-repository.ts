import { FilterParams, Repository } from "@/application/interfaces";
import { database } from "@/infra/database/client";
import { Prisma } from "../../../../generated/prisma/client";
import { Exercicio } from "@/core/models";

export const exercicioPrismaRepository: Repository<Exercicio, Exercicio> = {
	list: async (): Promise<Exercicio[]> => {
		try {
			return await database.exercicio.findMany();
		} catch (error) {
			console.error(error);
			throw error;
		}
	},

	get: async (id: string): Promise<Exercicio | null> => {
		try {
			const data = await database.exercicio.findUnique({
				where: { id },
			});

			if (!data) {
				return null;
			}

			return data;
		} catch (error) {
			console.error(error);
			throw error;
		}
	},

	find: async (field: keyof Exercicio, value: any): Promise<Exercicio | null> => {
		const data = await database.exercicio.findFirst({ where: { [field]: value } });

		if (!data) {
			return null;
		}

		return data;
	},

	filter: async (params: FilterParams<Exercicio>[]): Promise<Exercicio[] | null> => {
		try {
			const data = await database.exercicio.findMany({
				where: { AND: params as Prisma.ExercicioWhereInput},
			});

			return data;
		} catch (error) {
			console.error(error);
			throw error;
		}
	},

	create: async (input: Exercicio): Promise<void> => {
		try {
			// const { usuarioId, ...rest } = input;

			const result = await database.exercicio.create({
				data: {
					...input
					// ...rest,
					// usuario: { connect: { id: usuarioId } },
				},
			});
		} catch (error) {
			console.error(error);
			throw error;
		}
	},

	edit: async (input: Exercicio): Promise<Exercicio | null> => {
		try {
			// const { usuarioId, ...rest } = input;
			const result = await database.exercicio.update({
				data: {
					...input
					// ...rest,
					// usuario: { connect: { id: usuarioId } },
				},
				where: {
					id: input.id,
				},
			});
			return result;
		} catch (error) {
			console.error(error);
			throw error;
		}
	},

	remove: async (id: string): Promise<void> => {
		try {
			await database.exercicio.delete({ where: { id } });
		} catch (error) {
			console.error(error);
			throw error;
		}
	},

	removeAll: async () => {
		try {
			await database.exercicio.deleteMany({});
		} catch (error) {
			console.error(error);
			throw error;
		}
	},
};
