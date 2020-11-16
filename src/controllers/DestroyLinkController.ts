import { Request, Response } from 'express';

import belvoService from '../services/BelvoService';

export default class DestroyLinkController {
    public async index(request: Request, response: Response): Promise<Response> {
        try {

            const { linkId } = request.query;

            const belvo = await belvoService.init(request.params.env);

            const destroy = await belvo.links.delete(linkId);
            
            return response.status(204).json(destroy);
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