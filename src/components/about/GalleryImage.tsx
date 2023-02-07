import Image from "next/image";
import { RenderPhotoProps } from "react-photo-album";

const GalleryImage = ({
  imageProps: { src, alt, title, sizes, className, onClick },
  wrapperStyle,
}: RenderPhotoProps) => (
  <div style={wrapperStyle} className="relative transition group">
    <button className="relative block w-full h-full transition group-hover:scale-95 group-hover:brightness-50">
      <Image
        fill
        src={src}
        alt={alt}
        title={title}
        sizes={sizes}
        className={className}
        onClick={onClick}
      />
    </button>
    <div className="absolute invisible text-center transition -translate-x-1/2 -translate-y-1/2 opacity-0 pointer-events-none top-1/2 left-1/2 group-hover:visible group-hover:opacity-100">
      <span className="text-3xl">🫶</span>
      <h4 className="text-xl font-bold tracking-wider text-white uppercase whitespace-nowrap">
        {title}
      </h4>
    </div>
  </div>
);

export default GalleryImage;
