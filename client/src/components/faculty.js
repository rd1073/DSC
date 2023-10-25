import React from 'react';
import '../components/faculty.css';
import Sir from '../assets/karthicksir.jpg';
const FacultyCoordinator = () => {
  return (
    <div className="faculty-container">

        <div className="faculty-title">

        <h1>Faculty Coordinator</h1>
      </div>
       <div className="fatext-container">

        <div className="fatext-left">
            <h1>Dr. T Karthick</h1>

          <p>Associate Professor with expertise in Python, Java, C, and C++. 
 Ph.D. in Health Science, Cloud computing, and IoT from Anna University.
His research work spans the domains of Health Science, lung health, human activity recognition,  current work in agriculture in collaboration  with prestigious institutions like the National University of Malaysia, the University of Malaya, and Dalhousie University, Canada. His impressive record includes over 25 research papers in top journals, 6 published patents, and one granted patent. </p>
        </div>
        <div className="image-right">
          <img src={Sir} alt="Image on the right" />
        </div>
        

      </div>
       
    </div>
  );
};

export default FacultyCoordinator;

  