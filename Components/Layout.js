import Footer from "./Footer"
import Logo from "./Logo"
import Navbar from "./Navbar"


function Layout( {children} ) {
  return (
    <div className="container">
        <Logo />
        <Navbar />
        {children}
        <Footer />
    </div>
  )
}

export default Layout