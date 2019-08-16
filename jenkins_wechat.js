const fs = require('fs');

const content =
    '{"description":"项目配置文件。","setting":{"urlCheck":false,"es6":true,"postcss":true,"minified":true,"newFeature":true},"miniprogramRoot":"./","compileType":"miniprogram","appid":"wxe1d72e6c68ae9d03","projectname":"wechat-app","condition":{"search":{"current":-1,"list":[]},"conversation":{"current":-1,"list":[]},"plugin":{"current":-1,"list":[]},"game":{"currentL":-1,"list":[]},"miniprogram":{"current":-1,"list":[]}}}';

fs.writeFileSync('./dist/project.config.json', content, 'utf-8');
