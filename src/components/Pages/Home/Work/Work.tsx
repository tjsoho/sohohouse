import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Modal from './Modal'; // Make sure to import your Modal component

function Work() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const handleImageClick = (url: string) => {
    if (url === 'https://www.rosieandlaurent.com/' || url === 'https://www.freyeephotography.com/') {
      window.open(url, '_blank');
    } else {
      setModalContent(url);
      setIsModalOpen(true);
    }
  };

  const images = [
    { src: '/images/mac1.png', url: 'https://www.natalia-bondarenko.com/', alt: 'Portfolio 1' },
    { src: '/images/mac4.png', url: 'https://www.sloane.biz', alt: 'Portfolio 4' },
    { src: '/images/mac2.png', url: 'https://www.freyeephotography.com/', alt: 'Portfolio 2' },
    { src: '/images/mac3.png', url: 'https://www.rosieandlaurent.com/', alt: 'Portfolio 4' },
    { src: '/images/mac5.png', url: 'https://www.projectempower.com.au/', alt: 'Portfolio 6' },
    { src: '/images/mac6.png', url: 'https://www.dannynicoproductions.com/', alt: 'Portfolio 5' },
  ];


  // Use useInView hook
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className='h-full max-w-[1440px] mx-auto'>
      <style>
        {`
          @keyframes scaleUp {
            from {
              transform: scale(0.2);
              opacity: 0;
            }
            to {
              transform: scale(1);
              opacity: 1;
            }
          }
          .scale-up {
            animation: scaleUp 2s ease-out forwards;
          }
        `}
      </style>
      <div className='py-8 lg:py-16' ref={ref}>
        <div className='text-center'>
          <h1 className='text-brand-blue text-[36px] md:text-[46px] font-Black'>Featured Work</h1>
          <p className='text-brand-blue-light'>Click Computers to View</p>
        </div>
        <div className='flex flex-wrap '>
          {images.map((image, index) => (
            <motion.div
              key={index}
              className='w-full md:w-1/2 lg:w-1/3 transform hover:scale-110 ease-in-out duration-200 hover:cursor-pointer scale-up'
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.2 }}
              transition={{ duration: 2.5, delay: index * 0.2 }}
            >
              <img src={image.src} alt={image.alt} onClick={() => handleImageClick(image.url)} />
            </motion.div>
          ))}
        </div>
      </div>

      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <iframe src={modalContent} className="w-full h-full"></iframe>
        </Modal>
      )}
    </div>
  );
}

export default Work;
