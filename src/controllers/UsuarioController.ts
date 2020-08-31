import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

class UsuarioController {

    login(req: Request, res: Response) {
        // Esta fixo mas poderia vir de uma base
        if (req.body.user === 'luiza' && req.body.pwd === 'labs') {
            // Autenticação ok
            const id = 1; // Valor que retornaria da id do usuário
            var token = jwt.sign({ id }, 'luizalabs' /* Segredo para geração */, {
                expiresIn: 300
            });
            return res.json({ auth: true, token: token });
        }

        res.status(500).json({ message: 'Login inválido!' });
    }

    verifyJWT(req: any, res: any, next: NextFunction) {
        const token = req.headers['x-access-token'];
        if (!token) return res.status(401).json({ auth: false, message: 'Não autorizado.' });

        jwt.verify(token, 'luizalabs', function (err: any, decoded: any) {
            if (err) return res.status(500).json({ auth: false, message: 'Falha na autenticação.' });

            req.userId = decoded.id;
            next();
        });
    }
}

export default UsuarioController;