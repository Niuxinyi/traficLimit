/**
 * Created by wuz on 2016/5/27.
 */
FM.dataApi.IxPoiName = FM.dataApi.DataModel.extend({
    geoLiveType: 'IX_POI_NAME',
    /*
     * DB-->UI
     */
    setAttributes: function (data) {
        // this.nameId = data['nameId'] || 0;
        this.pid = data.pid || 0;
        this.poiPid = data.poiPid || 0;
        this.nameGroupid = data.nameGroupid || 1;
        this.langCode = data.langCode;
        this.nameClass = data.nameClass || 1;
        this.nameType = data.nameType || 1;
        this.name = data.name || '';
        this.shortInfo = this.name;
        if (this.name.length > 10) {
            this.shortInfo = this.name.substring(0, 10) + '...';
        }
        this.namePhonetic = data.namePhonetic || '';
        this.keywords = data.keywords || '';
        this.nidbPid = data.nidbPid || '';
        this.rowId = data.rowId || null;
    },
    /*
     * UI-->DB
     */
    getIntegrate: function () {
        var ret = {};
        // ret["nameId"] = this.nameId;
        ret.pid = this.pid;
        ret.poiPid = this.poiPid;
        ret.nameGroupid = this.nameGroupid;
        ret.langCode = this.langCode;
        ret.nameClass = this.nameClass;
        ret.nameType = this.nameType;
        ret.name = this.name;
        ret.namePhonetic = this.namePhonetic;
        ret.keywords = this.keywords;
        ret.nidbPid = this.nidbPid;
        ret.rowId = this.rowId;
        return ret;
    }
});
