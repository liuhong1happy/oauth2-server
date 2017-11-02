import UserDAO from '../dao/UserDAO';

class UserService {
    constructor() {
        this.dao = new UserDAO();
    }
    queryUserById(id) {
        return this.dao.queryUserById(id);
    }
    createUser(data) {
        return this.dao.save(data);
    }
    queryUserByOptions(options) {
        return this.dao.queryUserByOptions(data);
    }
}

export default UserService;