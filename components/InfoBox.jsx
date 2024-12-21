import Link from "next/link";

export default function InfoBox({
  heading,
  backgroundColor = "bg-gray-100",
  textColor = "text-gray-800",
  buttonInfo,
  children,
}) {
  return (
    <div className={`rounded-lg ${backgroundColor} p-6 shadow-md`}>
      <h2 className={`${textColor} text-2xl font-bold`}>{heading}</h2>
      <p className={`${textColor} mb-4 mt-2`}>{children}</p>
      <Link
        href={buttonInfo.link}
        className={`inline-block rounded-lg ${buttonInfo.backgroundColor} px-4 py-2 text-white hover:opacity-80`}
      >
        {buttonInfo.text}
      </Link>
    </div>
  );
}
