import Application from 'similar-server/dist/application';
import DBUtils from './utils/db';

DBUtils.Connect().then(isConnection=>{
    if(isConnection) {
        const app = Application();
        // router
        app.router(require('./router').default);
        // static plugin
        app.static('assets');
        // init routes & plugins
        app.init();
        // listen 3002 port
        app.listen(3002);
    }
})

