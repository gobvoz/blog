import { memo, useCallback } from 'react';

import { classNames } from 'shared/libs/class-names';
import cls from './tab-list.module.scss';
import { Button } from 'shared/ui/button';
import { ArticleTag } from 'shared/constants/ui';

interface TabItem {
  value: ArticleTag;
  content: React.ReactNode;
}

interface Props {
  className?: string;
  currentTab: ArticleTag;
  tabList: TabItem[];
  onTabChange: (value: ArticleTag) => void;
}

const TabList = memo((props: Props) => {
  const { className, tabList, onTabChange } = props;

  const handleTabClick = useCallback(
    (tab: TabItem) => {
      return () => {
        onTabChange(tab.value);
      };
    },
    [onTabChange],
  );

  return (
    <div className={classNames(cls['tab-list'], className)}>
      {tabList.map((tabItem, index) => {
        return (
          <Button
            className={classNames(cls['tab-list'], className)}
            key={index}
            onClick={handleTabClick(tabItem)}
            icon
            checked={tabItem.value === props.currentTab}>
            {tabItem.content}
          </Button>
        );
      })}
    </div>
  );
});

export { TabList, TabItem };
