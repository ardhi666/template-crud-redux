import React, { useState,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts, productSelector, updateProduct } from '../features/ProductSlice';
import { useParams, useNavigate } from 'react-router-dom';

export const EditProduct = () => {

    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const Navigate = useNavigate();
    const dispatch = useDispatch()
    const {id} = useParams()

    const product = useSelector((state) => productSelector.selectById(state, id))

    useEffect(()=> {
        dispatch(getProducts())
    }, [dispatch])

    useEffect(()=> {
    if(product){
        setTitle(product.title);
        setPrice(product.price)
    }
    }, [product])

    const handleUpdate = async(e) => {
        e.preventDefault()
        await dispatch(updateProduct({id,title,price}))
        Navigate('/')
    }

    return (
        <div>
            <form onSubmit={handleUpdate} className='box mt-5'>
                <div className="field">
                    <label className='label'>Title</label>
                    <div className="control">
                        <input type="text"
                            className='input'
                            placeholder='Title'
                            onChange={(e) => setTitle(e.target.value)}
                            value={title}
                        />
                    </div>
                </div>
                <div className="field">
                    <label className='label'>Price</label>
                    <div className="control">
                        <input type="text"
                            className='input'
                            placeholder='Price'
                            onChange={(e) => setPrice(e.target.value)}
                            value={price}
                        />
                    </div>
                </div>
                <div className="field">
                    <button className='button is-success'>Update</button>
                </div>
            </form>
        </div>
    )
}
