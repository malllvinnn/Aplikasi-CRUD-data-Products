import mongoose, { Schema } from 'mongoose'

const productSchema = new Schema({
    name: {
        type: String,
        required: [true, 'nama tidak boleh kosong'],
        minlength: 3,
        maxlength: 50,
    },
    price: {
        type: Number,
        required: true,
        min: 100,
        max: 100000000,
    },
    stock: Number,
    status: {
        type: Boolean,
        default: true,
    }
}, { versionKey: false })

const Product = mongoose.model('Product', productSchema)

export default Product