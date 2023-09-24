import dynamic from 'next/dynamic';
import Link from 'next/link';
import React from 'react'
const BabylonComponent = dynamic(() => import('./component/babyloncomponent'), {
    loading: () => <div>...loading</div>,
    ssr: false,
  });
const Babylon = () => {
  return (
    <>
    <div>Babylon</div>
    <Link href='/'>back</Link>
    <BabylonComponent/>
    </>
  )
}

export default Babylon