import React from 'react';
import { MainSection } from '@common/MainSection.component';
import { IntroSection } from './sections/IntroSection.component';

export const Home = (): JSX.Element => {
  return (
    <div className="theme-default">
      <IntroSection />
      <MainSection>
        <h1>Hi, I&apos;m José Quevedo</h1>
      </MainSection>
      <MainSection>
        <h1>Hi, I&apos;m José Quevedo</h1>
      </MainSection>
    </div>
  );
};
