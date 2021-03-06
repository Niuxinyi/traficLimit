/**
 * Created by xujie3949 on 2017/1/11.
 */
App.Config.map.SourceConfig = {
    objSource: {
        sourceUrl: App.Config.subdomainsServiceUrl + '/render/limit/obj/getByTileWithGap?access_token=' + App.Temp.accessToken,
        parsor: FM.mapApi.render.data.Feature,
        type: 'classical',
        subdomains: ['r1', 'r2', 'r3', 'r4', 'r5', 'r6'],
        requestParameter: {
            dbId: App.Temp.dbId,
            gap: 10,
            types: []
        }
    },
    tipSource: {
        sourceUrl: App.Config.subdomainsServiceUrl + '/render/tip/getByTileWithGap?access_token=' + App.Temp.accessToken,
        parsor: FM.mapApi.render.data.Tip,
        type: 'classical',
        subdomains: ['r1', 'r2', 'r3', 'r4', 'r5', 'r6'],
        requestParameter: {
            mdFlag: App.Temp.mdFlag,
            gap: 10,
            types: [],
            workStatus: [0, 11],
            subtaskId: App.Temp.subTaskId
        }
    },
    thematicSource: {
        sourceUrl: App.Config.subdomainsServiceUrl + '/render/specia/getByTileWithGap?access_token=' + App.Temp.accessToken,
        parsor: FM.mapApi.render.data.Thematic,
        type: 'classical',
        subdomains: ['r1', 'r2', 'r3', 'r4', 'r5', 'r6'],
        requestParameter: {
            dbId: App.Temp.dbId,
            gap: 0,
            types: []
        }
    },
    limitSource: {
        sourceUrl: App.Config.subdomainsServiceUrl + '/limit/getByTileWithGap?access_token=' + App.Temp.accessToken,
        parsor: FM.mapApi.render.data.Limit,
        type: 'classical',
        subdomains: ['r1', 'r2', 'r3', 'r4', 'r5', 'r6'],
        requestParameter: {
            dbId: App.Temp.dbId,
            gap: 10,
            types: []
        }
    }
};
