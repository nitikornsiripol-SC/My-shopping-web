import { useCart } from "../context/CartPageContext.jsx"

function CartPage() {
    const { cartItem } =useCart();

    const total = cartItem.reduce((sum, item) => sum + item.price, 0);

   
    const groupedItems = cartItem.reduce((acc, item) => {
        const existing = acc.find((entry) => entry.name === item.name);
        if (existing) {
            existing.quantity += 1;
        } else {
            acc.push({name: item.name, price: item.price, quantity: 1 });
        }
        return acc;
    }, []);
  
    

    return (
        <div className="bg-[#f5f5f5] p-8 md:p-20 rounded-xl shadow-md max-w-[700px] w-full">
            <h1 className="text-red-400 text-4xl md:text-6xl font-bold border-b-4 border-red-600 pb-3">
                Cart
            </h1>

            {groupedItems.length === 0 ? (
                <p className="mt-6 text-gray-500">ยังไม่มีสินค้าในตะกร้า</p>
            ) : (
                <table className="w-full mt-6 border-collapse">
                    <thead>
                        <tr className="border-b-2 border-red-600 text-left">
                            <th className="py-2">ลำดับ</th>
                            <th className="py-2 text-center">ชื่อสินค้า</th>
                            <th className="py-2">ราคาต่อหน่วย</th>
                            <th className="py-2">จำนวน</th>
                            <th className="py-2 text-center">ราคารวม</th>
                            
                        </tr>
                    </thead>

                    <tbody>
                        {groupedItems.map((item, index) => (
                            <tr key={index} className="border-b border-gray-300">
                              <td className="py-2">{index + 1}</td>
                              <td className="py-2">{item.name}</td>
                              <td className="py-2">{item.price} บาท</td>
                              <td className="py-2 text-right">x{item.quantity} บาท</td>
                              <td className="py-2 text-right">
                                {(item.price * item.quantity).toLocaleString()} บาท                            
                              </td>  
                            </tr>
                        ))}
                    </tbody>

                    <tfoot>
                        <tr className="font-bold">
                            <td colSpan={4} className="py-3 text-right">รวมทั้งหมด</td>
                            <td className="py-3 text-right">{total.toLocaleString()} บาท</td>
                        </tr>
                    </tfoot>

                </table>
            )}
        </div>

    );

}

export default CartPage;
