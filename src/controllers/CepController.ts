import { Request, Response } from 'express';
import { CepModel } from '../models/CepModel';
import axios from 'axios';

class CepController {

    async show(request: Request, response: Response) {

        const { id } = request.params;
        let localidade: CepModel;
        try {
            const { data } = await axios.get(`https://viacep.com.br/ws/${id}/json/`);
            localidade = data;
            return response.json(localidade);

        } catch (error) {
            console.log(error)
        }
    }
}

export default CepController;