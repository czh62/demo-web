import { resolve } from 'node:path'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

const useSvgIconsPlugin = () => createSvgIconsPlugin({
  iconDirs: [resolve(process.cwd(), 'src/assets/svg-icons')],
  symbolId: 'icon-[dir]-[name]'
})

export default useSvgIconsPlugin