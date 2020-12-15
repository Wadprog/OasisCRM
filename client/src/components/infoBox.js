/**
 * 
 * @param {*} param0 
 */

const infoBox = ({ color = 'info', icon, title, amount, sign = null }) => {
  return (
    <div class="info-box">
      <span class={`info-box-icon bg-${color} elevation-1`}>
        <i class={`fas fa-${icon}`}></i>
      </span>

      <div class="info-box-content">
        <span class="info-box-text">{title}</span>
        <span class="info-box-number">
          {amount}
          {sign != null && sign != undefined && sign && <small>{sign}</small>}
        </span>
      </div>
      {/* <!-- /.info-box-content --> */}
    </div>
  )
}

export default infoBox
