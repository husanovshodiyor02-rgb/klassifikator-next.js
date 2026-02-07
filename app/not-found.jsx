"use client"; 

import Link from "next/link";
import { useRouter } from "next/navigation"; 

export default function NotFoundPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#F4F7FA] px-6 text-center font-sans">
    
      <div className="relative mb-8 flex items-center justify-center">
     
        <h1 className="absolute text-[140px] font-black text-gray-200 select-none sm:text-[220px]">
          404
        </h1>

        <div className="relative z-10 animate-bounce-slow">
          <svg
            className="w-48 h-48 sm:w-80 sm:h-80"
            viewBox="0 0 500 500"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            
            <path
              d="M250 400C332.843 400 400 332.843 400 250C400 167.157 332.843 100 250 100C167.157 100 100 167.157 100 250C100 332.843 167.157 400 250 400Z"
              fill="#EBF4FF"
            />
            <path
              d="M180 230C180 230 190 260 220 260C250 260 260 230 260 230"
              stroke="#3B82F6"
              strokeWidth="12"
              strokeLinecap="round"
            />
            <circle cx="175" cy="180" r="15" fill="#1E3A8A" />
            <circle cx="325" cy="180" r="15" fill="#1E3A8A" />
            <path
              d="M300 240L360 300M360 240L300 300"
              stroke="#EF4444"
              strokeWidth="12"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>

     
      <div className="relative z-10 max-w-md space-y-4">
        <h2 className="text-3xl font-bold text-[#1E3A8A] sm:text-4xl">
          Sahifa topilmadi
        </h2>
        <p className="text-gray-500 text-lg">
          Uzr, siz qidirayotgan sahifa mavjud emas yoki boshqa manzilga
          ko‘chirilgan bo‘lishi mumkin.
        </p>
      </div>


      <div className="z-10 mt-8 flex flex-col gap-4 sm:flex-row">
   
        <button
          onClick={() => router.back()}
          className="flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-700 shadow-sm transition-all hover:bg-gray-50 hover:shadow-md active:scale-95"
        >
          <svg
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Orqaga qaytish
        </button>

    
        <Link
          href="/"
          className="flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-200 transition-all hover:bg-blue-700 hover:shadow-xl active:scale-95"
        >
          <svg
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
          Bosh sahifa
        </Link>
      </div>

      <div className="text-xs text-gray-400 my-5">
        Agarda bu xatolik deb o‘ylasangiz, iltimos biz bilan bog‘laning.
      </div>
    </div>
  );
}
