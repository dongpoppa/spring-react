import React from 'react'


const Contact = props => {
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
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9182.686229383577!2d105.74066013061055!3d21.034765660774614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454b991d80fd5%3A0x53cefc99d6b0bf6f!2zVHLGsOG7nW5nIENhbyDEkeG6s25nIHRo4buxYyBow6BuaCBGUFQgUG9seXRlY2huaWMgSMOgIE7hu5lp!5e0!3m2!1svi!2s!4v1590724602367!5m2!1svi!2s" height={500} style={{border: 0}} allowFullScreen aria-hidden="false" tabIndex={0} />
    {/* <div class="map-inside">
      <i class="icon_pin"></i>
      <div class="inside-widget">
          <h4>DongPoppa</h4>
          <ul>
              <li>Phone: +12-345-6789</li>
              <li>Add: 16 Creek Ave. Farmingdale, NY</li>
          </ul>
      </div>
  </div>*/}
  </div>
  {/* Map End */}
  {/* Contact Form Begin */}
  <div className="contact-form spad">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="contact__form__title">
            <h2>Leave Message</h2>
          </div>
        </div>
      </div>
      <form action="#">
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <input type="text" placeholder="Your name" />
          </div>
          <div className="col-lg-6 col-md-6">
            <input type="text" placeholder="Your Email" />
          </div>
          <div className="col-lg-12 text-center">
            <textarea placeholder="Your message" defaultValue={""} />
            <button type="submit" className="site-btn">SEND MESSAGE</button>
          </div>
        </div>
      </form>
    </div>
  </div>
  {/* Contact Form End */}
</div>

        </div>
    )
}


export default Contact
