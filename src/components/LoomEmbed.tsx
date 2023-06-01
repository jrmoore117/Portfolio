interface LoomEmbedProps {
  src: string;
}

const LoomEmbed = ({ src }: LoomEmbedProps) => (
  <div className='mt-8 md:h-[29rem] sm:h-[26rem] h-[22rem] w-full relative flex items-center justify-center w-full bg-gray-100 rounded-lg overflow-hidden'>
    <iframe
      allowFullScreen
      className='absolute w-full h-full rounded-sm'
      src={src}
    ></iframe>
  </div>
);

export default LoomEmbed;
