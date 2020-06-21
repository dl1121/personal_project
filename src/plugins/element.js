import Vue from 'vue'
import { Button } from 'element-ui'
import { Form, FormItem } from 'element-ui'
import { Input ,container,header,aside,main} from 'element-ui'
import { Message ,menu,submenu,MenuItemGroup,MenuItem} from 'element-ui'

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