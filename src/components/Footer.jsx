import React from 'react'
import { Link } from 'react-router-dom';


export default function Footer() {
  return (
    <div style={{height:'300px'}} className='d-flex justify-content-center align-items-center w-100 flex-column'>
      <div className='d-flex justify-content-evenly align-items-center w-100'>
        <div className="websites" style={{width:'400px'}}>
          <h4 className='mb-3'>
          <i class="fa-solid fa-video  text-warning me-3"></i>
            Vedio Player
          </h4>
          <h6>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quibusdam fugiat fugit, molestias reprehenderit fuga optio dolor dolorum commodi iure neque illo assumenda voluptates! Harum recusandae sint molestiae facilis iusto.
          </h6>
        </div>
        <div className="links d-flex flex-column">
          <h4 className='mb-3'>Links</h4>
          <Link to={'/'} style={{textDecoration:'none',color:'white'}}>Landing Page</Link>
          <Link to={'/home'} style={{textDecoration:'none',color:'white'}}>Home</Link>
          <Link to={'/watchhistory'} style={{textDecoration:'none',color:'white'}}>Watch History</Link>
        </div>
        <div className="guides d-flex flex-column">
        <h4 className='mb-3'>Guids</h4>
          <Link to={'https://react.dev/'} style={{textDecoration:'none',color:'white'}}>React</Link>
          <Link to={'https://react-bootstrap.github.io/'} style={{textDecoration:'none',color:'white'}}>React Bootstrap</Link>
          <Link to={'https://bootswatch.com/'} style={{textDecoration:'none',color:'white'}}>Bootswatch</Link>

        </div>
        <div className="contacts">
          <h4 className='mb-3'>Contact As</h4>
          <div className='d-flex'>
            <input type="text" className='form-control' placeholder='Enter your email id' />
            <button className='btn btn-warning ms-2'>Subscribe</button>
          </div>
          <div className='d-flex justify-content-evenly align-items-center mt-2'>
          
          <Link to={'/'} style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-instagram fa-2x"></i></Link>
          <Link to={'/home'} style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-twitter fa-2x"></i></Link>
          <Link to={'/watch-history'} style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-linkedin fa-2x"></i></Link>
          <Link to={'/watch-history'} style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-facebook fa-2x"></i></Link>

          </div>
        </div>

      </div>

      <p>copyright 2023 media Player</p>


    </div>
  )
}
