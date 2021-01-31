import React, {Component} from "react";

class Cart extends Component {
    constructor(){
        super()
        this.state = {
            cart: [], // untuk menyimpan list cart
            user: "", // untuk menyimpan data nama user
            total: 0, // untuk menyimpan data total belanja
        }    
    }
    render(){
        return(
            <div className="container">
                <br />
                <br />
                <br />
                <br />
                <br />
                <div className="card col-12 mt-2">
                    <div className="card-header bg-primary text-white">
                        <h4>Data Keranjang Belanja</h4>
                    </div>

                    <div className="card-body">
                        <h5 className="text-primary">
                            Nama User: { this.state.user }
                        </h5>

                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Nama Item</th>
                                    <th>Harga</th>
                                    <th>Qty</th>
                                    <th>Total</th>
                                </tr>
                            </thead>

                            <tbody>
                                { this.state.cart.map( (item, index) => (
                                    <tr key={index}>
                                        <td>{item.judul}</td>
                                        <td>Rp {item.harga}</td>
                                        <td>{item.jumlahBeli}</td>
                                        <td>
                                            Rp { item.harga * item.jumlahBeli }
                                        </td>
                                    </tr>
                                ) ) }
                            </tbody>
                        </table>

                        <h4 className="text-danger">
                            Total Harga: Rp {this.state.total}
                        </h4>
                    </div>
                </div>
            </div>
        );
    }

    initCart = () => {
        // memanggil data cart pada localStorage
        let tempCart = []
        if(localStorage.getItem("cart") !== null){
            tempCart = JSON.parse(localStorage.getItem("cart"))
        }
        

        // memanggil data user pada localStorage
        let userName = localStorage.getItem("user")

        // kalkulasi total harga
        let totalHarga = 0;
        tempCart.map(item => {
            totalHarga += (item.harga * item.jumlahBeli)
        })

        // memasukkan data cart, user, dan total harga pada state
        this.setState({
            cart: tempCart,
            user: userName,
            total: totalHarga
        })
    }

    componentDidMount(){
        this.initCart()
    }

    Edit = (item) => {
        // menampilkan komponen modal
        $("#modal_buku").modal("show")
        this.setState({
            isbn: item.isbn,
            judul: item.judul,
            penulis: item.penulis,
            penerbit: item.penerbit,
            cover: item.cover,
            harga: item.harga,
            action: "update",
            selectedItem: item
        })
    }
    
    Save = (event) => {
        event.preventDefault();
        // menampung data state buku
        let tempBuku = this.state.buku
    
        if (this.state.action === "insert") {
            // menambah data baru
            tempBuku.push({
                isbn: this.state.isbn,
                judul: this.state.judul,
                penulis: this.state.penulis,
                penerbit: this.state.penerbit,
                cover: this.state.cover,
                harga: this.state.harga,
            })
        }else if(this.state.action === "update"){
            // menyimpan perubahan data
            let index = tempBuku.indexOf(this.state.selectedItem)
            tempBuku[index].isbn = this.state.isbn
            tempBuku[index].judul = this.state.judul
            tempBuku[index].penulis = this.state.penulis
            tempBuku[index].penerbit = this.state.penerbit
            tempBuku[index].cover = this.state.cover
            tempBuku[index].harga = this.state.harga
        }
    
        this.setState({buku : tempBuku})
        
        // menutup komponen modal_buku
        $("#modal_buku").modal("hide")
    }
    
    Drop = (item) => {
        // beri konfirmasi untuk menghapus data
        if(window.confirm("Apakah anda yakin ingin menghapus data ini?")){
            // menghapus data
            let tempBuku = this.state.buku
            // posisi index data yg akan dihapus
            let index = tempBuku.indexOf(item)
    
            // hapus data
            tempBuku.splice(index, 1)
    
            this.setState({buku: tempBuku})
        }
    }

}


export default Cart;