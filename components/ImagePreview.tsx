import Image from 'next/image';
import React from 'react';

const ImagePreview = ({ imageUrl }: { imageUrl: string }) => {
  return (
    <div>
      <Image
        className='mb-4 w-auto h-auto'
        src={imageUrl}
        width='200'
        height='200'
        alt='preview'
      />
    </div>
  );
};

export default ImagePreview;
