import { useState} from "react";


function FoodPage() {
    const [foodlists, setFoodlists] = useState([
        {id:1, name: "ไข่ปลาอลาสกา ราดน้ำเกรวี่เห็ดแชมปิยอง", price: 49950, image: "src/pages/page photo/Gemini_Generated_Image_86idrj86idrj86id.jpeg"},
        {id:2, name: "ข้าวกระเพราเนื้อออสเตรเลียสับ กับไข่เยี่ยวม้าซัวเถา", price: 350, image: "src/pages/page photo/Gemini_Generated_Image_ft2ipjft2ipjft2i.jpeg"},
        {id:3, name: "มาม่ากุ้งแห้ง พร้อมเครื่องปรุงที่เหลือครึ่งซอง", price: 6, image: "src/pages/page photo/Gemini_Generated_Image_p1oh6yp1oh6yp1oh.jpeg"}
    ]);
    return (
    <>
        <div className="flex justify-between">
            <h1 className="text-red-400 text-4xl md:text-6xl font-bold border-b-4 border-red-600 pb-3 w-full">
            Shopping to you
            </h1>

            <button className="text-4xl md:text-6xl">
                🛒
            </button>
        </div>
            
        <p className="text-black-400">
            All you need are here.
        </p>

        <h1 className="text-black-400 text-3xl md:text-5xl font-bold border-4 border-red-600 pb-2 pt-1 py-50 bg-red-400 mt-15 my-1">
            Categories: Food
        </h1>
        

      <div className="flex flex-row">
        <button
          type="submit"
          className="bg-red-600 hover:bg-red-700 text-black font-medium py-1 shadow-sm transition p-16 flex-1 border-black-400"
        >
          Home page
        </button>

        <button
          type="submit"
          className="bg-red-600 hover:bg-red-700 text-black font-medium py-1 shadow-sm transition p-16 flex-1 border-black-400"
        >
          Food
        </button>

        <button
          type="submit"
          className="bg-red-600 hover:bg-red-700 text-black font-medium py-1 shadow-sm transition p-16 flex-1 border-black-400"
        >
          House
        </button>

        <button
          type="submit"
          className="bg-red-600 hover:bg-red-700 text-black font-medium py-1 shadow-sm transition p-16 flex-1 border-black-400"
        >
          Medicine
        </button>

        <button
          type="submit"
          className="bg-red-600 hover:bg-red-700 text-black font-medium py-1 shadow-sm transition p-16 flex-1 border-black-400"
        >
          Cloth
        </button>


      </div>

      <ul className="bg-[#efd47c] p-[30px] rounded-xl shadow-md flex flex-col gap-2 w-full md:w-2/3">
        
        {foodlists.map((item) => (
            <li className="bg-white p-2.5 px-3 rounded-lg shadow-sm flex justify-between items-center text-sm font-medium text-gray-700 list-none" key={item.id}><img className="w-1/2" src={item.image}/> {item.name}
                <button
                    className="bg-red-500 hover:bg-red-600 active:scale-95 text-white text-xs px-2 py-1 rounded-md shadow-sm transition whitespace-nowrap"
                    >
                        {item.price} บาท
                </button>

                <button
                    className="bg-red-500 hover:bg-red-600 active:scale-95 text-white text-xs px-2 py-1 rounded-md shadow-sm transition whitespace-nowrap"
                    >
                        Add to cart
                </button>
            </li>

        ))}
                
      </ul>

    </>
  );
}

export default FoodPage;