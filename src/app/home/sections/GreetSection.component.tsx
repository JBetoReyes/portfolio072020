import React from 'react';
import { MainSection } from '@src/app/common/MainSection.component';

export const GreetSection = (): JSX.Element => {
  return (
    <MainSection>
      <div className="greet-section__container">
        <h1 className="greet-section__greet">Hello, I&apos;m Jose Quevedo</h1>
      </div>
    </MainSection>
  );
};
