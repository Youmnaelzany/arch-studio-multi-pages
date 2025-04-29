import Image from "next/image";
import Link from "next/link";

interface ContactDetailsProps {
  office: string;
  email: string;
  phone: string;
  address: string;
}

const ViewOnMap = ({ office, email, address, phone }: ContactDetailsProps) => {
  return (
    <div className="flex flex-col gap-y-[2.69rem] sm:flex-row sm:items-end sm:gap-x-[4.44rem] lg:flex-col lg:items-start lg:gap-y-[3.69rem]">
      <div className="w-[19.4375rem] space-y-[0.88rem] sm:w-[21.875rem]">
        <h3 className="text-lg leading-[2.1875rem] font-bold text-[#60636D]">
          {office}
        </h3>
        <div className="text-lg leading-6 font-medium text-[#60636D]">
          <p className=""> Mail : {email}</p>
          <p className=""> Address : {address}</p>
          <p className=""> Phone : {phone}</p>
        </div>
      </div>
      <Link
        href={"#map"}
        className="flex items-center gap-x-6 text-lg leading-[1.5625rem] font-bold text-[#1B1D23] hover:underline"
      >
        View on Map
        <Image
          src="/assets/icons/icon-arrow.svg"
          alt="arrow"
          width={26}
          height={20}
        />
      </Link>
    </div>
  );
};

const ContactDetails = () => {
  return (
    <div className="flex flex-col gap-y-10 sm:gap-y-[2.69rem] lg:flex-row lg:gap-x-[1.88rem]">
      <h2 className="w-[19.4375rem] text-[3rem] leading-[3.25rem] font-bold tracking-[-0.10713rem] text-[#1B1D23] sm:w-[27.875rem] sm:text-[4.5rem] sm:leading-[4rem] sm:tracking-[-0.125rem] lg:w-[21.875rem]">
        Contact Details
      </h2>
      {/* Main Office */}
      <ViewOnMap
        office="Main Office"
        email="archone@mail.com"
        address="1892 Chenoweth Drive TN"
        phone="123-456-3451"
      />
      {/* Office II */}
      <ViewOnMap
        office="Office II"
        email="archtwo@mail.com"
        address="3399 Wines Lane TX"
        phone="832-123-4321"
      />
    </div>
  );
};
export default ContactDetails;
