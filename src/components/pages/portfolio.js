import React from 'react';
import { projects } from '../../utils/projects';
import Project from '../Project';

export default function Portfolio() {
  return (
    <div className='d-flex flex-wrap'>
      <h1 className='makeCenter'>Portfolio</h1>
      <div className="d-flex justify-content-center m-2 flex-wrap">
        {projects.map(project => <Project {...project}/>)}
      </div>
    </div>
  );
}