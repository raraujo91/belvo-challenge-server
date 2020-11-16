import { Request, Response } from 'express';

import belvoService from '../services/BelvoService';

export default class AuthController {
    public async index(request: Request, response: Response): Promise<Response> {
        try {
            const belvo = await belvoService.init(request.params.env);

            const token = await belvo.widgetToken.create();
            
            return response.status(200).json(token);
        } catch(error) {
            let status

            if(error.statusCode) {
                status = error.statusCode
            } else {
                status = 500;
            }
            
            return response.status(status).json(error);
        }
    }
}