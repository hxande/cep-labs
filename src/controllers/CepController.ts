import { Request, Response } from 'express';
import { CepModel } from '../models/CepModel';
import axios from 'axios';

class CepController {

    async show(request: Request, response: Response) {

        let { id } = request.params;
        let localidade: CepModel = new CepModel('', '', '', '', '', '', '', '', '', '');

        const validarFormato = new RegExp(/^[0-9]{8}$/);

        if (validarFormato.test(id)) {
            try {
                let i = 1;
                do {
                    const { status, statusText, data } = await axios.get(`https://viacep.com.br/ws/${id}/json/`);
                    console.log(status);
                    console.log(statusText);
                    console.log(data);
                    data.hasOwnProperty('cep') ? localidade = data : id = id;
                    console.log(this.substituirZeros(id, i));
                    i++;
                } while (localidade.cep === '' || id === '00000000');

                return response.json({ status: 200, data: localidade });

            } catch (error) {
                console.error(error)
            }
        } else {
            return response.json({ status: 400, message: 'Favor informar os dados no formato correto.' });
        }
    }

    substituirZeros(text: string, index: number): string {
        return text.replace(text.substring(text.length - index, text.length), '0');
    }
}

export default CepController;