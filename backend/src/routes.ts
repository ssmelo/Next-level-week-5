import { Router } from 'express';
import { SettingsController } from './controllers/SettingsController';
import { UserController } from './controllers/UserController';

const routes = Router();

const settingsController = new SettingsController();
const userController = new UserController();

routes.post("/settings", settingsController.create);
routes.post("/users", userController.create);

export { routes }