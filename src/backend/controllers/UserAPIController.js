import Controller from 'similar-server/dist/controller';
import { RenderAPI, Get } from 'similar-server/dist/view';
import UserService from '../services/UserService';

const services = new UserService();

class UserAPIController extends Controller {
    @Get('login')
    @RenderAPI()
    Login(req, res, next, params) {
        console.log(req.body, req.json);
        return services.queryUserByOptions({
            attributes: {
                exclude: ['password', 'avatarFileId', 'is_del', 'avatar_file_id']
            },
            where: {
                userName: {
                    '$eq': "liuhong1happy"
                },
                password:{
                    '$eq': '123456'
                }
            },
            include: [
                { 
                    association: 'Avatar',
                    attributes: {
                        exclude: ['is_del', 'id', 'create_dt', 'update_dt']
                    },
                }
            ]
        });
    }

}

export default UserAPIController;