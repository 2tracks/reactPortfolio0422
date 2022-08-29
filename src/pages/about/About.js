import classes from './About.module.scss';
import PageHeader from '../../components/pageHeader/PageHeader';
import gabiCafe1200 from '../../img/gabiCafe1200jpg.jpg';
import FrontendSkills from '../../components/frontendSkills/FrontendSkills';
//import FadeInWhenVisible from '../../components/fadeInWhenVisible/FadeInWhenVisible';
import BackendSkills from '../../components/backendSkills/BackendSkills';


export default function About() {

  return (
    <div id="about" className={classes.about}>
      <PageHeader title={'About Me'}/>
      <h3>Let me tell you a few things</h3>
      <img src={gabiCafe1200} alt="Portrait" />
      <h2>Bio</h2>
      <p className={classes.textBio}>My journey started in the graphic industry as a Serigraph,
       over the years I have worked as an IT Supporter, IT-Consultant, IT-Teacher and Webmaster
        as well as in the Sales field. I have a wide range of experience and I love to bring new ideas to the table and
         work in an agile team. I love to code Websites. I am comfortable working independently 
        and/or collaborating on teams.</p>
      <div className={classes.containerFrontend}>
        <h2>Frontend</h2>
        <p>I love to create the Front-end with modern HTML,
          CSS and Javascript and React by using some of the modern workflow tools like Git, Npm and Gulp.
        </p>
          <FrontendSkills/>
      </div>
      <div className={classes.containerBackend}>
        <h2>Backend</h2>
        <p>All the data needs to be stored somewhere that's 
        where the Back-end comes into play. I'll code your
          Back-end in Python and use a SQL or NoSQL database
          along with it or I use JSON as a way to pass the Back-end to the Front-end.
        </p>
        <BackendSkills/>
      </div>
    </div>
  )
}
