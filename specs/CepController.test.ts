jest.mock('express');

import CepController from '../src/controllers/CepController';
import { Request, Response } from 'express';

describe('CepController', () => {
    it('Validar chamada com formato do cep valido', () => {
        const controller = new CepController();
        const req: any = {
            params: {
                id: '11111111'
            }
        };
        const res: any = {};
        res.json = () => { return { status: 200, data: 'data' } };
        const test = controller.show(req as Request, res as Response);
        expect(test.status).toBe(200);
    });

    it('Validar chamada com formato do cep invalido', () => {
        const controller = new CepController();
        const req: any = {
            params: {
                id: 'teste'
            }
        };
        const res: any = {};
        res.json = () => { return { status: 400, message: 'test' } };
        const test = controller.show(req as Request, res as Response);
        expect(test.status).toBe(400);
    });

    it('Validar chamada com formato do cep valido mas nao encontrado', () => {
        const controller = new CepController();
        const req: any = {
            params: {
                id: '99999999'
            }
        };
        const res: any = {};
        res.json = () => { return { status: 404, message: 'test' } };
        const test = controller.show(req as Request, res as Response);
        expect(test.status).toBe(404);
    });
});