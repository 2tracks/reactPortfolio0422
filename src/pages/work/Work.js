import classes from './work.module.scss';
import PageHeader from '../../components/pageHeader/PageHeader';
import Card from '../../components/card/Card'
import img from '../../img/bg_computer_sm.jpg';
import imgPortfolio from '../../img/ms1resume.png';
import imgHP from '../../img/ms2harryPotter.jpg';
import imgShopChichi from '../../img/ms4shopChichi.jpg';
import imgCookbook from '../../img/ms3cookbook.jpg';
import imgReactPortf from '../../img/reactPortfolio.jpg';


export default function Work() {
  return (
    <div id="work" className={classes.work}>
      <PageHeader title={'My Work'}/>
      <h5>Full description of each project can be found on the Readme file on the corresponding Github Repo</h5>
      <div className={classes.card_container}>
        <Card
            title = 'Coming soon'
            imageUrl={img}
            cardTitle='Html | CSS | Bootstrap'
            body= 'Coming soon'
            projectLink=''
            githubLink=''
          />
          <Card
            title = 'Coming soon'
            imageUrl={img}
            cardTitle='Html | CSS | Bootstrap'
            body= 'Coming soon'
            projectLink=''
            githubLink=''
          />
          <Card
            title = 'Coming soon'
            imageUrl={img}
            cardTitle='Html | CSS | Bootstrap'
            body= 'Coming soon'
            projectLink=''
            githubLink=''
          />
          <Card
            title = 'React Portfolio'
            imageUrl={imgReactPortf}
            cardTitle='Html | SCSS | React'
            body= 'Portfolio made with React and SASS hosted on Azure'
            projectLink='https://witty-rock-01c607003.1.azurestaticapps.net/'
            githubLink='https://github.com/2tracks/reactPortfolio0422'
          />
        </div>

        <h1>Code Institute Projects</h1>
      
        <h5>Full description of each project can be found on the Readme file on the corresponding Github Repo</h5>
        <div className={classes.card_container}>
          <Card
            title = 'Portfolio'
            imageUrl={imgPortfolio}
            cardTitle='Html | CSS | Bootstrap'
            body= 'The goal of this project was to make a small portfolio only with HTML, CSS and Bootstrap'
            projectLink="https://2tracks.github.io/UCFDMilestoneProject/"
            githubLink="https://github.com/2tracks/UCFDMilestoneProject/"
          />
          <Card
            title = 'Harry Potter'
            imageUrl={imgHP}
            cardTitle='Html | CSS | Javascript | API'
            body= 'This project was all about API calls "fetch()". Unfortunately the "potterapi.com" is no longer available.'
            projectLink='https://2tracks.github.io/IFDMilestone-Project/'
            githubLink='https://github.com/2tracks/IFDMilestone-Project/'
          />
          <Card
            title = 'Cookbook'
            imageUrl={imgCookbook}
            cardTitle='Flask | Python3 | MongoDB'
            body= 'A cookbook made with Flask hosted on Heroku and MongoDB Atlas'
            projectLink='https://my-cookbook-flask-mongodb.herokuapp.com/'
            githubLink='https://github.com/2tracks/DCDMilestone_Project-Cookbook/'
          />
          <Card
            title = 'Web Shop'
            imageUrl={imgShopChichi}
            cardTitle='Django3 | Python3 | Stripe | AWS'
            body= 'A full Web Shop with Django3 and Python3 and the Stripe API hosted on AWS & Heroku.'
            projectLink='https://shop-chichi-ms-4.herokuapp.com/'
            githubLink='https://github.com/2tracks/shop-chichi-ms-4/'
          />
        </div>   
    </div>
  )
}
