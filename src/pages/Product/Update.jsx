import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Axios from "axios";

const Update = () => {
	const navigate = useNavigate();
	const { productId } = useParams();
	const [product, setProduct] = useState({
		name: "",
		price: 0,
		stock: 1,
		status: true,
	});

	useEffect(() => {
		const updateProduct = async () => {
			try {
				const response = await Axios.get(
					`http://localhost:3000/product/${productId}`
				);
				const { status, message, data } = response.data;

				if (status === "success") {
					setProduct(data);
				} else {
					alert(message);
				}
			} catch (error) {
				alert(error.message);
			}
		};
		updateProduct();
	}, [productId]);

	const handleChange = (e, nameField) => {
		const value = e.target.value;
		setProduct({ ...product, [nameField]: value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await Axios.put(
				`http://localhost:3000/product/${productId}`,
				product
			);
			const { status, message } = response.data;

			if (status === "success") {
				alert(message);
				navigate("/product");
			} else {
				alert(message);
			}
		} catch (error) {
			alert("network error");
		}
	};
	return (
		<>
			<h2>Halaman Update Product</h2>
			<form onSubmit={handleSubmit}>
				<label>
					Name:
					<input
						type="text"
						size={50}
						value={product.name}
						onChange={(e) => handleChange(e, "name")}
					/>
				</label>
				<label>
					Price:
					<input
						type="text"
						value={product.price}
						onChange={(e) => handleChange(e, "price")}
					/>
				</label>
				<label>
					Stock:
					<input
						type="text"
						size={30}
						value={product.stock}
						onChange={(e) => handleChange(e, "stock")}
					/>
				</label>
				<label>
					Status:
					<select
						value={product.status}
						onChange={(e) => handleChange(e, "status")}
					>
						<option value={false}>off</option>
						<option value={true}>on</option>
					</select>
				</label>
				<button type="submit">submit</button>
			</form>
			<button onClick={() => navigate("/product")}>&laquo; back</button>
		</>
	);
};

export default Update;
