import Head from 'next/head';
import Link from 'next/link';
import { PropsWithChildren, useState } from 'react';
import AnimatingBackground from 'src/background';
import { and } from 'src/utils/css';
import style from './layout.module.css';

import PageHeader from '@components/page-header';
import favicon from '@variant/profile/lib/logo/favicon.png';

type LayoutProps = PropsWithChildren<{
  title?: string;
  fullWidth?: boolean;
  crazy?: boolean;
  homepage?: boolean;
  zenMode?: boolean;
}>;

const Layout = ({
  children,
  title = 'Variant – En variant av et konsulentselskap',
  fullWidth = false,
  crazy = false,
  homepage = false,
  zenMode = false,
}: LayoutProps) => {
  const [isMenuVisible, setMenuVisible] = useState(false);

  const mainClass = and(
    style.main,
    !zenMode ? style['main--overflow'] : undefined,
    zenMode ? style['main--zenMode'] : undefined,
  );

  return (
    <div
      className={mainClass}
      style={isMenuVisible ? { position: 'fixed' } : { position: 'relative' }}
    >
      
      <div
        className={and(
          style.main__inner,
          fullWidth ? style.main__innerFullWidth : '',
        )}
      >
     
        <div>{children}</div>
      </div>
      <AnimatingBackground crazy={crazy} />
   
        </div>
  );
};

export default Layout;
