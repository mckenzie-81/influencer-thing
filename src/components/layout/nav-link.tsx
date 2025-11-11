'use client';

import Link, { LinkProps } from 'next/link';
import React from 'react';

interface NavLinkProps extends LinkProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({ children, className, onClick, ...props }) => {
  return (
    <Link {...props} className={className} onClick={onClick}>
      {children}
    </Link>
  );
};

export default NavLink;
