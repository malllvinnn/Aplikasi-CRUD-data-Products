import express from "express";
import "./connection.js";
import Product from "./Product.js";
import multer from "multer";

const routers = express.Router();

routers.get("/products", async (req, res) => {
	const product = await Product.find();
	if (product.length > 0) {
		res.send({
			status: "success",
			message: "data list product",
			data: product,
		});
	} else {
		res.send({
			status: "error",
			message: "pengambilan data product gagal",
		});
	}
});

routers.get("/product/:id", async (req, res) => {
	const product = await Product.findById(req.params.id);
	if (product) {
		res.send({
			status: "success",
			message: "menampilkan data product",
			data: product,
		});
	} else {
		res.send({
			status: "error",
			message: "pengambilan data product gagal",
		});
	}
});

routers.post("/product", multer().none(), async (req, res) => {
	const { name, price, stock, status } = req.body;
	try {
		const product = await Product.create({
			name: name,
			price: price,
			stock: stock,
			status: status,
		});

		if (product) {
			res.send({
				status: "success",
				message: "menambah data product",
			});
		} else {
			res.send({
				status: "error",
				message: "menambah data product gagal",
			});
		}
	} catch (error) {
		console.error(error);
	}
});

routers.put("/product/:id", multer().none(), async (req, res) => {
	const { name, price, stock, status } = req.body;
	try {
		const product = await Product.updateOne(
			{ _id: req.params.id },
			{
				$set: {
					name: name,
					price: price,
					stock: stock,
					status: status,
				},
			},
			{ runValidators: true }
		);

		if (product.modifiedCount > 0) {
			res.send({
				status: "success",
				message: "update data product",
			});
		} else {
			res.send({
				status: "error",
				message: "update data product gagal",
			});
		}
	} catch (error) {
		console.error(error);
	}
});

routers.delete("/product/:id", async (req, res) => {
	try {
		const product = await Product.deleteOne({ _id: req.params.id });

		if (product.deletedCount === 1) {
			res.send({
				status: "success",
				message: "delete data product",
			});
		} else {
			res.send({
				status: "error",
				message: "delete data product gagal",
			});
		}
	} catch (error) {
		console.error(error);
	}
});

routers.get("/", (req, res) => {
	res.send("Hello World");
});

export default routers;
