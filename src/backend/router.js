import { Route, Router } from 'similar-server';
import HomeController from './controllers/HomeController';
import UserAPIController from './controllers/UserAPIController';
import FileAPIController from './controllers/FileAPIController';

export default Router('/',[
    Route('home/:id', new HomeController()),
    Route('api/oauth', [
        Route('user', new UserAPIController())
    ]),
    Route('api/common', [
        Route('upload', new FileAPIController())
    ])
]);