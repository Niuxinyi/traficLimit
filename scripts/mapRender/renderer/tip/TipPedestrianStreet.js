FM.mapApi.render.renderer.TipPedestrianStreet = FM.mapApi.render.Renderer.extend({
    initialize: function (feature, zoom) {
        FM.mapApi.render.Renderer.prototype.initialize.call(this, feature, zoom);
        // 绑定函数作用域
        FM.Util.bind(this);
    },
    getSymbol: function () {
        var symbols = [];
        for (var i = 0; i < 2; i++) {
            var waringUrl = '';
            if (this._feature.properties.choice === '') {
                waringUrl = '../../images/road/tips/1507/1507_0_0.svg';
            } else {
                waringUrl = '../../images/road/tips/1507/1507_3_0.svg';
            }
            var testSymbol = {
                type: 'ImageMarkerSymbol',
                url: waringUrl,
                width: 18,
                height: 18
            };
            var borderSymbol = {
                type: 'ImageMarkerSymbol',
                url: '../../images/road/tips/icon/icon_' + this._feature.properties.path + '.svg',
                width: 22,
                height: 22
            };
            var arrowSymbol = {
                type: 'TextMarkerSymbol',
                text: this._feature.properties.txt,
                offsetY: -26
            };

            var blurSymbol = null;
            if (this._feature.properties.status === 0) {
                blurSymbol = {
                    type: 'CircleMarkerSymbol',
                    radius: 9,
                    color: 'transparent',
                    opacity: 0.5
                };
            } else {
                blurSymbol = {
                    type: 'ImageMarkerSymbol',
                    url: '../../images/road/tips/icon/status_' + this._feature.properties.status + '.svg',
                    width: 11,
                    height: 11,
                    offsetX: 11,
                    offsetY: -11
                };
            }

            var timeSymbol = {
                type: 'ImageMarkerSymbol',
                url: '../../images/road/tips/icon/icon_time.svg',
                width: 6,
                height: 6,

                offsetX: -11
            };
            var outLineSymbol = {
                type: 'ImageMarkerSymbol',
                url: '../../images/road/tips/icon/icon_outline.svg',
                width: 6,
                height: 6,

                offsetX: 11
            };
            var accessorySymbol = {
                type: 'ImageMarkerSymbol',
                url: '../../images/road/tips/icon/icon_attachment.svg',
                width: 6,
                height: 6,
                offsetY: 11
            };
            var compositeSymbols1 = [borderSymbol, testSymbol, arrowSymbol, blurSymbol];
            if (this._feature.properties.accessorySymbol === 1) {
                compositeSymbols1.push(accessorySymbol);
            }
            if (this._feature.properties.timeSymbol === 1) {
                compositeSymbols1.push(timeSymbol);
            }
            if (this._feature.properties.outLineSymbol === 1) {
                compositeSymbols1.push(outLineSymbol);
            }
            var symbolData = {
                type: 'CompositeMarkerSymbol',
                symbols: compositeSymbols1
            };
            var symbol = this._symbolFactory.createSymbol(symbolData);
            symbol.geometry = this._geometryFactory.createPoint(i === 0 ? this._feature.geometry.geometries[0].coordinates : this._feature.geometry.geometries[1].coordinates);
            symbols.push(symbol);
        }
        // for (var j = 0; j < this._feature.properties.diffLink.length; j++) {
        //     if (this._feature.properties.diffLink[j].opt === 1) {
        //         var deleteLinkData = {
        //             type: 'SimpleLineSymbol',
        //             color: 'red',
        //             width: 2
        //         };
        //         var deleteLinkData1 = {
        //             type: 'MarkerLineSymbol',
        //             startOffset: 30,
        //             marker: {
        //                 type: 'CircleMarkerSymbol',
        //                 radius: 2,
        //                 color: '#009ef9',
        //                 offsetY: -2,
        //                 outLine: {
        //                     width: 1,
        //                     color: '#009ef9'
        //                 }
        //             },
        //             pattern: [20, 20]
        //         };
        //         var deleteLinkData2 = {
        //             type: 'MarkerLineSymbol',
        //             startOffset: 10,
        //             offset: -20,
        //             marker: {
        //                 type: 'CircleMarkerSymbol',
        //                 radius: 2,
        //                 color: '#009ef9',
        //                 offsetY: 2,
        //                 outLine: {
        //                     width: 1,
        //                     color: '#009ef9'
        //                 }
        //             },
        //             pattern: [20, 20]
        //         };
        //         var json = {
        //             type: 'CompositeLineSymbol',
        //             symbols: [deleteLinkData, deleteLinkData1, deleteLinkData2]
        //         };
        //         var deleteSymbol = this._symbolFactory.createSymbol(json);
        //         deleteSymbol.geometry = this._geometryFactory.createLineString(this._feature.properties.diffLink[j].geometry.coordinates);
        //         symbols.push(deleteSymbol);
        //     }
        //     if (this._feature.properties.diffLink[j].opt === 2) {
        //         var updateLinkData = {
        //             type: 'SimpleLineSymbol',
        //             color: 'blue',
        //             width: 2
        //         };
        //         var updateLinkData1 = {
        //             type: 'MarkerLineSymbol',
        //             startOffset: 30,
        //             marker: {
        //                 type: 'CircleMarkerSymbol',
        //                 radius: 2,
        //                 color: '#009ef9',
        //                 offsetY: -2,
        //                 outLine: {
        //                     width: 1,
        //                     color: '#009ef9'
        //                 }
        //             },
        //             pattern: [20, 20]
        //         };
        //         var updateLinkData2 = {
        //             type: 'MarkerLineSymbol',
        //             startOffset: 10,
        //             offset: -20,
        //             marker: {
        //                 type: 'CircleMarkerSymbol',
        //                 radius: 2,
        //                 color: '#009ef9',
        //                 offsetY: 2,
        //                 outLine: {
        //                     width: 1,
        //                     color: '#009ef9'
        //                 }
        //             },
        //             pattern: [20, 20]
        //         };
        //         var updateLinkJson = {
        //             type: 'CompositeLineSymbol',
        //             symbols: [updateLinkData, updateLinkData1, updateLinkData2]
        //         };
        //         var updateSymbol = this._symbolFactory.createSymbol(updateLinkJson);
        //         updateSymbol.geometry = this._geometryFactory.createLineString(this._feature.properties.diffLink[j].geometry.coordinates);
        //         symbols.push(updateSymbol);
        //     }
        //     if (this._feature.properties.diffLink[j].opt === 3) {
        //         var addLinkData = {
        //             type: 'SimpleLineSymbol',
        //             color: 'green',
        //             width: 2
        //         };
        //         var addLinkData1 = {
        //             type: 'MarkerLineSymbol',
        //             startOffset: 30,
        //             marker: {
        //                 type: 'CircleMarkerSymbol',
        //                 radius: 2,
        //                 color: '#009ef9',
        //                 offsetY: -2,
        //                 outLine: {
        //                     width: 1,
        //                     color: '#009ef9'
        //                 }
        //             },
        //             pattern: [20, 20]
        //         };
        //         var addLinkData2 = {
        //             type: 'MarkerLineSymbol',
        //             startOffset: 10,
        //             offset: -20,
        //             marker: {
        //                 type: 'CircleMarkerSymbol',
        //                 radius: 2,
        //                 color: '#009ef9',
        //                 offsetY: 2,
        //                 outLine: {
        //                     width: 1,
        //                     color: '#009ef9'
        //                 }
        //             },
        //             pattern: [20, 20]
        //         };
        //         var addLinkJson = {
        //             type: 'CompositeLineSymbol',
        //             symbols: [addLinkData, addLinkData1, addLinkData2]
        //         };
        //         var addSymbol = this._symbolFactory.createSymbol(addLinkJson);
        //         addSymbol.geometry = this._geometryFactory.createLineString(this._feature.properties.diffLink[j].geometry.coordinates);
        //         symbols.push(addSymbol);
        //     }
        // }
        return symbols;
    },
    getHighlightSymbol: function () {
        var symbols = [];
        for (var i = 0; i < 2; i++) {
            var symbolData = {
                type: 'CircleMarkerSymbol',
                radius: 9,
                color: 'transparent',
                outLine: {
                    width: 3,
                    color: '#00ffff'
                }
            };
            var symbol = this._symbolFactory.createSymbol(symbolData);
            symbol.geometry = this._geometryFactory.createPoint(i === 0 ? this._feature.geometry.geometries[0].coordinates : this._feature.geometry.geometries[1].coordinates);
            symbols.push(symbol);
        }
        for (var j = 0; j < this._feature.geometry.geometries[2].coordinates.length; ++j) {
            var lineData = {
                type: 'SimpleLineSymbol',
                color: '#00ffff',
                width: 2
            };
            var linesSymbol = this._symbolFactory.createSymbol(lineData);
            linesSymbol.geometry = this._geometryFactory.createLineString(this._feature.geometry.geometries[2].coordinates[j]);
            symbols.push(linesSymbol);
        }
        return symbols;
    }
});
