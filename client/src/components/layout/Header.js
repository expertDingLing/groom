import React, {Component} from 'react'
import './style.css'
import { Modal } from 'reactstrap';
import ReactDom from "react-dom";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show_modal: false,
      phone_number: "",
      main_modal: false,
      password: "",
      avatar:"",
      login_modal: false,
      email: "",
      signup_modal: false,
      firstname: "",
      lastname: "",
      forgot: false,
    }
  }

  showModal = () => {
    const { show_modal } = this.state;
    this.setState({
      show_modal: !show_modal,
      main_modal: false,
      login_modal: false,
      signup_modal: false
    })
  }

  closeModal = () => {
    this.setState({
      show_modal: false,
      main_modal: false,
      login_modal: false,
      signup_modal:false,
      forgot:false
    })
  }

  handleChangeInput = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState(() => ({
      [name]: value ,
    }));
  }

  MainModal = () => {
    this.setState({
      show_modal:false,
      main_modal:true,
      login_modal:false,
      signup_modal:false
    })
  }
  LoginModal = () => {
    this.setState({
      show_modal:false,
      main_modal:false,
      signup_modal:false,
      login_modal: true
    })
  }

  SignupModal = () =>{
    this.setState({
      show_modal:false,
      signup_modal: true,
      login_modal: false,
      main_modal:false
    })
  }

  Forgot = () => {
    this.setState({
      login_modal:false,
      forgot: true
    })
  }
  render() {
    const {avatar} = this.state;
    return (
      <div>
        <div
          className="login" style={{ width: "100%" }}
        >
          <div className="login__header">
            <div className="row" style={{ background: "white" }}>
              <div className="col-lg-8">
                <div className="login__header__logo">
                  <img
                    src={"/images/header/logo.png"}
                    style={{ height: "30px", margin: "5px 50px 5px" }}
                    alt=""
                  />
                </div>
              </div>
              <div className="col-lg-4" style={{ display: "contents" }}>
                <div className="login__header__menu">
                  <ul className="list-unstyled list-inline">
                    <li className="list-inline-item">
                      <button className="signin_btn" onClick={this.LoginModal}>Sign In</button>
                    </li>
                    <li className="list-inline-item active">
                      <button className="signup_btn" onClick={this.showModal}>Sign Up</button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Modal isOpen={this.state.show_modal} toggle={this.showModal} >
          <div className="sign_modal">
            <div style={{height:"50px"}}>
              <button onClick={this.closeModal} className="close">
                <i className="fa fa-remove" />
              </button>
              <h3 style={{ textAlign: "center", flex: "auto", marginTop:"30px", marginLeft:"35px" }}>Welcome to Groom</h3>
            </div>
            <div className="container-nav">
              <ul className="nav nav-tabs">
                <li className="active"><a data-toggle="tab" href="#home" style={{color:"black", margin:"0 30px"}}>Sign Up as a Customer</a></li>
                <li><a data-toggle="tab" href="#menu1" style={{color:"black"}}>Sign Up as a Service Provider</a></li>
              </ul>
            </div>
            <input
              type="text"
              className="form-control"
              value={this.state.phone_number}
              name="phone_number"
              onChange={this.handleChangeInput}
              placeholder="+1 Phone Number"
              required
            />
            <button className="continue_btn" onClick={this.SignupModal}>Continue</button>
            <img
              src={"/images/modal/signup.png"}
              style={{width: "90%", marginLeft:"25px", marginTop:"30px"}}
              alt=""
            />
            <button className="email_btn">Continue with Email</button>
            <button className="facebook_btn">Sign Up with Facebook</button>
            <button className="google_btn">Sign Up with Google</button>
            <img
              src={"/images/modal/google.png"}
              alt=""
              className="google_signup"
            />
            <br></br>
            <div style={{marginTop:"30px", marginLeft:"15px", fontSize:"13px"}}>
              <span>By creating an account you agree to our Terms of Use and Privacy Policy</span>
            </div>
            <br></br>
            <div style={{display:"flex",justifyContent:"center"}}>
              <span style={{margin:"0 15px"}}>Already have an account?</span>
              <button className="goto_login" onClick={this.LoginModal}>Log in</button>
            </div>
          </div>
        </Modal>

        <Modal isOpen={this.state.signup_modal} toggle={this.SignupModal} >
          <div className="signup_modal">
            <div style={{height:"50px"}}>
              <button onClick={this.closeModal} className="close">
                <i className="fa fa-remove" />
              </button>
              <h3 style={{ textAlign: "center", flex: "auto", marginTop:"30px", marginLeft:"35px" }}>Sign Up Form</h3>
            </div>
            <label style={{marginTop:"10px", marginLeft:"25px"}}>Email(Required)</label>
            <br></br>
            <input
              type="text"
              className="control"
              value={this.state.email}
              name="email"
              onChange={this.handleChangeInput}
              required
            />
            <br></br>
            <label style={{marginTop:"20px", marginLeft:"25px"}}>First Name</label>
            <br></br>
            <input
              type="text"
              className="control"
              value={this.state.firstname}
              name="firstname"
              onChange={this.handleChangeInput}
              required
            />
            <label style={{marginTop:"20px", marginLeft:"25px"}}>Last Name</label>
            <br></br>
            <input
              type="text"
              className="control"
              value={this.state.lastname}
              name="lastname"
              onChange={this.handleChangeInput}
              required
            />
            <label style={{marginTop:"20px", marginLeft:"25px"}}>Phone Number(Optional)</label>
            <br></br>
            <div style={{display:"flex"}}>
              <input
                type="text"
                className="phone_prefix"
                value={this.state.lastname}
                name="phone_prefix"
                onChange={this.handleChangeInput}
                required
              />
              <input
                type="text"
                className="phone_main"
                value={this.state.lastname}
                name="phone_main"
                onChange={this.handleChangeInput}
                required
              />
            </div>
            <label style={{marginTop:"20px", marginLeft:"25px"}}>Password</label>
            <br></br>
            <input
              type="password"
              className="control"
              value={this.state.password}
              name="password"
              onChange={this.handleChangeInput}
              required
            />
            <button style={{border:"none", background:"white", position:"absolute", marginLeft:"-55px", marginTop:"12px"}}>show</button>
            <label style={{marginTop:"20px", marginLeft:"25px"}}>Confirm Password</label>
            <br></br>
            <input
              type="password"
              className="control"
              value={this.state.password}
              name="password"
              onChange={this.handleChangeInput}
              required
            />
            <button style={{border:"none", background:"white", position:"absolute", marginLeft:"-55px", marginTop:"12px"}}>show</button>
            <div style={{display:"flex",justifyContent:"center", marginTop:"20px"}}>
              <span style={{margin:"0 5px"}}>By clicking below, you agree to our</span>
              <a href="/terms_conditions">Terms & Conditions</a>
            </div>
            <button className="create_account">Create an Account</button>
          </div>
        </Modal>
        
        <Modal isOpen={this.state.main_modal} toggle={this.MainModal} >
          <div className="main_modal">
            <div>
              <button onClick={this.closeModal} className="close">
                <i className="fa fa-remove" />
              </button>
              <h3 style={{ textAlign: "center", flex: "auto", marginTop:"30px", marginLeft:"35px" }}>Welcome back, Mathew </h3>
            </div>
            <div className="avatar-photo">
                <FileUpload handleFileChange={this.handleFileChange} />
                <img src={avatar} alt="" onClick={FileUpload.handleFile} />
            </div>
            <div style={{display:"flex", justifyContent:"center", marginTop:"30px"}}>
              <span>****@ncitshop.com</span>
            </div>
            <input
              type="password"
              className="password"
              value={this.state.password}
              name="Password"
              onChange={this.handleChangeInput}
              placeholder="Password"
              required
            />
            <span className="fa fa-eye"></span>
            <br></br>
            <button className="login_btn">Login</button>
            <div style={{display:"grid", marginTop:"30px", fontSize:"25px", textAlign:"center"}}>
              <span style={{margin:"0 15px", marginTop:"30px"}}>Forgot password?</span>
              <div style={{display:"flex", justifyContent:"center", marginTop:"30px"}}>
                <span style={{color:"#999999"}}>Not you?</span>
                <span style={{color:"#999999"}}>Use another account</span>
              </div>
            </div>
          </div>
        </Modal>
        <Modal isOpen={this.state.login_modal} toggle={this.LoginModal} >
          <div className="login_modal">
            <div>
              <button onClick={this.closeModal} className="close">
                <i className="fa fa-remove" />
              </button>
              <h3 style={{ textAlign: "center", flex: "auto", marginTop:"30px", marginLeft:"35px" }}>Login</h3>
            </div>
            <label style={{marginTop:"50px", marginLeft:"80px"}}>Email</label>
            <br></br>
            <input
              type="text"
              className="text"
              value={this.state.email}
              name="email"
              onChange={this.handleChangeInput}
              required
            />
            <br></br>
            <label style={{marginTop:"50px", marginLeft:"80px"}}>Password</label>
            <br></br>
            <input
              type="password"
              className="password1"
              value={this.state.password}
              name="password1"
              onChange={this.handleChangeInput}
              required
            />
            <span className="fa fa-eye"></span>
            <br></br>
            <button className="login_btn">Login</button>
            <div style={{display:"grid", marginTop:"30px", fontSize:"15px", textAlign:"center"}}>
              <button className="forgot_btn" onClick={this.Forgot}>Forgot password?</button>
              <div style={{display:"flex", justifyContent:"center", marginTop:"10px"}}>
                <button className="more_btn">More Login options</button>
              </div>
              <div style={{display:"flex", justifyContent:"center", marginTop:"30px"}}>
                <span style={{margin:"0 20px"}}>Don't have an account?</span>
                <button className="goto_signup" onClick={this.showModal}>Sign Up</button>
              </div>
            </div>
          </div>
        </Modal>
        <Modal isOpen={this.state.forgot} toggle={this.Forgot} >
          <div className="forgot_modal">
            <div>
              <button onClick={this.closeModal} className="close">
                <i className="fa fa-remove" />
              </button>
              <h3 style={{ textAlign: "center", flex: "auto", marginTop:"30px", marginLeft:"35px" }}>Forgot Password?</h3>
            </div>
            <div style={{textAlign:"center", marginTop:"50px"}}>
              <span>Please select either the SMS or email associated</span>
              <br></br>
              <span>with your account, and we will send you a link to</span>
              <br></br>
              <span>reset your password.</span>
            </div>
            <br></br>
            <input
              type="text"
              value={"Via SMS"}
              name="phone_number"
              className="sms"
              required
            />
            <img
              src={"/images/modal/smartphone-line.png"}
              alt=""
              className="smartphone"
            />
            <input
              type="text"
              value={"Via Email"}
              name="Email"
              className="email"
              required
            />
            <i className="fa fa-envelope-o"/>
            <button className="reset">Send Reset Link</button>
          </div>
        </Modal>
      </div>
    )
  }
}

class FileUpload extends Component {
  handleFile = (e) => {
      let reader = new FileReader();
      let file = e.target.files[0];
      if (!file) return;

      reader.onload = function (img) {
          ReactDom.findDOMNode(this.refs.in).value = "";
          this.props.handleFileChange(img.target.result, file);
      }.bind(this);
      reader.readAsDataURL(file);
  }

  render() {
      return (
          <input ref="in" type="file" accept="image/*" onChange={this.handleFile} style={{height:"50px"}} />
      );
  }
}

export default Header
