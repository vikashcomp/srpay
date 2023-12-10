import React from "react";
import { useSelector } from "react-redux";

const SlabList = ({ slabList, handleEdit}) => {
  const { isFetchingSlabList } = useSelector((state) => state.slabForm);



  return (
    <div className="container my-4">
      <h2 style={{ color: "#e21d24" }}>
        {" "}
        Slab Range <span style={{ color: "#2e26c6" }}>Info</span>
      </h2>
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            {[
              "Edit",
              "Rangemin",
              "Rangemax",
              "Com",
              "Is precent",
              "Bank Charges",
              "Is Percent",
              "tds%",
              "gst%",
              "Delete",
            ].map((item, index) => (
              <td>{item}</td>
            ))}
          </tr>
        </thead>
        {isFetchingSlabList ? (
          '          Fetching Data form API'
        ) : (
          <tbody>
            {slabList?.map((x) => (
              <tr>
                <th scope="row">
                  <button
                    type="button"
                    className="btn btn-outline-primary btn-sm"
                    onClick={() => handleEdit(x)}
                  >
                    Edit
                  </button>
                </th>
                <td>{x.min_val}</td>
                <td>{x.max_val}</td>
                <td>{x.commission_amt}</td>
                <td>
                  <input type="checkbox" />
                  {x.is_comm_rs}
                </td>
                <td>{x.return_val}</td>
                <td>{x.tds_per}</td>
                <td>
                  <input type="checkbox" />
                  {x.is_return_rs}
                </td>
                <td>{x.gst_per}</td>
                <th scope="row">
                  <button type="button" className="btn btn-outline-danger btn-sm"  >
                    Delete
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        )}
      </table>
    </div>
  );
};

export default SlabList;
