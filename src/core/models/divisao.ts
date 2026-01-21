import { ExercicioDivisao } from "@/core/models/exercicio-divisao";

export interface Divisao {
	id: string;
	nome: string;
	exercicios: ExercicioDivisao[];
}
