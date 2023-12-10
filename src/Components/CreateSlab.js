import React from "react";
import { useCreateSlab } from "../customHooks/hooks";
import SlabList from "./SlabList";

const CreateSlab = () => {
  const {
    slabList,
    addSlabClickHandler,
    iState,
    updateState,
    editSlabHandler,
    handleEdit,
    isEditing
  } = useCreateSlab();


  const {
    min_val,
    max_val,
    commission_amt,
    is_comm_rs,
    return_val,
    is_return_rs,
    tds_per,
    gst_per,
  } = iState;

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateState({ ...iState, [name]: value });
  };

 

 

  return (
    <>
      <div className="container  mt-3 mb-5">
        <h2 style={{ color: "#e21d24" }}>
          {" "}
          Create New <span style={{ color: "#2e26c6" }}>Slab</span>
        </h2>
        <div className="main-bg">
          <div className="row my-3">
            <ul className="list-unstyled d-flex">
              <li>
                <label
                  htmlFor="slab"
                  className="form-label label-fund-request"
                  style={{ marginTop: "3px" }}
                >
                  <b>Slab Name :</b>
                </label>
              </li>
              <li>
                <input
                  type="text"
                  className="form-control ms-2"
                  id="slab"
                  placeholder="1.20MD"
                />
              </li>
              <li>
                <div className="ms-3 search-button">
                  <button className="btn btn-primary" type="submit">
                    Update
                  </button>
                </div>
              </li>
            </ul>
          </div>
          <div className="row">
            <div className="col-md-1">
              <label
                htmlFor="inputEmail4"
                className="form-label label-fund-request"
              >
                Min
              </label>
              <input
                type="text"
                className="form-control"
                id="inputEmail4"
                placeholder="eg 1"
                name="min_val"
                value={min_val}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-1">
              <label
                htmlFor="inputEmail4"
                className="form-label label-fund-request"
              >
                Max
              </label>
              <input
                type="text"
                className="form-control"
                id="inputEmail4"
                placeholder="512"
                name="max_val"
                value={max_val}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-2">
              <label
                htmlFor="inputEmail4"
                className="form-label label-fund-request"
              >
                Commision/Surcharge
              </label>
              <input
                type="text"
                className="form-control"
                id="inputEmail4"
                placeholder="512"
                name="commission_amt"
                value={commission_amt}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-1">
              <label
                htmlFor="inputEmail4"
                className="form-label label-fund-request"
              >
                % Or ₹
              </label>
              <select
                className="form-select"
                name="is_comm_rs"
                value={is_comm_rs}
                onChange={handleChange}
              >
                <option>%</option>
                <option value="1">1</option>
                <option value="2">2</option>
              </select>
            </div>
            <div className="col-md-2">
              <label
                htmlFor="inputEmail4"
                className="form-label label-fund-request"
              >
                Return or Surcharge
              </label>
              <input
                type="text"
                className="form-control"
                id="inputEmail4"
                placeholder="512"
                name="return_val"
                value={return_val}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-1">
              <label
                htmlFor="inputEmail4"
                className="form-label label-fund-request"
              >
                % Or ₹
              </label>
              <select
                className="form-select"
                name="is_return_rs"
                value={is_return_rs}
                onChange={handleChange}
              >
                <option>%</option>
                <option value="1">1</option>
                <option value="2">2</option>
              </select>
            </div>
            <div className="col-md-1">
              <label
                htmlFor="inputEmail4"
                className="form-label label-fund-request"
              >
                TDS %
              </label>
              <input
                type="text"
                className="form-control"
                id="inputEmail4"
                placeholder="512"
                name="tds_per"
                value={tds_per}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-1">
              <label
                htmlFor="inputEmail4"
                className="form-label label-fund-request"
              >
                GST%
              </label>
              <input
                type="text"
                className="form-control"
                id="inputEmail4"
                placeholder="512"
                name="gst_per"
                value={gst_per}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-1" style={{ marginTop: "33px" }}>
                {
                    <button
                    className="btn btn-primary "
                    onClick={isEditing? editSlabHandler: addSlabClickHandler}
                  >
                    {isEditing?'Save':'Add'}
                  </button>
                }
            </div>
          </div>
          <SlabList slabList={slabList} handleEdit={handleEdit} />
        </div>
      </div>
    </>
  );
};

export default CreateSlab;
