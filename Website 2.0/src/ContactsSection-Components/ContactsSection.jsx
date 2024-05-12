import './ContactsSection.css'
import { useState, useId } from 'react'

export default function ContactsSection(){
    
      function handleFormSubmit(event) {  // handles form submit without any jquery
        event.preventDefault();           // we are submitting via xhr below
        var form = event.target;
        var data = formData;
        // disableAllButtons(form);
        var url = "https://script.google.com/macros/s/AKfycbxSd1zaTs9GWxorreZae1Bg6dlKlCK3tYrzsK_5UODpjVVYYgM2X2Ph5H4jHJuu2SlCvQ/exec";
        var xhr = new XMLHttpRequest();
        xhr.open('POST', url);
        // xhr.withCredentials = true;
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
              form.reset();
            }
        };
        // url encode form data for sending as post data
        var encoded = Object.keys(data).map(function(k) {
            return encodeURIComponent(k) + "=" + encodeURIComponent(data[k]);
        }).join('&');
        xhr.send(encoded);
      }

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        content: ""
    })

    function handleFormChange(event){
        const {name, value} = event.target
        setFormData(x => {
            return {
                ...x,
                [name]: value
            }
        })
    }
    
    const Id = useId()

    return (
        <div className="ContactsSection-Body">
            <div className='ContactsSection-Main'>
                <header className='ContactsSection-Header'>
                    <h2>Contacts</h2>
                </header>
                <p>
                    If you have any inquiries feel free to contact me with any of the methods listed below
                </p>
                <h4>Send an inquiry throught this form!</h4>
                <form onSubmit={handleFormSubmit} className='Inquiry-Form'>
                    <label htmlFor={`name-${Id}`}>Name</label>
                    <br />
                    <input type='text' name='name' onChange={handleFormChange} id={`name-${Id}`}/>
                    <br />
                    <label htmlFor={`email-${Id}`}>Email</label>
                    <br />
                    <input type='text' name='email' onChange={handleFormChange} id={`email-${Id}`}/>
                    <br />
                    <label htmlFor={`subject-${Id}`}>Subject</label>
                    <br />
                    <input type='text' name='subject' onChange={handleFormChange} id={`subject-${Id}`}/>
                    <br />
                    <label htmlFor={`content-${Id}`}>Content</label>
                    <br />
                    <textarea name='content' onChange={handleFormChange} id={`content-${Id}`}/>
                    <br />
                    <button type='submit' formMethod="POST">SUBMIT</button>
                </form>
                <div className='ContactButtons'>
                    <a href='a'>
                        <div className='Redirect-Button'>
                            <div className='Redirect-Button-Wrapper Email' />
                        </div>
                    </a>
                    <a href='a'>
                        <div className='Redirect-Button'>
                            <div className='Redirect-Button-Wrapper LinkedIn' />
                        </div>
                    </a>
                    <a href='a'>
                        <div className='Redirect-Button'>
                            <div className='Redirect-Button-Wrapper Github' />
                        </div>
                    </a>
                </div>
            </div>
            <div className='ContactsSection-BackBody' />
        </div>
    )
}