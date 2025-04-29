import Image from "next/image";

const Map = () => {
  return (
    <div
      className="my-[4.14rem] flex items-center justify-center sm:my-[14.14rem] lg:my-[12.19rem]"
      id="map"
    >
      <picture>
        <source
          media="(min-width: 1024px)"
          srcSet="/assets/contact/desktop/image-map.png"
          width={1110}
          height={560}
        />
        <source
          media="(min-width: 640px)"
          srcSet="/assets/contact/tablet/image-map.png"
          width={572}
          height={560}
        />
        <Image
          src="/assets/contact/mobile/image-map.png"
          alt="map"
          width={375}
          height={367}
        />
      </picture>
    </div>
  );
};
export default Map;
