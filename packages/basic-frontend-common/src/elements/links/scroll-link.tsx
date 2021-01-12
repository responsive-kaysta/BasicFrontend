import React, { FC } from 'react';
import * as Scroll from 'react-scroll';
import { Icon, IconSize } from '../../identity';
import { ThemeType } from '../../typings';
import { isMobileView } from '../../utils';

var ScrollLinkElement = Scroll.Link;

type ScrollLinkProps = {
  elementId: string;
  theme?: ThemeType;
  stickyHeader?: boolean;
};

export const ScrollLink: FC<ScrollLinkProps> = ({
  elementId,
  theme,
  stickyHeader = false,
}) => {
  const style = `w-6 h-12 mb-16 ${
    theme ? theme.body.textColor : 'text-gray-100'
  } hover:${
    theme ? theme.link.hoverColor : 'text-red-500'
  } font-semibold cursor-pointer`;

  const wrapper = `flex flex-col items-center w-20 mx-auto bg-transparent text-center`;

  const mobile = isMobileView(640);
  const offset = mobile ? -45 : -55;

  return (
    <div className={wrapper}>
      <ScrollLinkElement
        className={style}
        to={elementId}
        spy={true}
        smooth="easeInOutQuint"
        duration={2500}
        offset={stickyHeader ? offset : 0}
      >
        <Icon name="arrow_down2" size={IconSize.xs} />
      </ScrollLinkElement>
    </div>
  );
};
