import React from 'react';
import { MainSection } from '@common/MainSection.component';
import { WindowHeader } from '@common/WindowHeader.component';
import '@styles/pages/Home/sections/_IntroSection.scss';

export const IntroSection = (): JSX.Element => {
  return (
    <MainSection>
      <div className="intro-section__container">
        <div className="greet-wrapper">
          <h1 className="greet-wrapper__greet">Hello, I&apos;m Jose Quevedo</h1>
        </div>
        <div className="content-wrapper">
          <WindowHeader
            menus={[
              {
                label: 'Contact',
              },
            ]}
          />
          <div className="right-wrapper">picture</div>
          <div className="left-wrapper">description</div>
        </div>
      </div>
    </MainSection>
  );
};
