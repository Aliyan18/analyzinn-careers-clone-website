 

 export default function Footer(){
  const styles={
      fontSize:'0.8rem'
  }
  return (
  <>
  <div className="container" style={{padding:0,width:'100vw',margin:0,width:'100vw'}}>
    <footer
            className="text-center text-lg-start text-white"
            style={{margin:0,backgroundColor: "#45526e",width:'98.5vw',left:0,height:'100%'}}
            >
      <div className="container p-4 pb-0">
        <section className="">
          <div className="row">
            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">
              </h6>
              <p style={styles}>
               Guaranteed Satisfaction. Everytime.
              </p>
            </div>
  
            <hr className="w-100 clearfix d-md-none" />
  
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">Services</h6>
              <p>
                <a className="text-white" style={styles}>Business Analytics</a>
              </p>
              <p>
                <a className="text-white" style={styles}>Digital Marketing</a>
              </p>
              <p>
                <a className="text-white" style={styles}>Automation & Integration</a>
              </p>
              {/* <p>
                <a className="text-white">Bootstrap Angular</a>
              </p> */}
            </div>
  
            <hr className="w-100 clearfix d-md-none" />
  
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">
  Company            </h6>
              <p>
                <a className="text-white" style={styles}>About</a>
              </p>
              <p>
                <a className="text-white" style={styles}>Careers </a>
              </p>
              <p>
                <a className="text-white" style={styles}> Contact</a>
              </p>
              {/* <p>
                <a className="text-white">Help</a>
              </p> */}
            </div>
  
            <hr className="w-100 clearfix d-md-none" />
  
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">Address</h6>
              <p><i className="fas fa-home mr-3" style={styles}></i> 13th Street, Lubbock, Texas, Unitedd States.</p>
              {/* <p><i className="fas fa-envelope mr-3"></i> Texas</p>
              <p><i className="fas fa-phone mr-3"></i> + 01 234 567 88</p> */}
              <p style={styles}><i className="fas fa-print mr-3" ></i> admin@analyzinn.com</p>
            </div>
          </div>
        </section>
  
        <hr className="my-3"/>
  
        <section className="p-3 pt-0">
          <div className="row d-flex align-items-center">
            <div className="col-md-7 col-lg-8 text-center text-md-start">
              <div className="p-3" style={styles}>
                © 2024 Copyright:
                <a className="text-white" style={styles} href="https://mdbootstrap.com/"> Analyzinn</a>
              </div>
            </div>
  
            <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
              <a
                 className="btn btn-outline-light btn-floating m-1 text-white"
                 role="button"
                 ><i className="fab fa-facebook-f"></i
                ></a>
  
              <a
                 className="btn btn-outline-light btn-floating m-1 text-white"
                 role="button"
                 ><i className="fab fa-twitter"></i
                ></a>
  
              <a
                 className="btn btn-outline-light btn-floating m-1 text-white"
                 role="button"
                 ><i className="fab fa-google"></i
                ></a>
  
              <a
                 className="btn btn-outline-light btn-floating m-1 text-white"
                 role="button"
                 ><i className="fab fa-instagram"></i
                ></a>
            </div>
          </div>
        </section>
        
      </div>
    </footer>
  </div>
  </>
  )}