import { Request, Response } from 'express';

import belvoService from '../services/BelvoService';

export default class ResumeController {
    public async index(request: Request, response: Response): Promise<Response> {
        try {

            const { link, token, session } = request.body;

            const belvo = await belvoService.init(request.params.env);

            const resume = await belvo.resources.resume(session, token, link);
            
            return response.status(200).json(resume);
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