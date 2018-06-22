import {TestComponent} from "./test.component";
import {UserComponent} from "../user/user.component";
export const testRoutes=[
    {
        path:"",
        component:TestComponent,
        children:[
            {
                path:":id",
                component:UserComponent,
                //canActivate:[]     //路由守卫，false直接退出，true才访问组件
            }
        ]   //一定要配，可以为空,去掉额话会报错
    }
]