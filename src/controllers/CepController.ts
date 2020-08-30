import { Request, Response } from 'express';
import { CepModel } from '../models/CepModel';
// import axios from 'axios';
import data from '../../dataMock.json';
import substituirZeros from '../utils/substituirZeros';

class CepController {

    /* async */ show(request: Request, response: Response) {
        let { id } = request.params;
        // let localidade: CepModel = new CepModel('', '', '', '', '', '', '', '', '', '');

        const validarFormato = new RegExp(/^[0-9]{8}$/);

        if (validarFormato.test(id)) {
            // Estava utilizando uma API grátis para consulta de CEP,
            // porém durante o desenvolvimento a mesma caiu e não consegui
            // mais continuar o desenvolvimento da solução, optando por 'mocar'.

            // try {
            //     let i = 1;
            //     do {
            //         const { status, statusText, data } = await axios.get(`https://viacep.com.br/ws/${id}/json/`);
            //         console.log(status);
            //         console.log(statusText);
            //         console.log(data);
            //         data.hasOwnProperty('cep') ? localidade = data : id = id;
            //         console.log(this.substituirZeros(id, i));
            //         i++;
            //     } while (localidade.cep === '' || id !== '00000000');

            //     return response.json({ status: 200, data: localidade });

            // } catch (error) {
            //     return response.json({ status: 400, message: error.message });
            // }

            let index = 1;
            let achou = false;

            do {
                if (data.some((loc) => loc.cep === id)) {
                    const localidade = data.find(item => item.cep === id);
                    achou = true;
                    return response.json({ status: 200, data: localidade });
                } else {
                    id = substituirZeros(id, index);
                }
                index++;
            } while (id !== '00000000' && !achou);

            return response.json({ status: 404, message: 'Objeto não encontrado.' });

        } else {
            return response.json({ status: 400, message: 'CEP inválido.' });
        }
    }
}

export default CepController;