import { Route, Router } from 'similar-server';
import HomeController from './controllers/HomeController';
import UserAPIController from './controllers/UserAPIController';

export default Router('/',[
    Route('home/:id', new HomeController()),
    Route('api/oauth', [
        Route('user', new UserAPIController())
    ])
]);