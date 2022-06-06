import React from "react";
import AppointmentIcon from "../icons/svgs/Appointment.Icon";

export default function AppointmentModal() {
  return (
    <div
      className="modal fade pop_appointment p-0"
      tabIndex
      role
      aria-labelledby
      aria-hidden="true"
      data-backdrop="static"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel" />
            <button type="button" className="btn close" data-dismiss="modal" aria-label="Close">
              <i className="fa fa-times" />
            </button>
          </div>
          <div className="modal-body py-3">
            <form action="login.php" method="post">
              <div className="row">
                <div className="col-12 text-center">
                  <i className="fa-check-confirm">
                    {/* <img src="assets/images/appointment_icon.png" alt=""/> */}
                    <div id="appointment_icon" className="svgjson">
                      <AppointmentIcon />
                    </div>
                  </i>
                  <h4 className="text-center font-weight-semibold py-2">APPOINTMENT</h4>
                  <p className="py-2 h_20">Please Login to avail this feature.</p>
                  <div className="modal-buttons mt-2">
                    <button
                      type="button"
                      className="btn btn-primary mr-1"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      Login
                    </button>
                    <button
                      type="submit"
                      className="btn btn-secondary ml-1 cancel-btn"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
