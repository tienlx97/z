import cn from 'classnames';
import React from 'react';

type AssemblyIconSize = 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge';

type AssemblyIconProps = {
  alt?: string;
  isDeprecated?: boolean;
  role?: string;
  size?: AssemblyIconSize;
  icon?: string;
};

const CheckIcon = ({className}: JSX.IntrinsicElements['svg']) => (
  <svg
    className={className}
    stroke="currentColor"
    fill="#65c999"
    strokeWidth="0"
    viewBox="0 0 1024 1024"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"></path>
  </svg>
);

const XIcon = ({className}: JSX.IntrinsicElements['svg']) => (
  <svg
    className={className}
    stroke="currentColor"
    fill="#c34632"
    strokeWidth="0"
    viewBox="0 0 15 15"
    xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.49991 0.877075C3.84222 0.877075 0.877075 3.84222 0.877075 7.49991C0.877075 11.1576 3.84222 14.1227 7.49991 14.1227C11.1576 14.1227 14.1227 11.1576 14.1227 7.49991C14.1227 3.84222 11.1576 0.877075 7.49991 0.877075ZM3.85768 3.15057C4.84311 2.32448 6.11342 1.82708 7.49991 1.82708C10.6329 1.82708 13.1727 4.36689 13.1727 7.49991C13.1727 8.88638 12.6753 10.1567 11.8492 11.1421L3.85768 3.15057ZM3.15057 3.85768C2.32448 4.84311 1.82708 6.11342 1.82708 7.49991C1.82708 10.6329 4.36689 13.1727 7.49991 13.1727C8.88638 13.1727 10.1567 12.6753 11.1421 11.8492L3.15057 3.85768Z"
      fill="#c34632"></path>
  </svg>
);

export function AssemblyIcon(props: AssemblyIconProps) {
  const {icon, isDeprecated = true, role = 'img', size = 'medium'} = props;

  const clazz = cn(
    'AssemblyIcon',
    'AssemblyIcon--' + size + (isDeprecated ? '-deprecated' : '')
  );

  if (icon === 'check') {
    return <CheckIcon className={clazz} />;
  }

  if (icon === 'x') {
    return <XIcon className={clazz} />;
  }

  return null;
}
