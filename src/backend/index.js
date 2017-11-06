import Application from 'similar-server/dist/application';
import DBUtils from './utils/db';
import process from 'process';
import bodyParser from 'body-parser';

DBUtils.Connect().then(isConnection=>{
    if(isConnection) {
        const app = Application();
        // parse application/x-www-form-urlencoded
        app.use(bodyParser.urlencoded({ extended: false }))
        // parse application/json
        app.use(bodyParser.json())
        // router
        app.router(require('./router').default);
        // static plugin
        app.static('assets');
        // init routes & plugins
        app.init();
        // listen 3002 port
        app.listen(3002);
    } else {
        process.exit(0);
    }
})

