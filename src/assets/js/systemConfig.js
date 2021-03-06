export default {
  // 错误页面的配置
  errorPageConfig: {
    // 配置错误页面，从多少秒后跳转到redirectUrl
    initSecondCount: 5,
    // 重定向到登录界面的地址
    redirectUrl: '/'
  },
  // 文件上传配置
  fileConf: {
    size: 1000,
    type: ['jpg', 'png', 'jpeg'],
    url: '/colife/activity/vote/upload'
  },
  // pagination配置
  page: {
    // 总记录数
    total: 100,
    // 设置pageSize的选项
    pageSizeOptions: [5, 10, 25, 50, 100, 200],
    // 单页显示的记录数
    pageSize: 15,
    // 当前分页index
    currentPage: 1
  },
  // 系统信息文本提示
  tips: {
    register: {
      userRegisterError: '账号注册失败',
      userRegisterSuccess: '账号注册成功'
    },
    userInfo: {
      checkUserNameError: '用户名不唯一',
      checkEmailError: '用户邮箱不唯一'
    }
  },
  // 系统请求地址的配置项
  requestUrlConfig: {
    header: {
      getOnlineUserInfo: '/colife/activity/admin/getOnlineUser'
    },
    login: {
      checkUserValidation: '/colife/activity/authority'
    },
    register: {
      // 检测用户名是否唯一
      checkUserName: '/colife/ucenter/member/check/username',
      // checkUserName: '/static/checkUsername.json',
      // 检测邮箱是否唯一
      checkEmail: '/colife/ucenter/member/check/email',
      // checkEmail: '/static/checkEmail.json',
      // 检测电话号是否唯一
      checkPhone: '/colife/ucenter/member/check/phone',
      // 用户名方式注册
      userRegister: '/colife/ucenter/member/register'
    },
    userInfo: {
      // getUserInfo: '/colife/ucenter/member'
      // 获取用户个人信息
      getUserInfo: '/static/getUserInfo.json'
    }
  },
  // 数字转换成对应文字意思配置
  numToStr: {
    userManagerNumToStr: {
      isAdmin: {
        // 是否管理员
        1: '是',
        0: '否'
      },
      userStatus: {
        // 用户状态
        2: '全部',
        0: '启用',
        1: '停用'
      }
    },
    voteManager: {
      activityState: {
        '-1': '全部',
        '1': '未开始',
        '2': '进行中',
        '3': '已结束'
      }
    }
  }
}
