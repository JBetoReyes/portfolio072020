import React from 'react';
import { connect } from 'react-redux';
import { MainSection } from '@common/MainSection.component';
import { changeTheme } from '@common/actions/theme.action';
import IntroSection from './sections/IntroSection.component';
import { IStoreState } from '../store/store.model';
import AboutSection from './sections/AboutSection.component';

const mapStateToProps = (state: IStoreState) => ({
  theme: state.theme,
});

type MapToStateProps = ReturnType<typeof mapStateToProps>;

const mapDispatchToState = {
  changeTheme,
};

type MapDispToState = typeof mapDispatchToState;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type OwnProps = Record<string, any>;
type Props = MapToStateProps & MapDispToState;

const Home = (props: OwnProps): JSX.Element => {
  const { theme, changeTheme: dispChangeTheme } = props as Props;
  const storedTheme = localStorage.getItem('theme');
  if (storedTheme) {
    dispChangeTheme(storedTheme);
  }
  return (
    <div className={`theme-${theme}`}>
      <IntroSection />
      <AboutSection />
      <MainSection>
        <h1>Hi, I&apos;m José Quevedo</h1>
      </MainSection>
    </div>
  );
};

export default connect<MapToStateProps, MapDispToState, OwnProps, IStoreState>(
  mapStateToProps,
  mapDispatchToState
)(Home);
