/**
 * 定义‘桥’tips选中时的高亮规则
 * @file      TipBridge.js
 * @author    LiuZhe
 * @date      2017-09-12
 *
 * @copyright @Navinfo, all rights reserved.
 */

fastmap.mapApi.HighlightTipsRules = fastmap.mapApi.HighlightTipsRules || {};
FM.mapApi.render.highlight.TIPBRIDGE = {
    topo: [{
        joinKey: 'deep',
        highlight: {
            topo: [{
                joinKey: 'gSLoc',
                highlight: {
                    type: 'geometry',
                    zIndex: 1,
                    defaultSymbol: 'tip_circle'
                }
            }, {
                joinKey: 'gELoc',
                highlight: {
                    type: 'geometry',
                    zIndex: 1,
                    defaultSymbol: 'tip_circle'
                }
            }]
        }
    }, {
        joinKey: 'geometry',
        highlight: {
            topo: [{
                joinKey: 'g_location',
                highlight: {
                    type: 'geometry',
                    zIndex: 1,
                    defaultSymbol: 'ls_boders'
                }
            }]
        }
    }]
};
