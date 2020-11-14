import React from 'react';
import Layout from '../../components/Layout';
import { SectionTitle, Pill } from '../../styles';
import { ProjectItem, ProjectTitle, SkillContainer, projimages } from './styles';


// Map through the user.projects items and display attributes
    // including project name, summary, languages, libraries

// using react-image package to display images with a failsafe(backup)
// const MyImageComponent = () => (
//   return <img src={['https://project-images.gitconnectedcontent.com/51d304c1-0830-445e-9e7b-66730fd114b0-thumbnail', 'https://project-images.gitconnectedcontent.com/51d304c1-0830-445e-9e7b-66730fd114b0-desktop']} />

// )

// const isflickster = 

const Projects = ({ user }) => {
  return (

    <Layout user={user}>
      <div>
        <SectionTitle>Projects</SectionTitle>
        <ul>
          {user.projects.map((project, i) => (
            <ProjectItem key={i}>
              <ProjectTitle>{project.name}</ProjectTitle>
              <p>{project.summary}</p>
              <SkillContainer>
                {[...project.languages, ...project.libraries].map((item, j) => (
                  <Pill key={j}>{item}</Pill>
                ))}
              </SkillContainer>
                
                  <img src={project.images[0].resolutions.thumbnail.url} style={{width:256,  height:400}} >
                    </img>

                  {/* i==2 is to check if this is Flickster project(2nd in array) to add 2nd image */}
                  {i === 2 && 
                    <img src={user.projects[2].images[1].resolutions.thumbnail.url} style={{marginLeft:'15px', width:256, height:400}} >
                      </img> 
                      }

            </ProjectItem>

          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default Projects;