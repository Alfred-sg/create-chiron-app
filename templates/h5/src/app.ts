import { IS_DEV, ENABLE_DEBUG } from './config';

/**
 * 启用调试模式
 */
if ( ENABLE_DEBUG && (IS_DEV || 
  location.search.split(/&|\?/).some(param => param === 'debug=true')) ){
  import('vconsole').then(({
    default: vConsole
  }) => {
    console.log(vConsole)
    new vConsole();
  });
};
