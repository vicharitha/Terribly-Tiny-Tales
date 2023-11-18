import Image from 'next/image'
import { CiStar } from "react-icons/ci";
import { AiOutlineLike } from "react-icons/ai";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";



export default function Home() {
  return (
    <main className="">
      {/* https://www.terriblytinytales.com/img/home/ttt.svg */}
      <div className='p-4 bg-dark text-white flex flex-row justify-between'>
        <div className='flex'>
          <Image src="/ttt.png " width={60} height={10} className='p-[10px]' alt="" />
          <div className=' m-4 border-l-2 border-main px-2'>
            <h1 className='tracking-widest '>STORIES</h1>
          </div>
        </div>

        <div className='p-2'>
          <button className='bg-main px-2 py-1 text-black rounded'>Courses</button>
        </div>
      </div>
      <div>
        <div className='w-full flex flex-row justify-center bg-black'>
          <Image src="/back2.jpeg" alt="" width={130} height={100}  className='h-[30vh] md:h-[40vh] w-full md:w-full' />

        </div>
        <div className='p-4 pb-0 flex flex-row '>
          <Image src="/divya.png" alt="" width={100} height={100}  className='w-28 rounded-full relative -top-12' />
          <div className='px-4'>
            <h1 className='font-bold text-lg'>Katkuri Divyavani</h1>
            <div className='flex mt-2'>

              <div className=' text-gray'>
                <div>
                  <p className='border-2 min-w-[60px] px-2 py-1 text-center rounded-xl border-gray'>1M</p>
                  <span className='text-[12px] text-center '>followers</span>
                </div>
              </div>


              <div className=' text-gray'>
                <div>
                  <p className='border-2 min-w-[60px] mx-4 text-center px-2 py-1 rounded-xl border-gray'>1</p>
                  <span className='text-[12px] text-center px-5'>following</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* about  */}
      <div className='flex flex-row flex-wrap justify-start items-start mt-5'>
      <div className='px-6 pt-3 -top-6 text-gray relative'>
        <h1 className='font-bold text-base'>Co-Founder & CEO at MillionSmiles</h1>
        <a href="https://www.instagram.com/divyakatkuri/" target='__blank' className='text-blue-400 text-xs '>https://www.instagram.com/divyakatkuri/</a>
      </div>
      <div className='px-4 flex flex-row'>
        <div className='flex mx-1'>
          <div className='bg-[#66adc1] p-[6px] rounded-full'>
            <CiStar className='text-white' />
          </div>
          <p className='mx-2 pt-1'>1M</p>
        </div>
        <div className='flex'>
          <div className='bg-[#e7ac23] p-[6px] rounded-full'>
            <AiOutlineLike className='text-white' />
          </div>
          <p className='mx-2 pt-1'>1M</p>
        </div>
        <div className='flex mx-1'>
          <div className='bg-[#7e7e7e] p-[6px] rounded-full'>
            <MdOutlineRemoveRedEye className='text-white' />
          </div>
          <p className='mx-2 pt-1'>1M</p>
        </div>
        <div className='flex'>
          <div className='bg-[#b52855] p-[6px] rounded-full'>
            <FaRegHeart className='text-white' />
          </div>
          <p className='mx-2 pt-1'>1</p>
        </div>
      </div>
      </div>
      <div className=' mt-10'>
        <div className='border-b-[1px] border-grayp-1'>
        <div className='border-[1px] border-gray  border-b-0 pt-1 px-1 w-fit m-2'>
          <h1 className='text-blue-500 font-bold'>100 Posts</h1>
        </div>
        </div>


        {/* posts  */}

        <div className='flex flex-row flex-wrap'>

        <div>
        <div className='flex flex-col w-full p-4'>
          <div className='pt-10 flex flex-row justify-between  items-start'>
            <h1 className='font-bold text-xl'>Sem 3.1 The Begining...</h1>
            <div className='bg-[#e7ac23] p-[6px] rounded-full'>
              <AiOutlineLike className='text-white' />
            </div>
          </div>
          <div className='mt-4'>
            <p className='text-gray'>I met here in 3rd year 1st sem . I still remember her . She was Quiet and cute </p>
          </div>
          <div className='flex flex-row justify-between text-gray text-sm my-4 mt-9'>
            <p>by udai sai</p>
            <div>
              <p className='flex'>june 2022 <GoDotFill className='m-1' /> 1M views</p>
            </div>
          </div>
        </div>
        <div className='border-b-2 border-gray w-full'></div>
        </div>
        <div>
        <div className='flex flex-col w-full p-4'>
          <div className='pt-10 flex flex-row justify-between items-start'>
            <h1 className='font-bold text-xl'>The Fight on Divya's Birthday</h1>
            <div className='bg-[#e7ac23] p-[6px] rounded-full'>
              <AiOutlineLike className='text-white' />
            </div>
          </div>
          <div className='mt-4'>
            <p className='text-gray'>On December 12th , She messaged me to come to the party but i don't want to go with bare hands So 
            I Bought a cake and doll with chocolates for her ,to just give a small memory to her, thinking that we will not be in same class again for next sem.  And i thought she was happy but she felt insecure and 
             uncomfortable. the worst thing happend is she called me and asked <span className='text-red-500'>Manam antha close ah....</span> and i don't have a answer for that. so I called her and told her it's a simple thing but i am sorry if you felt bad i dont want to talk to you again bye... <br />
             But the thing i liked in her is open mindness , She called me and said what she is feeling  </p>
          </div>
          <div className='flex flex-row justify-between text-gray text-sm my-4 mt-9'>
            <p>by udai sai</p>
            <div>
              <p className='flex'>june 2022 <GoDotFill className='m-1' /> 1M views</p>
            </div>
          </div>
        </div>
        <div className='border-b-2 border-gray w-full'></div>
        </div>
        <div>
        <div className='flex flex-col w-full p-4'>
          <div className='pt-10 flex flex-row justify-between items-start'>
            <h1 className='font-bold text-xl'>Re-conversation b/w us</h1>
            <div className='bg-[#e7ac23] p-[6px] rounded-full'>
              <AiOutlineLike className='text-white' />
            </div>
          </div>
          <div className='mt-4'>
            <p className='text-gray'>After the fight on Birthday in the next sem we are in the same class again... . At the begining i don't want to talk but the later I thought it was my mistake without know her feeling . But as we are in the same class i want to talk to her as i see her everyday. One day on Ugadhi she was came to class in a saree . And she was so beautiful . when i see her in saree the word that came into my mind <span className='text-red-500'>Achaa Telugu ammaylaaa undhi</span> . After that i tried to talk to her , finally on before the last day i messaged her because we Telugu people planned to take a selfies and i want her to be the part <br /> 
          I liked that She responded well after to the message  </p>
          </div>
          <div className='flex flex-row justify-between text-gray text-sm my-4 mt-9'>
            <p>by udai sai</p>
            <div>
              <p className='flex'>june 2022 <GoDotFill className='m-1' /> 1M views</p>
            </div>
          </div>
        </div>
        <div className='border-b-2 border-gray w-full'></div>
        </div>

        <div>
        <div className='flex flex-col w-full p-4'>
          <div className='pt-10 flex flex-row justify-between items-start'>
            <h1 className='font-bold text-xl'>A Insecure call in the night</h1>
            <div className='bg-[#e7ac23] p-[6px] rounded-full'>
              <AiOutlineLike className='text-white' />
            </div>
          </div>
          <div className='mt-4'>
            <p className='text-gray'>We Completed the 3rd year and i thought she will not be in my class again but but..  we are again same classs..... we talk to each other and we become close but one night she called me and i was talking to her but suddenly she said <span className='text-red-500'>Udai Kopam vasthundhi udai... nijam kopam vassthunhi.. udai... 
            </span> she stoped talking to me for one day and i went to her and asked but then i impressed by her that she was talking me with cuteness that like "nenu nike cheppanu udai.. kopam enthuku vachindooo.. nuvu ardham chesukolevu...." in her sweet and cute voice but the twist comes here . she said she felt insecure of me which i felt so bad and worst because i never misbehave or touched her.... i stopped talking to her but she messaged me one day 
            but i don't want to talk to her but next she not attended the class i felt bad about that and i messaged her we became friends again </p>
          </div>
          <div className='flex flex-row justify-between text-gray text-sm my-4 mt-9'>
            <p>by udai sai</p>
            <div>
              <p className='flex'>june 2022 <GoDotFill className='m-1' /> 1M views</p>
            </div>
          </div>
        </div>
        <div className='border-b-2 border-gray w-full'></div>
        </div>
        <div>
        <div className='flex flex-col w-full p-4'>
          <div className='pt-10 flex flex-row justify-between items-start'>
            <h1 className='font-bold text-xl'>This Sem is not the end i feel...</h1>
            <div className='bg-[#e7ac23] p-[6px] rounded-full'>
              <AiOutlineLike className='text-white' />
            </div>
          </div>
          <div className='mt-4'>
            <p className='text-gray'>I feel she is a overthinker but she understand the thing after and talk to me again . <br />
            atlast I feel like...  <br />
            thanu navuthuntee chusthuu.. undali anipisthadhi... <br />
            thanu matladuthuntee vintu undali anipisthadhi... <br />
            thanthoo untee time telidhuuu andhukee emo eh sem thvaragaa aypoindhi anipisthndhi... <br />
            I have a Song for you.... </p>
          </div>
          <div className='flex flex-row justify-between text-gray text-sm my-4 mt-9'>
            <p>by udai sai</p>
            <div>
              <p className='flex'>june 2022 <GoDotFill className='m-1' /> 1M views</p>
            </div>
          </div>
        </div>
        <div className='border-b-2 border-gray w-full'></div>
        </div>

        
        </div>
      </div>
      <div className='p-4 '>
        <h1 className='text-center font-bold'>Edhantha chusi overthink chesi insecure feel avvaku sare naaa... it just a small memory posts anukooo sare naa divyaa....</h1>
      </div>
    </main>
  )
}
