import logo from '../public/logo/1logo.png'
import Image from 'next/image'

const Logo = () => {
  return (
    <Image 
      src={logo} 
      alt='logo' 
      id='Logo'
    />
  )
}

export default Logo