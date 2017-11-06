import Controller from 'similar-server/dist/controller';
import { RenderAPI } from 'similar-server/dist/view';
import FileService from '../services/FileService';

const services = new FileService();

class FileController extends Controller {
    @RenderAPI()
    async POST(req, res, next, params) {
        return await services.UploadFile(req);
    }
}
export default FileController;