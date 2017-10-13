/**
 * Created by wangmingdong on 2016/11/17.
 */

angular.module('app').controller('TmcPointCtl', ['$scope', function ($scope) {
    var objCtrl = fastmap.uikit.ObjectEditController();

    $scope.initDiver = function () {
        $scope.tmcPointData = objCtrl.data;
    };

    /* 类型代码值域 */
    $scope.typeCodeOptions = [
        { id: 'P1.0', label: 'P1.0 连接点' },
        { id: 'P1.1', label: 'P1.1 高速公路立交' },
        { id: 'P1.2', label: 'P1.2 三角形立交' },
        { id: 'P1.3', label: 'P1.3 高速公路节点' },
        { id: 'P1.4', label: 'P1.4 高速公路出口' },
        { id: 'P1.5', label: 'P1.5 高速公路入口' },
        { id: 'P1.6', label: 'P1.6 跨线桥' },
        { id: 'P1.7', label: 'P1.7 下穿道路' },
        { id: 'P1.8', label: 'P1.8 环形交叉口' },
        { id: 'P1.9', label: 'P1.9 大型中心环岛' },
        { id: 'P1.10', label: 'P1.10 信号交叉口' },
        { id: 'P1.11', label: 'P1.11 无信号交叉口' },
        { id: 'P1.12', label: 'P1.12 T-型交叉路口' },
        { id: 'P1.13', label: 'P1.13 中间节点' },
        { id: 'P1.14', label: 'P1.14 连接点' },
        { id: 'P1.15', label: 'P1.15 出口' },
        { id: 'P2.0', label: 'P2.0 中间点' },
        { id: 'P2.1', label: 'P2.1 距离标识' },
        { id: 'P2.2', label: 'P2.2 交通监测点' },
        { id: 'P3.0', label: 'P3.0 其它地形标志' },
        { id: 'P3.1', label: 'P3.1 隧道' },
        { id: 'P3.2', label: 'P3.2 桥梁' },
        { id: 'P3.3', label: 'P3.3 服务区' },
        { id: 'P3.4', label: 'P3.4 休息区' },
        { id: 'P3.5', label: 'P3.5 观光区' },
        { id: 'P3.6', label: 'P3.6 停车上下课区' },
        { id: 'P3.7', label: 'P3.7 停车并换乘区' },
        { id: 'P3.8', label: 'P3.8 泊车区' },
        { id: 'P3.9', label: 'P3.9 售货亭' },
        { id: 'P3.10', label: 'P3.10 有厕所的服务亭' },
        { id: 'P3.11', label: 'P3.11 加油站' },
        { id: 'P3.12', label: 'P3.12 有服务亭的加油站' },
        { id: 'P3.13', label: 'P3.13 汽车旅馆' },
        { id: 'P3.14', label: 'P3.14 边界/国界' },
        { id: 'P3.15', label: 'P3.15 海关检查站' },
        { id: 'P3.16', label: 'P3.16 道路收费站' },
        { id: 'P3.17', label: 'P3.17 轮渡渡口' },
        { id: 'P3.18', label: 'P3.18 港口' },
        { id: 'P3.19', label: 'P3.19 广场' },
        { id: 'P3.20', label: 'P3.20 展览会' },
        { id: 'P3.21', label: 'P3.21 汽车修理厂' },
        { id: 'P3.22', label: 'P3.22 地下的汽车修理厂' },
        { id: 'P3.23', label: 'P3.23 零售广场' },
        { id: 'P3.24', label: 'P3.24 主题公园' },
        { id: 'P3.25', label: 'P3.25 景点' },
        { id: 'P3.26', label: 'P3.26 大学' },
        { id: 'P3.27', label: 'P3.27 机场' },
        { id: 'P3.28', label: 'P3.28 公共交通站点' },
        { id: 'P3.29', label: 'P3.29 医院' },
        { id: 'P3.30', label: 'P3.30 教堂/寺庙' },
        { id: 'P3.31', label: 'P3.31 体育馆' },
        { id: 'P3.32', label: 'P3.32 ' },
        { id: 'P3.33', label: 'P3.33 ' },
        { id: 'P3.34', label: 'P3.34 市政中心' },
        { id: 'P3.35', label: 'P3.35 展览中心' },
        { id: 'P3.36', label: 'P3.36 社区' },
        { id: 'P3.37', label: 'P3.37 地名' },
        { id: 'P3.38', label: 'P3.38 水坝' },
        { id: 'P3.39', label: 'P3.39 堤岸' },
        { id: 'P3.40', label: 'P3.40 引水渠' },
        { id: 'P3.41', label: 'P3.41 船闸' },
        { id: 'P3.42', label: 'P3.42 穿山' },
        { id: 'P3.43', label: 'P3.43 公铁交叉口' },
        { id: 'P3.44', label: 'P3.44 漫水路' },
        { id: 'P3.45', label: 'P3.45 渡船' },
        { id: 'P3.46', label: 'P3.46 工业区' },
        { id: 'P3.47', label: 'P3.47 高架桥' },
        { id: 'P4.0', label: 'P4.0 匝道/出入口' }
    ];
    /* 名称标识 */
    $scope.nameFlagOptions = [
        { id: 0, label: '0 道路名称' },
        { id: 1, label: '1 第一名称（或起点名称）' },
        { id: 2, label: '2 第二名称（或终点名称）' }
    ];
    $scope.langCodeOptions = [
        { id: 'CHI', label: '简体中文' },
        { id: 'CHT', label: '繁体中文' },
        { id: 'ENG', label: '英文' },
        { id: 'POR', label: '葡萄牙文' },
        { id: 'ARA', label: '阿拉伯语' },
        { id: 'BUL', label: '保加利亚语' },
        { id: 'CZE', label: '捷克语' },
        { id: 'DAN', label: '丹麦语' },
        { id: 'DUT', label: '荷兰语' },
        { id: 'EST', label: '爱沙尼亚语' },
        { id: 'FIN', label: '芬兰语' },
        { id: 'FRE', label: '法语' },
        { id: 'GER', label: '德语' },
        { id: 'HIN', label: '印地语' },
        { id: 'HUN', label: '匈牙利语' },
        { id: 'ICE', label: '冰岛语' },
        { id: 'IND', label: '印度尼西亚语' },
        { id: 'ITA', label: '意大利语' },
        { id: 'JPN', label: '日语' },
        { id: 'KOR', label: '韩语' },
        { id: 'LIT', label: '立陶宛语' },
        { id: 'NOR', label: '挪威语' },
        { id: 'POL', label: '波兰语' },
        { id: 'RUM', label: '罗马尼亚语' },
        { id: 'RUS', label: '俄语' },
        { id: 'SLO', label: '斯洛伐克语' },
        { id: 'SPA', label: '西班牙语' },
        { id: 'SWE', label: '瑞典语' },
        { id: 'THA', label: '泰国语' },
        { id: 'TUR', label: '土耳其语' },
        { id: 'UKR', label: '乌克兰语' },
        { id: 'SCR', label: '克罗地亚语' }
    ];
    $scope.initDiver();

    var unbindHandler = $scope.$on('ReloadData', $scope.initDiver);

    $scope.$on('$destroy', function () {
        unbindHandler = null;
    });
}]);
