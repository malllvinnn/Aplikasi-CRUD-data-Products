import { useEffect, useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

const List = () => {
	const [products, setProducts] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		const getProduct = async () => {
			try {
				const response = await Axios.get("http://localhost:3000/products");
				const { status, message, data } = response.data;

				if (status === "success") {
					// handle data list
					setProducts(data);
				} else {
					alert(message);
				}
			} catch (error) {
				alert(error.message);
			}
		};

		getProduct();
	}, []);

	return (
		<>
			<h2>Halaman List Product</h2>
			<div>
				<button onClick={() => navigate('/product/create')}>+ CREATE</button>
			</div>
			<table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Price</th>
						<th>Stock</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					{products.length > 0 ? (
						products.map((product, index) => { 
							return (
								<tr key={index}>
								<td>{product.name}</td>
								<td className="center">{product.price}</td>
								<td className="center">{product.stock}</td>
								<td className="action">
									<button
										onClick={() => navigate(`/product/single/${product._id}`)}
									>
										Detail
									</button>
									<button
										onClick={() => navigate(`/product/update/${product._id}`)}
									>Update</button>
								</td>
							</tr>
							)
						})
					) : (
						<tr>
							<td colSpan="3">No products found</td>
						</tr>
					)}
				</tbody>
			</table>
		</>
	);
};

export default List;
