/* eslint-disable no-undef */
import "./App.css";

import { Facility, Srv } from "./component/facility";
import Cube from "./component/cube";
import { About, AboutText } from "./component/about";
function App() {

  function menu() {
    document.getElementById("header_list").style.top === "-200px"
      ? (document.getElementById("header_list").style.top = "100px")
      : (document.getElementById("header_list").style.top = "-200px");
 
  }
  document.getElementsByClassName("goog-te-combo").value="language"
  
  return (
    <>
      <div className="main">
        <div id="header">
          <nav className="innerid">
            <b>
              <span style={{color:"aqua"}}>HOSTINGER</span>
            </b>
          </nav>
         
          

          <b
            id="menu"
            onClick={() => {
              menu();
            }}
          >
            <img src="https://www.logolynx.com/images/logolynx/00/00b9c1e4e9ef5c58b11ddecb020b8776.png" className="img-fluid bg-white" width="15px"alt=""/>
          </b>
          <ul id="header_list">
            <li>Hosting</li>
            <li>VPS</li>
            <li>Email</li>
            <li>Domain</li>
          </ul>
        </div>

        <div className="textheader">
          <div id="text">
            <h1>
              With The Use Of Hostinger Your
              <br />
              Become <b>Popular</b>
            </h1>
            <br />
            <br />
            <div id="time">
              <span>149.00</span>/mo
            </div>
            <br />
            <br />
            <br />
            <br />
            <p>
              Get things moving with a free domain, lifetime SSL, and DDoS
              <br />
              protection included with a four-year subscription
            </p>
            <br />
            <br />
            <button>Get Started</button>
          </div>
          <div id="img">
            <img
              src={
                "https://cubemedia.uk/wp-content/uploads/2022/03/affordable-web-hosting.png"
              }
              alt=""
              id="main_img"
            />
          </div>
        </div>
        <br />
        <div className="circle"></div>
        <br />
        <div id="all_in">
          <center>
            <h1 style={{ fontSize: "5rem", color: "aqua" }}>
              All-In-One Web Hosting
            </h1>
            <br />
            <hr />
            <br />
            <p style={{ fontSize: "2rem" }}>
              We prepared the best web hosting plan for you to start. You will
              <br />
              be able to adjust plans as you go - our custom-built <br />
              algorithm will provide suggestions based on your usage.
            </p>

            <div className="facility">
              <Facility
                data={{
                  1: "Unmetered traffic",
                  2: "100 Websites",
                  3: "100 GB SSD Storage",
                  4: "Free Weekly Backups",
                }}
              />
              <Facility
                data={{
                  1: "100 Parked domains",
                  2: "Full DNS Editor",
                  3: "WordPress multisite",
                  4: "1 GB email storage",
                }}
              />
              <Facility
                data={{
                  1: "50 email aliases",
                  2: "SPAM filter",
                  3: "Custom Email Filters",
                  4: "FAQ Database ",
                }}
              />
              <Facility
                data={{
                  1: "SSH Access",
                  2: "Unlimited Cronjobs",
                  3: "SSH Access",
                  4: "3 GB database size",
                }}
              />
            </div>

            <div className="triangle">
              <img
                src={
                  "https://www.transparentpng.com/thumb/triangle/nSrvSs-orange-triangle-clipart-transparent.png"
                }
                alt={""}
                id="img2"
              />
            </div>
            <br />

            <div className="services">
              <h1>Our services include</h1>
              <hr />
              <br />
              <br />
              <div className="mainservice">
                <div className="service">
                  <Srv
                    src="https://img.freepik.com/premium-vector/ssl-encryption-label-secure-banner-vector-illustration_123447-2725.jpg?w=2000"
                    text="SSL certificate is Free"
                  />
                  <Srv
                    src="https://www.2440media.com/sites/default/files/assets/images/blog/The%20Best%20Software%20For%20PHP%20Coding.jpg"
                    text="PHP Speed Boost"
                  />
                  <Srv
                    src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/4752/direct/1646196886843-After%20Hours%20Customer%20Support.png"
                    text="24/7/365 Tech Support"
                  />
                  <Srv
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFUysGdpfD2sJOs5y1EyrFk4-8Sp6tZZjbEw&usqp=CAU"
                    text="Access Management"
                  />
                </div>
                <div className="service">
                  <Srv
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbcNV8DKxpneaYmhkX86JBwdXGh5k09p3aPAG-lPnBJwEepWoqpUtEUSpaVj34E0t9LU8&usqp=CAU"
                    text="Automated backups"
                  />
                  <Srv
                    src="https://www.wigzo.com/blog/wp-content/uploads/2021/04/Ultimate-Ecommerce-Optimization-Guide.jpg"
                    text="eCommerce Optimization"
                  />
                  <Srv
                    src="https://scdn1.plesk.com/wp-content/uploads/2018/04/24154023/sm_blog_post-server-ddos-protection-.png"
                    text="DDoS Protection"
                  />
                  <Srv
                    src="https://www.acecloudhosting.com/blog/wp-content/uploads/2018/04/cloud-uptime-guarantee-nines.jpg"
                    text="99.9% Uptime Guarantee"
                  />
                </div>
              </div>
            </div>

            <div id="self-tri"></div>
            <h1
              style={{
                fontSize: "10rem",
                marginTop: "20rem",
                color: "aquamarine",
              }}
            >
              About
            </h1>
            <hr />
            <div className="about">
              <AboutText
                head="Easy to set up"
                headline="Getting your website live is as simple as a click of a button. Everything you need - provided in a clear way."
              />
              <About src="https://assets.hostinger.com/images/homepage2020/easy-to-setup-mobile-5c868e689f.jpg" />
            </div>

            <div className="about">
              <About src="https://assets.hostinger.com/images/homepage2020/simply-fast-websites-mobile-913c582753.jpg" />
              <AboutText
                head="Lightning-fast websites"
                headline="Website speed can slow or grow your business. Delight your visitors with a fast-loading and optimized website."
              />
            </div>

            <div className="about">
              <AboutText
                head="WordPress made easy"
                headline=" The backend is powered by LiteSpeed caching and advanced optimization to ensure your websites are fast, reliable and secure."
              />
              <About src="https://assets.hostinger.com/images/homepage2020/wordpress-made-easy-mobile-5f9e3f7598.jpg" />
            </div>

            <div id="searchbar">
              <center>
                <h1>Find the perfect domain name</h1>
                <p>
                  Enter domain name of your choice and pick any extension name
                  on the next step <br />
                  (choose between .in, .com, .online, .live, .store, .info and
                  many more)
                </p>

                <form className="d-flex w-50 mt-5 " role="search">
                  <input
                    className="form-control me-2 p-3"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button
                    className="btn btn-outline-success bg-primary text-white"
                    type="submit"
                  >
                    Search
                  </button>
                </form>
              </center>
            </div>
          </center>
          <div className="container-fluid mt-5 w-35 text-center">
            <div className="display-6   rounded py-3" style={{ color: "aqua" }}>
              DISCOVER
            </div>
            <div className="display-2">Server Location</div>
            <p className="display-5 py-5">
              Sit labore et officia eiusmod tempor officia eiusmod dolor
              exercitation nulla dolore ut id velit et ut anim.
            </p>
            <img
              src="https://madebydesignesia.com/themes/hostco/images/misc/map-2.png"
              className="container img-fluid display-5"
              alt=""
            ></img>
            <div className="container">
              <div className="row">
                <div className="col-lg-3 col-md-6">
                  <p className="display-3 bg-primary py-3">Canada</p>
                </div>
                <div className="col-lg-3 col-md-6">
                  <p className="display-3 bg-primary py-3">France</p>
                </div>
                <div className="col-lg-3 col-md-6">
                  <p className="display-3 bg-primary py-3">Rusia</p>
                </div>
                <div className="col-lg-3 col-md-6">
                  <p className="display-3 bg-primary py-3">Sweden</p>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-3 col-md-6">
                  <p className="display-3 bg-primary py-3">Canada</p>
                </div>
                <div className="col-lg-3 col-md-6">
                  <p className="display-3 bg-primary py-3">France</p>
                </div>
                <div className="col-lg-3 col-md-6">
                  <p className="display-3 bg-primary py-3">Rusia</p>
                </div>
                <div className="col-lg-3 col-md-6">
                  <p className="display-3 bg-primary py-3">Sweden</p>
                </div>
              </div>
            </div>

            <div className="container mt-5">
              <div className="row">
                <div className="col-lg-4">
                  <div className="review">
                    <h3 className="display-6">
                      <b>Excellent Hosting</b>
                    </h3>
                    <p>
                      Great support, like i have never seen before. Thanks to
                      the support team, they are very helpfull. This company
                      provide customers great solution, that makes them best.
                    </p>
                    <div className="d-flex align-items-center">
                      <img src="https://madebydesignesia.com/themes/hostco/images/people/3.jpg" alt="" className="img-fluid rounded-circle " width="15%"/>
                      <span className="mx-5 display-6">Micheal</span>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4">
                  <div className="review">
                    <h3 className="display-6">
                      <b>Excellent Hosting</b>
                    </h3>
                    <p>
                      Great support, like i have never seen before. Thanks to
                      the support team, they are very helpfull. This company
                      provide customers great solution, that makes them best.
                    </p>
                    <div className="d-flex align-items-center">
                      <img src="https://madebydesignesia.com/themes/hostco/images/people/4.jpg" alt="" className="img-fluid rounded-circle " width="15%"/>
                      <span className="mx-5 display-6">Thomas</span>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4">
                  <div className="review">
                    <span></span>
                    <h3 className="display-6">
                      <b>Excellent Hosting</b>
                    </h3>
                    <p>
                      Great support, like i have never seen before. Thanks to
                      the support team, they are very helpfull. This company
                      provide customers great solution, that makes them best.
                    </p>
                    <div className="d-flex align-items-center">
                      <img src="https://madebydesignesia.com/themes/hostco/images/people/1.jpg" alt="" className="img-fluid rounded-circle " width="15%"/>
                      <span className="mx-5 display-6">Jhon</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="container mt-5">
              <div className="row align-items-center align-self-stretch">
                <div className="col-lg-4 col-sm-12">
                  <img src="https://madebydesignesia.com/themes/hostco/images/misc/1.png" alt="" width='400px' height='400px' className="img-fluid lady"/>
                </div>
                <div className="col-lg-4 col-sm-6 days">
                  <b><span className="display-3"><span className="text-primary">30 DAYS</span> money back guarantee</span></b>
                </div>
                <div className="col-lg-4 col-sm-6 days">
                    <span className="text-left" style={{fontSize:"16px",textAlign:"left"}}>If you not satisfy, we will refund your payment. No hassle,
                     no risk. You can cancel plan at any time.</span><br></br>
                    <button className="border-border-1 bg-primary rounded-pill my-5 px-5 py-2 display-6" style={{borderWidth:"0px"}}>Get Started</button><br/><br/>
                    <span className="display-6 text-muted">*Cancellation must be within a maximum of 30 days</span>
                </div>
              </div>
            </div>
            
            <div className="container-fluid mt-5" style={{backgroundColor:"blue",height:"fil-content"}}>
              <div className="d-flex justify-content-center container">
                  <div><Cube/></div>
              </div>

              <div className="container mt-5">
                <div className="row align-items-center" style={{marginTop:"10rem"}}>
                    <div className="col-lg-12 col-md-12">
                      <h2 className="display-5 rounded-pill py-2" style={{marginTop:"5rem",fontWeight:"bold"}}>Hostinger</h2>
                      <hr style={{width:"100%"}}/>
                      <p className="display-6 mt-5" style={{textAlign:"left",fontFamily:"cursive"}}>
                      We are Hostco, a web hosting company with 24/7 customer support. We provide best hosting solutions for your hosting needs. Our clients from personal to corporate. Our data center are all over the world to ensure your website is always up. You can choose shared hosting, vps hosting or cloud hosting. You can also be hosting reseller here. Happy hosting with us.
                      </p>

                      <h2 className="display-6 rounded-pill py-2 mt-5" style={{fontWeight:"bold"}}>We Accepted</h2>
                      <hr style={{width:"100%"}}/>
                      <div className="row mt-3">
                        <div className="col-3">
                          <img className="img-card-sm img-fluid bg-white rounded-pill w-25" src="https://madebydesignesia.com/themes/hostco/images/payments-logo/visa.png" alt=""/>
                        </div>
                        <div className="col-3">
                          <img className="img-card-sm img-fluid bg-white rounded-pill w-25" src="https://madebydesignesia.com/themes/hostco/images/payments-logo/master-card.png" alt=""/>
                        </div>
                        <div className="col-3">
                          <img className="img-card-sm img-fluid bg-white rounded-pill w-25" src="https://madebydesignesia.com/themes/hostco/images/payments-logo/jcb.png" alt=""/>
                        </div>
                        <div className="col-3">
                          <img className="img-card-sm img-fluid bg-white rounded-pill w-25" src="https://madebydesignesia.com/themes/hostco/images/payments-logo/paypal.png" alt=""/>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-12 col-md-12">
                        <h2 className="display-5 rounded-pill py-2 mt-5" style={{fontWeight:"bold"}}>Hosting</h2>
                        <hr style={{width:"100%"}}/>
                        <div className="row">
                          <div className="col-6">
                              <p className="display-6 my-5" style={{color:"white",fontFamily:"cursive",cursor:"pointer"}}>web hosting</p>
                              <p className="display-6 my-5" style={{color:"white",fontFamily:"cursive",cursor:"pointer"}}>VPS Hosting</p>
                              <p className="display-6 my-5" style={{color:"white",fontFamily:"cursive",cursor:"pointer"}}>WordPress Hosting</p>
                              <p className="display-6 my-5" style={{color:"white",fontFamily:"cursive",cursor:"pointer"}}>CMS Hosting</p>
                          </div>
                          <div className="col-6">
                              <p className="display-6 my-5" style={{color:"white",fontFamily:"cursive",cursor:"pointer"}}>web hosting</p>
                              <p className="display-6 my-5" style={{color:"white",fontFamily:"cursive",cursor:"pointer"}}>VPS Hosting</p>
                              <p className="display-6 my-5" style={{color:"white",fontFamily:"cursive",cursor:"pointer"}}>WordPress Hosting</p>
                              <p className="display-6 my-5" style={{color:"white",fontFamily:"cursive",cursor:"pointer"}}>CMS Hosting</p>
                          </div>
                        </div>
                        
                       
                    </div>

                    <div className="col-lg-12 col-md-12">
                        <h2 className="display-5 rounded-pill py-2" style={{fontWeight:"bold"}}>Comapny</h2>
                        <hr style={{width:"100%"}}/>
                        <div className="row">
                          <div className="col-6">
                              <p className="display-6 my-5" style={{color:"white",fontFamily:"cursive",cursor:"pointer"}}>About</p>
                              <p className="display-6 my-5" style={{color:"white",fontFamily:"cursive",cursor:"pointer"}}>Affiliates</p>
                              <p className="display-6 my-5" style={{color:"white",fontFamily:"cursive",cursor:"pointer"}}>Blog</p>
                              <p className="display-6 my-5" style={{color:"white",fontFamily:"cursive",cursor:"pointer"}}>Careers</p>
                          </div>
                          <div className="col-6">
                              <p className="display-6 my-5" style={{color:"white",fontFamily:"cursive",cursor:"pointer"}}>Community</p>
                              <p className="display-6 my-5" style={{color:"white",fontFamily:"cursive",cursor:"pointer"}}>News</p>
                              <p className="display-6 my-5" style={{color:"white",fontFamily:"cursive",cursor:"pointer"}}>Partners</p>
                          </div>
                        </div>
                    </div>

                    <div className="row d-flex align-items-center">
                        <div className="col-lg-6 col-md-6 col-sm-6">
                          <div className="d-flex justify-content-center mb-3 lan" style={{fontSize:"5rem"}}><div id="google"></div></div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6">
                          <div className="d-flex justify-content-center" style={{fontSize:"2rem"}}>MADE BY Sahilrana-990 || THIS CODEFEST HOSTED BY <div className="bg-black w-25 mb-5 rounded-pill"><a href={"https://www.youtube.com/c/ThapaTechnical"} style={{textDecoration:"none",color:"white"}}>THAPA TECHNICAL</a></div></div>
                        </div>
                    </div>
                    
                </div>
              </div>

            </div>


          </div>
        </div>
      </div>
    </>
  );
}

export default App;
