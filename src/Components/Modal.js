import React from "react";
const Modal = ({image,handleCloseModal,id}) => {
  return (
    <div
      className="modal fade "
      id={id+'-modal'}
      tabindex="-1"
      aria-labelledby={id+'-modal-label'}
      aria-hidden="true"
    >
      <div className="modal-dialog  modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={handleCloseModal}
            ></button>
          </div>
          {image === null ? (
            <div className="spinner-border" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          ) : (
            <div className="modal-body model-image">
              <img className="" src={image} alt="" width="200px"></img>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
