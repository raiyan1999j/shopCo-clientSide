import Visa from '../../../../public/visa.png';
import BadgeCard from '../../../../public/badgeCard.png';
import PayPal from '../../../../public/paypal.png';
import ApplePay from '../../../../public/applePay.png';
import googlePay from '../../../../public/googlePay.png'
import { FaFacebookF, FaTwitter } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { GrGithub } from 'react-icons/gr';

export default function SecondPart(){
    return(
        <>
            <section className="w-full bg-[#F0F0F0]">
                <div className="w-[1240px] mx-auto flex flex-row justify-between pt-[140px] pb-[50px]">
                    <div className='w-[248px]'>
                        <h2 className='text-black font-googleFont font-bold text-[33px] leading-normal capitalize'>
                            shop.co
                        </h2>
                        <p className='text-[#00000099] text-sm font-fontShare font-normal leading-[22px] mt-[25px] mb-[35px]'>
                        We have clothes that suits your style and which you’re proud to wear. From women to men.
                        </p>
                        <div>
                            <ul className='flex flex-row justify-between w-[148px]'>
                                <li className='h-7 w-7 rounded-full border border-[#00000099] flex justify-center items-center hover:cursor-pointer transition-all duration-300 ease-in hover:bg-black hover:text-white'>
                                <FaTwitter/>
                                </li>
                                <li className='h-7 w-7 rounded-full border border-[#00000099] flex justify-center items-center hover:cursor-pointer hover:bg-black hover:text-white transition-all duration-300 ease-in'>
                                <FaFacebookF />
                                </li>
                                <li className='h-7 w-7 rounded-full border border-[#00000099] flex justify-center items-center hover:cursor-pointer hover:bg-black hover:text-white transition-all duration-300 ease-in'>
                                <AiFillInstagram />
                                </li>
                                <li className='h-7 w-7 rounded-full border border-[#00000099] flex justify-center items-center hover:cursor-pointer hover:bg-black hover:text-white transition-all duration-300 ease-in'>
                                <GrGithub />
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='w-[104px]'>
                        <h2 className='text-black text-base font-fontShare uppercase font-medium leading-[18px] tracking-[3px]'>
                            company
                        </h2>
                        <ul className='mt-[26px]'>
                            <li className='text-[#00000099] text-base font-normal font-fontShare leading-[19px] capitalize mb-[27px]'>About</li>
                            <li className='text-[#00000099] text-base font-normal font-fontShare leading-[19px] capitalize mb-[27px]'>features</li>
                            <li className='text-[#00000099] text-base font-normal font-fontShare leading-[19px] capitalize mb-[27px]'>work</li>
                            <li className='text-[#00000099] text-base font-normal font-fontShare leading-[19px] capitalize'>career</li>
                        </ul>
                    </div>
                    <div className='w-[140px]'>
                        <h2 className='text-black text-base font-fontShare uppercase font-medium leading-[18px] tracking-[3px]'>help</h2>
                        <ul className='mt-[26px]'>
                            <li className='text-[#00000099] text-base font-normal font-fontShare leading-[19px] capitalize mb-[27px]'>customer supports</li>
                            <li className='text-[#00000099] text-base font-normal font-fontShare leading-[19px] capitalize mb-[27px]'>delivery supports</li>
                            <li className='text-[#00000099] text-base font-normal font-fontShare leading-[19px] capitalize mb-[27px]'>terms & condition</li>
                            <li className='text-[#00000099] text-base font-normal font-fontShare leading-[19px] capitalize'>privacy policy</li>
                        </ul>
                    </div>
                    <div className='w-[149px]'>
                        <h2 className='text-black text-base font-fontShare uppercase font-medium leading-[18px] tracking-[3px]'>faq</h2>
                        <ul className='mt-[26px]'>
                            <li className='text-[#00000099] text-base font-normal font-fontShare leading-[19px] capitalize mb-[27px]'>account</li>
                            <li className='text-[#00000099] text-base font-normal font-fontShare leading-[19px] capitalize mb-[27px]'>manage deliveries</li>
                            <li className='text-[#00000099] text-base font-normal font-fontShare leading-[19px] capitalize mb-[27px]'>orders</li>
                            <li className='text-[#00000099] text-base font-normal font-fontShare leading-[19px] capitalize'>payments</li>
                        </ul>
                    </div>
                    <div className='w-[149px]'>
                        <h2 className='text-black text-base font-fontShare uppercase font-medium leading-[18px] tracking-[3px]'>resources</h2>
                        <ul className='mt-[26px]'>
                            <li className='text-[#00000099] text-base font-normal font-fontShare leading-[19px] capitalize mb-[27px]'>Fee eBooks</li>
                            <li className='text-[#00000099] text-base font-normal font-fontShare leading-[19px] capitalize mb-[27px]'>Development tutorial</li>
                            <li className='text-[#00000099] text-base font-normal font-fontShare leading-[19px] capitalize mb-[27px]'>how to - blog</li>
                            <li className='text-[#00000099] text-base font-normal font-fontShare leading-[19px] capitalize'>youtube playlist</li>
                        </ul>
                    </div>
                </div>

                <div className="w-[1240px] mx-auto border border-t-[#0000001a] border-b-0 border-r-0 border-l-0 flex flex-row justify-between pt-5 pb-[82px]">
                    <div>
                        <h4 className='text-[#00000099] font-fontShare text-[14px] font-normal leading-normal'>
                        Shop.co © 2000-2023, All Rights Reserved
                        </h4>
                    </div>
                    <div className='flex flex-row'>
                        <span className='h-[30.03px] w-[46.61px] mr-3'>
                            <img src={Visa} alt="visaCard" className='h-full w-full object-cover' />
                        </span>
                        <span className='h-[30.03px] w-[46.61px] mr-3'>
                            <img src={BadgeCard} alt="masterCard" className='h-full w-full object-cover' />
                        </span>
                        <span className='h-[30.03px] w-[46.61px] mr-3'>
                            <img src={PayPal} alt="paypal" className='h-full w-full object-cover' />
                        </span>
                        <span className='h-[30.03px] w-[46.61px] mr-3'>
                            <img src={ApplePay} alt="applePay" className='h-full w-full object-cover' />
                        </span>
                        <span className='h-[30.03px] w-[46.61px]'>
                            <img src={googlePay} alt="googlePay" className='h-full w-full object-cover' />
                        </span>
                    </div>
                </div>
            </section>
        </>
    )
}