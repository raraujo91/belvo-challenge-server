import AuthController from "../controllers/AuthController";
import AccountsController from "../controllers/AccountsController";
import BalancesController from "../controllers/BalancesController";
import OwnersController from "../controllers/OwnersController";
import TransactionsController from "../controllers/TransactionsController";
import DestroyLinkController from "../controllers/DestroyLinkController";

const authController = new AuthController();
const accountsController = new AccountsController();
const balancesController = new BalancesController();
const ownersController = new OwnersController();
const transactionsController = new TransactionsController();
const destroyController = new DestroyLinkController();

import { Router } from 'express';

const routes = Router();

routes.use('/:env/accounts', accountsController.index);
routes.use('/:env/auth', authController.index);
routes.use('/:env/balance', balancesController.index);
routes.use('/:env/owners', ownersController.index);
routes.use('/:env/transactions', transactionsController.index);
routes.use('/:env/destroy', destroyController.index);

export default routes;