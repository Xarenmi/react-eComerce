import './card.sass'
import Card from '@/Components/Cards/Card'
import { useParams } from 'react-router-dom'
import { useProductContext } from '@/Context/ProductsContext'

const Category = () => {
  const { productList } = useProductContext()
  let { name } = useParams()
  let categoryProducts

  switch (name) {
    case 'gadgets':
      categoryProducts = productList.filter((product) => ['lighting', 'laptops', 'smartphones'].some(category => product.category.includes(category)))
      break;
    case 'automotive':
      categoryProducts = productList.filter((product) => product.category.includes('motorcycle') || product.category.includes(name))
      break;
    case 'women':
      categoryProducts = productList.filter((product) => ['tops', 'sunglasses', 'fragrances'].some(category => product.category.includes(category)) || product.category.includes(name))
      break;
    case 'men':
      categoryProducts = productList.filter((product) => ['sunglasses', 'fragrances'].some(category => product.category.includes(category)) || product.category.includes(name))
      break;
    case 'home-decoration':
      categoryProducts = productList.filter((product) => ['furniture', 'home'].some(category => product.category.includes(category)) || product.category.includes(name))
      break;
    default:
      categoryProducts = productList.filter((product) => product.category.includes(name));
      break;

  }

  return (
    <main className='search'>

      <h1>{`PRODUCTS IN ${name.toUpperCase().replace(/-/g, ' ')}`}</h1>
      <div className='search__container'>
        {categoryProducts.map((product) => (
          <Card key={product.id} id={product.id} className='card-container' />
        ))}
      </div>
    </main>
  )
}

export default Category
