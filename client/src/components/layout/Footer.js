import React from 'react'
import './style.css'

class Footer extends React.Component {

  render() {

    return (
      <div
        className="footer" style={{ background: "#333333" }}
      >
        <div className="footer_detail">
          <div className="row container">
            <div className="col-lg-3" style={{marginTop:"60px"}}>
              <div className="footer_picture">
                <div>
                  <img
                    src={"/images/footer/gooroom.png"}
                    style={{height:"50px"}}
                    alt=""
                  />
                </div>
                <div style={{marginTop:"30px"}}>
                  <a href="http://google.com">
                    <img
                      src={"/images/footer/google_play.jpg"}
                      style={{height:"60px"}}
                      alt=""
                    />
                  </a>
                </div>
                <div>
                  <a href="/">
                    <img
                      src={"/images/footer/app_store.jpg"}
                      style={{height:"60.8px"}}
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3" style={{marginTop:"80px", textAlign:"left"}}>
              <div className="about">
                <div style={{textAlign:"left"}}>
                  <strong>Learn more</strong>
                </div>
                <div style={{textAlign:"left", marginTop:"20px"}}>
                  <span>FAQs</span>
                </div>
                <div style={{textAlign:"left"}}>
                  <span>Privacy Policy</span>
                </div>
                <div style={{textAlign:"left"}}>
                  <span>Terms of Use</span>
                </div>
                <div style={{textAlign:"left"}}>
                  <span>Press</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3" style={{marginTop:"77px"}}>
              <div className="cities" style={{textAlign:"left"}}>
                <div>
                  <strong>Top cities</strong>
                </div>
                <div style={{marginTop:"20px"}}>
                  <span>Raleigh, NC</span>
                </div>
                <div>
                  <span>New York</span>
                </div>
                <div>
                  <span>Washington</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3" style={{marginTop:"74px"}}>
              <div className="social" style={{textAlign:"left"}}>
                <div>
                  <strong>Connect Us</strong>
                </div>
                <div className="social_link" style={{marginTop:"20px"}}>
                  
                  <i className="fa fa-twitter"/>
                  <i className="fa fa-facebook-official"/>
                  <i className="fa fa-instagram"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer
