/* eslint-disable jsx-a11y/anchor-is-valid */
import '@styles/components/_WindowHeader.scss';
import React from 'react';
import { IWindowMenu } from './WindowHeader.interface';

export type OwnPropsType = {
  menus: IWindowMenu[];
};

export const WindowHeader = ({ menus }: OwnPropsType): JSX.Element => {
  const reactMenus = menus.map(({ label }: IWindowMenu, index) => (
    <li key={`${index + 1}-${label}`}>
      <a href="#">{label}</a>
    </li>
  ));

  return (
    <nav className="window-header">
      <div className="window-buttons">
        <div className="window-buttons__button" />
        <div className="window-buttons__button" />
        <div className="window-buttons__button" />
      </div>
      <div className="window-menus">
        <ul>{reactMenus}</ul>
      </div>
    </nav>
  );
};
