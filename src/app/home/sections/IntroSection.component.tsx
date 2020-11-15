import React from 'react';
import { MainSection } from '@common/MainSection.component';
import { WindowHeader } from '@common/WindowHeader.component';
import profile from '@assets/profile.png';
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
          <div className="right-wrapper">
            <div className="right-wrapper__profile-wrapper">
              <img
                className="right-wrapper__profile-wrapper--img"
                src={profile}
                alt="profileimage"
              />
            </div>
            <div className="right-wrapper__theme-wrapper">
              <h4 className="right-wrapper__theme-title">Personalize theme</h4>
              <div className="right-wrapper__theme-dots">
                <div className="right-wrapper__theme-dot" />
                <div className="right-wrapper__theme-dot" />
              </div>
            </div>
          </div>
          <div className="left-wrapper">
            <div className="left-wrapper__about-wrapper">
              <div className="left-wrapper__about-wrapper--shadow">
                <div className="left-wrapper__about-wrapper--corner" />
                <div className="left-wrapper__about-wrapper--corner" />
                <div className="left-wrapper__about-wrapper--corner" />
                <div className="left-wrapper__about-wrapper--corner" />
                <h3>What I Do?</h3>
                <p className="left-wrapper__about-content">
                  I&apos;m a fullstack developer specialized in{' '}
                  <strong>NodeJS</strong>, <strong>Angular</strong> and{' '}
                  <strong>ReactJS</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainSection>
  );
};
