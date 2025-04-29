import Image from "next/image";

const OurHeritage = () => {
  return (
    <div className="lg:flex lg:items-end lg:justify-between">
      <div className="space-y-6 sm:space-y-[3.88rem] lg:space-y-[3.19rem]">
        <h2 className="w-[17.4375rem] text-[3rem] leading-[3.25rem] font-bold tracking-[-0.10713rem] text-[#1B1D23] sm:w-[27.875rem] sm:text-[4.5rem] sm:leading-[4rem] sm:tracking-[-0.125rem]">
          Contact Details
        </h2>
        <div className="w-[19.375rem] space-y-6 text-lg leading-6 font-medium text-[#60636D] sm:w-[35.8125rem] lg:w-[27.8125rem]">
          <p>
            Founded in 2007, we started as a trio of architects. Our
            complimentary skills and relentless attention to detail turned Arch
            into one of the most sought after boutique firms in the country.
          </p>
          <p>
            Specializing in Urban Design allowed us to focus on creating
            exceptional structures that live in harmony with their surroundings.
            We consider every detail from every surrounding element to inform
            our designs.
          </p>
          <p>
            Our small team of world-class professionals provides input on every
            project.
          </p>
        </div>
      </div>
      <Image
        src="/assets/about/desktop/image-heritage.jpg"
        alt="heritage"
        width={540}
        height={568}
        className="hidden lg:block"
      />
    </div>
  );
};
export default OurHeritage;
