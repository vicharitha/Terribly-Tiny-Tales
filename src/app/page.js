import Image from 'next/image'
import { CiStar } from "react-icons/ci";
import { AiOutlineLike } from "react-icons/ai";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import { promises as fs } from 'fs';


export default async function Home() {

  const file = await fs.readFile(process.cwd() + '/src/data/data.json', 'utf8');
  const data = JSON.parse(file);

  
  console.log(data.posts.length)

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
          <Image src={`${data.image}`} alt="" width={100} height={100}  className='w-28 rounded-full relative -top-12' />
          <div className='px-4'>
            <h1 className='font-bold text-lg'>{data.name}</h1>
            <div className='flex mt-2'>

              <div className=' text-gray'>
                <div>
                  <p className='border-2 min-w-[60px] px-2 py-1 text-center rounded-xl border-gray'>{data.followers}</p>
                  <span className='text-[12px] text-center '>followers</span>
                </div>
              </div>


              <div className=' text-gray'>
                <div>
                  <p className='border-2 min-w-[60px] mx-4 text-center px-2 py-1 rounded-xl border-gray'>{data.following}</p>
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
        <h1 className='font-bold text-base'>{data.description}</h1>
        <a href={data.link} target='__blank' className='text-blue-400 text-xs '>{data.link}</a>
      </div>
      <div className='px-4 flex flex-row'>
        <div className='flex mx-1'>
          <div className='bg-[#66adc1] p-[6px] rounded-full'>
            <CiStar className='text-white' />
          </div>
          <p className='mx-2 pt-1'>{data.favorite}</p>
        </div>
        <div className='flex'>
          <div className='bg-[#e7ac23] p-[6px] rounded-full'>
            <AiOutlineLike className='text-white' />
          </div>
          <p className='mx-2 pt-1'>{data.likes}</p>
        </div>
        <div className='flex mx-1'>
          <div className='bg-[#7e7e7e] p-[6px] rounded-full'>
            <MdOutlineRemoveRedEye className='text-white' />
          </div>
          <p className='mx-2 pt-1'>{data.views}</p>
        </div>
        <div className='flex'>
          <div className='bg-[#b52855] p-[6px] rounded-full'>
            <FaRegHeart className='text-white' />
          </div>
          <p className='mx-2 pt-1'>{data.love}</p>
        </div>
      </div>
      </div>
      <div className=' mt-10'>
        <div className='border-b-[1px] border-grayp-1'>
        <div className='border-[1px] border-gray  border-b-0 pt-1 px-1 w-fit m-2'>
          <h1 className='text-blue-500 font-bold'>{data.posts.length} Posts</h1>
        </div>
        </div>


        {/* posts  */}

        <div className='flex flex-row flex-wrap'>

          {data.posts.map(item=><div>
        <div className='flex flex-col w-full p-4'>
          <div className='pt-10 flex flex-row justify-between  items-start'>
            <h1 className='font-bold text-xl'>{item.title}</h1>
            <div className='bg-[#e7ac23] p-[6px] rounded-full'>
              <AiOutlineLike className='text-white' />
            </div>
          </div>
          <div className='mt-4'>
            <p className='text-gray'>{item.description}</p>
          </div>
          <div className='flex flex-row justify-between text-gray text-sm my-4 mt-9'>
            <p>by {item.by}</p>
            <div>
              <p className='flex'>{item.date} <GoDotFill className='m-1' /> {data.views} views</p>
            </div>
          </div>
        </div>
        <div className='border-b-2 border-gray w-full'></div>
        </div>)}        
        </div>
      </div>
      
    </main>
  )
}
