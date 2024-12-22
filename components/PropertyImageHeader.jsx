import Image from "next/image";

export default function PropertyImageHeader({ image }) {
  return (
    <section>
      <div className="container-xl m-auto">
        <div className="grid grid-cols-1">
          <Image
            src={`/images/properties/${image}`}
            alt=""
            className="h-[400px] w-full object-cover"
            width={0}
            height={0}
            sizes="100vw"
            priority
          />
        </div>
      </div>
    </section>
  );
}
