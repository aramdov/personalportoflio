import React, { Component } from 'react';
import Layout from '../../components/Layout';
import { SectionTitle, Pill } from '../../styles';
import { ProjectItem, ProjectTitle, SkillContainer, projimages } from './styles';
import ReactPlayer from "react-player";


// Map through the user.projects items and display attributes
    // including project name, summary, languages, libraries

// using react-image package to display images with a failsafe(backup)
// const MyImageComponent = () => (
//   return <img src={['https://project-images.gitconnectedcontent.com/51d304c1-0830-445e-9e7b-66730fd114b0-thumbnail', 'https://project-images.gitconnectedcontent.com/51d304c1-0830-445e-9e7b-66730fd114b0-desktop']} />

// )

const Thumbnail2ndpicstyle = {marginLeft: '15px', width:256, height:400 };

const Projects = ({ user }) => {
  return (

    <Layout user={user}>
      <div>
        <SectionTitle>Projects</SectionTitle>
        <ul>
          {user.projects.map((project, i) => (
            <ProjectItem key={i}>
              <ProjectTitle href={project.githubUrl}> {project.name} </ProjectTitle>
              <a href={project.githubUrl}>{project.summary}</a>
              <SkillContainer>
                {[...project.languages, ...project.libraries].map((item, j) => (
                  <Pill key={j}>{item}</Pill>
                ))}
              </SkillContainer>
                
                  <img src={project.images[0].resolutions.thumbnail.url} style={{width:256,  height:400}} >
                    </img>

                  { i == 0 && <img src={user.projects[0].images[1].resolutions.thumbnail.url} style={{marginLeft: '45px', width:256, height:400 }} >
                    </img> }

                  {/* { i == 0 && <url src={user.projects[0].videos[0].url} style={{marginLeft:'15px', width:256, height:400}} >
                    </url> } */}

                  {i == 0 && <ReactPlayer url={user.projects[0].videos[0].url} width='550px' style={{marginTop: '45px'}}/> }

                  {/* i==2 is to check if this is Flickster project(2nd in array) to add 2nd image */}
                  {i === 2 &&
                    <img src={user.projects[2].images[1].resolutions.thumbnail.url} style={{marginLeft: '30px', width:256, height:400 }} >
                    </img> }
                  


            </ProjectItem>

          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default Projects;