import { MainSection } from '@src/app/common/MainSection.component';
import React from 'react';

export default (): JSX.Element => {
  return (
    <MainSection>
      <div className="about-wrapper">
        <div className="about-me">
          <h4>More about me</h4>
          <p>
            I have over 4 years of experience within full-stack development
            (specialized in js). I also have experience with docker, aws lambdas
            and Java.
          </p>
        </div>
      </div>
    </MainSection>
  );
};
