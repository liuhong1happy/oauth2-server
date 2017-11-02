import DBUtils from '../utils/db';

DBUtils.Connect().then(isConnected=>{
    console.log("isConnected:", isConnected)
    if(isConnected) {
        DBUtils.InitTable().then((result)=>{
            console.log(result);
            if(result) {
                DBUtils.InitData();
            }
        });
    }
})
