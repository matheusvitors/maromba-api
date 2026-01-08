import { Divisao } from "@/core/models/divisao";

export interface Treino {
	id: string;
	nome: string;

	divisoes?: Divisao[];
}
