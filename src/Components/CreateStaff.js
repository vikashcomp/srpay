import React from 'react';

const CreateStaff = () => {
  return (
    <>
        <div className="container mt-5">
                <div className="row justify-content-center ">
                    <div className="col-md-6">
                        <div className="card main-bg">
                            <div className="card-header  text-white">
                                <h3 style={{color:"red"}}>Add <span style={{color:"blue"}}>Staff</span> </h3>
                            </div>
                            <div className="card-body">
                                <form>
                                    <div className="form-group mt-1">
                                        <label for="name"> User Name:</label>
                                        <input type="text" className="form-control" id="name" placeholder="Enter  user name"/>
                                    </div>
                                    <div className="form-group mt-2">
                                        <label for="email">Email:</label>
                                        <input type="email" className="form-control" id="email" placeholder="Enter user email"/>
                                    </div>
                                    <div className="form-group mt-2">
                                        <label for="email">Password:</label>
                                        <input type="password" className="form-control" id="email" placeholder="Enter Password"/>
                                    </div>
                                    <button type="submit" className="btn btn-primary mt-3 ">Add Staff</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default CreateStaff;
