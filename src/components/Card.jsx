import React from 'react';
import { Bookmark } from 'lucide-react';
function Card(jobOpenings) {
  return (
    <div className='card'>
        <div className="top">
           <img src={jobOpenings.brandLogo} alt="logo" />
           <button>Save <Bookmark/> </button>

        </div>
        <div className="center">
           <h3>{jobOpenings.company} <span>{jobOpenings.datePosted}</span></h3>
           <h2>{jobOpenings.post}</h2>
           <div> 
            <h4 className='tag'>{jobOpenings.tag1}</h4>
            <h4>{jobOpenings.tag2}</h4>
            </div>
        </div>
        <div className="bottom">
            <div>
                <h3>{jobOpenings.pay}</h3>
                <p>Mumbai,India</p>
            </div>
            <button>Apply now</button>
        </div>
    </div>
  )
}

export default Card