<<<<<<< HEAD
// Todo: Done From Curious Ecosystem
// import React from 'react';
// import CDC from '../../../assets/Landing-Page-Assets/CDC.jpg';
// import Curious from '../../../assets/Landing-Page-Assets/Curious Ecosystem.png';
// import Inspiration from '../../../assets/Landing-Page-Assets/Inspiration.jpg';
// const OurProducts = () => {
//   //Product Data
//   const ProductData = [
//     {
//       productImg: Inspiration,
//       productName: 'Inspiration App',
//     },
//     {
//       productImg: CDC,
//       productName: 'Curious Community',
//     },
//     {
//       productImg: Curious,
//       productName: 'Curious Ecosystem',
//     },
//   ];

//   return (
//     <div className='w-full h-full text-cyan-50 text-center'>
//       <h1 className='font-normal text-3xl font-poppins p-3'>
//         View Other Products
//       </h1>
//       <div className='flex flex-wrap justify-evenly mt-8 gap-3'>
//         <div>
//           <img
//             src={Curious}
//             className='w-44 rounded-full shadow-slate-400 shadow-[0_0_20px_5px]'
//           />
//           <p className='mt-5 font-bold font-2xl'>Curious Ecosystem</p>
//         </div>
//         <div>
//           <img
//             src={CDC}
//             className='w-44 rounded-full shadow-slate-400 shadow-[0_0_20px_5px]'
//           />
//           <p className='mt-5 font-bold font-2xl'>Curious Community</p>
//         </div>

//         <div>
//           <img
//             src={Inspiration}
//             className='w-44 rounded-full shadow-slate-400 shadow-[0_0_20px_5px]'
//           />
//           <p className='mt-5 font-bold font-2xl'>Inspiration APP</p>
//         </div>

//         {/* {ProductData.map((product, index) => (
// 					<div
// 						key={index}
// 						className="mt-10 m-3 flex flex-col justify-center items-center">
// 						<img
// 							src={product.productImg}
// 							alt={product.productName}
// 							className="w-44 rounded-full shadow-slate-400 shadow-[0_0_20px_5px]"
// 						/>
// 						<p className="font-semibold mt-8 text-2xl">{product.productName}</p>
// 					</div>
// 				))} */}
//       </div>
//     </div>
//   );
// };

// export default OurProducts;

// Todo: Change Occuring only in properties make hovering and animations
// import React from 'react';
// import { motion } from 'framer-motion';
// import CDC from '../../../assets/Landing-Page-Assets/CDC.jpg';
// import Curious from '../../../assets/Landing-Page-Assets/Curious Ecosystem.png';
// import Inspiration from '../../../assets/Landing-Page-Assets/Inspiration.jpg';

// const OurProducts = () => {
//   //Product Data
//   const ProductData = [
//     {
//       productImg: Curious,
//       productName: 'Curious Ecosystem',
//     },
//     {
//       productImg: CDC,
//       productName: 'Curious Community',
//     },
//     {
//       productImg: Inspiration,
//       productName: 'Inspiration App',
//     },
//   ];

//   const container = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         delayChildren: 0.3,
//         staggerChildren: 0.5,
//       },
//     },
//   };

//   const item = {
//     hidden: { y: 50, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         type: 'spring',
//         stiffness: 1000,
//         damping: 20,
//       },
//     },
//   };

//   return (
//     <div className='w-full h-full text-cyan-50 text-center py-10'>
//       <h1 className='font-bold text-4xl font-poppins p-3'>
//       {/* <h1 className='font-normal text-4xl font-poppins p-3'> */}
//         View Other Products
//       </h1>
//       <motion.div
//         className='flex flex-wrap justify-evenly mt-8 gap-8'
//         variants={container}
//         initial="hidden"
//         animate="visible"
//       >
//         {ProductData.map((product, index) => (
//           <motion.div
//             key={index}
//             className='flex flex-col items-center'
//             variants={item}
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             <img
//               src={product.productImg}
//               alt={product.productName}
//               className='w-44 h-44 rounded-full shadow-lg'
//             />
//             <p className='mt-5 text-2xl font-bold'>{product.productName}</p>
//           </motion.div>
//         ))}
//       </motion.div>
//     </div>
//   );
// };

// export default OurProducts;


// Todo: Prefect Motion text Make For Commit
=======
>>>>>>> 5336877d03a995062a09e6a997b98e4fdbb9fddc

import { motion } from 'framer-motion';
import React from 'react';
import CDC from '../../../assets/Landing-Page-Assets/CDC.jpg';
import Curious from '../../../assets/Landing-Page-Assets/Curious Ecosystem.png';
import Inspiration from '../../../assets/Landing-Page-Assets/Inspiration.jpg';

const OurProducts = () => {
  // Product Data
  const ProductData = [
    {
      productImg: Curious,
      productName: 'Curious Ecosystem',
    },
    {
      productImg: CDC,
      productName: 'Curious Community',
    },
    {
      productImg: Inspiration,
      productName: 'Inspiration App',
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.5,
      },
    },
  };

  const item = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 1000,
        damping: 20,
      },
    },
  };

  return (
    <div className='w-full h-full text-cyan-50 text-center py-10 flex flex-col items-center'>
      <motion.h1
        className='font-bold text-4xl font-poppins p-3'
        variants={container}
        initial="hidden"
        animate="visible"
      >
<<<<<<< HEAD
        <a href="#">
=======
{/* 	      After Website Domain Register Add this here at href section */}
        <a href="#"> 
>>>>>>> 5336877d03a995062a09e6a997b98e4fdbb9fddc
          <img
            src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&weight=650&size=36&pause=1000&color=F7F7F7&random=false&width=610&height=60&lines=Explore+More+of+Our+Products"
            alt="Typing SVG"
          />
        </a>
      </motion.h1>
      <motion.div
        className='flex justify-center flex-wrap mt-4 gap-24' // Decreased mt (margin-top) value
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {ProductData.map((product, index) => (
          <motion.div
            key={index}
            className='flex flex-col items-center'
            variants={item}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            style={{ margin: '30px' }} // Increased margin around images
          >
            <img
              src={product.productImg}
              alt={product.productName}
              className='w-44 h-44 rounded-full shadow-lg'
            />
            <p className='mt-1 text-2xl font-bold'>{product.productName}</p> {/* Adjusted mt value */}
          </motion.div>
        ))}
      </motion.div>

    </div>
  );
};

export default OurProducts;