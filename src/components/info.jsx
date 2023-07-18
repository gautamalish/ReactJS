import React from 'react';

export default function Info(){
    return(
        <div>            
        <img src="https://www.models1.co.uk/images/applywomen1.jpg" className="model"/>
        <h1 className='name'>Anbamasta Gren</h1>
        <h3 className='Backend'>Backend Developer</h3>
        <a href="https://mail.google.com/mail/u/0/#inbox" target='_blank'>
        <button className='email'>
        <i class="bi bi-envelope"></i>  Email
        </button>
        </a>
        <a href="https://www.linkedin.com/?original_referer=" target='_blank'>
        <button className='linkdin'>
        <i class="bi bi-linkedin"></i>  Linkdin
        </button>
        </a>
        </div>
    )
}