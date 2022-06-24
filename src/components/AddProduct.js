import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { saveProduct } from '../features/ProductSlice';
import { useNavigate } from 'react-router-dom';

export const AddProduct = () => {

    const Navigate = useNavigate()
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const dispatch = useDispatch()

    const createdProduct = async (e) => {
        e.preventDefault();
        await dispatch(saveProduct({ title, price }))
        Navigate('/')
    }

    return (
        <div>
            <form onSubmit={createdProduct} className='box mt-5'>
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
                    <button className='button is-success'>Submit</button>
                </div>
            </form>
        </div>
    )
}
