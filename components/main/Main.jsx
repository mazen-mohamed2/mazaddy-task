import { Avatar, Box, Rating, Typography } from '@mui/material'
import React from 'react'
import SendIcon from '@mui/icons-material/Send';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import WidgetsIcon from '@mui/icons-material/Widgets';
import Swipper from './Swipper';
import avatarr from "../image/ComponentTMP_0-image6.jpg"

const Main = () => {
  return (
    <div dir='rtl'>
    <Box  mt={5} sx={{boxShadow:"3px 5px 37px #00000017"}} p={3}>

    <Swipper/>
    <div className='mr-24 mt-5'>
    <div className='flex items-center '>
    <Avatar
        alt="Remy Sharp"
        src={avatarr.src}    
      />
      <div className='mr-3'>
        <Typography color="#44215D" variant="h6">اسم البائع</Typography>
        <Typography color="#44215D" variant='subtitle2'>   +966598398  </Typography>
      </div>
      <div className="mr-5">
      <Rating  name="half-rating-read" defaultValue={4} precision={0.5} readOnly />
      </div>
    </div>

    {/* ------------------------------ */}
    <Typography color="#414141" variant="h5"  fontWeight="bold">  شراء مجموعة من السيارات من موديلات1990  </Typography>
    <Typography color="#808080">  code 1234    </Typography>

    <div className='flex justify-between'>
      <div className='flex mt-2'>
        <p className='text-[#D20653] bg-[#eecdeb] p-1 ' >+10000</p>
        <p className='text-[#D20653] bg-[#eecdeb] p-1 mx-2' >+10000</p>
        <p className='text-[#D20653] bg-[#eecdeb] p-1 mx-2' >+10000</p>
      
      </div>
      <div className='flex'>
        <input placeholder=' اكتب المنتج' className='border-2 border-[#CCCCCC]' />
        <button className='bg-gradient-to-r mr-2 from-[#D20653] to-[#9B0257] text-white px-3'>   تأكيد  </button>
      </div>
    </div>


    </div>
    </Box>

    {/* --------------------- */}
      <Box mt={5} sx={{boxShadow:"3px 5px 37px #00000017"}} p={3}>
        <Typography color="#414141" variant="h5"  fontWeight="bold">   ارسال رسالة الى البائع  </Typography>
        <Typography color="#414141" >يمكنك في وقت البث المباشر ارسال رسالة الى البائع للاستفسار</Typography>
        <div className='flex'>
            <input placeholder=" أكتب سؤالك " className='bg-[#F3F3F3] w-[90%] h-[38px] rounded-3xl px-2 border-2 border-[#E3E3E3]'/>
            <button className='bg-gradient-to-r mr-2 from-[#D20653] to-[#9B0257] rounded-full py-1 px-1 w-12 h-11 rotate-180 text-white text-center '><SendIcon/></button>
        </div>
      </Box>
      {/* ------------------------ */}
      <Box mt={5} sx={{boxShadow:"3px 5px 37px #00000017"}} p={3} width="100%" >
      <Typography color="#414141" variant="h5"  fontWeight="bold" >تفاصيل المزاد</Typography>
        <Box display="flex" justifyContent="space-between" width="100%">
           <Box>
            <div>
                <p><LocationOnIcon/> Egypt , Mansoura</p>
                <p className='text-[#808080]'> <MonetizationOnIcon/>    البيع لاعلى سعر</p>
                <p className='text-[#44215D]'><WidgetsIcon/>     منتجات متعددة </p>
            </div>
           </Box>
           <Box>
            <div className="text-center">
                <p> 200 قطعه  </p>
                <p className="text-[#FF951D]"><KeyboardVoiceIcon/>  صوت </p>
            </div>
           </Box>
          
        </Box>
        <br/>
        <hr color='#808080'/>
        <Box pt={5}>
            <Typography color="#414141" variant="h5"  fontWeight="bold"> وصف</Typography>
            <Typography variant='subtitle2' color="#707070">
            هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق. إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع. ومن هنا وجب على المصمم أن يضع نصوصا مؤقتة على التصميم ليظهر للعميل الشكل كاملاً،دور مولد النص العربى أن يوفر على المصمم عناء البحث عن نص بديل لا علاقة له بالموضوع الذى يتحدث عنه التصميم فيظهر بشكل لا يليق.
            </Typography>
        </Box>
        <Box pt={5}>
            <Typography color="#414141" variant="h5"  fontWeight="bold"> سياسة الاسترجاع والاستبدال  </Typography>
            <Typography variant='subtitle2' color="#707070">
            هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق. إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع. ومن هنا وجب على المصمم أن يضع نصوصا مؤقتة على التصميم ليظهر للعميل الشكل كاملاً،دور مولد النص العربى أن يوفر على المصمم عناء البحث عن نص بديل لا علاقة له بالموضوع الذى يتحدث عنه التصميم فيظهر بشكل لا يليق.
            </Typography>
        </Box>
      </Box>
    </div>
  )
}

export default Main
