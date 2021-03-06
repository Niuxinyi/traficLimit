/**
 * Created by liuyang on 2016/8/9.
 * Class crfInter
 */

FM.dataApi.RdInter = FM.dataApi.Feature.extend({
    /**
     *
     * @param data
     * @param options 其他可选参数
     */
    setAttributes: function (data) {
        this.geoLiveType = 'RDINTER';
        this.pid = data.pid || '';
        this.links = [];
        this.nodes = [];

        for (var i = 0; i < data.links.length; i++) {
            var link = FM.dataApi.rdInterLinks(data.links[i]);
            this.links.push(link);
        }

        for (var j = 0; j < data.nodes.length; j++) {
            var node = FM.dataApi.rdInterNodes(data.nodes[j]);
            this.nodes.push(node);
        }
        this.rowId = data.rowId || null;
    },

    /**
     * 获取RdInter简略信息
     * @method getSnapShot
     *
     * @return {object} getSnapShot.
     */
    getSnapShot: function () {
        var data = {};
        data.pid = this.pid;
        data.nodes = [];
        data.links = [];
        data.geoLiveType = this.geoLiveType;
        for (var i = 0; i < this.links.length; i++) {
            data.links.push(this.links[i].getIntegrate());
        }
        for (var j = 0; j < this.nodes.length; j++) {
            data.nodes.push(this.nodes[j].getIntegrate());
        }
        data.rowId = this.rowId;
        return data;
    },

    /**
     * 获取RdElectronicEye详细信息
     * @method getIntegrate
     *
     * @return {object} getIntegrate.
     */
    getIntegrate: function () {
        var data = {};
        data.pid = this.pid;
        data.nodes = [];
        data.links = [];
        data.geoLiveType = this.geoLiveType;
        for (var i = 0; i < this.links.length; i++) {
            data.links.push(this.links[i].getIntegrate());
        }
        for (var j = 0; j < this.nodes.length; j++) {
            data.nodes.push(this.nodes[j].getIntegrate());
        }
        data.rowId = this.rowId;
        return data;
    }
});

/** *
 * RdSlope初始化函数
 * @param id
 * @param options 其他可选参数
 * @returns {.dataApi.rdNode}
 */
FM.dataApi.rdInter = function (data, options) {
    return new FM.dataApi.RdInter(data, options);
};

