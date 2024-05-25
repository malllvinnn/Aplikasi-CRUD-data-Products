<h1>Penjelasan lengkap ada di Gitbook</h1>
   <h2>
      <a href="https://app.gitbook.com/o/NS0RJBEo1jOI0S8atNXp/s/uri1OuhYQfuBbS4GpAq2/interkasi-reactjs-dan-expressjs">Link Gitbook</a>
   </h2>
   <p>
        Ini adalah Dokumentasi aplikasi CRUD data Product menggunkana Tech MERN yang saya pelajari dari Module
   <p>


<!-- Papan tulis Membuat list data

    // useState product
    // useNavigate


    /* useEffect
        const getProduct async anonimus funcion
            trycatch
                const response await Axios.get url list data
                const object status, message, data dari response.data
                jika status === 'success'
                    handle data list
                else alert error
            catch (error) alert error
        
        getProduct()
    , [] array kosong di parameter ke 2 useEffect
    */
 -->

 <!-- Papan tulis Membuat single data 

    // useNavigate
    // useParams productId
    // useState product object name string kosong, price 0, stock 1, status true


    /* useEffect
        const getProduct async anonimus funcion
            trycatch
                const response await Axios.get url single data(tambahkan product ${objectId})
                const object status, message, data dari response.data
                jika status === 'success'
                    handle data single setProduct data
                else alert error
            catch (error) alert error
        
        getProduct()
    , [productId] 
    */
 -->


 <!-- Membuat create data product 
    import beberapa dependencies yang diperlukan
    didalam Create buatlah:
    1. const useNavigate debgan nama navigate
    2. const useState dengan nama product yang di dalamnya mendefinisikan object dari
        -> name string kosong
        -> price 0
        -> stock 1
        -> status true
    3. Buatlah fungsi anonim dengan nama handleChange yang berparameter e dan name
    didalamnya berisi:
        - const value isinya mengambil e.target.value
        - ambil fungsi setProduct dari state product yang didalamnya berisi 2 parameter object:
            a. product distructuring
            b. [name]: value
    4. Buatlah const anonim fungsi dengan nama handleSubmit yang berparameter (e), pastikan di async await
    didalamnya berisi:
        - e.preventDefault()
        - trycatch 
            didalam try buatlah:
            -> const await dengan nama response yang berisi dari Axios.post yang ber parameter 2 yaitu url create data dan variable useState product
            -> const parameter object response.data yang berisi status, dan message
            -> jika status === 'success':
                -> alert(message)
                -> navigate ke halaman '/product'
            -> else alert(message)
        - catch 
            handle alert('network error')
    5. return 
        1. h2 berisi judul
        2. form
                berisi masing masing label name dan input data
                -> input Name, Price, dan Stock memiliki properties
                type = 'text'/'number'
                size = {50}
                value = {product.namafield}
                onChange = {(e) => handleChange(e, 'namafield')}
                -> untuk status gunakan select dengan properties
                value = {product.status} 
                onChange = {(e) => handleChange(e, 'status')}
                    2 option on dan off yang memiliki property value = {true/false}
                -> button submit dengan property onClick = {handleSubmit}
        3. button &laquo; back dengan onClick = {() => navigate('/product')}
    
    6. export default
    7. buatlah tombol untu kita bisa mengakses halaman create ini di list data + CREATE dengan menggunkana navigate('/product/create')

    
 -->

 <!-- Update data
 import useNavigate dan useParams di react router dom
 import Axios

 di dalam fungsi Update buatlah
 1. const navigate dari useNavigate
 2. const object dengan nama productId dari useParams()
 3. const useState dengan nama product yang berisi object
    - name: ''
    - price: 0,
    - stock: 1,
    - status: true
 4. buatlah useEffect anonim fungsi yang di dalamnya berisi:
    -> const updateProduct async anonim fungsi yang di dalamnya terdapat:
        -> try berisi:
            -> const response = await Axios.get url ${productId}
            -> const object dengan 3 parameter status, message, data dari response.data
            -> jika status === 'success'
                -> setProduct(data)
            -> else alert(message)
        -> catch (error) alert(error.message)
    -> gunakan updateProduct()
    -> kemudian di parameter ke 2 useEffect yaitu array berisi [productId]
 5. const handleChange anonim fungsi memiliki 2 parameter (e, name) yang berisi:
    -> const value = e.target.value
    -> ambil fungsi setProduct yang berisi object dengan 2 parameter object
        -> product distructuring
        -> [name]: value
 6. const handleSubmit async anonim fungsi ber parameter (e) yang berisi:
    -> e.preventDefault()
    -> try
            -> const response = await Axios.put(`url/product/${productId}`, product)
            -> const object memiliki 2 parameters status, dan message dari response.data
            -> if status === 'success'
                -> alert(message)
                -> navigate('/product')
            -> else alert(message)
    -> catch (error) alert('network error')
 7. return
    -> h2 judul halaman
    -> form
        -> label sesuai dengan input name
        -> input dari name, price, stock yang memiliki properties
            -> type 'text/number'
            -> size name 50, price tidak usah, stock 30
            -> value {product.namafield}
            -> onChange (e) => handleChange(e, 'namefield')
        -> label status yang didalamnya:
            -> select yang memilki properties
                -> value {product.status}
                -> onChange (e) => handleChange(e, 'status')
                    -> dua tag option dengan falue {true/false} berisi on/off
            -> button submit yang memilki properties
                -> type 'submit'
                -> onClick handleSubmit
    -> button &laquo; back memiliki properties
        -> onClick () => navigate('/product')
 
  -->

  <!-- Delete Product
    1. Di dalam Single Fungsi tepatnya di bawah useEffect buatlah const handleDelete async anonim fungsi dengan parameter (id) yang berisi:
        -> jika window.confirm('Apakah anda yakin ingin menghapus?')
            -> try
                -> const response = await Axios.delete('url/product/' + id')
                -> const object {message} dari response.data
                -> alert message
                -> navigate('/product')
            -> catch (error) alert('network error')
   -->