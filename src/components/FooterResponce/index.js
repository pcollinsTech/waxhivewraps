import React from 'react'
import ResponsiveLayout from '../../context/ResponsiveLayout'
import MobileView from './MobileView'
import DesktopView from './DesktopView'

class Footer extends React.Component {
  render() {
    return (
      <ResponsiveLayout
        breakPoint={767}
        renderDesktop={() => <DesktopView />}
        renderMobile={() => <MobileView />}
      />
    )
  }
}

export default Footer
