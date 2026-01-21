export interface ExecucaoExercicio {
	id: string;
	exercicioId: string;
	fichaTreinoId: string;
	exercicioDiivsaoId: string;
	series: {
		numeroSeries: number;
		repeticoes: number;
		pesoCustomizado?: number;
	};
	peso: number;
	dificuldade: number;
	avaliacaoExecucao: number;
	comentario: string;
}
