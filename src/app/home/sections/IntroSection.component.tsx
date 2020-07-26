import React from 'react';
import '@styles/pages/Home/sections/_IntroSection.scss';
import { MainSection } from '@src/app/common/MainSection.component';

export const IntroSection = (): JSX.Element => {
  return (
    <MainSection>
      <div className="intro-section__container">
        <div className="greet-wrapper">
          <h1 className="greet-wrapper__greet">Hello, I&apos;m Jose Quevedo</h1>
        </div>
        <div className="content-wrapper">
          <div className="nav-wrapper">a list</div>
          <div className="right-wrapper">picture</div>
          <div className="left-wrapper">description</div>
        </div>
      </div>
    </MainSection>
  );
};
