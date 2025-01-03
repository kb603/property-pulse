"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { fetchProperty } from "../../../utils/requests";
import PropertyImageHeader from "../../../components/PropertyImageHeader";
import Link from "next/link";
import PropertyDetails from "../../../components/PropertyDetails";
import { FaArrowLeft } from "react-icons/fa";
import Spinner from "../../../components/Spinner";

export default function PropertyPage() {
  const { id } = useParams();

  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPropertyData = async () => {
      if (!id) return;
      try {
        const property = await fetchProperty(id);
        setProperty(property);
      } catch (error) {
        console.log("Error fetching property", error);
      } finally {
        setLoading(false);
      }
    };

    if (property === null) {
      fetchPropertyData();
    }
  }, [id, property]);

  if (!property && !loading) {
    return (
      <h1 className="mt-10 text-center text-2xl font-bold">
        Property Not Found
      </h1>
    );
  }

  return (
    <>
      {loading && <Spinner loading={loading} />}
      {!loading && property && (
        <>
          <PropertyImageHeader image={property.images[0]} />
          <section>
            <div className="container m-auto px-6 py-6">
              <Link
                href="/properties"
                className="flex items-center text-blue-500 hover:text-blue-600 hover:underline"
              >
                <FaArrowLeft className="mr-2" /> Back to Properties
              </Link>
            </div>
          </section>

          <section className="bg-blue-50">
            <div className="container m-auto px-6 py-10">
              <div className="md:grid-cols-70/30 grid w-full grid-cols-1 gap-6">
                <PropertyDetails property={property} />

                {/* <!-- Sidebar --> */}
                <aside className="space-y-4">
                  <button className="flex w-full items-center justify-center rounded-full bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-600">
                    <i className="fas fa-bookmark mr-2"></i> Bookmark Property
                  </button>
                  <button className="flex w-full items-center justify-center rounded-full bg-orange-500 px-4 py-2 font-bold text-white hover:bg-orange-600">
                    <i className="fas fa-share mr-2"></i> Share Property
                  </button>

                  {/* <!-- Contact Form --> */}
                  <div className="rounded-lg bg-white p-6 shadow-md">
                    <h3 className="mb-6 text-xl font-bold">
                      Contact Property Manager
                    </h3>
                    <form>
                      <div className="mb-4">
                        <label
                          className="mb-2 block text-sm font-bold text-gray-700"
                          htmlFor="name"
                        >
                          Name:
                        </label>
                        <input
                          className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                          id="name"
                          name="name"
                          type="text"
                          placeholder="Enter your name"
                          required
                        />
                      </div>
                      <div className="mb-4">
                        <label
                          className="mb-2 block text-sm font-bold text-gray-700"
                          htmlFor="email"
                        >
                          Email:
                        </label>
                        <input
                          className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                          id="email"
                          name="email"
                          type="email"
                          placeholder="Enter your email"
                          required
                        />
                      </div>
                      <div className="mb-4">
                        <label
                          className="mb-2 block text-sm font-bold text-gray-700"
                          htmlFor="phone"
                        >
                          Phone:
                        </label>
                        <input
                          className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                          id="phone"
                          name="phone"
                          type="text"
                          placeholder="Enter your phone number"
                        />
                      </div>
                      <div className="mb-4">
                        <label
                          className="mb-2 block text-sm font-bold text-gray-700"
                          htmlFor="message"
                        >
                          Message:
                        </label>
                        <textarea
                          className="focus:shadow-outline h-44 w-full appearance-none rounded border px-3 py-2 text-gray-700 shadow focus:outline-none"
                          id="message"
                          name="message"
                          placeholder="Enter your message"
                        ></textarea>
                      </div>
                      <div>
                        <button
                          className="focus:shadow-outline flex w-full items-center justify-center rounded-full bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-600 focus:outline-none"
                          type="submit"
                        >
                          <i className="fas fa-paper-plane mr-2"></i> Send
                          Message
                        </button>
                      </div>
                    </form>
                  </div>
                </aside>
              </div>
            </div>
          </section>

          {/* <!-- Images --> */}
          <section className="bg-blue-50 p-4">
            <div className="container mx-auto">
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2">
                  <img
                    src="./images/properties/a1.jpg"
                    alt=""
                    className="h-[400px] w-full cursor-pointer rounded-xl object-cover"
                  />
                </div>
                <div className="col-span-2">
                  <img
                    src="./images/properties/a2.jpg"
                    alt=""
                    className="h-[400px] w-full cursor-pointer rounded-xl object-cover"
                  />
                </div>
                <div className="col-span-2">
                  <img
                    src="./images/properties/a3.jpg"
                    alt=""
                    className="h-[400px] w-full cursor-pointer rounded-xl object-cover"
                  />
                </div>
                <div className="col-span-2">
                  <img
                    src="./images/properties/a4.jpg"
                    alt=""
                    className="h-[400px] w-full cursor-pointer rounded-xl object-cover"
                  />
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
}
