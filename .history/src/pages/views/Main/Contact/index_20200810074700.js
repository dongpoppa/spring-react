import React from "react";

const Contact = (props) => {
  return (
    <div>
      <div>
        {/* Contact Section Begin */}
        <section className="contact spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-3 col-sm-6 text-center">
                <div className="contact__widget">
                  <span className="icon_phone" />
                  <h4>Phone</h4>
                  <p>+01-3-8888-6868</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6 text-center">
                <div className="contact__widget">
                  <span className="icon_pin_alt" />
                  <h4>Address</h4>
                  <p>60-49 Road 11378 New York</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6 text-center">
                <div className="contact__widget">
                  <span className="icon_clock_alt" />
                  <h4>Open time</h4>
                  <p>10:00 am to 23:00 pm</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6 text-center">
                <div className="contact__widget">
                  <span className="icon_mail_alt" />
                  <h4>Email</h4>
                  <p>hello@colorlib.com</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Contact Section End */}
        {/* Map Begin */}
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9182.686229383577!2d105.74066013061055!3d21.034765660774614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454b991d80fd5%3A0x53cefc99d6b0bf6f!2zVHLGsOG7nW5nIENhbyDEkeG6s25nIHRo4buxYyBow6BuaCBGUFQgUG9seXRlY2huaWMgSMOgIE7hu5lp!5e0!3m2!1svi!2s!4v1590724602367!5m2!1svi!2s"
            height={500}
            style={{ border: 0 }}
            allowFullScreen
            aria-hidden="false"
            tabIndex={0}
          />

        </div>
        {/* Map End */}
        {/* Contact Form Begin */}
        <div className="form-group row">
                    <i className="mdi mdi-24px mdi-script" />
                    <div className="col-md">
                      <textarea
                        className="form-control"
                        rows={10}
                        name="rules"
                        placeholder="rules"
                        ref={register({
                          required: true,
                          pattern: { value: /\w+/ },
                        })}
                      />
                   
                    </div>
                  </div>
                
                  <div className="form-group row">
                    <i className="mdi mdi-24px mdi-buffer" />
                    <div className="col-sm">
                      <input
                        className="form-control"
                        type="number"
                        name="quantity"
                        placeholder="quantity"
                  
                      />
                 
                    </div>
                    <i className="mdi mdi-24px mdi-cash-multiple" />
                    <div className="col-sm">
                      <input
                        type="number"
                        className="form-control"
                        name="price"
                        placeholder="price"
                    
                      />
                 
                    </div>
                    <b
                      className="d-flex align-items-center"
                      style={{ color: "darkgrey" }}
                    >
                      $
                    </b>
                  </div>
                 
      </div>
    </div>
  );
};

export default Contact;
