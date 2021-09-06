const { IMM, OSS, projectId } = require('../config');
const Core = require('@alicloud/pop-core');
const { md5 } = require('md5js');

const client = new Core(IMM);

const User = {
    ID: 'oAYp15lZ',
    Name: 'Rafong',
};
const FileID = md5(parseInt(Math.random() * 1000) + 'message');

const File = (Name) => {
    return [
        {
            Modifier: User,
            Name,
            Creator: User,
            SrcUri: `${OSS.src}/office/${Name}`,
            Version: 3,
            TgtUri: `${OSS.src}/transform/${Name.split('.')[0]}`,
        },
    ];
};

module.exports = {
    async createTask(file) {
        var params = {
            Action: 'GetWebofficeURL',
            File: JSON.stringify(File(file)),
            FileID: FileID,
            NotifyEndpoint: 'http://1660698611279105.mns.cn-hangzhou-internal.aliyuncs.com',
            Permission: '{"Rename": false, "Readonly": true, "History": false}',
            Project: projectId,
            User: JSON.stringify(User),
            RegionId: OSS.regionId,
            NotifyTopicName: "IMM"
        };

        var requestOption = {
            method: 'POST',
        };
        return client.request('GetWebofficeURL', params, requestOption);
    }
};
