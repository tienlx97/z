import {useI18n} from 'next-localization';
import React, {Children} from 'react';

export const VocalbularyTableItem = ({
  meaning,
  children,
}: {
  children: React.ReactNode;
  meaning: string;
}) => {
  return (
    <tr>
      <td>{children}</td>
      <td>{meaning}</td>
    </tr>
  );
};

export default function VocalbularyTable({
  children,
}: {
  children: React.ReactNode;
}) {
  const childrenArr = React.Children.toArray(children).filter(
    (child) => child !== '\n'
  );

  const {t} = useI18n();

  return (
    <table id="vocalbulary-table" className="w-full">
      <thead>
        <tr>
          <th>{t('mdx.vtable.hiragana')}</th>
          <th>{t('mdx.vtable.meaning')}</th>
        </tr>
      </thead>
      <tbody>{childrenArr}</tbody>
    </table>
  );
}
