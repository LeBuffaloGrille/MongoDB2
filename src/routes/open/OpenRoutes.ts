import {Express, Request, Response} from 'express';
import logger from '../../logger';

function openRoutes(app: Express){
    app.get('/user', (req : Request, res: Response) => {
        logger.info("Notre route user est fonctionnelle");
        res.sendStatus(200);
    });
}

export default openRoutes;