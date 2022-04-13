import {Express, Request, Response} from 'express';
import logger from '../../logger';

function restrictedRoutes(app: Express){
    app.get('/metrics', (req : Request, res: Response) => {

        logger.info("Notre route metrics est fonctionnelle");

        res.sendStatus(200);
    });
}

export default restrictedRoutes;