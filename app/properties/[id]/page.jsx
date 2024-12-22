"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { fetchProperty } from "../../../utils/requests";
import PropertyImageHeader from "../../../components/PropertyImageHeader";
import Link from "next/link";

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
      {!loading && property && (
        <>
          <PropertyImageHeader image={property.images[0]} />
          <section>
            <div className="container m-auto px-6 py-6">
              <Link
                href="/properties"
                className="flex items-center text-blue-500 hover:text-blue-600"
              >
                <i className="fas fa-arrow-left mr-2"></i> Back to Properties
              </Link>
            </div>
          </section>
        </>
      )}
    </>
  );
}
