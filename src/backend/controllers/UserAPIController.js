import url from 'url';
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

    @Post('register')
    @RenderAPI()
    Register(req, res, next, params) {
        // 1. 参数校验
        if(!req.body.email) {
            return new ResultModel(ResultModel.Error, '邮箱不能为空');
        }

        if(!req.body.password) {
            return new ResultModel(ResultModel.Error, '密码不能为空');
        }

        if(!req.body.username) {
            return new ResultModel(ResultModel.Error, '用户名不能为空');
        }

        if(!req.body.age) {
            return new ResultModel(ResultModel.Error, '年龄不能为空');
        }

        if(!req.body.gender) {
            return new ResultModel(ResultModel.Error, '性别不能为空');
        }

        if(isNaN(req.body.age) || parseInt(req.body.age)<0 || parseInt(req.body.age) > 200) {
            return new ResultModel(ResultModel.Error, '年龄必须为数值0-200');
        }

        if(isNaN(req.body.gender) || parseInt(req.body.gender)<0 || parseInt(req.body.gender)>1) {
            return new ResultModel(ResultModel.Error, '性别必须为数值0或1');
        }

        // 执行业务逻辑
        const srvUrl = url.parse(`http://${req.headers.host}${req.url}`);
        console.log(srvUrl)
        return services.register(req.body, srvUrl);
    }

}

export default UserAPIController;