import Link from 'next/link'
import Image from 'next/image'
import facebook from '../public/svg/facebook.svg'
import instagram from '../public/svg/instagram.svg'

function Navbar() {
  return (
    <nav>
<ul className='Liste'>
      <li className="Items">
        <Link href="/">Accueil</Link>
      </li>
      <li className="Items">
        <Link href="/galerie">Galerie</Link>
      </li>
      <li className="Items">
        <Link href="/tarifs">Tarifs et Prestations</Link>
      </li>
      <li className="Items">
        <Link href="/contact">Contact</Link>
      </li>
      <li className="Items ItemFacebook">
        <Link href="https://www.facebook.com"><Image src={facebook} height={30} width={30} /></Link>
      </li>
      <li className="Items ItemInstagram">
        <Link href="https://www.instagram.com"><Image src={instagram}height={30} width={30} /></Link>
      </li>
    </ul>
    </nav>
  )
}

export default Navbar