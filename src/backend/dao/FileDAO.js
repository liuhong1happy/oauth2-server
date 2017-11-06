import Model from 'similar-server/dist/model';
import ResultModel from '../models/ResultModel';
import FileModel from '../models/FileModel';

class UserDAO {
    async save(data) {
        const fileModel = new FileModel(data);
        const result = new ResultModel();
        try{
            const response = await fileModel.save();
            result.Data = response;
            result.Status = 'success';
        } catch(e) {
            result.Msg = e.message;
            result.Status = 'error';
        }
        return result;
    }

    async queryFileById(id) {
        const result = new ResultModel();
        try{
            const response = await FileModel.findById(id).exec();
            result.Data = response;
            result.Status = 'success';
            return result;
        } catch(e) {
            result.Msg = e.message;
            result.Status = 'error';
            return result;
        }
    }
}

export default UserDAO;