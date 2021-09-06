// const { getOfficeConversionTask, createTask } = require('./src/query');
const { createTask } = require('./src/office');
const open = require('open')

// let AccessToken = 'db04f3a1f7c446e492ce10791a647cd4v3';
// let WebofficeURL = 'https://office-cn-hangzhou.imm.aliyuncs.com/office/w/d7bedef3799bc9bfa53540f0f7808a18dc9970c0?_w_tokentype=1';

// let onlineUrl = `https://files.meiway.cc/index.html?url=${encodeURIComponent(WebofficeURL)}&token=${AccessToken}`;
// console.log(onlineUrl)

// open(onlineUrl, 'chrome');

// 开始预览任务, 在mewiay-files的office文件夹放入对应的文件，文件名作为参数传入
createTask('word.docx').then(result=>{
    const { AccessToken, WebofficeURL} = result;
    let onlineUrl = `https://files.meiway.cc/index.html?url=${encodeURIComponent(WebofficeURL)}&token=${AccessToken}`;
    open(onlineUrl, 'chrome');
})
