import {Response, Request} from 'express'
import { AuthenticateUserService } from '../services/AuthenticateUserService';

class AuthenticateUserController {
    async handle(request: Request, response: Response) {
        
        const { code } = request.body;
        const service = new AuthenticateUserService();
        const result = await service.execute(code);

        return response.json(result);
    }

    async getcode(request: Request, response: Response) {
        response.redirect(
            `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`
        );
            console.log('chegou na rota get');
    }
    async github(request: Request, response: Response) {
        const { code } = request.query;

        return response.json(code);
        console.log('chegou na query')
    }
}

export { AuthenticateUserController };