import { defineMock } from 'vite-plugin-mock-dev-server'

export default defineMock([
  {
    url: '/api-dev/login',
    method: 'POST',
    body: {
      code: '000000',
      data: {
        access_token: 'bqddxxwqmfncffacvbpkuxvwvqrhln'
      },
      msg: ''
    }
  },
  {
    url: '/api-dev/logout',
    method: 'POST',
    body: {
      code: '000000',
      data: {},
      msg: ''
    }
  },
  {
    url: '/api-dev/userinfo',
    method: 'GET',
    body: {
      code: '000000',
      data: {
        name: 'aklzyang'
      },
      msg: ''
    }
  },
  {
    url: '/api-dev/auth/buttons',
    method: 'GET',
    body: {
      code: '000000',
      data: {
        HomeIndex: ['add', 'edit', 'delete']
      },
      msg: ''
    }
  },
  {
    url: '/api-dev/menu/list',
    method: 'GET',
    body: {
      code: '000000',
      data: [
        {
          path: '/home/index',
          name: 'HomeIndex',
          component: '/home/index',
          meta: {
            icon: 'home',
            title: '首页',
            isLink: '',
            isHide: false,
            isFull: false,
            isAffix: true,
            isKeepAlive: true
          }
        },
        {
          path: '/dataScreen',
          name: 'dataScreen',
          component: '/dataScreen/index',
          meta: {
            icon: 'screen',
            title: '数据大屏',
            isLink: '',
            isHide: false,
            isFull: true,
            isAffix: false,
            isKeepAlive: true
          }
        }
      ],
      msg: ''
    }
  }
])
