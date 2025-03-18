
import './Footer.css'

function  Footer (){
    return (
      <div className='footer'>
        <div className="footer-logo">
          <img src='./logo192.png'  alt="" />
          <p><span style={{color:"red"}}>S</span>
          <span style={{color:"orange"}}>H</span>
          <span style={{color:"yellow"}}>O</span>
          <span style={{color:"green"}}>P</span>
          <span style={{color:"blue"}}>P</span>
          <span style={{color:"indigo"}}>I</span>
          <span style={{color:"violet"}}>N</span>
          <span style={{color:"red"}}>G </span> Mall</p>
        </div>
        <ul className="footer-links">
          <li>Company</li>
          <li>Products</li>
          <li>Offices</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <div className="footer-social-icon">
          <div className="footer-icons-container">
              <img src='./logo192.png' alt="" />
          </div>
          <div className="footer-icons-container">
              <img src='./logo192.png'  alt="" />
          </div>
          <div className="footer-icons-container">
              <img src='./logo192.png'  alt="" />
          </div>
        </div>
        <div className="footer-copyright">
          <hr />
          <p>Copyright @ 2025 - All Right Reserved.</p>
        </div>
      </div>
    )
  }
  
  export default Footer