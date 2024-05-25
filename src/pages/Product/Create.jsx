import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';

const Create = () => {
    const navigate = useNavigate()
    const [product, setProduct] = useState({
        name: '',
        price: 0,
        stock: 1,
        status: true,
    });

    const handleChange = (e, nameField) => {
        const value = e.target.value
        setProduct({...product, [nameField]: value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const response = await Axios.post('http://localhost:3000/product', product)
            const { status, message } = response.data
            
            if (status === 'success') { 
                alert(message)
                navigate('/product')
            } else {
                alert(message)
            }
        } catch (error) {
            alert(error.message)
        }
    }
    
    return (
        <>
            <h2>Halaman Create Product</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" size={50} value={product.name} onChange={(e) => handleChange(e, 'name')} />
                </label>
                <label>
                    Price: 
                    <input type="text" value={product.price} onChange={(e) => handleChange(e, 'price')} />
                </label>
                <label>
                    Stock: 
                    <input type="text" size={30} value={product.stock} onChange={(e) => handleChange(e, 'stock')} />
                </label>
                <label>
                    Status: 
                    <select value={product.status} onChange={(e) => handleChange(e, 'status')}>
                        <option value={false}>off</option>
                        <option value={true}>on</option>
                    </select>
                </label>
                <button type='submit'>Submit</button>
            </form>
            <button onClick={() => navigate('/product')}>&laquo; back</button>
        </>
    )
}

export default Create