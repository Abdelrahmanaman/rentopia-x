"use client";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { SeachType } from "@/lib/validation";

interface pageProps {
  searchValue: SeachType;
  currentPage: number;
  totalCount: number;
}
export function PaginationBar({
  currentPage,
  totalCount,
  searchValue: { price, q, sortBy },
}: pageProps) {
  const resultPerPage = 4;
  const totalPages = Math.ceil(totalCount / resultPerPage);

  const generateDynamicParam = (page: number) => {
    const searchParams = new URLSearchParams({
      ...(q && { q }),
      ...(price && { price }),
      ...(sortBy && { sortBy }),
      page: page.toString(),
    });
    return `/explore?${searchParams.toString()}`;
  };

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href={generateDynamicParam(currentPage - 1)}
            className={`${currentPage === 1 ? "pointer-events-none bg-gray-100 text-gray-300" : ""} `}
          />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            className="rounded-lg bg-gray-200/75"
            href={generateDynamicParam(currentPage)}
          >
            {currentPage}
          </PaginationLink>
        </PaginationItem>
        {currentPage < totalPages && (
          <PaginationItem>
            <PaginationLink
              href={generateDynamicParam(currentPage + 1)}
              className={`${currentPage < totalPages ? "" : "pointer-events-none bg-gray-100 text-gray-300"} `}
            >
              {currentPage + 1}
            </PaginationLink>
          </PaginationItem>
        )}
        <PaginationItem>
          <PaginationNext
            className={`${currentPage < totalPages ? "" : "pointer-events-none bg-gray-100 text-gray-300"} `}
            href={generateDynamicParam(currentPage + 1)}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
