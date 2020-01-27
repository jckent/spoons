import React from "react";

function Registration() {
  return (
   

  <div class="site-section bg-light" id="contact-section">
      
    <div class="container">
      
      <div class="row">
        <div class="col-lg-8 mb-5" >
          <form action="#" method="post">
            <div class="form-group row">
              <div class="col-md-4 mb-4 mb-lg-0">
                <input type="text" class="form-control" placeholder="First name">
              </input>
              </div>

              <div class="col-md-4">
                <input type="text" class="form-control" placeholder="Middle name">
              </input>
              </div>

              <div class="col-md-4">
                <input type="text" class="form-control" placeholder="Last name">
              </input>
          </div>
            </div>
            </form>
            </div>
            </div>

            <div class="form-group row">
              <div class="col-md-12">
                <input type="text" class="form-control" placeholder="Business name">
              </input>
            </div>
            </div>
            <div class="form-group row">
              <div class="col-md-12">
                <input type="text" class="form-control" placeholder="Address 1">
              </input>
            </div>
            </div>

            <div class="form-group row">
              <div class="col-md-12">
                <input type="text" class="form-control" placeholder="Address 2">
              </input>
            </div>
            </div>

            <div class="form-group row">
              <div class="col-md-4 mb-4 mb-lg-0">
                <input type="text" class="form-control" placeholder="City">
              </input>
              </div>
              </div>

              <div class="col-md-4">
                <input type="text" class="form-control" placeholder="State">
              </input>
              <div class="col-md-4">
                <input type="text" class="form-control" placeholder="Zip code">
              </input>
          </div>
            </div>

            <div class="form-group row">
              <div class="col-md-6 mb-4 mb-lg-0">
                <input type="text" class="form-control" placeholder="Email address">
              </input>
              <div class="col-md-6">
                <input type="text" class="form-control" placeholder="Phone number">
              </input>
              
          
            </div>

            <div class="form-group row">
              <div class="col-md-12">
                <input type="text" class="form-control" placeholder="Insurance accepted, separated by comma">
              </input>
            </div>

            <div class="form-group row">
              <div class="col-md-12">
                <textarea name="" id="" class="form-control" placeholder="Tell about yourself. What should potential
                patients know about you?" cols="30" rows="10"></textarea>
              </div>
            </div>
            <div class="form-group row">
              <div class="col-md-6 mr-auto">
                <input type="submit" class="btn btn-block btn-primary text-white py-3 px-5" value="Submit">
              </input>
            </div>
          </div>
        </div>
        

        <div class="col-lg-4 ml-auto">
          <div class="bg-white p-3 p-md-5">
            <div class="form-group">
              <label for="exampleFormControlFile1">Upload a photo</label>
              <input type="file" class="form-control-file" id="exampleFormControlFile1">
            </input>
          </div>
        </div>
      </div>
    </div>
  </div>

  </div>
  </div>
  

  );
}

export default Registration;