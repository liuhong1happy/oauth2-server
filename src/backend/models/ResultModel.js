import Model from 'similar-server/dist/model';

class ResultModel extends Model {
    getData() {
        const { status, msg, data } = this;
        return { status, msg, data };
    }
    static get Success() { return 'success' }
    static get Error(){ return 'error' }
    set Status(status) {
        this.status = status;
    }
    set Msg(msg) {
        this.msg = msg;
    }
    set Data(data) {
        this.data = data;
    }
}

export default ResultModel;