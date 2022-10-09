/*
 * @Description:
 * @Author: zhengqi
 * @Date: 2022-10-09 10:21:10
 * @LastEditTime: 2022-10-09 10:31:45
 */
import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
// import { t } from '/@/hooks/web/useI18n';

const system: AppRouteModule = {
  path: '/gtm',
  name: 'Gintama',
  component: LAYOUT,
  redirect: '/gtm/home',
  meta: {
    orderNo: 2000,
    icon: 'ion:settings-outline',
    title: 'Gintama',
  },
  children: [
    {
      path: 'home',
      name: 'home',
      meta: {
        title: 'home',
        ignoreKeepAlive: false,
      },
      component: () => import('/@/views/gintama/home/index.vue'),
    },
    {
      path: 'wlqd',
      name: 'wlqd',
      meta: {
        title: 'wlqd',
        ignoreKeepAlive: true,
      },
      component: () => import('/@/views/gintama/wlqd/index.vue'),
    },
  ],
};

export default system;
