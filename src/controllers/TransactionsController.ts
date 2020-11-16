import { Request, Response } from 'express';

import belvoService from '../services/BelvoService';

export default class TransactionsController {
    public async index(request: Request, response: Response): Promise<Response> {
        try {

            let { linkId, date } = request.query;

            const belvo = await belvoService.init(request.params.env);

            const accounts = await belvo.transactions.retrieve(linkId, date);
            
            return response.status(200).json(accounts);
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