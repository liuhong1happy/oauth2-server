import Controller from 'similar-server/dist/controller';
import { RenderAPI, Post } from 'similar-server/dist/view';
import UserService from '../services/UserService';
import ResultModel from '../models/ResultModel';

const services = new UserService();

class UserAPIController extends Controller {
    @Post('login')
    @RenderAPI()
    Login(req, res, next, params) {
        // 1. 参数校验
        const result = new ResultModel();
        if(!req.body.email) {
            result.Status = 'error';
            result.Msg = '邮箱不能为空';
            return result;
        }

        if(!req.body.password) {
            result.Status = 'error';
            result.Msg = '密码不能为空';
            return result;
        }
        // 执行业务逻辑
        return services.login(req.body);
    }

}

export default UserAPIController;