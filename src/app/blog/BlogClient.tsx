"use client";
import { useRouter, useSearchParams } from "next/navigation";

interface BlogClientProps {
  currentPage: number;
  totalPages: number;
}

export default function BlogClient({ currentPage, totalPages }: BlogClientProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handlePageChange = (newPage: number) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', newPage.toString());
    router.push(`/blog?${params.toString()}`);
  };

  return (
    <div className="flex justify-center gap-2 mt-8">
      <button
        className="btn btn-sm btn-outline"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Anterior
      </button>
      <span className="text-white px-2">Página {currentPage} de {totalPages}</span>
      <button
        className="btn btn-sm btn-outline"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages || totalPages === 0}
      >
        Siguiente
      </button>
    </div>
  );
} 