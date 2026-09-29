import { urlFor } from '../lib/sanity';

interface UGCPhotoGridProps {
  image?: any;
}

export const UGCPhotoGrid = ({ image }: UGCPhotoGridProps) => {
  let bannerSrc = '/figma-assets/fans-group.jpg';

  if (image) {
    if (typeof image === 'string') {
      bannerSrc = image;
    } else if (typeof image === 'object' && image?.asset) {
      try {
        bannerSrc = urlFor(image).url() || bannerSrc;
      } catch {
        // fallback
      }
    }
  }

  return (
    <div className="w-full overflow-hidden flex justify-center">
      {/* Desktop & Tablet: Full-width composite strip matching Figma #1:1304 (1465px x 262.5px) */}
      <div className="hidden md:flex w-full justify-center overflow-hidden">
        <img
          src={bannerSrc}
          alt="Fans wearing our loungewear"
          className="w-full max-w-[1465px] h-auto object-cover"
        />
      </div>

      {/* Mobile: Full-bleed horizontal viewport matching Figma #1:1716 / #1:1721 (x: -638px, h: 210px) */}
      <div className="md:hidden w-full overflow-hidden relative h-[210px]">
        <img
          src={bannerSrc}
          alt="Fans wearing our loungewear"
          className="h-[210px] w-auto max-w-none object-cover absolute top-0"
          style={{ left: '-638px' }}
        />
      </div>
    </div>
  );
};
