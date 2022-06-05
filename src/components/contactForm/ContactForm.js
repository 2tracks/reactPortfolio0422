import { useState } from 'react';
import emailjs from '@emailjs/browser';
import classes from './contactForm.module.scss';

export default function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isPending, setIsPending] = useState(false);

    const resetForm = () => {
        setName('')
        setEmail('')
        setMessage('')
    }

    const handleSubmit = (e)=>{
        e.preventDefault();

        const templateParams ={
            name: name,
            email: email,
            message: message,
        }
        
        setIsPending(true);

        emailjs.send('service_uddstvo','template_7dwmd4b', templateParams, 'Wo6677hS1FaolvBBa')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                setIsPending(false);

            }, (err) => {
                console.log('FAILED...', err);
            });
        
        resetForm()
    }

  
    return (
        
        <form className={classes.form} onSubmit={handleSubmit} >
            <div className={classes.label_wrapper}>
                <label>
                    <span>Name:</span>
                    <input
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                    value = {name} 
                    required
                    />
                </label>

                <label>
                    <span>Email:</span>
                    <input
                    type="email"
                    onChange = {(e) => setEmail(e.target.value)}
                    value = {email} 
                    required
                    />
                </label>
            </div>

            <label>
                <span>Message:</span>
                <textarea
                onChange = {(e) => setMessage(e.target.value)}
                value = {message} 
                required
                cols="30" rows="10">
                </textarea>
            </label>

            {!isPending && <button>Submit</button>}
            {isPending && <button disabled>Sending...</button>}
            {isPending && <p className={classes.inTouch}>I will be in touch soon</p>}

        </form>
    )
}
