

const Page6 = () => {
  return (
    <div className="min-h-screen relative bg-[#F4F7FA] font-sans text-slate-700 pb-20">
      <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-50 hidden sm:block">
        <button
          className="bg-blue-600 text-white py-4 px-1 rounded-l-md font-medium text-sm shadow-lg hover:bg-blue-700 transition"
          style={{ writingMode: "vertical-rl" }}
        >
          Tizim bo'yicha qo'llanma
        </button>
      </div>
    
      <div className="mx-auto max-w-6xl px-6 pt-10">
        
        <div className="mb-10 text-center">
          <h1 className="inline-block border-b-4 border-blue-500 pb-1 text-2xl font-bold uppercase text-[#1E3A8A]">
            Qidiruv
          </h1>
        </div>

    
        <div className="space-y-6">
        
          <div>
            <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-slate-500">
              Qidiruv maydoni
            </label>
            <div className="w-full rounded-md bg-white px-4 py-3 shadow-sm text-gray-700">
              Knauf beton...
            </div>
          </div>

          
          <div>
            <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-slate-500">
              Tanlangan mahsulot turi
            </label>
            <div className="relative flex w-full items-center justify-between rounded-md bg-white px-4 py-3 shadow-sm text-gray-700 cursor-pointer">
              <span>Materiallar</span>
              
              <svg
                className="h-5 w-5 text-gray-400"
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

        
        <div className="mt-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-end border-b border-transparent pb-2">
          
          <div>
            <h2 className="inline-block border-b-4 border-blue-500 pb-1 text-xl font-bold uppercase text-[#1E3A8A]">
              Qidiruv natijalari
            </h2>
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

        
        <div className="mt-8">
          <p className="text-lg font-medium text-[#5A6B88]">
            Sizning so’rovingizga mos natija topilmadi
          </p>
        </div>
      </div>

      
      <div className="fixed right-0 top-2/3 flex h-auto origin-bottom-right translate-y-[-50%] -rotate-90 translate-x-[40%] transform items-center justify-center rounded-t-lg bg-[#007BFF] px-5 py-2 text-white shadow-lg cursor-pointer hover:bg-blue-600 transition-colors">
        <span className="whitespace-nowrap font-medium text-sm">
          Tizim bo’yicha qo’llanma
        </span>
      </div>
    </div>
  );
}

export default Page6
