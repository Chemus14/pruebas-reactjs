import React from 'react';
import { motion } from "framer-motion"
import { useMotionValue, useTransform } from 'framer-motion';

function Prueba(){

    const x = useMotionValue(10);
    const opacity = useTransform(x, [-1000, 10, 1000], [0, 1, 0]);

  return (
    <motion.button drag="x" style={{ x, opacity }}  className='motion-back'
  whileHover={{
    scale: 1.2,
    transition: { duration: 1 },
  }}
  whileTap={{ scale: 0.9 }}
/>
  )
  }
  export default Prueba
