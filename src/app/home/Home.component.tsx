import React from 'react';
import { MainSection } from '@common/MainSection.component';
import { GreetSection } from './sections/GreetSection.component';

export const Home = (): JSX.Element => {
  return (
    <>
      <GreetSection />
      <MainSection>
        <h1>Hi, I&apos;m José Quevedo</h1>
      </MainSection>
      <MainSection>
        <h1>Hi, I&apos;m José Quevedo</h1>
      </MainSection>
    </>
  );
};
