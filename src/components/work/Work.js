import './Work.css';
import google_logo from '../../res/images/Google.png';
import amazon_logo from '../../res/images/Amazon.png';
import deepsight_logo from '../../res/images/DeepSight.png';
import perform_logo from '../../res/images/Perform.png';
function Work() {
    const work_experiences = [
        { company: 'Google', start: 'Sep. 2021', end: 'now',
          image: google_logo, labels: ['C++', 'SQL']},
        { company: 'Amazon', start: 'June. 2021', end: 'Sep 2021',
        image: amazon_logo, labels: ['GraphQL', 'Python'] },
        { company: 'DeepSight', start: 'Sep. 2019', end: 'June 2021',
        image: deepsight_logo, labels: ['C++', 'React', 'Node', 'OpenGL', 'Hololens'] },
        { company: 'Perform Centre', start: 'May. 2019', end: 'Sep 2019',
        image: perform_logo, labels: ['Vue', 'Laravel', 'Matlab'] },
    ];
  return (
    <div className="Grid">
        {work_experiences.map(work_experience =>
        <div className="Card" key={work_experience.company}>
            <div className="Logo">
                <img src={work_experience.image} alt="" 
                 width="150" height="150"></img>
            </div>
            <div className="ExperienceDescription">
            <b>{work_experience.company}</b>
            <div className="WorkDate">{ work_experience.start + ' - '     
                + work_experience.end }   </div> 
            </div>
            <div className="LabelContainer">
            {work_experience.labels.map(label =>
            <div className="Label" key={label}> {label} </div>
            )}
            </div>
        </div>
        )}
    </div>
  );
}

export default Work;
