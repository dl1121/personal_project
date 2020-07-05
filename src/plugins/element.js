import Vue from 'vue'
import { Button,Row,Col ,table,TableColumn,Dialog,pagination,DatePicker} from 'element-ui'
import { Form, FormItem ,breadcrumb,BreadcrumbItem,card} from 'element-ui'
import { Input ,container,header,aside,main} from 'element-ui'
import { Message, menu, submenu, MenuItemGroup, MenuItem ,select,option} from 'element-ui'
// import { Loading } from 'element-ui';


Vue.use(select)
Vue.use(option)

Vue.use(Row)
Vue.use(Col)

Vue.use(DatePicker)

Vue.use(pagination)

Vue.use(Dialog)

Vue.use(table)
Vue.use(TableColumn)

Vue.use(card)
Vue.use(breadcrumb)
Vue.use(BreadcrumbItem)

Vue.use(menu)
Vue.use(submenu)
Vue.use(MenuItemGroup)
Vue.use(MenuItem)

Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)

Vue.use(container)
Vue.use(header)
Vue.use(aside)
Vue.use(main)
Vue.prototype.$message = Message//全局挂载弹窗组件

