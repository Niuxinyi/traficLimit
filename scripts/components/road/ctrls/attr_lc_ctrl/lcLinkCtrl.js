/**
 * Created by linglong on 2016/8/12.
 */
angular.module('app').controller('lcLinkController', ['$scope', 'dsEdit', '$ocLazyLoad', function ($scope, dsEdit, $ocLazyLoad) {
    var objCtrl = fastmap.uikit.ObjectEditController();
    var eventController = fastmap.uikit.EventController();
    var layerCtrl = fastmap.uikit.LayerController();
    var lcLink = layerCtrl.getLayerById('lcLink');
    var lcNode = layerCtrl.getLayerById('lcNode');
    var lcFace = layerCtrl.getLayerById('lcFace');
    var selectCtrl = fastmap.uikit.SelectController();
    $scope.lcLinkData = null;
    $scope.fromOfTypeOption = [
           { id: '0', label: '未分类', isCheck: false },
           { id: '1', label: '海岸线', isCheck: false },
           { id: '2', label: '河川', isCheck: false },
           { id: '3', label: '湖沼地', isCheck: false },
           { id: '4', label: '水库', isCheck: false },
           { id: '5', label: '港湾', isCheck: false },
           { id: '6', label: '运河', isCheck: false },
           { id: '7', label: '单线河', isCheck: false },
           { id: '8', label: '水系假象线', isCheck: false },
           { id: '11', label: '公园', isCheck: false },
           { id: '12', label: '高尔夫球场', isCheck: false },
           { id: '13', label: '滑雪场', isCheck: false },
           { id: '14', label: '树林林地', isCheck: false },
           { id: '15', label: '草地', isCheck: false },
           { id: '16', label: '绿化带', isCheck: false },
           { id: '17', label: '岛', isCheck: false },
           { id: '18', label: '绿地假象线', isCheck: false }
    ];
    $scope.form = [
        { id: 0, label: '无属性' },
        { id: 1, label: '暗沙' },
        { id: 2, label: '浅滩' },
        { id: 3, label: '珊瑚礁' },
        { id: 4, label: '礁' },
        { id: 8, label: '湖泊(国界内)' },
        { id: 9, label: '湖泊(国界外)' },
        { id: 10, label: '界河' }
    ];
    $scope.kindsLabel = {
        0: '未分类',
        1: '海岸线',
        2: '河川',
        3: '湖沼地',
        4: '水库',
        5: '港湾',
        6: '运河',
        7: '单线河',
        8: '水系假想线',
        11: '公园',
        12: '高尔夫球场',
        13: '滑雪场',
        14: '树林林地',
        15: '草地',
        16: '绿化带',
        17: '岛',
        18: '绿地假想线'
    };

    // 初始化
    $scope.initializeData = function () {
        objCtrl.setOriginalData(objCtrl.data.getIntegrate());
        $scope.lcLinkData = objCtrl.data;
        // 回到初始状态（修改数据后样式会改变，新数据时让它回到初始的样式）
        if ($scope.lcLinkForm) {
            $scope.lcLinkForm.$setPristine();
        }
        // 存储原始数据
        objCtrl.setOriginalData(objCtrl.data.getIntegrate());
        $ocLazyLoad.load('../../scripts/components/road/ctrls/attr_lc_ctrl/lcLinkTypeCtrl.js');
        var linkArr = $scope.lcLinkData.geometry.coordinates;
        var points = [];
        for (var i = 0, len = linkArr.length; i < len; i++) {
            var pointOfLine = fastmap.mapApi.point(linkArr[i][0], linkArr[i][1]);
            points.push(pointOfLine);
        }
        var line = fastmap.mapApi.lineString(points);
        selectCtrl.onSelected({// 存储选择数据信息
            geometry: line,
            id: $scope.lcLinkData.pid,
            type: 'Link',
            direct: $scope.lcLinkData.direct,
            snode: $scope.lcLinkData.sNodePid,
            enode: $scope.lcLinkData.eNodePid
        });
    };

    // lclink形态的可选范围需要根据种别来确定;
    $scope.confirmFormEditKind = function () {
        var flag = 'noIsland';

        $scope.lcLinkData.kinds.forEach(function (item) {
            if (item.kind == 17) {
                flag = 'island';
            }
        });

        $scope.lcLinkData.kinds.forEach(function (item) {
            if ([1, 2, 3, 8, 11, 12, 16, 18].indexOf(item.kind) != -1) {
                flag = 'onlyNoProperty';
            }
        });
        return flag;
    };

    eventController.on(eventController.eventTypes.SELECTEDFEATURECHANGE, $scope.initializeData);

    if (objCtrl.data) {
        $scope.initializeData();
    }
}]);
