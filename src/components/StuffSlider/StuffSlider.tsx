'use client';

import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';

type Props = {
  data: string[];
};

export const StuffSlider = ({ data }: Props) => {
  const [emblaRef] = useEmblaCarousel({ loop: false });

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        {data.map((image) => (
          <div className="embla__slide" key={image}>
            <Image
              src={`/assets/${image}`}
              alt={image}
              width={320}
              height={275}
              className="bg-[#f2f2f2] h-[300px] object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
