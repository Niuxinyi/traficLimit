/**
 * Created by Chensonglin on 17.3.31.
 */
angular.module('app').controller('deleteTagCtrl', ['$scope', '$timeout', function ($scope, $timeout) {
    var objCtrl = fastmap.uikit.ObjectEditController();
    var selectCtrl = fastmap.uikit.SelectController();
    $scope.initializeData = function () {
        $scope.deleteTag = objCtrl.data;
        if ($scope.deleteTag.feedback.f_array && $scope.deleteTag.feedback.f_array.length > 0) {
            for (var i = 0; i < $scope.deleteTag.feedback.f_array.length; i++) {
                if ($scope.deleteTag.feedback.f_array[i].type == 3) {
                    $scope.deleteTag.content = $scope.deleteTag.feedback.f_array[i].content;
                }
            }
        }
    };
    var unbindHandler = $scope.$on('ReloadData', $scope.initializeData);

    $scope.$on('$destroy', function () {
        unbindHandler = null;
    });
}]);

