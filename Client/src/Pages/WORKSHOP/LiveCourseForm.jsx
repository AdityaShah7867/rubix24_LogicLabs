import React from 'react'

const LiveCourseForm = () => {
  return (
    <div className="container" style={{marginTop:"10%"}}>
    <div className="row justify-content-center">
      <div className="col-md-6">
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control" id="name" placeholder="Enter Event name" />
          </div>
          <div className="mb-3">
            <label htmlFor="date" className="form-label">Date</label>
            <input type="date" className="form-control" id="date" />
          </div>
          <div className="mb-3">
            <label htmlFor="time" className="form-label">Time</label>
            <input type="time" className="form-control" id="time" />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">Description</label>
            <textarea className="form-control" id="description" rows="3" placeholder="Enter workshop description"></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="targetFields" className="form-label">Target Fields / Audience</label>
            <input type="text" className="form-control" id="targetFields" placeholder="Enter Target Fields / Audience" />
          </div>
          <div className="mb-3">
            <label htmlFor="targetFields" className="form-label">Money</label>
            <input type="text" className="form-control" id="targetFields" placeholder="Money" />
          </div>
          <button type="submit" className="btn btn-primary">Go LIve</button>
        </form>
      </div>
    </div>
  </div>
  )
}

export default LiveCourseForm