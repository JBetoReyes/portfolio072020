import { MainSection } from '@src/app/common/MainSection.component';
import React from 'react';
import pokeApp from '@assets/poke-app.png';
import '@styles/pages/Home/sections/_ProjectsSection.scss';


const ProjectSection = (): JSX.Element => {
  return (
    <MainSection>
      <div className="projects-wrapper">
        <h4>PERSONAL PROJECTS</h4>
        <div className="post-wrapper">
          <div className="post">
            <img className="thumbnail" src={pokeApp} alt="poke-app-project"/>
            <div className="post-preview">
							<h6 className="post-title">Poke App</h6>
							<p className="post-intro">Small pet project that I created while I was learning React Hooks</p>
							<a href="https://www.pokeapp.josearq.com">Visit</a>
						</div>
          </div>
        </div>
      </div>
    </MainSection>
  );
};

export default ProjectSection;