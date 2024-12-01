// import React, { useContext, useState } from 'react'
// import { assets } from '../assets/assets'
// import { motion } from "motion/react"
// import { AppContext } from '../context/AppContext'
// import axios from 'axios'
// const Result = () => {
//   const [image,setImage] =useState(assets.sample_img_1)
//   const [isImageLoaded,setIsImageLoaded]=useState(false)
//   const [loading,setLoading]=useState(false);
//   const [input,setInput] =useState('');

//   const {genrateImage}=useContext(AppContext)
//   const submitHandler= async(e)=>{
//     e.preventDefault();
//     //backend code
//     setLoading(true)
//     if(input){
//       const image=await genrateImage(input)
//       if(image){
//         setIsImageLoaded(true);
//         setImage(image)
//       }
//     }
//     setLoading(false);

//   }
//   return (
//     <motion.form
//     initial={{opacity:0.2,y:100}}
//       transition={{duration:1}}
//       whileInView={{opacity:1,y:0}}
//       viewport={{once:true}}

//     onSubmit={submitHandler}
//     className='flex flex-col min-h-[90vh] justify-center items-center'
//     >
//     <div>
//       <div className='relative'>
//         <img src={image} className='max-w-sm rounded'/>
//         <span className={`absolute bottom-0 left-0 h-1 bg-blue-500 ${loading? 'w-full transition-all duration-[10s]':'w-0'}`} />
//       </div>
//       <p
//       className={
//         !loading?'hidden':''
//       }
//       >
//         Loading......
//       </p>
      
      
//     </div>
//     {!isImageLoaded &&
//      <div className='flex w-full max-w-xl bg-neutral-500 text-white text-sm p-0.5 mt-10 rounded-full'>
//       <input 
//       onChange={e=> setInput(e.target.value)} value={input}
      
//       type='text' placeholder='write your idea here' className='flex-1 bg-transparent outlibe-none ml-8 max-sm:w-20 placeholder-color'/>
//       <button className='bg-zinc-900 px-10 sm:px-16 py-3 rounded-full' type='submit'>Genrate</button>
//     </div>
//   }
//    {isImageLoaded&&
//     <div className=' flex gap-2 flex-wrap justify-center text-white text-sm p-0.5 mt-10 rounded-full'>
//       <p 
      
//       onClick={()=>{
//         setIsImageLoaded(false)
//       }}
//       className='bg-transparent border border-zinc-900 text-black px-8 py-3 rounded-full cursor-pointer'>Genrate Another</p>
//       <a 
//       className='bg-black border border-zinc-900 text-white px-8 py-3 rounded-full cursor-pointer'
//       href={image} download>Download</a>
//     </div>   
//    }
                                                                        
//     </motion.form>
//   )
// }

// export default Result

import React, { useContext, useState } from 'react';
import { assets } from '../assets/assets';
import { motion } from "framer-motion"; // Correct import
import { AppContext } from '../context/AppContext';
import axios from 'axios';

const Result = () => {
  const [image, setImage] = useState(assets.sample_img_1);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState('');

  const { genrateImage } = useContext(AppContext); // Ensure this is defined
  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (input) {
        const generatedImage = await genrateImage(input); // Ensure `genrateImage` works
        if (generatedImage) {
          setIsImageLoaded(true);
          setImage(generatedImage);
        } else {
          console.error('Image generation failed');
        }
      }
    } catch (error) {
      console.error('Error generating image:', error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onSubmit={submitHandler}
      className="flex flex-col min-h-[90vh] justify-center items-center"
    >
      <div>
        <div className="relative">
          <img src={image} className="max-w-sm rounded" alt="Generated Output" />
          <span
            className={`absolute bottom-0 left-0 h-1 bg-blue-500 ${
              loading ? 'w-full transition-all duration-[10s]' : 'w-0'
            }`}
          />
        </div>
        {loading && <p>Loading...</p>}
      </div>

      {!isImageLoaded && (
        <div className="flex w-full max-w-xl bg-neutral-500 text-white text-sm p-0.5 mt-10 rounded-full">
          <input
            onChange={(e) => setInput(e.target.value)}
            value={input}
            type="text"
            placeholder="Write your idea here"
            className="flex-1 bg-transparent outline-none ml-8 max-sm:w-20 placeholder-color"
          />
          <button
            className="bg-zinc-900 px-10 sm:px-16 py-3 rounded-full"
            type="submit"
          >
            Generate
          </button>
        </div>
      )}

      {isImageLoaded && (
        <div className="flex gap-2 flex-wrap justify-center text-white text-sm p-0.5 mt-10 rounded-full">
          <p
            onClick={() => {
              setIsImageLoaded(false);
            }}
            className="bg-transparent border border-zinc-900 text-black px-8 py-3 rounded-full cursor-pointer"
          >
            Generate Another
          </p>
          <a
            className="bg-black border border-zinc-900 text-white px-8 py-3 rounded-full cursor-pointer"
            href={image}
            download
          >
            Download
          </a>
        </div>
      )}
    </motion.form>
  );
};

export default Result;

