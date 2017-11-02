import Controller from 'similar-server/dist/controller';
import { RenderAPI, Get } from 'similar-server/dist/view';
import UserService from '../services/UserService';

const services = new UserService();

class UserAPIController extends Controller {
    @Get('login')
    @RenderAPI()
    Login(req, res, next, params) {
        console.log(req.body, req.json);
        return model.queryUserByOptions({
            userName: "liuhong1happy",
            password: '123456'
        });
    }

}

export default UserAPIController;