import Link from 'next/link'
import styled from 'styled-components'


function Nav() {
  return (<nav>
    <Link href="/products">Products</Link>
    <Link href="/sell">Sell</Link>
    <Link href="/orders">Orders</Link>
    <Link href="/account">Account</Link>
  </nav>)
}

export default Nav