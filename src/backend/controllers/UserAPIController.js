import Controller from 'similar-server/dist/controller';
import { RenderAPI, Post } from 'similar-server/dist/view';
import UserService from '../services/UserService';

const services = new UserService();

class UserAPIController extends Controller {
    @Post('login')
    @RenderAPI()
    Login(req, res, next, params) {
        return services.queryUserByOptions({
            attributes: {
                exclude: ['password', 'avatarFileId', 'is_del', 'avatar_file_id']
            },
            where: {
                email: {
                    '$eq': req.body.email || "",
                },
                password:{
                    '$eq': req.body.password || ''
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