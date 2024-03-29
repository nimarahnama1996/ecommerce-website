import React, { useEffect } from 'react'
import styled from 'styled-components';
import { Link ,useParams, useHistory} from 'react-router-dom';



import { useProductsContext } from '../context/products_context';
import { single_product_url as url } from '../utils/constants';
import { formatPrice } from '../utils/helpers';
import Loading from '../components/Loading'
import Error from '../components/Error'



const SingleProductPage = () => {

  const {id} = useParams()
  const history = useHistory()

  const {
    single_product_loading: loading,
    single_product_error: error,
    single_product: product,
    fetchSingleProduct,
  } = useProductsContext();


  useEffect(() => {
   fetchSingleProduct(`s${url}${id}`)
  },[id])


  useEffect(() => {
 
    if (error) {
      setTimeout(() => {
      history.push('/')
      },3000)
    }
  },[])

  if (loading) {
    return <Loading/>
  }

  if (error) {
    return <Error/>
  }

  return (
    
  )
}


const Wrapper = styled.main`
  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
  .price {
    color: var(--clr-primary-5);
  }
  .desc {
    line-height: 2;
    max-width: 45em;
  }
  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }
  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }
`;

export default SingleProductPage