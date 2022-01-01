import gql from "graphql-tag";
import {useQuery} from "@apollo/client";
import styled from 'styled-components'
import Product from "../components/Product";


const ALL_PRODUCTS_QUERY = gql`
    query ALL_PRODUCTS_QUERY {
        allProducts {
            id
            name
            description
            photo {
                id
                image {
                    publicUrlTransformed
                }
            }
            price
        }
    }
`

const ProductListStyles = styled.div`
display: grid; 
grid-template-columns: 1fr 1fr;
gap: 60px;
`

export default function Products() {
    const {data, error, loading} = useQuery(ALL_PRODUCTS_QUERY)
    console.log("-> loading", loading);
    console.log("-> error", error);
    if(loading) return <p>Loading..</p>
    return <div>
        <ProductListStyles>
            {data.allProducts.map(product => (
                <Product key={product.id} product={product} />
            ))}
        </ProductListStyles>

        {/*<Product/>*/}
    </div>
}
