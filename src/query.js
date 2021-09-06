const { RPCClient } = require('@alicloud/pop-core');
const { IMM, OSS, projectId } = require('../config');
const Core = require('@alicloud/pop-core');

const RPCClientItem = new RPCClient(IMM);
const client = new Core(IMM);

module.exports = {
    async createTask(file) {
        var params = {
            RegionId: OSS.regionId,
            SrcUri: `${OSS.src}/office/${file}`,
            TgtUri: `${OSS.src}/transform/${file}`,
            Project: projectId,
            TgtType: 'vector',
        };

        var requestOption = {
            method: 'POST',
        };
        return client.request('CreateOfficeConversionTask', params, requestOption)
    },
    async getOfficeConversionTask(taskId) {
        try {
            var params = {
                Project: projectId,
                TaskId: taskId,
            };
            var result = await RPCClientItem.request(
                'GetOfficeConversionTask',
                params
            );
            console.log(JSON.stringify(result));
        } catch (err) {
            console.log(err);
        }
    },
};
