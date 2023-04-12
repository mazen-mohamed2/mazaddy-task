import { useState } from "react";
import EmojiFlagsIcon from '@mui/icons-material/EmojiFlags';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import img1 from '../image/ComponentTMP_0-image.jpg'
import img2 from '../image/ComponentTMP_0-image2.jpg'
import img3 from '../image/ComponentTMP_0-image3.png'
import img4 from '../image/ComponentTMP_0-image4.jpg'
import Image from "next/image";
const data = [
  {
    id: 1,
    mainImage: img1.src,
    thumbnail: img1.src,
  },
  {
    id: 2,
    mainImage: img2.src,
    thumbnail: img2.src,
  },
  {
    id: 3,
    mainImage: img3.src,
    thumbnail: img3.src,
  },
  {
    id: 4,
    mainImage: img4.src,
    thumbnail: img4.src,
  },


];
export default function Swipper() {
  const[products]= useState(data)
  const [value, setValue] = useState(0)
  const {mainImage}= products[value]
  

  return (
    <>
    <div  className="flex flex-col-reverse md:flex-row items-center" >

      <div className="flex flex-row md:flex-col mx-4 " >
      <p className="text-center ">

      </p>
      <ul className="flex flex-row md:flex-col" >
    {data.map((item,idx)=>(
<li key={item.id} onClick={()=>setValue(idx)} 
className={`${idx === value && " opacity-80"}  cursor-pointer`}>

      <Image width={500}   height={500} src={item.thumbnail} alt="hh" className="w-[6rem] h-[100px] rounded my-2"  />
</li>
      
    ))}
      </ul>
    <p className="text-center">

    
    </p>
      </div>

      <div className=" coverImge w-[600px] h-[500px] " style={{background:`url(${mainImage})`}}>
      <div className="flex justify-between mt-6 mx-7">
        <div className="flex">
          <div className="bg-[#bbbbbb57] h-7 flex items-center p-2 text-white"></div>
          <div className="bg-[#bbbbbb57] h-7 flex items-center p-2 text-white">02:00</div>
          <div className="bg-[#bbbbbb57] h-7 flex items-center p-2 text-white rounded-l-md"> <RemoveRedEyeIcon/> 3000</div>
        </div>
        <div className="flex">
          <div className="rounded-full bg-[#bbbbbb57] text-white p-2 text-center mx-1 cursor-pointer"><EmojiFlagsIcon/></div>
          <div className="rounded-full bg-[#bbbbbb57] text-white p-2 text-center mx-1 cursor-pointer"><FavoriteBorderIcon/></div>
          <div className="rounded-full bg-[#bbbbbb57] text-white p-2 text-center mx-1 cursor-pointer"><ShareIcon/></div>
        </div>
      </div>
      </div>
      
    </div>
    </>
  );
}
