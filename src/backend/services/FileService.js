import ResultModel from '../models/ResultModel';
import multiparty from 'multiparty';
import process from 'process'
import path from 'path'
import fs from 'fs'
import fileMD5 from '../utils/fileMD5';
// import FileDAO from '../dao/FileDAO';

const form = new multiparty.Form({
    encoding:"utf-8",
    uploadDir:"files",  //文件上传地址
    keepExtensions:true  //保留后缀
})

class FileService {
    async UploadFile(req) {
        const ParseForm = ()=> {
            return new Promise((resolve, reject)=> {
                const result = new ResultModel();
                try{
                    form.parse(req, function(err, fields, files) {
                        if(err) {
                            result.Status = "error";
                            result.Msg = "上传文件失败";
                            resolve(result);
                        } else {
                            const obj ={};
                            Object.keys(fields).forEach(function(name) {
                                console.log('name:' + name+";filed:"+fields[name]);
                                obj[name] = fields[name];
                            });
                    
                            Object.keys(files).forEach(function(name) {
                                console.log('name:' + name+";file:", files[name]);
                                obj[name] = files[name];
                            });

                            if(obj['file'] && obj['file'].length>0) {
                                var file = obj['file'][0];
                                var filePath = path.join(process.cwd(), file.path)
                                // 开始计算md5值
                                fileMD5.createHash(filePath).then(md5=> {
                                    if(md5) {
                                        // 开始上传文件到其他平台，此处复制文件到置顶目录
                                        var copyFilePath =  "upload/" + md5 + path.extname(filePath);
                                        var dstFilePath = path.join(process.cwd(), copyFilePath)
                                        // 创建读取流
                                        var readable = fs.createReadStream(filePath);
                                        // 创建写入流
                                        var writable = fs.createWriteStream(dstFilePath);   
                                        // 通过管道来传输流
                                        readable.pipe(writable);
                                        // 删除原来的文件
                                        fs.unlinkSync(filePath);
                                        // 拷贝成功后，返回结果
                                        result.Status = "success";
                                        result.Data = copyFilePath;
                                    } else {
                                        result.Status = "error";
                                        result.Msg = "计算文件哈希值错误";
                                    }
                                    resolve(result);
                                })
                            } else {
                                result.Status = "error";
                                result.Msg = "file字段中没有文件";
                                resolve(result);
                            }
                        }
                    });
                }catch(err) {
                    console.log("上传文件出现异常", err)
                    result.Status = "error"
                    result.Msg = "上传文件出现异常"
                    resolve(result)
                }
            })
        }
        return await ParseForm();
    }
}

export default FileService;