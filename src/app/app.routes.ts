
import {IndexComponent} from './index/index.component';
import {ErrorComponent} from './error/error.component';  //导出妹子名字要与被导入页面中定义的名字一致
export const appRoutes= [
    {
        path:"",
        redirectTo:"/index.html",
        pathMatch:"full"

    },
    {
        path:"index.html",
        component:IndexComponent
    },
    // 异步路由
    {
        path:"test",
        loadChildren:"./test/test.module#TestModule"
    },
    {
        path:"**",//匹配任何（未定义的）路由
        component:ErrorComponent
    }
];