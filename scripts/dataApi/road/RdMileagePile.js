/**
 * Created by linglong on 2016/11/16.
 * Class Rdnode
 */
FM.dataApi.RdMileagePile = FM.dataApi.Feature.extend({
    /**
     *
     * @param data
     * @param options 其他可选参数
     */
    setAttributes: function (data) {
        this.geoLiveType = 'RDMILEAGEPILE';
        this.pid = data.pid || '';
        this.mileageNum = data.mileageNum;
        this.linkPid = data.linkPid;
        this.direct = data.direct;
        this.roadName = data.roadName;
        this.roadNum = data.roadNum;
        this.roadType = data.roadType;
        this.source = data.source;
        this.dllx = data.dllx;
        this.geometry = data.geometry;
        this.meshId = data.meshId;
        this.rowId = data.rowId || null;
    },

    /**
     * 获取RdElectronicEye简略信息
     * @method getSnapShot
     *
     * @return {object} getSnapShot.
     */
    getSnapShot: function () {
        var data = {};
        data.pid = this.pid;
        data.mileageNum = this.mileageNum;
        data.linkPid = this.linkPid;
        data.direct = this.direct || 0;
        data.roadName = this.roadName || '';
        data.roadNum = this.roadNum || '';
        data.roadType = this.roadType || 1;
        data.source = this.source || 1;
        data.dllx = this.dllx || '';
        data.geoLiveType = this.geoLiveType;
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
        data.mileageNum = parseFloat(this.mileageNum);
        data.linkPid = this.linkPid;
        data.direct = this.direct || 0;
        data.roadName = this.roadName || '';
        data.roadNum = this.roadNum || '';
        data.roadType = this.roadType || 1;
        data.source = this.source || 1;
        data.dllx = this.dllx || '';
        data.geometry = this.geometry;
        data.meshId = this.meshId || 0;
        // data.geoLiveType = this.geoLiveType;
        data.rowId = this.rowId;
        return data;
    }
});

/** *
 * rdMileagePile
 * @param id
 * @param options 其他可选参数
 * @returns {.dataApi.rdNode}
 */
FM.dataApi.rdMileagePile = function (data, options) {
    return new FM.dataApi.RdMileagePile(data, options);
};

