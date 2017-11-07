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
            result.Status = ResultModel.Success;
        } catch(e) {
            result.Msg = e.message;
            result.Status = ResultModel.Error;
        }
        return result;
    }
    async queryUserById(id) {
        const result = new ResultModel();
        try{
            const response = await UserModel.findById(id).exec();
            result.Data = response;
            result.Status = ResultModel.Success;
            return result;
        } catch(e) {
            result.Msg = e.message;
            result.Status = ResultModel.Error;
            return result;
        }
    }

    async findOne(options) {
        let response = await UserModel.findOne(options);
        return response;
    }
}

export default UserDAO;