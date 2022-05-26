import React from 'react';
import { toast } from 'react-toastify';

const ContactForm = () => {
     const handleSubmit = () =>{
          toast('Your Message Submited Successfully')
     }
     return (
          <div class="hero my-10 bg-base-200">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <div class="text-center lg:text-left">
      <h1 class="text-5xl font-bold">Contact With us</h1>
      <p class="py-6">Any kind of Order issue and query issue you can contact with us please include your subject and Email Thank You</p>
    </div>
    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div class="card-body">
        <div class="form-control">
          <label class="label">
            <span class="label-text">Name</span>
          </label>
          <input required type="text" placeholder="Name" class="input input-bordered" />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Email</span>
          </label>
          <input required type="text" placeholder="Email" class="input input-bordered" />
          
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Message</span>
          </label>
          <textarea required type="text" placeholder="Message" class="input input-bordered" />
          
        </div>
        <div class="form-control mt-6">
          <button onClick={handleSubmit} class="btn btn-primary">Submit</button>
        </div>
      </div>
    </div>
  </div>
</div>
     );
};

export default ContactForm;