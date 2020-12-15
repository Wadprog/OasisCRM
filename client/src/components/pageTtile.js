import React from 'react'

const pageTtile = ({ title }) => {
  return (
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1 class="m-0 text-dark">{title}</h1>
            <p>
              <small>{new Date().toDateString()}</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default pageTtile
