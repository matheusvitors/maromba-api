import { Treino } from "@/core/models/treino";

export interface Usuario {
	id: string;
	nome: string;
	username: string;
	password: string;
	email: string;

	treinos?: Treino[];
}
