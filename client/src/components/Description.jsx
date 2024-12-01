import React from 'react'
import { assets } from '../assets/assets'
import { motion } from "motion/react"
const Description = () => {
  return (
    <motion.div
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}

      className='flex flex-col items-center justify-center my-24 p-6 md:px-28'
    >
      <h1
        className='text-3xl sm:text-4xl font-semibold mb-2'
      >Create AI Images</h1>
      <p className='text-gray-500 mb-8'>Turn your imagination into visuals</p>

      <div className='flex flex-col gap-5 md:gap-14 md:flex-row items-center'>
        <img src={assets.sample_img_1} alt='' className='w-80 xl:w-96 rounded-lg' />
        <div>
          <h2 className='text-3xl font-medium max-w-lg mb-4'>
            Introducing the AI-powered Text to image genrator
          </h2>
          <p
            className='text-gray-600 mb-4'
          >
            Discover the ultimate tool to bring your imagination to life. With cutting-edge AI technology, you can transform simple text prompts into breathtaking, high-quality images in just seconds.

            Whether you're an artist looking for inspiration, a designer in need of quick visuals, or simply someone who loves to explore creativity, this tool makes the process seamless and fun.
          </p>
          <p className='text-gray-600 mb-4'>

            Unleash your inner visionary, experiment with styles, and watch your words evolve into stunning visual masterpieces. No artistic skills? No problem. Just type, and let the AI do the magic!
          </p>
        </div>
      </div>

    </motion.div>
  )
}

export default Description
