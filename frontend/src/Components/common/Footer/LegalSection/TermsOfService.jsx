// Todo : Default Change Done By Curious
// import React, { useState } from 'react';

// const dataArray = [
//   {
//     title: '1. Introduction',
//     para: `Welcome to Curious Connect's Terms of Service. These terms govern your use of our website and services. By accessing or using our website, you agree to comply with these terms and conditions.`,
//   },
//   {
//     title: '2. User Conduct',
//     para: `You agree to use our website and services only for lawful purposes and in a manner that does not infringe the rights of, or restrict or inhibit the use and enjoyment of, others. Prohibited behavior includes harassing or causing distress or inconvenience to any other user, transmitting obscene or offensive content, or disrupting the normal flow of dialogue within our website.`,
//   },
//   {
//     title: '3. Intellectual Property',
//     para: ` All content included on this site, such as text, graphics, logos, button icons, images, audio clips, digital downloads, data compilations, and software, is the property of Curious Connect or its content suppliers and protected by international copyright laws.`,
//   },
//   {
//     title: '4. Limitation of Liability',
//     para: `Curious Connect shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to lost profits, business interruption, or loss of data, arising out of or in any way connected with the use of our website or services.`,
//   },
//   {
//     title: '5. Governing Law',
//     para: `These terms shall be governed by and construed in accordance with the laws of [Your Jurisdiction], and you submit to the exclusive jurisdiction of the courts in that jurisdiction.`,
//   },
//   {
//     title: '6. Changes to Terms',
//     para: ` Curious Connect reserves the right to update or change these terms at any time. Any changes will be effective immediately upon posting on our website. Your continued use of our website following the posting of any changes constitutes acceptance of those changes.`,
//   },
//   {
//     title: '7. Contact Us',
//     para: `If you have any questions or concerns about our Terms of Service, please contact us.`,
//   },
// ];

// const TermsOfService = () => {
//   const [activeIndex, setActiveIndex] = useState(null);

//   const toggleBtn = (index) => {
//     setActiveIndex(activeIndex === index ? null : index);
//   };

//   return (
//     <div>
//       <div className='bg-gradient min-h-screen'>
//         <div className='max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8'>
//           <h1 className='text-2xl md:text-3xl lg:text-4xl text-center font-medium text-gray-100 mb-8'>
//             Terms of Service
//           </h1>
//           <div>
//             {dataArray.map((data, index) => (
//               <div
//                 key={index}
//                 className='shadow-md cursor-pointer py-2 px-3 bg-white mt-8 rounded-md'>
//                 <div
//                   className='flex flex-row justify-between items-center'
//                   onClick={() => toggleBtn(index)}>
//                   <p className='text-sm md:text-lg text-[#353b48] font-bold tracking-normal md:tracking-wider'>
//                     {data.title}
//                   </p>
//                   <div>
//                     <span className='text-xl md:text-3xl text-[#2f3640]'>
//                       {activeIndex === index ? `-` : `+`}
//                     </span>
//                   </div>
//                 </div>
//                 {activeIndex === index ? (
//                   <div className='py-5'>
//                     <p className='text-[#718093] text-xs sm:text-sm md:text-base leading-6 sm:leading-7 md:leading-8 tracking-wide md:tracking-wider text-justify px-3'>
//                       {data.para}
//                     </p>
//                   </div>
//                 ) : (
//                   <></>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TermsOfService;


// Todo: Thicker One Changes Occuring

// import React, { useState } from 'react';

// const dataArray = [
//   {
//     title: '1. Introduction',
//     para: `Welcome to Curious Connect's Terms of Service. These terms govern your use of our website and services. By accessing or using our website, you agree to comply with these terms and conditions.`,
//   },
//   {
//     title: '2. User Conduct',
//     para: `You agree to use our website and services only for lawful purposes and in a manner that does not infringe the rights of, or restrict or inhibit the use and enjoyment of, others. Prohibited behavior includes harassing or causing distress or inconvenience to any other user, transmitting obscene or offensive content, or disrupting the normal flow of dialogue within our website.`,
//   },
//   {
//     title: '3. Intellectual Property',
//     para: ` All content included on this site, such as text, graphics, logos, button icons, images, audio clips, digital downloads, data compilations, and software, is the property of Curious Connect or its content suppliers and protected by international copyright laws.`,
//   },
//   {
//     title: '4. Limitation of Liability',
//     para: `Curious Connect shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to lost profits, business interruption, or loss of data, arising out of or in any way connected with the use of our website or services.`,
//   },
//   {
//     title: '5. Governing Law',
//     para: `These terms shall be governed by and construed in accordance with the laws of [Your Jurisdiction], and you submit to the exclusive jurisdiction of the courts in that jurisdiction.`,
//   },
//   {
//     title: '6. Changes to Terms',
//     para: ` Curious Connect reserves the right to update or change these terms at any time. Any changes will be effective immediately upon posting on our website. Your continued use of our website following the posting of any changes constitutes acceptance of those changes.`,
//   },
//   {
//     title: '7. Contact Us',
//     para: `If you have any questions or concerns about our Terms of Service, please contact us.`,
//   },
// ];

// const TermsOfService = () => {
//   const [activeIndex, setActiveIndex] = useState(null);
//   const [hoverIndex, setHoverIndex] = useState(null);

//   const toggleBtn = (index) => {
//     setActiveIndex(activeIndex === index ? null : index);
//   };

//   const handleMouseEnter = (index) => {
//     setHoverIndex(index);
//   };

//   const handleMouseLeave = () => {
//     setHoverIndex(null);
//   };

//   return (
//     <div className='min-h-screen' style={{ backgroundColor: '#1d2026' }}>
//       <div className='max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8'>
//         <h1 className='text-2xl md:text-3xl lg:text-4xl text-center font-bold text-[#2596be] mb-8'>
//           Terms of Service
//         </h1>
//         <div>
//           {dataArray.map((data, index) => (
//             <div
//               key={index}
//               style={{
//                 boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//                 cursor: 'pointer',
//                 padding: '16px',
//                 backgroundColor: '#fff',
//                 marginTop: '24px',
//                 borderRadius: '8px',
//                 transform: hoverIndex === index ? 'scale(1.05)' : 'scale(1)',
//                 transition: 'transform 0.3s',
//               }}
//               onClick={() => toggleBtn(index)}
//               onMouseEnter={() => handleMouseEnter(index)}
//               onMouseLeave={handleMouseLeave}
//             >
//               <div className='flex justify-between items-center'>
//                 <p className='text-lg md:text-xl font-semibold text-gray-800'>
//                   {data.title}
//                 </p>
//                 <div>
//                   <span className='text-xl md:text-2xl text-gray-600'>
//                     {activeIndex === index ? '-' : '+'}
//                   </span>
//                 </div>
//               </div>
//               {activeIndex === index && (
//                 <div
//                   style={{
//                     overflow: 'hidden',
//                     maxHeight: '1000px',
//                     transition: 'max-height 0.5s ease-out',
//                   }}
//                 >
//                   <p className='text-gray-700 text-sm md:text-base leading-6'>
//                     {data.para}
//                   </p>
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TermsOfService;

// Todo: Main Code For extrcation Changes in Animations
import React, { useState } from 'react';
import { motion } from 'framer-motion'; // Import motion from framer-motion

const dataArray = [
  {
    title: '1. Introduction',
    para: `Welcome to Curious Connect's Terms of Service. These terms govern your use of our website and services. By accessing or using our website, you agree to comply with these terms and conditions.`,
  },
  {
    title: '2. User Conduct',
    para: `You agree to use our website and services only for lawful purposes and in a manner that does not infringe the rights of, or restrict or inhibit the use and enjoyment of, others. Prohibited behavior includes harassing or causing distress or inconvenience to any other user, transmitting obscene or offensive content, or disrupting the normal flow of dialogue within our website.`,
  },
  {
    title: '3. Intellectual Property',
    para: ` All content included on this site, such as text, graphics, logos, button icons, images, audio clips, digital downloads, data compilations, and software, is the property of Curious Connect or its content suppliers and protected by international copyright laws.`,
  },
  {
    title: '4. Limitation of Liability',
    para: `Curious Connect shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to lost profits, business interruption, or loss of data, arising out of or in any way connected with the use of our website or services.`,
  },
  {
    title: '5. Governing Law',
    para: `These terms shall be governed by and construed in accordance with the laws of [Your Jurisdiction], and you submit to the exclusive jurisdiction of the courts in that jurisdiction.`,
  },
  {
    title: '6. Changes to Terms',
    para: ` Curious Connect reserves the right to update or change these terms at any time. Any changes will be effective immediately upon posting on our website. Your continued use of our website following the posting of any changes constitutes acceptance of those changes.`,
  },
  {
    title: '7. Contact Us',
    para: `If you have any questions or concerns about our Terms of Service, please contact us.`,
  },
];

const TermsOfService = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleBtn = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <motion.div // Wrap with motion.div for entry animation
      initial={{ opacity: 0, y: 60 }} // Initial animation properties
      animate={{ opacity: 10, y: 5 }} // Animation when component mounts
      transition={{ duration: 2 }} // Transition duration
      className='min-h-screen' style={{ backgroundColor: '#1d2026' }}>
      <div className='max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8'>
        <h1 className='text-3xl md:text-4xl lg:text-5xl text-center font-semibold text-[#2596be] mb-8'>
          Terms of Service
        </h1>
        <div>
          {dataArray.map((data, index) => (
            <div
              key={index}
              className={`shadow-lg cursor-pointer py-2 px-4 bg-white mt-6 rounded-lg transform transition-transform duration-300 hover:scale-105 ${
                activeIndex === index ? 'animate-slideDown' : ''
              }`}>
              <div
                className='flex justify-between items-center'
                onClick={() => toggleBtn(index)}>
                <p className='text-lg md:text-xl font-semibold text-gray-800'>
                  {data.title}
                </p>
                <div>
                  <span className='text-xl md:text-2xl text-gray-600'>
                    {activeIndex === index ? '-' : '+'}
                  </span>
                </div>
              </div>
              {activeIndex === index && (
                <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                transition={{ duration: 0.5 }}
                className='overflow-hidden'
                >
                <div className='py-4'>
                  <p className='text-gray-700 text-sm md:text-base leading-6'>
                    {data.para}
                  </p>
                </div>
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default TermsOfService;
