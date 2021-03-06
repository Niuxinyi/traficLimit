angular.module('app').controller('ErrorCheckCtl', ['$window', '$scope', '$timeout', 'dsEdit', 'appPath', function ($window, $scope, $timeout, dsEdit, appPath) {
    var selectCtrl = fastmap.uikit.SelectController();
    $scope.initType = 0;
    /**
     * table表头配置项
     * @type {string[]}
     */
    $scope.theadInfo = ['检查规则', '错误等级', '错误对象', '错误信息', '检查时间', '检查管理'];
    $scope.initTypeOptions = [
        {
            id: 0,
            label: ' 未修改'
        },
        {
            id: 1,
            label: ' 例外'
        },
        {
            id: 2,
            label: ' 确认不修改'
        },
        {
            id: 3,
            label: ' 确认已修改'
        }
    ];
    /**
     * 修改table单元格显示的宽度防止属性面板弹出挤压出现垂直滚动条;
     */
    $scope.setTableCeilWidth = function () {
        var tableWidth = document.getElementById('errorCheckTable').clientWidth;
        $scope.descriptStyle = {
            width: (tableWidth - 60 - tableWidth * 0.06 - tableWidth * 0.05 - 110 - 110) + 'px',
            overflow: 'hidden',
            'text-overflow': 'ellipsis',
            'white-space': 'nowrap'
        };
    };
        /**
         * 修改检查项状态
         * @param selectInd
         * @param rowid
         */
    $scope.changeType = function (selectInd, rowid) {
        dsEdit.updateCheckType(rowid, selectInd).then(function (data) {
            console.log('修改成功');
            if ($scope.checkResultData.length > 1) {
                for (var i = 0; i < $scope.checkResultData.length; i++) {
                    if ($scope.checkResultData[i].id == rowid) {
                        $scope.checkResultData.splice(i, 1);
                        break;
                    }
                }
            } else {
                $scope.$emit('refreshCheckResult', true);
            }
        });
    };
    // 重新设置选择工具
    var resetToolAndMap = function () {
        var layerCtrl = fastmap.uikit.LayerController();
        var editLayer = layerCtrl.getLayerById('edit');
        var rdLink = layerCtrl.getLayerById('rdLink');
        var shapeCtrl = fastmap.uikit.ShapeEditorController();
        var tooltipsCtrl = fastmap.uikit.ToolTipsController();
        var eventCtrl = fastmap.uikit.EventController();
        eventCtrl.off(eventCtrl.eventTypes.GETLINKID); // 清除select**ShapeCtrl.js中的事件,防止菜单之间事件错乱
        eventCtrl.off(eventCtrl.eventTypes.GETADADMINNODEID);
        eventCtrl.off(eventCtrl.eventTypes.GETNODEID);
        eventCtrl.off(eventCtrl.eventTypes.GETRELATIONID);
        eventCtrl.off(eventCtrl.eventTypes.GETTIPSID);
        eventCtrl.off(eventCtrl.eventTypes.GETFACEID);
        eventCtrl.off(eventCtrl.eventTypes.RESETCOMPLETE);
        eventCtrl.off(eventCtrl.eventTypes.GETBOXDATA);
        eventCtrl.off(eventCtrl.eventTypes.GETRECTDATA);
        eventCtrl.off(eventCtrl.eventTypes.GETFEATURE);
        if (map.floatMenu) {
            map.removeLayer(map.floatMenu);
            map.floatMenu = null;
        }
        map.scrollWheelZoom.enable();
        editLayer.drawGeometry = null;
        editLayer.clear();
        editLayer.bringToBack();
        shapeCtrl.shapeEditorResult.setFinalGeometry(null);
        shapeCtrl.shapeEditorResult.setOriginalGeometry(null);
        shapeCtrl.stopEditing();
        rdLink.clearAllEventListeners();
        if (tooltipsCtrl.getCurrentTooltip()) {
            tooltipsCtrl.onRemoveTooltip();
        }
        if (map.currentTool) {
            map.currentTool.disable(); // 禁止当前的参考线图层的事件捕获
        }
        if (selectCtrl.rowKey) {
            selectCtrl.rowKey = null;
        }
        $(editLayer.options._div).unbind();
    };
    /**
     * 定位并高亮显示要素
     * @param pid
     * @param type
     */
    $scope.showOnMap = function (pid, featType, checkResult) {
        resetToolAndMap();
        if (checkResult.geometry) {
            var coord = checkResult.geometry.replace(/\(|\)/g, '').split(',');
            var zoom = map.getZoom() < 17 ? 17 : map.getZoom();
            map.setView([parseFloat(coord[1]), parseFloat(coord[0])], zoom);
        }
        $scope.$emit('locatedOnMap', {
            objPid: pid,
            objType: featType.split('_').join('')
        });
    };
    // $scope.$on('highMappoi',highlighPoi);
    /** ************ 数据格式化 **************/
    /* 检查时间*/
    function getCreateData(a, rows) {
        return rows;
    }

    function getOption(b, rows) {
        return rows;
    }
}]);
