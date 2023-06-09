# Vue 3 + TypeScript + Vite

## 创建工程

```sh
pnpm create vite@latest projectName --template vue-ts
```

## 配置 `Eslint` `Prettier`

```sh
pnpm  add eslint  prettier -D
```

```sh
pnpx eslint --init
```

```sh
pnpm add eslint-plugin-vue@latest @typescript-eslint/eslint-plugin@latest @typescript-eslint/parser@latest -D
```

```sh
pnpm add eslint-config-prettier eslint-plugin-prettier -D
```

tips: typescript@4.5.5 最好用此版本的 ts 其他版本有可能会不兼容

## 配置 `TailwindCss` [参考](https://www.tailwindcss.cn/docs/installation)

```sh
pnpm install -D tailwindcss
```

```sh
pnpx tailwindcss init
```

```sh
# postcss
pnpm install -D postcss autoprefixer
```

tips: 添加 `postcss.config.cjs`

## `typescript`

```sh
pnpm add @types/node -D
```

## 优化

### 路由动态引入

路由全部采用动态引入的方式加载，减小首页 chunk 生成时间，打包的 chunk 越大耗时也就越多，从大 chunk 中分离出小 chunk 可以有效减少打包时间，同时提高首页的加载速度。

```ts
{
   path: 'test',
   name: 'Test',
   component: () => import('@/views/test/index.vue')
}
```

## Npm

- 忽略安装包时，执行内部的 `script` `--ignore-scripts`

```bash
pnpm add vite-plugin-imagemin --ignore-scripts -D
```

## 安装 `@element-plus/icons-vue` 图标

```bash
pnpm install @element-plus/icons-vue
```

## 集成 `@vueuse/core`

```bash
pnpm install @vueuse/core
```

## Git 贡献提交规范

- feat 增加新功能
- fix 修复问题/BUG
- style 代码风格相关无影响运行结果的
- perf 优化/性能提升
- refactor 重构
- revert 撤销修改
- test 测试相关
- docs 文档/注释
- chore 依赖更新/脚手架配置修改等
- workflow 工作流改进
- ci 持续集成
- types 类型定义文件更改
- wip 开发中

## 菜单配置参照

```json
{
  "code": 200,
  "msg": "成功",
  "data": [
    {
      "path": "/home/index",
      "name": "home",
      "component": "/home/index",
      "meta": {
        "icon": "HomeFilled",
        "title": "首页",
        "isLink": "",
        "isHide": false,
        "isFull": false,
        "isAffix": true,
        "isKeepAlive": true
      }
    },
    {
      "path": "/dataScreen",
      "name": "dataScreen",
      "component": "/dataScreen/index",
      "meta": {
        "icon": "Histogram",
        "title": "数据大屏",
        "isLink": "",
        "isHide": false,
        "isFull": true,
        "isAffix": false,
        "isKeepAlive": true
      }
    },
    {
      "path": "/proTable",
      "name": "proTable",
      "redirect": "/proTable/useProTable",
      "meta": {
        "icon": "MessageBox",
        "title": "超级表格",
        "isLink": "",
        "isHide": false,
        "isFull": false,
        "isAffix": false,
        "isKeepAlive": true
      },
      "children": [
        {
          "path": "/proTable/useProTable",
          "name": "useProTable",
          "component": "/proTable/useProTable/index",
          "meta": {
            "icon": "Menu",
            "title": "使用 ProTable",
            "isLink": "",
            "isHide": false,
            "isFull": false,
            "isAffix": false,
            "isKeepAlive": true
          },
          "children": [
            {
              "path": "/proTable/useProTable/detail/:id",
              "name": "useProTableDetail",
              "component": "/proTable/useProTable/detail",
              "meta": {
                "icon": "Menu",
                "title": "ProTable 详情",
                "isLink": "",
                "isHide": true,
                "isFull": false,
                "isAffix": false,
                "isKeepAlive": true,
                "activeMenu": "/proTable/useProTable"
              }
            }
          ]
        },
        {
          "path": "/proTable/useTreeFilter",
          "name": "useTreeFilter",
          "component": "/proTable/useTreeFilter/index",
          "meta": {
            "icon": "Menu",
            "title": "使用 TreeFilter",
            "isLink": "",
            "isHide": false,
            "isFull": false,
            "isAffix": false,
            "isKeepAlive": true
          }
        },
        {
          "path": "/proTable/useTreeFilter/detail/:id",
          "name": "useTreeFilterDetail",
          "component": "/proTable/useTreeFilter/detail",
          "meta": {
            "icon": "Menu",
            "title": "TreeFilter 详情",
            "activeMenu": "/proTable/useTreeFilter",
            "isLink": "",
            "isHide": true,
            "isFull": false,
            "isAffix": false,
            "isKeepAlive": true
          }
        },
        {
          "path": "/proTable/useSelectFilter",
          "name": "useSelectFilter",
          "component": "/proTable/useSelectFilter/index",
          "meta": {
            "icon": "Menu",
            "title": "使用 SelectFilter",
            "isLink": "",
            "isHide": false,
            "isFull": false,
            "isAffix": false,
            "isKeepAlive": true
          }
        },
        {
          "path": "/proTable/treeProTable",
          "name": "treeProTable",
          "component": "/proTable/treeProTable/index",
          "meta": {
            "icon": "Menu",
            "title": "树形 ProTable",
            "isLink": "",
            "isHide": false,
            "isFull": false,
            "isAffix": false,
            "isKeepAlive": true
          }
        },
        {
          "path": "/proTable/complexProTable",
          "name": "complexProTable",
          "component": "/proTable/complexProTable/index",
          "meta": {
            "icon": "Menu",
            "title": "复杂 ProTable",
            "isLink": "",
            "isHide": false,
            "isFull": false,
            "isAffix": false,
            "isKeepAlive": true
          }
        },
        {
          "path": "/proTable/document",
          "name": "proTableDocument",
          "component": "/proTable/document/index",
          "meta": {
            "icon": "Menu",
            "title": "ProTable 文档",
            "isLink": "https://juejin.cn/post/7166068828202336263/#heading-14",
            "isHide": false,
            "isFull": false,
            "isAffix": false,
            "isKeepAlive": true
          }
        }
      ]
    },
    {
      "path": "/auth",
      "name": "auth",
      "redirect": "/auth/menu",
      "meta": {
        "icon": "Lock",
        "title": "权限管理",
        "isLink": "",
        "isHide": false,
        "isFull": false,
        "isAffix": false,
        "isKeepAlive": true
      },
      "children": [
        {
          "path": "/auth/menu",
          "name": "authMenu",
          "component": "/auth/menu/index",
          "meta": {
            "icon": "Menu",
            "title": "菜单权限",
            "isLink": "",
            "isHide": false,
            "isFull": false,
            "isAffix": false,
            "isKeepAlive": true
          }
        },
        {
          "path": "/auth/button",
          "name": "authButton",
          "component": "/auth/button/index",
          "meta": {
            "icon": "Menu",
            "title": "按钮权限",
            "isLink": "",
            "isHide": false,
            "isFull": false,
            "isAffix": false,
            "isKeepAlive": true
          }
        }
      ]
    },
    {
      "path": "/assembly",
      "name": "assembly",
      "redirect": "/assembly/guide",
      "meta": {
        "icon": "Briefcase",
        "title": "常用组件",
        "isLink": "",
        "isHide": false,
        "isFull": false,
        "isAffix": false,
        "isKeepAlive": true
      },
      "children": [
        {
          "path": "/assembly/guide",
          "name": "guide",
          "component": "/assembly/guide/index",
          "meta": {
            "icon": "Menu",
            "title": "引导页",
            "isLink": "",
            "isHide": false,
            "isFull": false,
            "isAffix": false,
            "isKeepAlive": true
          }
        },
        {
          "path": "/assembly/tabs",
          "name": "tabs",
          "component": "/assembly/tabs/index",
          "meta": {
            "icon": "Menu",
            "title": "标签页操作",
            "isLink": "",
            "isHide": false,
            "isFull": false,
            "isAffix": false,
            "isKeepAlive": true
          },
          "children": [
            {
              "path": "/assembly/tabs/detail/:id",
              "name": "tabsDetail",
              "component": "/assembly/tabs/detail",
              "meta": {
                "icon": "Menu",
                "title": "Tab 详情",
                "activeMenu": "/assembly/tabs",
                "isLink": "",
                "isHide": true,
                "isFull": false,
                "isAffix": false,
                "isKeepAlive": true
              }
            }
          ]
        },
        {
          "path": "/assembly/selectIcon",
          "name": "selectIcon",
          "component": "/assembly/selectIcon/index",
          "meta": {
            "icon": "Menu",
            "title": "图标选择器",
            "isLink": "",
            "isHide": false,
            "isFull": false,
            "isAffix": false,
            "isKeepAlive": true
          }
        },
        {
          "path": "/assembly/selectFilter",
          "name": "selectFilter",
          "component": "/assembly/selectFilter/index",
          "meta": {
            "icon": "Menu",
            "title": "分类筛选器",
            "isLink": "",
            "isHide": false,
            "isFull": false,
            "isAffix": false,
            "isKeepAlive": true
          }
        },
        {
          "path": "/assembly/treeFilter",
          "name": "treeFilter",
          "component": "/assembly/treeFilter/index",
          "meta": {
            "icon": "Menu",
            "title": "树形筛选器",
            "isLink": "",
            "isHide": false,
            "isFull": false,
            "isAffix": false,
            "isKeepAlive": true
          }
        },
        {
          "path": "/assembly/svgIcon",
          "name": "svgIcon",
          "component": "/assembly/svgIcon/index",
          "meta": {
            "icon": "Menu",
            "title": "SVG 图标",
            "isLink": "",
            "isHide": false,
            "isFull": false,
            "isAffix": false,
            "isKeepAlive": true
          }
        },
        {
          "path": "/assembly/uploadFile",
          "name": "uploadFile",
          "component": "/assembly/uploadFile/index",
          "meta": {
            "icon": "Menu",
            "title": "文件上传",
            "isLink": "",
            "isHide": false,
            "isFull": false,
            "isAffix": false,
            "isKeepAlive": true
          }
        },
        {
          "path": "/assembly/batchImport",
          "name": "batchImport",
          "component": "/assembly/batchImport/index",
          "meta": {
            "icon": "Menu",
            "title": "批量添加数据",
            "isLink": "",
            "isHide": false,
            "isFull": false,
            "isAffix": false,
            "isKeepAlive": true
          }
        },
        {
          "path": "/assembly/wangEditor",
          "name": "wangEditor",
          "component": "/assembly/wangEditor/index",
          "meta": {
            "icon": "Menu",
            "title": "富文本编辑器",
            "isLink": "",
            "isHide": false,
            "isFull": false,
            "isAffix": false,
            "isKeepAlive": true
          }
        },
        {
          "path": "/assembly/draggable",
          "name": "draggable",
          "component": "/assembly/draggable/index",
          "meta": {
            "icon": "Menu",
            "title": "拖拽组件",
            "isLink": "",
            "isHide": false,
            "isFull": false,
            "isAffix": false,
            "isKeepAlive": true
          }
        }
      ]
    },
    {
      "path": "/dashboard",
      "name": "dashboard",
      "redirect": "/dashboard/dataVisualize",
      "meta": {
        "icon": "Odometer",
        "title": "Dashboard",
        "isLink": "",
        "isHide": false,
        "isFull": false,
        "isAffix": false,
        "isKeepAlive": true
      },
      "children": [
        {
          "path": "/dashboard/dataVisualize",
          "name": "dataVisualize",
          "component": "/dashboard/dataVisualize/index",
          "meta": {
            "icon": "Menu",
            "title": "数据可视化",
            "isLink": "",
            "isHide": false,
            "isFull": false,
            "isAffix": false,
            "isKeepAlive": true
          }
        },
        {
          "path": "/dashboard/embedded",
          "name": "embedded",
          "component": "/dashboard/embedded/index",
          "meta": {
            "icon": "Menu",
            "title": "内嵌页面",
            "isLink": "",
            "isHide": false,
            "isFull": false,
            "isAffix": false,
            "isKeepAlive": true
          }
        }
      ]
    },
    {
      "path": "/form",
      "name": "form",
      "redirect": "/form/proForm",
      "meta": {
        "icon": "Tickets",
        "title": "表单 Form",
        "isLink": "",
        "isHide": false,
        "isFull": false,
        "isAffix": false,
        "isKeepAlive": true
      },
      "children": [
        {
          "path": "/form/proForm",
          "name": "proForm",
          "component": "/form/proForm/index",
          "meta": {
            "icon": "Menu",
            "title": "超级 Form",
            "isLink": "",
            "isHide": false,
            "isFull": false,
            "isAffix": false,
            "isKeepAlive": true
          }
        },
        {
          "path": "/form/basicForm",
          "name": "basicForm",
          "component": "/form/basicForm/index",
          "meta": {
            "icon": "Menu",
            "title": "基础 Form",
            "isLink": "",
            "isHide": false,
            "isFull": false,
            "isAffix": false,
            "isKeepAlive": true
          }
        },
        {
          "path": "/form/validateForm",
          "name": "validateForm",
          "component": "/form/validateForm/index",
          "meta": {
            "icon": "Menu",
            "title": "校验 Form",
            "isLink": "",
            "isHide": false,
            "isFull": false,
            "isAffix": false,
            "isKeepAlive": true
          }
        },
        {
          "path": "/form/dynamicForm",
          "name": "dynamicForm",
          "component": "/form/dynamicForm/index",
          "meta": {
            "icon": "Menu",
            "title": "动态 Form",
            "isLink": "",
            "isHide": false,
            "isFull": false,
            "isAffix": false,
            "isKeepAlive": true
          }
        }
      ]
    },
    {
      "path": "/echarts",
      "name": "echarts",
      "redirect": "/echarts/waterChart",
      "meta": {
        "icon": "TrendCharts",
        "title": "Echarts",
        "isLink": "",
        "isHide": false,
        "isFull": false,
        "isAffix": false,
        "isKeepAlive": true
      },
      "children": [
        {
          "path": "/echarts/waterChart",
          "name": "waterChart",
          "component": "/echarts/waterChart/index",
          "meta": {
            "icon": "Menu",
            "title": "水型图",
            "isLink": "",
            "isHide": false,
            "isFull": false,
            "isAffix": false,
            "isKeepAlive": true
          }
        },
        {
          "path": "/echarts/columnChart",
          "name": "columnChart",
          "component": "/echarts/columnChart/index",
          "meta": {
            "icon": "Menu",
            "title": "柱状图",
            "isLink": "",
            "isHide": false,
            "isFull": false,
            "isAffix": false,
            "isKeepAlive": true
          }
        },
        {
          "path": "/echarts/lineChart",
          "name": "lineChart",
          "component": "/echarts/lineChart/index",
          "meta": {
            "icon": "Menu",
            "title": "折线图",
            "isLink": "",
            "isHide": false,
            "isFull": false,
            "isAffix": false,
            "isKeepAlive": true
          }
        },
        {
          "path": "/echarts/pieChart",
          "name": "pieChart",
          "component": "/echarts/pieChart/index",
          "meta": {
            "icon": "Menu",
            "title": "饼图",
            "isLink": "",
            "isHide": false,
            "isFull": false,
            "isAffix": false,
            "isKeepAlive": true
          }
        },
        {
          "path": "/echarts/radarChart",
          "name": "radarChart",
          "component": "/echarts/radarChart/index",
          "meta": {
            "icon": "Menu",
            "title": "雷达图",
            "isLink": "",
            "isHide": false,
            "isFull": false,
            "isAffix": false,
            "isKeepAlive": true
          }
        },
        {
          "path": "/echarts/nestedChart",
          "name": "nestedChart",
          "component": "/echarts/nestedChart/index",
          "meta": {
            "icon": "Menu",
            "title": "嵌套环形图",
            "isLink": "",
            "isHide": false,
            "isFull": false,
            "isAffix": false,
            "isKeepAlive": true
          }
        }
      ]
    },
    {
      "path": "/directives",
      "name": "directives",
      "redirect": "/directives/copyDirect",
      "meta": {
        "icon": "Stamp",
        "title": "自定义指令",
        "isLink": "",
        "isHide": false,
        "isFull": false,
        "isAffix": false,
        "isKeepAlive": true
      },
      "children": [
        {
          "path": "/directives/copyDirect",
          "name": "copyDirect",
          "component": "/directives/copyDirect/index",
          "meta": {
            "icon": "Menu",
            "title": "复制指令",
            "isLink": "",
            "isHide": false,
            "isFull": false,
            "isAffix": false,
            "isKeepAlive": true
          }
        },
        {
          "path": "/directives/watermarkDirect",
          "name": "watermarkDirect",
          "component": "/directives/watermarkDirect/index",
          "meta": {
            "icon": "Menu",
            "title": "水印指令",
            "isLink": "",
            "isHide": false,
            "isFull": false,
            "isAffix": false,
            "isKeepAlive": true
          }
        },
        {
          "path": "/directives/dragDirect",
          "name": "dragDirect",
          "component": "/directives/dragDirect/index",
          "meta": {
            "icon": "Menu",
            "title": "拖拽指令",
            "isLink": "",
            "isHide": false,
            "isFull": false,
            "isAffix": false,
            "isKeepAlive": true
          }
        },
        {
          "path": "/directives/debounceDirect",
          "name": "debounceDirect",
          "component": "/directives/debounceDirect/index",
          "meta": {
            "icon": "Menu",
            "title": "防抖指令",
            "isLink": "",
            "isHide": false,
            "isFull": false,
            "isAffix": false,
            "isKeepAlive": true
          }
        },
        {
          "path": "/directives/throttleDirect",
          "name": "throttleDirect",
          "component": "/directives/throttleDirect/index",
          "meta": {
            "icon": "Menu",
            "title": "节流指令",
            "isLink": "",
            "isHide": false,
            "isFull": false,
            "isAffix": false,
            "isKeepAlive": true
          }
        },
        {
          "path": "/directives/longpressDirect",
          "name": "longpressDirect",
          "component": "/directives/longpressDirect/index",
          "meta": {
            "icon": "Menu",
            "title": "长按指令",
            "isLink": "",
            "isHide": false,
            "isFull": false,
            "isAffix": false,
            "isKeepAlive": true
          }
        }
      ]
    },
    {
      "path": "/menu",
      "name": "menu",
      "redirect": "/menu/menu1",
      "meta": {
        "icon": "List",
        "title": "菜单嵌套",
        "isLink": "",
        "isHide": false,
        "isFull": false,
        "isAffix": false,
        "isKeepAlive": true
      },
      "children": [
        {
          "path": "/menu/menu1",
          "name": "menu1",
          "component": "/menu/menu1/index",
          "meta": {
            "icon": "Menu",
            "title": "菜单1",
            "isLink": "",
            "isHide": false,
            "isFull": false,
            "isAffix": false,
            "isKeepAlive": true
          }
        },
        {
          "path": "/menu/menu2",
          "name": "menu2",
          "redirect": "/menu/menu2/menu21",
          "meta": {
            "icon": "Menu",
            "title": "菜单2",
            "isLink": "",
            "isHide": false,
            "isFull": false,
            "isAffix": false,
            "isKeepAlive": true
          },
          "children": [
            {
              "path": "/menu/menu2/menu21",
              "name": "menu21",
              "component": "/menu/menu2/menu21/index",
              "meta": {
                "icon": "Menu",
                "title": "菜单2-1",
                "isLink": "",
                "isHide": false,
                "isFull": false,
                "isAffix": false,
                "isKeepAlive": true
              }
            },
            {
              "path": "/menu/menu2/menu22",
              "name": "menu22",
              "redirect": "/menu/menu2/menu22/menu221",
              "meta": {
                "icon": "Menu",
                "title": "菜单2-2",
                "isLink": "",
                "isHide": false,
                "isFull": false,
                "isAffix": false,
                "isKeepAlive": true
              },
              "children": [
                {
                  "path": "/menu/menu2/menu22/menu221",
                  "name": "menu221",
                  "component": "/menu/menu2/menu22/menu221/index",
                  "meta": {
                    "icon": "Menu",
                    "title": "菜单2-2-1",
                    "isLink": "",
                    "isHide": false,
                    "isFull": false,
                    "isAffix": false,
                    "isKeepAlive": true
                  }
                },
                {
                  "path": "/menu/menu2/menu22/menu222",
                  "name": "menu222",
                  "component": "/menu/menu2/menu22/menu222/index",
                  "meta": {
                    "icon": "Menu",
                    "title": "菜单2-2-2",
                    "isLink": "",
                    "isHide": false,
                    "isFull": false,
                    "isAffix": false,
                    "isKeepAlive": true
                  }
                }
              ]
            },
            {
              "path": "/menu/menu2/menu23",
              "name": "menu23",
              "component": "/menu/menu2/menu23/index",
              "meta": {
                "icon": "Menu",
                "title": "菜单2-3",
                "isLink": "",
                "isHide": false,
                "isFull": false,
                "isAffix": false,
                "isKeepAlive": true
              }
            }
          ]
        },
        {
          "path": "/menu/menu3",
          "name": "menu3",
          "component": "/menu/menu3/index",
          "meta": {
            "icon": "Menu",
            "title": "菜单3",
            "isLink": "",
            "isHide": false,
            "isFull": false,
            "isAffix": false,
            "isKeepAlive": true
          }
        }
      ]
    },
    {
      "path": "/system",
      "name": "system",
      "redirect": "/system/accountManage",
      "meta": {
        "icon": "Tools",
        "title": "系统管理",
        "isLink": "",
        "isHide": false,
        "isFull": false,
        "isAffix": false,
        "isKeepAlive": true
      },
      "children": [
        {
          "path": "/system/accountManage",
          "name": "accountManage",
          "component": "/system/accountManage/index",
          "meta": {
            "icon": "Menu",
            "title": "账号管理",
            "isLink": "",
            "isHide": false,
            "isFull": false,
            "isAffix": false,
            "isKeepAlive": true
          }
        },
        {
          "path": "/system/roleManage",
          "name": "roleManage",
          "component": "/system/roleManage/index",
          "meta": {
            "icon": "Menu",
            "title": "角色管理",
            "isLink": "",
            "isHide": false,
            "isFull": false,
            "isAffix": false,
            "isKeepAlive": true
          }
        },
        {
          "path": "/system/menuMange",
          "name": "menuMange",
          "component": "/system/menuMange/index",
          "meta": {
            "icon": "Menu",
            "title": "菜单管理",
            "isLink": "",
            "isHide": false,
            "isFull": false,
            "isAffix": false,
            "isKeepAlive": true
          }
        },
        {
          "path": "/system/departmentManage",
          "name": "departmentManage",
          "component": "/system/departmentManage/index",
          "meta": {
            "icon": "Menu",
            "title": "部门管理",
            "isLink": "",
            "isHide": false,
            "isFull": false,
            "isAffix": false,
            "isKeepAlive": true
          }
        },
        {
          "path": "/system/dictManage",
          "name": "dictManage",
          "component": "/system/dictManage/index",
          "meta": {
            "icon": "Menu",
            "title": "字典管理",
            "isLink": "",
            "isHide": false,
            "isFull": false,
            "isAffix": false,
            "isKeepAlive": true
          }
        },
        {
          "path": "/system/timingTask",
          "name": "timingTask",
          "component": "/system/timingTask/index",
          "meta": {
            "icon": "Menu",
            "title": "定时任务",
            "isLink": "",
            "isHide": false,
            "isFull": false,
            "isAffix": false,
            "isKeepAlive": true
          }
        },
        {
          "path": "/system/systemLog",
          "name": "systemLog",
          "component": "/system/systemLog/index",
          "meta": {
            "icon": "Menu",
            "title": "系统日志",
            "isLink": "",
            "isHide": false,
            "isFull": false,
            "isAffix": false,
            "isKeepAlive": true
          }
        }
      ]
    },
    {
      "path": "/link",
      "name": "link",
      "redirect": "/link/gitee",
      "meta": {
        "icon": "Paperclip",
        "title": "外部链接",
        "isLink": "",
        "isHide": false,
        "isFull": false,
        "isAffix": false,
        "isKeepAlive": true
      },
      "children": [
        {
          "path": "/link/gitee",
          "name": "gitee",
          "component": "/link/gitee/index",
          "meta": {
            "icon": "Menu",
            "title": "Gitee 仓库",
            "isLink": "https://gitee.com/HalseySpicy/Geeker-Admin",
            "isHide": false,
            "isFull": false,
            "isAffix": false,
            "isKeepAlive": true
          }
        },
        {
          "path": "/link/github",
          "name": "github",
          "component": "/link/github/index",
          "meta": {
            "icon": "Menu",
            "title": "GitHub 仓库",
            "isLink": "https://github.com/HalseySpicy/Geeker-Admin",
            "isHide": false,
            "isFull": false,
            "isAffix": false,
            "isKeepAlive": true
          }
        },
        {
          "path": "/link/geekerDocs",
          "name": "geekerDocs",
          "component": "/link/geekerDocs/index",
          "meta": {
            "icon": "Menu",
            "title": "项目文档",
            "isLink": "https://docs.spicyboy.cn",
            "isHide": false,
            "isFull": false,
            "isAffix": false,
            "isKeepAlive": true
          }
        },
        {
          "path": "/link/juejin",
          "name": "juejin",
          "component": "/link/juejin/index",
          "meta": {
            "icon": "Menu",
            "title": "掘金主页",
            "isLink": "https://juejin.cn/user/3263814531551816/posts",
            "isHide": false,
            "isFull": false,
            "isAffix": false,
            "isKeepAlive": true
          }
        }
      ]
    },
    {
      "path": "/about/index",
      "name": "about",
      "component": "/about/index",
      "meta": {
        "icon": "InfoFilled",
        "title": "关于项目",
        "isLink": "",
        "isHide": false,
        "isFull": false,
        "isAffix": false,
        "isKeepAlive": true
      }
    }
  ]
}
```
