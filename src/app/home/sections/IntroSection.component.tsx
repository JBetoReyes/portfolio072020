/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { MainSection } from '@common/MainSection.component';
import { WindowHeader } from '@common/WindowHeader.component';
import profile from '@assets/profile-default.png';
import { IStoreState } from '@src/app/store/store.model';
import { changeTheme } from '@common/actions/theme.action';
import { connect } from 'react-redux';
import { AppClickEvent } from '@src/typings/htmlEvents';
import '@styles/pages/Home/sections/_IntroSection.scss';

const mapDispatchToState = {
  changeTheme,
};

type MapDispToState = typeof mapDispatchToState;

type OwnProps = Record<string, any>;

type Props = MapDispToState;

const IntroSection = (props: OwnProps): JSX.Element => {
  const { changeTheme: dispChangeTheme } = props as Props;
  const handleChangeTheme = (theme: string) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    return (e: AppClickEvent) => {
      dispChangeTheme(theme);
      localStorage.setItem('theme', theme);
    };
  };
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
                <div
                  className="right-wrapper__theme-dot right-wrapper__theme-dot-light-mode"
                  onClick={handleChangeTheme('default')}
                  role="menuitem"
                />
                <div
                  className="right-wrapper__theme-dot"
                  onClick={handleChangeTheme('dark')}
                  role="menuitem"
                />
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
                  I&apos;m a multidisciplinary developer specialized in{' '}
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

export default connect<null, MapDispToState, OwnProps, IStoreState>(
  null,
  mapDispatchToState
)(IntroSection);
