//import Alert from "./Alert";
import Navbar from './navbar'
import Sidebar from './sidebar'
import { Fragment } from 'react'
import Routes from './../routes'
const PageWrapper = () => {
  return (
    <div>
      <>
        <div className="page-wrapper chiller-theme">
          <a id="show-sidebar" className="btn btn-sm btn-dark" href="#">
            <i className="fa fa-bars" />
          </a>

          <main className="page-content">
            <div className="container-fluid">
              <Navbar />
              <Sidebar />
              <Routes />
              {/* <Alert /> */}
            </div>
          </main>
        </div>
      </>
    </div>
  )
}

export default PageWrapper
