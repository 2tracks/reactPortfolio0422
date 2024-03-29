import classes from './contact.module.scss';
import PageHeader from '../../components/pageHeader/PageHeader';
import ContactForm from '../../components/contactForm/ContactForm';

export default function Contact() {
  return (
    <div id="contact" className={classes.contact}>
      <PageHeader title={"Contact Me"}/>
      <ContactForm/>
    </div>
  )
}
