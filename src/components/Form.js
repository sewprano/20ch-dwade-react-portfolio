import { useState } from "react";

const Form = () => {
    //variables
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    //methods
    const set ={
        name: value=> setName(value),
        email: value=> setEmail(value),
        message: value=> setMessage(value)
    }

    //errors
    //messages
    const showError = {
        name: 'Name is required',
        email: 'must enter valid email',
        message: 'message is required'
    }

    //checks
    const check = {
        name: value => {
            return value.length ? true : false;
        },
        email: value => {
            return /^[A-Z0-9._%+-]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test( value );
        },
        message: value => {
            return value.length ? true : false;
        }
    }
    const  handleClickAway = (event) => {
        const {name: inputField, value} = event.target;
        if (!check[inputField](value)) setError(showError[inputField]);
    }
    const handleInputChange = (event) => {
        const {name: inputField, value} = event.target;
        setError('');
        return set[inputField](value);
    }

    //form submit
    const formSubmit = (event) => {
        event.preventDefault();
        if (!check.name(name)) {
            setError(showError['name']);
            return;
        }
        if (!check.email(email)) {
            setError(showError['email']);
            return;
        }
        if (!check.message(message)) {
            setError(showError['message']);
            return;
        }

        //initial values
        setName('');
        setEmail('');
        setMessage('');
        setError( 'Message sent' )
    }

    return (
        <form>
            <label>
                <input value={name} name='name' onChange={handleInputChange} 
                       onBlur={handleClickAway} type='text' placeholder='Name' />
            </label>
            <label>
                <input value={email} name='email' onChange={handleInputChange} 
                       onBlur={handleClickAway} type='text' placeholder='Email' />
            </label>
            <label>
                <input value={message} name='massage' onChange={handleInputChange} 
                       onBlur={handleClickAway} type='text' placeholder='Message' rows={12}/>
            </label>
            <div>
                <button className="Button" onClick={formSubmit}>Submit</button>
            </div>
        </form>
    )
}

export default Form;