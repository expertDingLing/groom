import React from 'react'
import './style.css'

class Home extends React.Component {
    state = {
        backgroundImage:'url(/images/dashboard/background.png)'
    }
  render() {
    const {backgroundImage} = this.state;
    return (
        <div
            className="dashboard" style={{width:"100%"}}
        >
          <div className="row" style={{background:"white", width:"100%"}}>
            <div className="header" style={{background: backgroundImage, backgroundRepeat:"round"}}>
                <div style={{marginRight:"auto", marginLeft:"auto",display:"flex"}}>
                    <div>
                        <input type="text" className="search_input" placeholder="Enter zip, service, price, shop and price"/>
                    </div>
                    <div>
                        <button className="search_btn">Search</button>
                    </div>
                </div>
            </div>
            <div className="Services">
                <div style={{display:"flex"}}>
                    <span style={{marginLeft:"20px"}}>Services</span>
                    <span style={{marginLeft:"auto"}}>View all</span>
                </div>
                <div>
                    <img src = {process.env.PUBLIC_URL + "/images/dashboard/Repeat-Grid.png"}
                    style={{width:"100%", height:"500px"}}
                    alt = ""
                    />
                </div>
            </div>
            <div className="Top">
                <div style={{display:"flex"}}>
                    <span style={{marginLeft:"20px"}}>Top Rated</span>
                    <span style={{marginLeft:"auto"}}>View all</span>
                </div>
                <div>
                    <img src = {process.env.PUBLIC_URL + "/images/dashboard/Repeat-Grid.png"}
                    style={{width:"100%", height:"500px"}}
                    alt = ""
                    />
                </div>
            </div>
            <div className="Featured">
                <div style={{display:"flex"}}>
                    <span style={{marginLeft:"20px"}}>Featured</span>
                    <span style={{marginLeft:"auto"}}>View all</span>
                </div>
                <div>
                    <img src = {process.env.PUBLIC_URL + "/images/dashboard/Repeat-Grid.png"}
                    style={{width:"100%", height:"500px"}}
                    alt=""
                    />
                </div>
            </div>
            <div style={{background:"white", height:"300px"}}></div>
          </div>
        </div>
    )
  }
}

export default Home
