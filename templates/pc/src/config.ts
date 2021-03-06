import { UserInfo } from '@/types/global';
import meta from '../meta.json';

/** 环境 */
export const DEPLOY_ENV = process.env.DEPLOY_ENV;
export const NODE_ENV = process.env.NODE_ENV;
export const IS_PROD = DEPLOY_ENV === 'prod';
export const IS_DEV = DEPLOY_ENV !== 'prod';
export const IS_LOCAL = NODE_ENV !== 'production';
export const ENV_TEXT = IS_PROD ? '线上环境' : !IS_LOCAL ? '开发环境' : '本地环境';

/** git 提交信息 */
export const GIT_BRANCH_NAME = process.env.GIT_BRANCH_NAME;
export const GIT_COMMIT_HASH = process.env.GIT_COMMIT_HASH;
export const GIT_COMMIT_MESSAGE = process.env.GIT_COMMIT_MESSAGE;

/** 请求路径前缀 */
export const URL_PREFIX = !IS_LOCAL ? '/api' : '';

/** 应用名称 */
export const TITLE = meta.title;
export const COMPANY_NAME = meta.companyName;
export const SIDER_THEME = meta.siderTheme;
export const LOGO_URL = meta.logoUrl;
export const BREADCRUMBS_MODE = meta.breadcrumbsMode;

export const ENABLE_LOGIN = meta.enableLogin;
export const ENABLE_DEBUG = meta.enableDebug;

/** 默认用户 */
export const DEFAULT_USER = {
  name: '大青蛙',
} as UserInfo;

