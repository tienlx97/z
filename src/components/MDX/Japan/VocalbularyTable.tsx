import React from 'react';

export default function VocalbularyTable({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <table id="vocalbulary-table" className="w-full">
      <thead>
        <tr>
          <th>Hiragana</th>
          <th>Nghĩa</th>
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
}
