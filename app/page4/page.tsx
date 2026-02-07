
import {
  Grid3X3,
  LayoutList,
  LayoutGrid,
  Bookmark,
  ShoppingBag,
} from "lucide-react";
import C1 from "@/public/img/c1.png";
import C2 from "@/public/img/c2.png";
import C3 from "@/public/img/c3.png";
import C4 from "@/public/img/c4.png";
import C5 from "@/public/img/c5.png";
import C6 from "@/public/img/c6.png";
import C7 from "@/public/img/c7.png";
import C8 from "@/public/img/c8.png";
import C9 from "@/public/img/c9.png";
import C10 from "@/public/img/c10.png";
import C11 from "@/public/img/c11.png";
import C12 from "@/public/img/c12.png";
import C13 from "@/public/img/c13.png";
import C14 from "@/public/img/c14.png";
import C15 from "@/public/img/c15.png";
import Image from "next/image";
import Link from "next/link";

const products = [
  {
    id: 1,
    code: "#02.02.02.01-1000",
    title:
      "Удаляемый герметизирующий компаунд для повторного сращивания кабеля",
    image: C1,
    isPrimary: false,
  },
  {
    id: 2,
    code: "#02.02.02.01-1000",
    title: "Глина бентонитовая",
    image: C2,
    isPrimary: false,
  },
  {
    id: 3,
    code: "#02.02.02.01-1000",
    title:
      "Удаляемый герметизирующий компаунд для повторного сращивания кабеля",
    image: C3,
    isPrimary: false,
  },
  {
    id: 4,
    code: "#01.01.01.01-0002",
    title:
      "Изделия с армирующими материалами на основе стеклоткани, пришитыми к стеклоизоляционному слою марки",
    image: C4,
    isPrimary: false,
  },
  {
    id: 5,
    code: "#02.02.02.01-1000",
    title:
      "Удаляемый герметизирующий компаунд для повторного сращивания кабеля",
    image: C5,
    isPrimary: false,
  },
  {
    id: 6,
    code: "#02.02.02.01-1000",
    title: "Глина бентонитовая",
    image: C6,
    isPrimary: false,
  },
  {
    id: 7,
    code: "#02.02.02.01-1000",
    title:
      "Удаляемый герметизирующий компаунд для повторного сращивания кабеля",
    image: C7,
    isPrimary: false,
  },
  {
    id: 8,
    code: "#02.02.02.01-1000",
    title: "Изделия с армирующими материалами на основе стеклоткани...",
    image: C8,
    isPrimary: false,
  },
  {
    id: 9,
    code: "#02.02.02.01-1000",
    title:
      "Удаляемый герметизирующий компаунд для повторного сращивания кабеля",
    image: C9,
    isPrimary: false,
  },
  {
    id: 10,
    code: "#02.02.02.01-1000",
    title: "Глина бентонитовая",
    image: C10,
    isPrimary: false,
  },
  {
    id: 11,
    code: "#02.02.02.01-1000",
    title:
      "Удаляемый герметизирующий компаунд для повторного сращивания кабеля",
    image: C11,
    isPrimary: false,
  },
  {
    id: 12,
    code: "#01.01.01.01-0002",
    title:
      "Изделия с армирующими материалами на основе стеклоткани, пришитыми к стеклоизоляционному слою марки",
    image: C12,
    isPrimary: false,
  },
  {
    id: 13,
    code: "#02.02.02.01-1000",
    title:
      "Удаляемый герметизирующий компаунд для повторного сращивания кабеля",
    image: C13,
    isPrimary: false,
  },
  {
    id: 14,
    code: "#02.02.02.01-1000",
    title: "Глина бентонитовая",
    image: C14,
    isPrimary: false,
  },
  {
    id: 15,
    code: "#02.02.02.01-1000",
    title:
      "Удаляемый герметизирующий компаунд для повторного сращивания кабеля",
    image: C15,
    isPrimary: false,
  },
];
const Page4 = () => {
  return (
    <div className="min-h-screen bg-[#F4F7F9] relative font-sans text-slate-800 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-bold text-[#1E3A8A] uppercase">
            Qurilish
            <span className="border-b-4 border-blue-400 pb-1">
              materiallari
            </span>
          </h1>
        </div>

        <div className="space-y-5 mb-12">
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-600">
              Tanlangan mahsulot turi
            </label>
            <div className="w-full rounded-md bg-white px-4 py-3 text-gray-700 shadow-sm">
              Materiallar
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-600">
              Tanlangan kategoriya
            </label>
            <div className="w-full rounded-md bg-white px-4 py-3 text-gray-700 shadow-sm">
              Beton qorishmalari
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-600">
              Tanlangan guruh
            </label>
            <div className="w-full rounded-md bg-white px-4 py-3 text-gray-700 shadow-sm">
              Barcha guruhlar
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-4 border-t pt-6 sm:flex-row sm:items-end">
          <div>
            <h2 className="inline-block border-b-4 border-blue-400 pb-1 text-xl font-bold text-[#1E3A8A] uppercase">
              Mahsulotlar
            </h2>
            <p className="mt-1 text-sm text-gray-500">2548 natija topildi</p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="flex items-center gap-3">
              <span className="text-sm font-semibold text-[#1E3A8A]">
                Shahar / viloyat
              </span>
              <div className="relative flex w-40 items-center justify-between rounded-md bg-white px-3 py-2 text-sm text-gray-600 shadow-sm cursor-pointer">
                Barchasi
                <svg
                  className="h-4 w-4 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-sm font-semibold text-[#1E3A8A]">
                Tuman
              </span>
              <div className="relative flex w-40 items-center justify-between rounded-md bg-white px-3 py-2 text-sm text-gray-600 shadow-sm cursor-pointer">
                Barchasi
                <svg
                  className="h-4 w-4 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-50 hidden sm:block">
        <button
          className="bg-blue-600 text-white py-4 px-1 rounded-l-md font-medium text-sm shadow-lg hover:bg-blue-700 transition"
          style={{ writingMode: "vertical-rl" }}
        >
          Tizim bo'yicha qo'llanma
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="mb-6">
          <div className="flex gap-2 mt-10 mb-6">
            <Link href="/">
              <button className="p-2 text-slate-500 hover:text-slate-700 hover:bg-slate-200 rounded transition">
                <LayoutList size={24} />
              </button>
            </Link>
            <Link href="/page1">
              <button className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
                <LayoutGrid size={24} />
              </button>
            </Link>
            <Link href="/page2">
              <button className="p-2 text-slate-500 hover:text-slate-700 hover:bg-slate-200 rounded transition">
                <Grid3X3 size={24} />
              </button>
            </Link>
          </div>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((item) => (
            <div
              key={item.id}
              className="bg-white p-4 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col h-full border border-transparent hover:border-blue-100"
            >
              <div className="h-48 w-full mb-4 flex items-center justify-center overflow-hidden rounded-md bg-white">
                <Image
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-contain hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="flex justify-between items-start mb-3">
                <span className="bg-blue-100 text-slate-700 text-[10px] sm:text-xs font-bold px-2 py-1 rounded">
                  {item.code}
                </span>
                <button className="text-slate-400 hover:text-blue-600 transition">
                  <Bookmark size={20} />
                </button>
              </div>

              <h3 className="text-sm font-bold text-slate-800 leading-snug mb-4 grow line-clamp-3">
                {item.title}
              </h3>

              <div className="flex gap-3 mt-auto">
                <button
                  className={`flex-1 py-2.5 px-4 rounded-md font-semibold text-sm transition-colors border bg-white hover:bg-blue-600 hover:text-white
                ${
                  item.isPrimary
                    ? "bg-blue-500 text-white border-blue-500 hover:bg-blue-600"
                    : "bg-white text-slate-700 border-slate-300 hover:border-blue-500 hover:text-blue-600"
                }`}
                >
                  Ko‘rish
                </button>

                <button className="p-2.5 rounded-md border border-slate-300 text-slate-500 hover:text-blue-600 hover:border-blue-500 transition-colors bg-white">
                  <ShoppingBag size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-4 font-sans text-sm">
          <span className="text-gray-500 cursor-pointer hover:text-gray-700">
            Oldingi
          </span>
          <div className="flex gap-2">
            <button className="flex h-9 w-9 items-center justify-center rounded-md bg-blue-500 text-white shadow-sm">
              1
            </button>

            <button className="flex h-9 w-9 items-center justify-center rounded-md bg-gray-200 text-gray-700 hover:bg-gray-300">
              2
            </button>

            <button className="flex h-9 w-9 items-center justify-center rounded-md bg-gray-200 text-gray-700 hover:bg-gray-300">
              3
            </button>
          </div>

          <span className="text-gray-500 cursor-pointer hover:text-gray-700">
            Keyingi
          </span>
        </div>
      </div>
    </div>
  );
}

export default Page4