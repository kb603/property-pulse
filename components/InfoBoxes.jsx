export default function InfoBoxes() {
  return (
    <section>
      <div class="container-xl m-auto lg:container">
        <div class="grid grid-cols-1 gap-4 rounded-lg p-4 md:grid-cols-2">
          <div class="rounded-lg bg-gray-100 p-6 shadow-md">
            <h2 class="text-2xl font-bold">For Renters</h2>
            <p class="mb-4 mt-2">
              Find your dream rental property. Bookmark properties and contact
              owners.
            </p>
            <a
              href="/properties.html"
              class="inline-block rounded-lg bg-black px-4 py-2 text-white hover:bg-gray-700"
            >
              Browse Properties
            </a>
          </div>
          <div class="rounded-lg bg-blue-100 p-6 shadow-md">
            <h2 class="text-2xl font-bold">For Property Owners</h2>
            <p class="mb-4 mt-2">
              List your properties and reach potential tenants. Rent as an
              airbnb or long term.
            </p>
            <a
              href="/add-property.html"
              class="inline-block rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
            >
              Add Property
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
