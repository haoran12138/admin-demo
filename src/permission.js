import router from "./router";
import NProgress from "nprogress"; // 进度条
import "nprogress/nprogress.css"; // 进度条 style
import { getToken } from "@/utils/auth"; // get token from cookie
NProgress.configure({ showSpinner: false });
const whiteList = ["/login"];

router.beforeEach(async (to, from, next) => {
  // 开始进度条
  NProgress.start();

  const hasToken = getToken();

  if (hasToken) {
    if (to.path === "/login") {
      // 如果已登录，请重定向到主页
      next({ path: "/" });
      NProgress.done();
    } else {
      // TODO 权限判断(如果有的话)
      next();
      NProgress.done();
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      // in the free login whitelist, go directly
      next();
    } else {
      // 其他无权访问的页面将被重定向到登录页面。 redirect 保存退出的页面路径
      next(`/login?redirect=${to.path}`);
      NProgress.done();
    }
  }
});

router.afterEach(() => {
  // finish progress bar
  NProgress.done();
});
