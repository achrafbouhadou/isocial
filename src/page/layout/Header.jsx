import React from 'react'
import Logo from '../../Component/Logo'
import InputSearch from '../../Component/InputSeach/InputSearch'
import { Avatar } from '@chakra-ui/react'


export default function Header() {
  return (
    <>
        <div className='flex items-center primary-background py-4'>
            <div className='w-1/4 flex items-center justify-center'>
            <Logo width={50} height={33} color={"#1ABC9C"}  />
            </div>
            <div className='w-1/2 flex items-center justify-center'>
            <InputSearch  textButton={'search'} />
            </div>
            <div className=' flex items-center justify-center  w-1/2'>
                <svg className="mr-9 ml-9" xmlns="http://www.w3.org/2000/svg" width="17" height="19" viewBox="0 0 17 19" fill="none">
                    <path d="M16.8046 4.61278C16.6435 3.44215 16.2591 2.42589 15.4718 1.60773C14.8295 0.938797 14.0998 0.491126 13.2296 0.344475C11.9382 0.125785 10.6399 0.0151539 9.33694 0.00486263C8.24348 -0.00285583 7.15003 -0.0131471 6.05658 0.0769016C5.43504 0.125785 4.81349 0.18496 4.19425 0.275009C3.77759 0.334184 3.36093 0.395931 2.96498 0.56831C2.31582 0.851321 1.76334 1.2887 1.28682 1.85987C0.854044 2.38215 0.522555 2.96618 0.361415 3.6557C0.197973 4.36837 0.112798 5.09905 0.0506441 5.82973C0.0253221 6.11789 0.0506441 6.40861 0 6.6942V6.84085C0.018416 6.85886 0.018416 6.88201 0.018416 6.90517V7.14701C0.018416 7.17017 0.018416 7.19332 0 7.21133V7.36056C0.0368321 7.4326 0.00920802 7.50721 0.018416 7.58182V7.59468C0.01151 7.66415 0.0345301 7.73619 0 7.80566V8.47202C0.0276241 8.54663 0.0276241 8.62124 0 8.69585V8.80648C0.0276241 8.83736 0.013812 8.87595 0.018416 8.9094V8.92741C0.018416 8.95056 0.018416 8.97372 0 8.99173V9.21299C0.0506441 9.6478 0.0322281 10.0852 0.0874762 10.52C0.165744 11.1375 0.225597 11.7601 0.382133 12.3595C0.584709 13.1288 0.982957 13.7669 1.50091 14.32C2.10173 14.9581 2.79003 15.4032 3.60955 15.5653C4.27252 15.6991 4.94471 15.7711 5.61689 15.8226C5.81487 15.838 5.9622 15.9023 6.0796 16.1081C6.53079 16.9006 7.0027 17.6776 7.51835 18.4211C7.71863 18.7067 7.95113 18.9485 8.29183 19H8.65784C8.85812 18.9717 9.04458 18.9125 9.19421 18.7504C9.30471 18.6295 9.4129 18.506 9.50728 18.3671C10.0183 17.621 10.4833 16.8388 10.9437 16.0541C11.0174 15.9306 11.1026 15.8612 11.2361 15.8483C11.54 15.8174 11.8415 15.7917 12.1431 15.7531C12.6541 15.6862 13.1698 15.645 13.667 15.4984C14.4336 15.2694 15.0735 14.8037 15.6237 14.1657C16.1946 13.507 16.5698 12.7429 16.7172 11.8398C16.8875 10.8133 16.9934 9.77644 16.998 8.73187C17.0072 7.35541 16.9911 5.98153 16.8046 4.61278ZM9.8664 8.85022C9.56023 9.07663 9.38988 9.36478 9.40139 9.80216C9.41751 10.3476 9.07451 10.7721 8.62792 10.8416C8.17442 10.9136 7.74855 10.61 7.61504 10.1238C7.56669 9.94882 7.569 9.76872 7.5736 9.52173C7.52526 8.56721 8.01098 7.89828 8.74302 7.39143C9.01926 7.20104 9.30471 7.02352 9.54872 6.7791C9.71216 6.61444 9.85028 6.43434 9.88481 6.18221C9.95387 5.68051 9.73979 5.31259 9.2932 5.18138C8.96171 5.08361 8.62562 5.0939 8.29873 5.22512C7.9143 5.37949 7.691 5.70623 7.55749 6.13332C7.3457 6.81512 6.70114 7.10328 6.15326 6.77138C5.73199 6.51667 5.53632 5.97895 5.69746 5.45924C6.0865 4.18055 6.90141 3.44215 8.06853 3.17458C8.89725 2.98676 9.70526 3.06909 10.4672 3.51419C11.6067 4.18055 12.127 5.58274 11.708 6.85886C11.4962 7.50721 11.0634 7.94973 10.5708 8.33051C10.3383 8.51061 10.1012 8.67784 9.8664 8.85022ZM8.0294 13.9624C7.77618 13.9213 7.60122 13.7386 7.55288 13.453C7.51835 13.2652 7.52295 13.0722 7.51375 12.8818C7.52756 12.6914 7.51835 12.4985 7.55979 12.3107C7.61273 12.0688 7.78538 11.8862 8.00408 11.8501C8.32175 11.7987 8.64173 11.7961 8.96171 11.8476C9.20572 11.8862 9.38758 12.074 9.42671 12.3467C9.48426 12.7249 9.48657 13.1082 9.42441 13.4864C9.38067 13.7412 9.19651 13.9238 8.97092 13.9573C8.65784 14.0087 8.34477 14.0113 8.0294 13.9624Z" fill="white" fill-opacity="0.5"/>
                    <path d="M16.998 8.73187C16.9934 9.77644 16.8875 10.8133 16.7172 11.8398C16.5698 12.7429 16.1946 13.507 15.6237 14.1657C15.0735 14.8037 14.4336 15.2694 13.667 15.4984C13.1698 15.645 12.6541 15.6862 12.1431 15.7531C11.8415 15.7917 11.54 15.8174 11.2361 15.8483C11.1026 15.8612 11.0174 15.9306 10.9437 16.0541C10.4833 16.8388 10.0183 17.621 9.50728 18.3671C9.4129 18.506 9.30471 18.6295 9.19421 18.7504C9.04458 18.9125 8.85812 18.9717 8.65784 19C9.04458 18.8816 9.30471 18.5883 9.53491 18.241C10.0298 17.4975 10.4971 16.7359 10.9437 15.9564C11.0013 15.8534 11.0657 15.8097 11.1762 15.7968C11.9681 15.7197 12.7623 15.6605 13.5427 15.4778C15.0229 15.1305 16.3742 13.5636 16.655 11.9145C16.9865 9.97712 17.0556 8.02949 16.9105 6.069C16.8484 5.24055 16.7954 4.39667 16.5537 3.60938C16.0012 1.82385 14.8825 0.702097 13.2066 0.40365C11.1394 0.0331637 9.05149 -0.0543123 6.95896 0.0640375C5.83328 0.128358 4.7099 0.218407 3.59804 0.426805C2.0603 0.717534 0.614636 2.31011 0.331489 4.01589C0.191066 4.85463 0.0943822 5.69852 0.0368321 6.54755C0.0345301 6.59643 0.0644562 6.66332 0 6.6942C0.0506441 6.40861 0.0253221 6.11789 0.0506441 5.82973C0.112798 5.09905 0.197973 4.36837 0.361415 3.6557C0.522555 2.96618 0.854044 2.38215 1.28682 1.85987C1.76334 1.2887 2.31582 0.851321 2.96498 0.56831C3.36093 0.395931 3.77759 0.334184 4.19425 0.275009C4.81349 0.18496 5.43504 0.125785 6.05658 0.0769016C7.15003 -0.0131471 8.24348 -0.00285583 9.33694 0.00486263C10.6399 0.0151539 11.9382 0.125785 13.2296 0.344475C14.0998 0.491126 14.8295 0.938797 15.4718 1.60773C16.2591 2.42589 16.6435 3.44215 16.8046 4.61278C16.9911 5.98153 17.0072 7.35541 16.998 8.73187Z" fill="white" fill-opacity="0.5"/>
                    <path d="M8.29183 19C7.95113 18.9485 7.71863 18.7067 7.51835 18.4211C7.0027 17.6776 6.53079 16.9006 6.0796 16.1081C5.9622 15.9023 5.81487 15.838 5.61689 15.8226C4.94471 15.7711 4.27252 15.6991 3.60955 15.5653C2.79003 15.4032 2.10173 14.9581 1.50091 14.32C0.982957 13.7669 0.584709 13.1288 0.382133 12.3595C0.225597 11.7601 0.165744 11.1375 0.0874762 10.52C0.0322281 10.0852 0.0506441 9.6478 0 9.21299C0.0713622 9.38537 0.0506441 9.57055 0.0644562 9.74808C0.124308 10.5611 0.204879 11.3741 0.382133 12.164C0.65377 13.3758 1.33977 14.2531 2.25827 14.9246C2.8706 15.3723 3.5589 15.5472 4.27482 15.627C4.79047 15.6836 5.30612 15.7453 5.82407 15.7968C5.92306 15.8071 5.98061 15.8482 6.03356 15.9383C6.4318 16.6432 6.85077 17.3302 7.29045 18.0043C7.55979 18.4185 7.82912 18.8302 8.29183 19Z" fill="white" fill-opacity="0.5"/>
                    <path d="M0 7.36056C0.0644562 7.42488 0.0207181 7.50715 0.0299261 7.58176C0.0207181 7.59977 0.00920802 7.59977 0 7.58176V7.36056Z" fill="white" fill-opacity="0.5"/>
                    <path d="M0 7.58176C0 7.58176 0.0207181 7.58176 0.0299261 7.58176C0.0230201 7.65637 0.0575501 7.73876 0 7.80566V7.58176Z" fill="white" fill-opacity="0.5"/>
                    <path d="M0 8.47202C0.0483421 8.54663 0.0552481 8.62118 0 8.69322V8.47202Z" fill="white" fill-opacity="0.5"/>
                    <path d="M0.0276241 6.9154V7.02603C0.018416 7.04404 0.00920802 7.04404 0 7.02603V6.9154C0.00920802 6.89997 0.018416 6.89997 0.0276241 6.9154Z" fill="white" fill-opacity="0.5"/>
                    <path d="M0 7.02603C0 7.02603 0.018416 7.02603 0.0276241 7.02603C0.0276241 7.06205 0.0276241 7.10065 0.0276241 7.13667C0.018416 7.15468 0.00920802 7.15468 0 7.13667V7.02603Z" fill="white" fill-opacity="0.5"/>
                    <path d="M0 8.80648C0.0483421 8.83221 0.0299261 8.87846 0.0276241 8.91963C0.018416 8.93507 0.00920802 8.93507 0 8.91963V8.80648Z" fill="white" fill-opacity="0.5"/>
                    <path d="M0.0276241 6.9154C0.0276241 6.9154 0.00920802 6.9154 0 6.9154V6.84085C0.0437381 6.84857 0.0322281 6.88196 0.0276241 6.91283V6.9154Z" fill="white" fill-opacity="0.5"/>
                    <path d="M0 7.13667C0 7.13667 0.018416 7.13667 0.0276241 7.13667C0.0345301 7.17011 0.0368321 7.19847 0 7.21133V7.13667Z" fill="white" fill-opacity="0.5"/>
                    <path d="M0 8.91706C0 8.91706 0.018416 8.91706 0.0276241 8.91706C0.0322281 8.94793 0.0414361 8.98138 0 8.9891V8.91449V8.91706Z" fill="white" fill-opacity="0.5"/>
                </svg>
                <svg className="mr-9" xmlns="http://www.w3.org/2000/svg" width="23" height="19" viewBox="0 0 23 19" fill="none">
                    <path d="M20.22 10.5838C20.22 10.5838 20.22 10.5698 20.22 10.562C20.22 7.61154 18.5289 5.02602 15.9914 3.57576C15.5657 1.53915 13.6185 0 11.2778 0C8.93709 0 6.99159 1.53915 6.56585 3.57576C4.0267 5.02602 2.33732 7.61154 2.33732 10.562C2.33732 10.6399 2.34071 10.7179 2.3441 10.7959C0.939675 11.5662 0 12.976 0 14.5868C0 17.0242 2.14904 19 4.80015 19C5.89248 19 6.9 18.6632 7.70568 18.0987C8.7997 18.5384 10.0074 18.7832 11.2778 18.7832C12.6585 18.7832 13.9662 18.4947 15.1332 17.9817C15.9643 18.6179 17.0346 19 18.1999 19C20.851 19 23 17.0242 23 14.5868C23 12.8138 21.8602 11.284 20.22 10.5838ZM9.44425 15.7049C9.54602 15.3478 9.60029 14.9736 9.60029 14.5868C9.60029 12.3381 7.77013 10.484 5.40398 10.2095C5.50066 8.83413 6.15708 7.59751 7.16799 6.68992C8.00929 7.96865 9.53414 8.82477 11.2795 8.82477C13.0249 8.82477 14.5497 7.97021 15.391 6.68992C16.4189 7.61154 17.0821 8.87467 17.1601 10.2797C15.0111 10.7179 13.4014 12.4785 13.4014 14.5868C13.4014 14.9237 13.4438 15.2512 13.5218 15.5662C12.8298 15.8297 12.0733 15.9747 11.2795 15.9747C10.6383 15.9747 10.0226 15.8796 9.44425 15.7049Z" fill="white" fill-opacity="0.5"/>
                </svg>
                <svg className="mr-9" xmlns="http://www.w3.org/2000/svg" width="14" height="19" viewBox="0 0 14 19" fill="none">
                    <path d="M13.9998 9.50849C13.9998 12.424 13.9998 15.3396 13.9998 18.2551C13.9998 18.4305 13.9808 18.5964 13.8729 18.7416C13.6455 19.0471 13.2515 19.0867 12.9256 18.8284C12.1527 18.2174 11.3836 17.6026 10.6125 16.9878C9.45879 16.0694 8.30506 15.1529 7.15702 14.2288C7.03388 14.1307 6.96379 14.1326 6.84444 14.2288C4.97462 15.7224 3.10289 17.2122 1.23118 18.7039C1.14782 18.7699 1.06826 18.8397 0.979223 18.8963C0.562444 19.1584 0.0319952 18.8868 0.00168396 18.3965C-0.00210495 18.3305 0.00168396 18.2645 0.00168396 18.1985C0.00168396 12.3938 0.00168396 6.58918 0.00168396 0.784516C-0.000210495 0.218759 0.22143 0 0.793554 0C4.93672 0 9.078 0 13.2193 0C13.7706 0 13.9979 0.228189 13.9979 0.78263C13.9979 3.69062 13.9979 6.6005 13.9979 9.50849H13.9998Z" fill="white" fill-opacity="0.5"/>
                </svg>
                <svg className="mr-9" xmlns="http://www.w3.org/2000/svg" width="21" height="19" viewBox="0 0 21 19" fill="none">
                    <path d="M20.9998 8.12313V8.29013C20.9738 8.31433 20.9785 8.34338 20.9785 8.37484C20.9785 8.40388 20.9738 8.43535 20.9998 8.45955V9.12997C20.9597 9.17837 20.9856 9.23404 20.9785 9.28486C20.9785 9.31149 20.9785 9.33811 20.9785 9.36473C20.9809 9.39862 20.9691 9.43492 20.9998 9.46396V9.63096C20.9502 10.0303 20.9171 10.4321 20.8227 10.8266C20.5133 12.09 19.9513 13.2202 19.1272 14.2077C17.6537 15.9793 15.7362 16.9499 13.5543 17.446C12.2933 17.734 11.0134 17.7873 9.7312 17.734C8.92832 17.7002 8.13017 17.5719 7.34619 17.3758C7.14311 17.325 6.99906 17.3589 6.84557 17.5017C6.27175 18.0414 5.61764 18.4529 4.87616 18.707C4.38263 18.8764 3.87965 18.9998 3.35542 18.9998C2.87842 18.9998 2.40142 18.9998 1.92205 18.9998C1.85357 18.9998 1.78509 19.0023 1.71897 18.9877C1.62924 18.966 1.61035 18.9151 1.65994 18.8353C1.693 18.782 1.73786 18.7385 1.78037 18.6949C2.04957 18.4166 2.31877 18.1406 2.59033 17.8647C3.07441 17.3758 3.39084 16.7926 3.54669 16.1149C3.62462 15.7809 3.62462 15.7712 3.35306 15.5776C2.45337 14.9314 1.69536 14.1496 1.10501 13.1984C0.533548 12.2763 0.151002 11.2792 0.0447387 10.1876C-0.146535 8.21994 0.273794 6.39748 1.33879 4.73959C2.22195 3.36487 3.36959 2.28543 4.7699 1.47948C6.15368 0.680786 7.64136 0.223354 9.21169 0.0660358C10.2035 -0.0331954 11.1976 -0.0162535 12.1918 0.0878183C13.3678 0.213673 14.5059 0.477483 15.5969 0.942175C17.453 1.73361 18.9501 2.96552 19.975 4.75653C20.4708 5.62057 20.7967 6.55237 20.9431 7.54469C20.9715 7.73589 20.9549 7.93193 20.9998 8.12313Z" fill="white" fill-opacity="0.5"/>
                    <path d="M20.9622 9.29921C20.9622 9.23871 20.9384 9.17595 20.9998 9.12997L21 9.29679C20.9882 9.31373 20.9764 9.31615 20.9622 9.29679V9.29921Z" fill="#353535"/>
                    <path d="M20.9646 8.37225C20.9599 8.33836 20.9528 8.30206 21 8.29238V8.37709C20.9858 8.39645 20.9764 8.39403 20.9646 8.37467V8.37225Z" fill="#757575"/>
                    <path d="M20.9646 8.37225C20.9646 8.37225 20.9882 8.37225 21 8.37467L20.9998 8.45955C20.962 8.44261 20.9575 8.40855 20.9646 8.37225Z" fill="#4F4F4F"/>
                    <path d="M20.9622 9.29921C20.974 9.29921 20.9858 9.29921 21 9.29921V9.38392C20.9882 9.40086 20.9764 9.40329 20.9646 9.38634C20.9646 9.3573 20.9646 9.33068 20.9646 9.30163L20.9622 9.29921Z" fill="#535353"/>
                    <path d="M20.9622 9.38392C20.974 9.38392 20.9858 9.3815 20.9976 9.3815V9.46621C20.948 9.45653 20.9575 9.42023 20.9622 9.38392Z" fill="#838383"/>
                </svg>
            </div>

            <div className='w-1/4'>
            <Avatar size="sm" name='Achraf bouhadou' src='https://bit.ly/tioluwani-kolawole' />
            
            </div>

        </div>
    </>
  )
}