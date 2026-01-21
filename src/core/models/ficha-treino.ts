import { ExecucaoExercicio } from "@/core/models/execucao-exercicio";
import { ExercicioDivisao } from "@/core/models/exercicio-divisao";

export interface FichaTreino {
	id: string;
	data: Date;
	exercicios: ExercicioDivisao[];
	exerciciosExecutados: ExecucaoExercicio[];
}
