import React from 'react'
import styled from 'styled-components'
import PageHero from '../components/PageHero'




const CheckoutPage = () => {
  return (
    <main>
      <PageHero title='checkout'/>
      <Wrapper className='page'>
      <h1>checkout here</h1>
      </Wrapper>
    </main>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  .empty {
    text-align: center;
  }
`

export default CheckoutPage