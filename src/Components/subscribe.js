import React from "react";
import "../Subscribe.css";

function Subscribe() {
  return (

    <div className="container-fluid subscribe d-flex flex-column" style={{minHeight:"60vh", height:"auto"}}>
      <div className="fs-4 fw-bold text-center pt-5">
        Still using “Conventional Methods” to manage your manufacturing
        business?
      </div>
      <div className="check">

      
      <div className="container b">
      <div className="p-4">
        <p className="fw-bold fs-4 p-3">
          Procejer.com comes equipped with a range of features to assist in
          inventory management, document creation and tracking, and the
          optimization of production processes.
        </p>
        <form class="d-flex border rounded" role="search">
          <input
            class="form-control border-0 py-2 px-3"
            type="search"
            placeholder="to subscribe our free NEWS letter provide your e-Mail"
            aria-label="Search"
          />
          <button class="btn bg-dark text-white" type="submit">
            Subscribe
          </button>
        </form>
      </div>
      </div>
      </div>
    </div>
  );
}

export default Subscribe;
