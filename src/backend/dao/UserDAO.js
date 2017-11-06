import Model from 'similar-server/dist/model';
import ResultModel from '../models/ResultModel';
import UserModel from '../models/UserModel';
import FileModel from '../models/FileModel';
class UserDAO {
    async save(data) {
        const user = new UserModel(data);
        const result = new ResultModel();
        try{
            const response = await user.save();
            result.Data = response;
            result.Status = 'success';
        } catch(e) {
            result.Msg = e.message;
            result.Status = 'error';
        }
        return result;
    }
    async queryUserById(id) {
        const result = new ResultModel();
        try{
            const response = await UserModel.findById(id).exec();
            result.Data = response;
            result.Status = 'success';
            return result;
        } catch(e) {
            result.Msg = e.message;
            result.Status = 'error';
            return result;
        }
    }

    async queryUserByOptions(options) {
        const result = new ResultModel();
        try{
            console.log(options.include);
            let response = await UserModel.findOne(options);
            
            if(response === null) {
                result.Status = 'error';
                result.Msg = '用户名密码错误';
            } else {
                result.Status = 'success';
                result.Data = response;
            }
            return result;
        } catch(e) {
            result.Msg = e.message;
            result.Status = 'error';
            return result;
        }
    }
}

export default UserDAO;