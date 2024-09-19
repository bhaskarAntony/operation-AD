import React from 'react'

function ContactUs() {
  return (
    <section className="container-fluid p-3 p-md-5 bg-light">
        <div className="container p-3 bg-white">
          <div className="row">
            <div className="col-md-6">
            <h1 className="fs-1">Contact Us</h1>
            <p className="fs-5 mt-4"><b>Email : </b>support@fresheroffcampus.com</p>
            <p className="fs-5 mt-4">contactfresheroffcampus@gmail.com</p>
            <br /><br /><br />
            <p className="fs-4">Instagarm : <a href="#">@fresheroffcampus</a></p>
            <h4 className="fs-4 mt-4">Share your friends</h4>
            <div className="icons d-flex gap-2">
               <div className="icon">
               <i className='bi bi-facebook'></i>
               </div>

               <div className="icon">
               <i className='bi bi-instagram'></i>
               </div>


               <div className="icon">
               <i className='bi bi-linkedin'></i>
               </div>


               <div className="icon">
               <i className='bi bi-whatsapp'></i>
               </div>
            </div>

            </div>
            <div className="col-md-6">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497698.77491618396!2d77.3012613173564!3d12.954459537787022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1726769619874!5m2!1sen!2sin" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='w-100 rounded'></iframe>
            </div>
          </div>
        </div>
    </section>
  )
}

export default ContactUs