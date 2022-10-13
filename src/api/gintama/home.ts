/*
 * @Description:
 * @Author: zhengqi
 * @Date: 2022-10-09 11:12:49
 * @LastEditTime: 2022-10-13 09:29:52
 */
import { defHttp } from '/@/utils/http/axios';
import { WlqdModel } from './model/wlqdModel';

enum Api {
  WLQD_INFO = '/cats/findAll',
  // ACCOUNT_INFO = '/account/getAccountInfo',
  // SESSION_TIMEOUT = '/user/sessionTimeout',
  // TOKEN_EXPIRED = '/user/tokenExpired',
}

// Get personal center-basic settings

export const getWlqdInfoApi = () =>
  defHttp.get<WlqdModel>({
    url: Api.WLQD_INFO,
  });

// export const sessionTimeoutApi = () => defHttp.post<void>({ url: Api.SESSION_TIMEOUT });

// export const tokenExpiredApi = () => defHttp.post<void>({ url: Api.TOKEN_EXPIRED });
