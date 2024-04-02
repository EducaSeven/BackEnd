"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createQuizService = void 0;
const clientDataBase_1 = require("../../database/clientDataBase");
const createQuizService = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let savedQuiz = yield clientDataBase_1.clientDataBase.quiz.create({
            data: {
                nome: data.titulo,
                description: data.descricao,
            },
        });
        data.perguntas.forEach((p) => __awaiter(void 0, void 0, void 0, function* () {
            yield clientDataBase_1.clientDataBase.pergunta.update({
                data: {
                    quizId: savedQuiz.id,
                },
                where: { id: p },
            });
        }));
        return { quiz: savedQuiz };
    }
    catch (error) {
        console.error('Erro ao salvar quiz:', error);
    }
});
exports.createQuizService = createQuizService;
