import { Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import defaultPic from '@/assets/img/default.png'
import { useProductContext } from '@/Context/ProductsContext'

const Card = ({ id, className }) => {
  const { productList } = useProductContext()
  const thisProduct = productList.find((product) => product.id === id)
  const remainingPercentage = 100 - thisProduct.discountPercentage
  const originalPrice = (thisProduct.price / remainingPercentage * 100).toFixed(2)
  const [pic, setPic] = useState('')

  useEffect(() => {
    setPic(thisProduct.thumbnail || defaultPic);
  }, [thisProduct.images, defaultPic]);

  return (
    <Link to={`/product/${thisProduct.title}`} className={`${className}__link`}>
      <div id={id} className={className}>
        <img src={pic} className={`${className}__cardPic`} alt={thisProduct.title}/>
        <p className='card__discount-box'>
          -{thisProduct.discountPercentage.toFixed(2)}%
        </p>
        <p>${thisProduct.price} <span className='card__original-price'>Before: ${originalPrice}</span></p>
        <h3 className='card__product-title'>{thisProduct.title}</h3>
      </div>
    </Link>
  )
}

export default Card
