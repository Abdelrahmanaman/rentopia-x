import ApartmentResult from "@/components/ApartmentResult";
import SearchFilter from "@/components/SearchFilter";

interface PageProps {
  searchParams: {
    q?: string;
    price?: string;
    sortBy: "asc" | "desc";
    page?: string;
  };
}

export default async function page({
  searchParams: { q, price, sortBy, page },
}: PageProps) {
  const searchValue = { q, price, sortBy, page };

  return (
    <section>
      <div>
        <SearchFilter searchValue={searchValue} />
      </div>
      <ApartmentResult searchValue={searchValue} page={page} />
    </section>
  );
}
