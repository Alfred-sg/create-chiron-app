import React from 'react';
import { Layout } from 'antd';
import { router } from 'umi';
import { TITLE, SIDER_THEME } from '@/config';
import Menu from './Menu';
import styles from './index.scss';

const { Sider } = Layout;

export default (props: {
  collapsed: boolean;
  onCollapse: (collapsed: boolean) => void;
}) => {
  const { collapsed, onCollapse } = props;
  const theme = SIDER_THEME;

  return (
    <Sider 
      breakpoint="lg" 
      className={styles.sider}
      collapsible 
      trigger={null}
      collapsed={collapsed} 
      onCollapse={onCollapse}
      theme={theme}
      width={256}
    >
      <div className={styles.logo} onClick={() => router.push('/')}>
        <span className={styles.logo_img} />
        <span className={styles.title}>{collapsed ? '' : TITLE}</span>
      </div>

      <Menu theme={theme} />
    </Sider>
  );
};
