import { MainSection } from '@src/app/common/MainSection.component';
import React from 'react';
import '@styles/pages/Home/sections/_AboutSection.scss';

export default (): JSX.Element => {
  return (
    <MainSection>
      <div className="about-wrapper">
        <div className="about-me">
          <h4>More about me</h4>
          <p>
            Hi, I’m José. I’m 27 years old, multi-disciplinary and latin
            american, MX. I’m mostly using React and Node to build websites and
            web-based applications for different kind of clients.
          </p>
          <p>
            When I’m not <s>in the office</s> working remotely I can be found
            eating tacos, reading sci-fi, eating more tacos, learning new
            skills, and occasionally, writing about some of that here.
          </p>
          <h4>TOP EXPERTISE</h4>
          <div id="skills">
            <ul>
              <li>JS</li>
              <li>NodeJS</li>
              <li>ReactJS</li>
              <li>Angular</li>
              <li>Typescript</li>
              <li>HTML/CSS</li>
            </ul>
            <ul>
              <li>Mongo DB</li>
              <li>Docker</li>
              <li>Postgres</li>
              <li>AWS Lambdas</li>
              <li>EC2</li>
            </ul>
          </div>
        </div>
      </div>
    </MainSection>
  );
};
