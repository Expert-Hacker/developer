import React from 'react'
import {Link} from 'react-router-dom'

function Access() {
    return (
        <div className="access">

      
        <div className="d-flex flex-column justify-content-center align-items-center">
                 <h1 className="display-2 pb-1 text-danger fw-bold">⚠️ Not Authorized</h1>
                <h4 className="text-dark">You are not Authorized to view this requested page</h4>
                <h4>Please Login to Access this page</h4>
                <div className="_btn">
                <Link to="/login"> <button type="button" class="btn btn-primary  btn-md fw-bold fs-5">Login</button></Link> 
                                    </div>
        </div>
        </div>
    )
}

export default Access
