import React, { useEffect } from 'react'
import Page1 from '../components/page1/Page1'
import Page2 from '../components/page2/Page2'
import Page3 from '../components/page3/Page3'
import Page4 from '@/components/page4/Page4'


const Home = () => {

  return (
     <main className='w-full bg-[#E7E4DF] overflow-hidden'>
     <Page1/>
     <Page2/>
     <Page3/>
     <Page4/>
    </main>

  )
}

export default Home