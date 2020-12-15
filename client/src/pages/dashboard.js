import PageTitle from '../components/pageTtile'

import InfoBox from '../components/infoBox'
const Dashboard = () => {
  return (
    <div class="content-wrapper">
      <PageTitle title="DasBoard" />
      <section class="content">
        <div class="row">
          <div class="col-12 col-sm-6 col-md-3">
            <InfoBox
              title="Task"
              amount={10}
              sign="%"
              color="danger"
              icon="home"
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Dashboard
