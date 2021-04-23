import { Router } from 'express';
import { SettingsController } from './controllers/SettingsController';
import { UserController } from './controllers/UserController';
import { MessagesController } from './controllers/MessagesController';
const routes = Router();

const settingsController = new SettingsController();
const userController = new UserController();
const messagesController = new MessagesController();

routes.post("/settings", settingsController.create);
routes.post("/users", userController.create);
routes.post("/messages", messagesController.create);
routes.get("/messages/:id", messagesController.showByUser);

export { routes }