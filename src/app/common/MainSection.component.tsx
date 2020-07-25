import React, { ReactNode } from 'react';
import 'Styles/components/_MainSection.scss';

type Props = {
  children: ReactNode;
};

export const MainSection = ({ children }: Props): JSX.Element => {
  return (
    <section className="main-section">
      <div className="main-section__container">{children}</div>
    </section>
  );
};
