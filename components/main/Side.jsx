import { Avatar, Box, Stack, Typography } from '@mui/material'
import React from 'react'
import avatar from "../image/ComponentTMP_0-image7.jpg"
import avimag from "../image/ComponentTMP_0-image5.jpg"
import avimag6 from "../image/ComponentTMP_0-image6.jpg"
import car from "../image/ComponentTMP_0-image11.jpg"
import Image from 'next/image'
const Side = () => {

    const users=[
        {name:"اسم المزايد",img:avimag.src,price:'13:59:00'},
        {name:"اسم المزايد",img:avimag6.src,price:'13:59:00'},
        {name:"اسم المزايد",img:avatar.src,price:'13:59:00'},
        {name:"اسم المزايد",img:avimag.src,price:'13:59:00'},
        {name:"اسم المزايد",img:avimag6.src,price:'13:59:00'},
    ]

    const value=[
        {name:" القيمة الابتدائيه ", val:5000},
        {name:" القيمة التقريبية ", val:5000},
        {name:" العربون ", val:5000},
        {name:" سعر الشراء الفورى  ", val:5000},
        {name:" قيمة زيادة المزاد ", val:5000},
    ]
    const content=[
        {cont:"سيارة سريعة بى ام دابليو تصنيع 2021 حالته جديدة سيارة سريعة بى ام دابليو تصنيع 2021 حالته جديدة",price:500},
        {cont:"سيارة سريعة بى ام دابليو تصنيع 2021 حالته جديدة سيارة سريعة بى ام دابليو تصنيع 2021 حالته جديدة",price:500},
        {cont:"سيارة سريعة بى ام دابليو تصنيع 2021 حالته جديدة سيارة سريعة بى ام دابليو تصنيع 2021 حالته جديدة",price:500},
    ]
  return (
    <Stack width="350px" mt={5}  >
      <Box sx={{boxShadow:"3px 5px 37px #00000017"}} p={3}>
        <Box borderRadius="5px" justifyContent="space-between" alignItems="center" width="300px" display="flex" backgroundColor="#414141"   height="30px" p={1}>
            <Typography  left="99px" textAlign="right" color="#fff">22-1-2022</Typography>
            <Typography variant='subtitle2' color="#fff" fontSize="13px">      تاريخ البث  </Typography>
        </Box>

        <Box display="flex" width="100%" mt={1}  >
            <Box backgroundColor="#eae7ed" borderRadius="5px" p={2} width="100%" height="86px">
            <Typography color="#44215D" variant="subtitle2" fontSize="12px" textAlign="center">   القيمة الحالية بعد الضريبة</Typography>
            <Typography color="#44215D" textAlign="center" variant="h5" fontWeight="bold"><span>$</span>5050</Typography>
            </Box>
            <Box backgroundColor="#44215D" borderRadius="5px" p={2} width="100%" height="86px" ml={1}>
            <Box>
            <Typography color="#fff" variant="subtitle2" fontSize="12px" textAlign="center">   القيمة الحالية للمزاد</Typography>
            <Typography color="#fff" textAlign="center" variant="h5" fontWeight="bold"><span>$</span>5050</Typography>
            </Box>
            <Box mt={1} mx={1} display="flex" borderRadius="80px" justifyContent="flex-end" alignItems="center" backgroundColor="#eae7ed" width='100px'>
                <Typography mr={1}>
أحمد الرائد
                </Typography>
                <Avatar
                alt="Remy Sharp"
                src={avimag.src}
                sx={{ width: 18, height: 18 }}
      />
            </Box>
            </Box>
        </Box>
      </Box>
      {/* -------------------- */}
      <Box mt={5} sx={{boxShadow:"3px 5px 37px #00000017"}} p={3}>

      <div dir='rtl' >
       <Typography variant="h5">   المتنافسون    </Typography>
        <Box>
        {users.map((user,idx) =>(

            <div key={idx} className='flex flex-row justify-between my-4'>
                <div className='flex'>
                <Avatar alt="Remy Sharp" src={user.img} />
                <div className="mx-3">
                    <p className='text-base text-[#414141]' >{user.name}</p>
                    <p className='text-xs text-[#808080]'>{user.price}</p>
                </div>
                </div>
                <div className="text-[#FDBC01] text-lg font-bold p-1 bg-[#fbecc3]">20+</div>
            </div>
        ))}
        </Box>
      </div>
      </Box>

      {/* ----------------------- */}
      <Box mt={5} sx={{boxShadow:"3px 5px 37px #00000017"}} p={3}>
        <div dir='rtl'>
        {value.map(({name,val},idx)=>(

            <div key={idx} className='flex justify-between items-center my-3 rounded-sm px-3 py-2 bg-[#f2efef]'>
                <Typography color="#707070" variant='subtitle2'>{name}</Typography>
                <Typography fontWeight="bold" color="#707070" variant='h5'>{val}</Typography>
            </div>
        ))}
        </div>
      </Box>
      {/* ---------------------------- */}
      <Box mt={5} sx={{boxShadow:"3px 5px 37px #00000017"}} p={3}>
      <div dir='rtl'>

        <Typography variant='h5'>   المزادات المفضلة   </Typography>
       <Box >
       {content.map((e,idx)=>(

       <div key={idx} className="flex my-4 ">
       <Image
        src={car}
        alt={e.cont.slice(0,20)}
        className='w-[119px] h-[119px] rounded-md' width={500}   height={500}
      />
        {/* <img src={image} alt={e.cont} className='w-[119px] h-[119px] rounded-md'/> */}
       <div className='mx-4 items-center'>
       <Typography variant="subtitle2">{e.cont}</Typography>
        <div className='flex items-center justify-between'>
            <Typography color='#707070'>اعلى سعر</Typography>
            <Typography fontWeight="bold" variant="h6" color="#610060">{e.price} $</Typography>
        </div>
       </div>
       </div>
       ))}
       </Box>
      
      </div>
      </Box>
    </Stack>
  )
}

export default Side
