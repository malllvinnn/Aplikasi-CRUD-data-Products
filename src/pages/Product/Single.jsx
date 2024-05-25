import { useNavigate, useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import Axios from "axios"

const Single = () => {
    const navigate = useNavigate()
    const { productId } = useParams()
    const [product, setProduct] = useState({
        name: '',
        price: 0,
        stock: 1,
        status: true
    });

    useEffect(() => {
        const getProduct = async () => {
            if (!productId) {
                alert("Invalid product ID");
                return;
            }
            try {
                const response = await Axios.get(`http://localhost:3000/product/${productId}`)
                const { status, message, data } = response.data
                
                if (status === 'success') { 
                    setProduct(data)
                } else {
                    alert(message)
                }
            } catch (error) {
                alert(error.message)
            }
        }
        getProduct()
    }, [productId]);

    const handleDelete = async (id) => {
        if (window.confirm('Apakah anda yakin ingin menghapus?')) {
            try {
                const response = await Axios.delete('http://localhost:3000/product/' + id)
                const { message } = response.data
                alert(message)
                navigate('/product')
            } catch (error) {
                alert('network error')
            }
        }
    }
    return (
        <>
            <h2>Halaman Single Product</h2>
            { product && <>
                <div>Name: {product.name}</div>
                <div>Price: {product.price}</div>
                <div>Stock: {product.stock}</div>
                <div>Status: {product.stock ? 'on' : 'off'}</div>
            </> }
            <button onClick={() => navigate('/product')}>&laquo; back</button>
            <button onClick={() => handleDelete(product._id)}>Delete</button>
        </>
    )
}

export default Single