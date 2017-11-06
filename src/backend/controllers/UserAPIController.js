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
        if(!req.body.email) {
            return new ResultModel(ResultModel.Error, '邮箱不能为空');
        }

        if(!req.body.password) {
            return new ResultModel(ResultModel.Error, '密码不能为空');
        }
        // 执行业务逻辑
        return services.login(req.body);
    }

}

export default UserAPIController;