import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts, productSelector, deleteProduct } from '../features/ProductSlice';
import { Link } from 'react-router-dom';

export const ShowProduct = () => {

    // const { title, price } = useSelector(state => state.product)
    const dispatch = useDispatch()
    const products = useSelector(productSelector.selectAll)

    useEffect(() => {
        dispatch(getProducts())
        console.log('DidUpdate');
    }, [dispatch])


    return (
        <div className='box mt-5'>
            <Link to='add' className='button is-success'>Add New</Link>
            <table className='table is-striped is-fullwidth'>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, id) => (
                        <tr key={product.id}>
                            <td>{id + 1}</td>
                            <td>{product.title}</td>
                            <td>{product.price}</td>
                            <td>
                                <Link to={`edit/${product.id}`} className='button is-info is-small m-1'>Edit</Link>
                                <button onClick={() => dispatch(deleteProduct(product.id))} className='button is-danger is-small m-1'>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
