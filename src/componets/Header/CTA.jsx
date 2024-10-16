import React from 'react';
import CV from '../Header/CV.pdf';



const CTA = () =>{
   
       return(
         <div className='cta'>
            <a href={CV} target='_blank' rel="noopener noreferrer" class="btn btn-primary" >View Transcript</a>
            <a href={CV} target='_blank' rel='noopener noreferrer' class="btn" >View CV</a>
         </div>  
       );
}

export default CTA;