import React from 'react';
import cn from 'classnames';
import {IconComment} from './Icon/IconComment';

export default function UtilityBar({
  onOpen,
  isVisible,
}: {
  onOpen: any;
  isVisible: boolean;
}) {
  return (
    <div
      className={cn(
        'sticky flex justify-center opacity-0 bottom-[16px] utility-animation',
        {
          '!opacity-100': isVisible,
        }
      )}>
      <div
        onClick={onOpen}
        className="cursor-pointer border-gray-20 border-[1px] border-solid dark:border-border-dark shadow-comment dark:shadow-comment-dark  bg-wash dark:bg-wash-dark h-[40px] min-w-[60px] py-0 px-[4px] rounded-[20px] flex items-center lg:py-0 lg:px-[14px] ">
        <div className="flex flex-row items-center justify-center  w-[100%]">
          <IconComment />
        </div>
      </div>
    </div>
  );
}
