import React from 'react'
import { faCompactDisc} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faFacebook, faLinkedinIn, faSquareInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';





function Footer() {

  return (
    <div  className='w-100 justify-content-center align-items-center mt-5 d-flex flex-column'>
        <div className="w-100 row p-3">
          <div className="col-md-3">

          </div>
          <div className="col-md-3">
          <div className="website">
        <FontAwesomeIcon icon={faCompactDisc} style={{color: "#74C0FC",fontSize:'30px'}} />
          <span style={{fontSize:'30px', color:'#74C0FC'}} className='ms-3'>Media Player</span>
          <p className='mt-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus aliquam provident eos quis cum non quasi nesciunt perferendis officiis accusamus, magnam perspiciatis ex sequi pariatur nam quam modi? Nihil, repellat?</p>
        </div>
          </div>
          <div className="col-md-3">
          <div className="links">
              <h4 className='text-dark'>Links</h4>
              <p className='landing page'><Link to={'/'}>Landing Page</Link></p>
              <p><Link to={'/home'}>Home</Link></p>
              <p><Link to={'/watchHistory'}>Watch History</Link></p>
            </div>
          </div>
          <div className="col-md-3">
          <div className="guides">
              <h4 className='text-dark'>Guides</h4>
              <p>React</p>
              <p>React-Bootsrap</p>
              <p>BootsWatch</p>
            </div>
          </div>
          <div className="col-md-3">
                
          <div className="contact">
              <h4 className='text-dark'>Contacts</h4>
              <div className='d-flex mt-3'>
                <input type="text" className='form-control' placeholder='Enter your Email ID' />
                <button className='btn btn-primary ms-2'>Subscribe</button>
              </div>
              <div className='d-flex justify-content-around mt-3 pt-2'>
              <FontAwesomeIcon icon={faSquareInstagram} size='2xl' />
              <FontAwesomeIcon icon={faFacebook} size='2xl' />
              <FontAwesomeIcon icon={faTwitter} size='2xl'/>
              <FontAwesomeIcon icon={faLinkedinIn}  size='2xl' />
          </div>
            </div>
          </div>
     
          
             
       
         
        </div>
    </div>
  )
}

export default Footer