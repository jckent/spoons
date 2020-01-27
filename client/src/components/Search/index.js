import React from "react";
import ProviderList from "../Result/datacomp.js";

function SearchForm() {
  return (
    <div class="site-section bg-light" id="contact-section">
      <div class="container">
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Search By</button>
            <div class="dropdown-menu">
              <a class="dropdown-item" href="#">Provider name</a>
              <a class="dropdown-item" href="#">Insurance carrier</a>
              <a class="dropdown-item" href="#">Location</a>
              <div role="separator" class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Search</a>
            </div>
          </div>
          <input type="text" class="form-control" aria-label="Text input with dropdown button">
        </input>
      </div>
    </div>
    <ProviderList />
    </div>
  );
}

export default SearchForm;