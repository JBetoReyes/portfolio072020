import React from 'react';
import { MainSection } from '@common/MainSection.component';
import { connect } from 'react-redux';
import IntroSection from './sections/IntroSection.component';
import { IStoreState } from '../store/store.model';

const mapStateToProps = (state: IStoreState) => ({
  theme: state.theme,
});

type MapToStateProps = ReturnType<typeof mapStateToProps>;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type OwnProps = Record<string, any>;
type Props = MapToStateProps;

const Home = (props: OwnProps): JSX.Element => {
  const { theme } = props as Props;
  return (
    <div className={`theme-${theme}`}>
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

export default connect<MapToStateProps, null, OwnProps, IStoreState>(
  mapStateToProps
)(Home);
