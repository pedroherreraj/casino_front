import React, { FunctionComponent } from "react";
import { useProducts } from "services/api";
import { Product } from "app/types";

const Home: FunctionComponent = () => {
  const { isLoading, data, isFetching } = useProducts();

  if (isLoading) return <h1>Is Loading</h1>
  if (isFetching) return <h1>Is Loading</h1>
  return (
    <div>
      {data?.data.map((product: Product) => <div>{product.name} {product.net_price}</div>)}
    </div>
  )
}

export default Home;