import React from 'react';
import Desktop from '../Assets/Images/DeskTop-Monitor.svg';
import BlurredBackground from "../Assets/Images/blurred-background.jpg"
import "../Subscribe.css"

function Subscribe() {
    
  return (
    <div className="container subscribe">
      <div className="fs-4 fw-bold text-center my-5">
        Still using “Conventional Methods” to manage your manufacturing business?
      </div>
      <div className="d-md-flex align-items-center">
        <img
          src={Desktop}
          className="img-fluid d-none d-md-block"
          alt="Desktop"
          style={{ maxWidth: '50%', height: 'auto' }}
        />
        <div className="p-4">
          <p className="fw-bold fs-5 p-3">
            Procejer.com comes equipped with a range of features to assist in inventory management,
            document creation and tracking, and the optimization of production processes.
          </p>
          <form class="d-flex border rounded" role="search">
      <input class="form-control border-0 py-2 px-3" type="search" placeholder="to subscribe our free NEWS letter provide your e-Mail" aria-label="Search" />
      <button class="btn bg-dark text-white" type="submit">Subscribe</button>
    </form>
        </div>
      </div>
    </div>
  );
}

export default Subscribe;
