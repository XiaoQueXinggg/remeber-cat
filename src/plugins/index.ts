import { Select, Button, Popover } from "ant-design-vue";
import type { App } from "Vue"
const plugins = [Select, Button, Popover]
export default {
    install(app: App) {
        plugins.forEach((plugin) => app.use(plugin))
    }
}