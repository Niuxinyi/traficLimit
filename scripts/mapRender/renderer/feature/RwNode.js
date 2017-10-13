/**
 * Created by mali on 2016/6/23.
 */
FM.mapApi.render.renderer.RwNode = FM.mapApi.render.Renderer.extend({
    initialize: function (feature, zoom) {
        FM.mapApi.render.Renderer.prototype.initialize.call(this, feature, zoom);
         // 绑定函数作用域
        FM.Util.bind(this);
    },
    getSymbol: function () {
        var symbolData = {
            type: 'CircleMarkerSymbol',
            radius: 3,
            fillColor: '#4F4F2F',
            fillOpacity: 0
        };
        var symbol = this._symbolFactory.createSymbol(symbolData);
        symbol.geometry = this._geometryFactory.fromGeojson(this._feature.geometry);
        return symbol;
    },
    getHighlightSymbol: function () {
        var symbolData = {
            type: 'CircleMarkerSymbol',
            radius: 3,
            color: 'blue'
        };
        var symbol = this._symbolFactory.createSymbol(symbolData);
        symbol.geometry = this._geometryFactory.fromGeojson(this._feature.geometry);
        return symbol;
    }
});
