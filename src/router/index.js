import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import BlankLayout from '@/layout/BlankLayout'
import BasicLayout from '@/layout/BasicLayout'
import AdminLayout from '@/layout/AdminLayout'
import CompanyHomeLayout from '@/views/companyHome'
import BusinessManageHome from '@/views/_businessManageHome'
import ScreenLayout from '@/layout/ScreenLayout'

export const constantRoutes = [
  {
    path: '/',
    component: BlankLayout,
    meta: {
      title: '首页'
    },
    children: [
      {
        path: '',
        redirect: '/home'
      },
      {
        path: 'home',
        name: 'Home',
        component: () => import('@/views/home')
      }
    ]
  },
  {
    path: '/login',
    component: BlankLayout,
    children: [
      {
        path: 'companyLogin',
        name: 'CompanyLogin',
        component: () => import('@/views/companyLogin')
      },
      {
        path: 'adminLogin',
        name: 'AdminLogin',
        component: () => import('@/views/_adminLogin')
      }
    ]
  },
  {
    path: '/company',
    component: BasicLayout,
    children: [
      {
        path: 'manageCompanyInfo',
        name: 'ManageCompanyInfo',
        component: CompanyHomeLayout,
        redirect: '/company/manageCompanyInfo/myCompany',
        meta: {
          title: '企业信息管理'
        },
        children: [
          {
            path: 'myCompany',
            name: 'MyCompany',
            component: () => import('@/views/myCompany'),
            meta: {
              title: '我的生产企业'
            }
          },
          {
            path: 'productRecord',
            name: 'ProductRecord',
            component: () => import('@/views/productRecord/layout'),
            meta: {
              title: '产品信息备案'
            },
            children: [
              {
                path: '',
                name: '',
                component: () => import('@/views/productRecord')
              },
              {
                path: 'recordDetail',
                name: 'RecordDetail',
                component: () => import('@/views/recordDetail'),
                meta: {
                  title: '备案详情'
                }
              },
              {
                path: 'applyRecord',
                name: 'ApplyRecord',
                component: () => import('@/views/applyRecord'),
                meta: {
                  title: '申请产品备案'
                }
              }
            ]
          }
        ]
      },
      {
        path: 'manageData',
        name: 'manageData',
        component: CompanyHomeLayout,
        redirect: '/company/manageData/dataUpload',
        meta: {
          title: '数据管理'
        },
        children: [
          {
            path: 'dataUpload',
            name: 'DataUpload',
            component: () => import('@/views/dataUpload'),
            meta: {
              title: '数据上传监控'
            }
          },
          {
            path: 'batchCatalog',
            name: 'BatchCatalog',
            component: BlankLayout,
            meta: {
              title: '产品批次目录'
            },
            children: [
              {
                path: '',
                name: '',
                component: () => import('@/views/batchCatalog'),
              },
              {
                path: 'batchTraceDetail',
                name: 'BatchTraceDetail',
                component: () => import('@/views/batchTraceDetail'),
                meta: {
                  title: '查看追溯码明细'
                }
              }
            ]
          },
          {
            path: 'saleRecord',
            name: 'SaleRecord',
            component: () => import('@/views/saleRecord'),
            meta: {
              title: '产品销售记录'
            }
          },
          {
            path: 'saleDetail',
            name: 'SaleDetail',
            component: () => import('@/views/saleDetail'),
            meta: {
              title: '产品销售明细'
            }
          },
          {
            path: 'dataCheck',
            name: 'DataCheck',
            component: () => import('@/views/dataCheck'),
            meta: {
              title: '数据交换查询'
            }
          }
        ]
      }
    ]
  },
  {
    path: '/businessManage',
    name: 'BusinessManage',
    redirect: '/businessManage/basicData/companyData',
    component: AdminLayout,
    children: [
      {
        path: 'basicData',
        name: 'BasicData',
        component: BusinessManageHome,
        redirect: '/businessManage/basicData/companyData',
        meta: {
          title: '基础数据管理'
        },
        children: [
          {
            path: 'companyData',
            name: 'CompanyData',
            component: () => import('@/views/_companyData/layout'),
            meta: {
              title: '企业数据目录'
            },
            children: [
              {
                path: '',
                name: '',
                component: () => import('@/views/_companyData')
              },
              {
                path: 'companyDetail',
                name: 'CompanyDetail',
                component: () => import('@/views/_companyDetail'),
                meta: {
                  title: '企业详情'
                }
              }
            ]
          },
          {
            path: 'productCatalog',
            name: 'ProductCatalog',
            component: () => import('@/views/_productCatalog/layout'),
            meta: {
              title: '产品目录'
            },
            children: [
              {
                path: '',
                name: '',
                component: () => import('@/views/_productCatalog')
              },
              {
                path: 'productDetail',
                name: 'ProductDetail',
                component: () => import('@/views/_productDetail'),
                meta: {
                  title: '产品详情'
                }
              }
            ]
          },
          {
            path: 'batchCatalog',
            name: 'BatchCatalog',
            component: BlankLayout,
            meta: {
              title: '产品批次目录'
            },
            children: [
              {
                path: '',
                component: () => import('@/views/_batchCatalog'),
              },
              {
                path: 'batchTraceDetail',
                name: 'BatchTraceDetail',
                component: () => import('@/views/batchTraceDetail'),
                meta: {
                  title: '查看追溯码明细'
                }
              }
            ]
          },
          {
            path: 'saleRecord',
            name: 'SaleRecord',
            component: () => import('@/views/_saleRecord'),
            meta: {
              title: '产品销售记录'
            }
          },
          {
            path: 'saleDetail',
            name: 'SaleDetail',
            component: () => import('@/views/_saleDetail'),
            meta: {
              title: '产品销售明细'
            }
          }
        ]
      },
      {
        path: 'business',
        name: 'business',
        component: BusinessManageHome,
        redirect: '/businessManage/business/recordAudit',
        meta: {
          title: '业务管理'
        },
        children: [
          {
            path: 'recordAudit',
            name: 'RecordAudit',
            component: () => import('@/views/_recordAudit/layout'),
            meta: {
              title: '产品备案审核'
            },
            children: [
              {
                path: '',
                name: '',
                component: () => import('@/views/_recordAudit')
              },
              {
                path: 'recordDetail',
                name: 'RecordDetail',
                component: () => import('@/views/_recordDetail'),
                meta: {
                  title: '备案详情'
                }
              },
              {
                path: 'applyAudit',
                name: 'ApplyAudit',
                component: () => import('@/views/_applyAudit'),
                meta: {
                  title: '审核'
                }
              }
            ]
          },
          {
            path: 'dataCheck',
            name: 'DataCheck',
            component: () => import('@/views/_dataCheck'),
            meta: {
              title: '数据交换查询'
            }
          }
        ]
      }
    ]
  },
  {
    path: '/systemManage',
    name: 'SystemManage',
    redirect: '/systemManage/company/companyUser',
    component: AdminLayout,
    children: [
      {
        path: 'company',
        name: 'Company',
        component: () => import('@/views/_systemManageHome'),
        redirect: '/systemManage/company/companyUser',
        meta: {
          title: '用户管理'
        },
        children: [
          {
            path: 'companyUser',
            name: 'CompanyUser',
            component: () => import('@/views/_companyUser'),
            meta: {
              title: '生产企业用户管理'
            }
          },
          {
            path: 'systemUser',
            name: 'SystemUser',
            component: () => import('@/views/_systemUser'),
            meta: {
              title: '系统管理用户管理'
            }
          }
        ]
      },
      {
        path: 'role',
        name: 'Role',
        component: () => import('@/views/_systemManageHome'),
        redirect: '/systemManage/role/roleManage',
        meta: {
          title: '角色管理'
        },
        children: [
          {
            path: 'roleManage',
            name: 'RoleManage',
            component: () => import('@/views/_roleManage'),
            meta: {
              title: '协同平台角色管理'
            }
          }
        ]
      },
      {
        path: 'log',
        name: 'Log',
        component: () => import('@/views/_systemManageHome'),
        redirect: '/systemManage/log/logCheck',
        meta: {
          title: '日志审计'
        },
        children: [
          {
            path: 'logCheck',
            name: 'LogCheck',
            component: () => import('@/views/_logCheck'),
            meta: {
              title: '日志查询'
            }
          }
        ]
      }
    ]
  },
  {
    path: '/screen',
    name: 'Screen',
    component: ScreenLayout,
    redirect: '/screen/home',
    children: [
      {
        path: 'home',
        name: 'Home',
        component: () => import('@/views/screen/home'),
        meta: {
          title: '数据监控大屏'
        }
      }
    ]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () =>
  new Router({
    mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
  })

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
