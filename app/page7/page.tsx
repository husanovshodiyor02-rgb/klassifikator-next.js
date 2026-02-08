import Image from "next/image";
import Dt1 from '@/public/dt1.png'

const Page7 = () => {
    const products = [
      {
        id: 1,
        image:
          "/dt2.png",
        company: "“Qizilqumsement” aksiyadorlik jamiyati",
        description:
          "Lorem ipsum dolor sit amet consectetur. Enim mi morbi nunc metus. Eget facilisis quisque nunc mauris dignissim.",
        price: "500 000",
        phone: "+998 90 900 0000",
        weight: 5000,
        date: "23.01.2023",
        time: "10:44",
      },
      {
        id: 2,
        image:
          "/dt3.png",
        company: "“Lorem IPSUM” aksiyadorlik jamiyati",
        description: "Lorem ipsum dolor sit amet consectetur.",
        price: "500 000",
        phone: "+998 90 900 0000",
        weight: 5000,
        date: "23.01.2023",
        time: "10:44",
      },
      {
        id: 3,
        image:
          "/dt4.png",
        company: "“COMPANY NAME” aksiyadorlik jamiyati",
        description:
          "Lorem ipsum dolor sit amet consectetur. Enim mi morbi nunc metus. Eget facilisis quisque nunc mauris dignissim.",
        price: "500 000",
        phone: "+998 90 900 0000",
        weight: 5000,
        date: "23.01.2023",
        time: "10:44",
      },
      {
        id: 4,
        image:
          "/dt5.png",
        company: "“ALL DIN” mas’uliyati cheklangan jamiyati",
        description:
          "Lorem ipsum dolor sit amet consectetur. Enim mi morbi nunc metus. Ullamcorper aliquam malesuada convallis est malesuada neque.",
        price: "500 000",
        phone: "+998 90 900 0000",
        weight: 5000,
        date: "23.01.2023",
        time: "10:44",
      },
      {
        id: 5,
        image:
          "/dt6.png",
        company: "“Mono qurilish” aksiyadorlik jamiyati",
        description:
          "Lorem ipsum dolor sit amet consectetur. Enim mi morbi nunc metus.",
        price: "500 000",
        phone: "+998 90 900 0000",
        weight: 5000,
        date: "23.01.2023",
        time: "10:44",
      },
      {
        id: 6,
        image:
          "/dt7.png",
        company: "“Saltini qurilish” mas’uliyati cheklangan jamiyati",
        description:
          "Lorem ipsum dolor sit amet consectetur. Enim mi morbi nunc metus. Ullamcorper aliquam malesuada convallis est malesuada neque.",
        price: "500 000",
        phone: "+998 90 900 0000",
        weight: 5000,
        date: "23.01.2023",
        time: "10:44",
      },
      {
        id: 7,
        image:
          "/dt8.png",
        company: "“Гильзы кабельные” aksiyadorlik jamiyati",
        description: "Lorem ipsum dolor sit amet consectetur.",
        price: "500 000",
        phone: "+998 90 900 0000",
        weight: 5000,
        date: "23.01.2023",
        time: "10:44",
      },
      {
        id: 8,
        image:
          "/dt9.png",
        company: "“Qizilqumsement” aksiyadorlik jamiyati",
        description: "Lorem ipsum dolor sit amet consectetur.",
        price: "500 000",
        phone: "+998 90 900 0000",
        weight: 5000,
        date: "23.01.2023",
        time: "10:44",
      },
      {
        id: 9,
        image:
          "/dt10.png",
        company: "“Lorem IPSUM” aksiyadorlik jamiyati",
        description:
          "Lorem ipsum dolor sit amet consectetur. Enim mi morbi nunc metus. Eget facilisis quisque nunc mauris dignissim.",
        price: "500 000",
        phone: "+998 90 900 0000",
        weight: 5000,
        date: "23.01.2023",
        time: "10:44",
      },
      {
        id: 10,
        image:
          "/dt11.png",
        company: "“COMPANY NAME” aksiyadorlik jamiyati",
        description:
          "Lorem ipsum dolor sit amet consectetur. Enim mi morbi nunc metus.",
        price: "500 000",
        phone: "+998 90 900 0000",
        weight: 5000,
        date: "23.01.2023",
        time: "10:44",
      },
    ];
  return (
    <div className='bg-[#F4F7FA]'>
      <div className="container1 font-sans text-slate-700">
        <div className="bg-white pb-20 relative">
          
          <div className="mx-auto max-w-300 px-4 py-10">
        
            <div className="flex flex-col gap-10 lg:flex-row">
        
              <div className="flex w-full items-center justify-center gap-4 lg:w-[40%]">
          
                <button className="flex h-10 w-10 shrink-0 items-center justify-center rounded bg-blue-500 text-white shadow-md hover:bg-blue-600 transition-colors">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>

                <div className="flex aspect-square w-full max-w-87.5 items-center justify-center rounded-lg bg-white p-6 shadow-sm">
           
                  <Image
                    src={Dt1}
                    alt="Cement"
                    className="max-h-full max-w-full object-contain"
                  />
                </div>

            
                <button className="flex h-10 w-10 shrink-0 items-center justify-center rounded border border-blue-500 bg-white text-blue-500 shadow-sm hover:bg-blue-50 transition-colors">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>

    
              <div className="w-full lg:w-[60%]">
             
                <div className="mb-4 flex flex-wrap items-center gap-6 text-sm font-medium text-blue-600">
            
                  <div className="flex items-center gap-2">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    <span>#03.2.01.01-0003-000</span>
                  </div>

         
                  <div className="flex items-center gap-2">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                    <span>365</span>
                  </div>

                  <button className="flex items-center gap-2 hover:text-blue-800 transition-colors">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                      />
                    </svg>
                    <span>saqlash</span>
                  </button>
                </div>

          
                <h1 className="mb-6 text-2xl font-bold leading-tight text-[#1E3A8A]">
                  Портландцемент общестроительного назначения <br />
                  бездобавочный М500 Д0 (ЦЕМ I 42,5Н)
                </h1>

             
                <div className="space-y-4 text-sm leading-relaxed text-gray-600">
                  <p>
                    Применение цемента ЦЕМ I 42,5Н Цемент М500 Д0 предназначен
                    для изготовления строительных смесей и бетонов. Цементный
                    раствор отлично подходит для возведения двухэтажных и более
                    высотных зданий. Может применяться для штукатурных и
                    кладочных работ. Данная информация взята с сайта компании
                  </p>
                  <p>
                    <span className="font-bold text-gray-800">М</span> – марка,{" "}
                    <span className="font-bold text-gray-800">500</span> –
                    цифра, показывающая среднюю прочность на сжатие на 28 сутки
                    в кг/см², <span className="font-bold text-gray-800">Д</span>{" "}
                    – наличие добавок в цементе,{" "}
                    <span className="font-bold text-gray-800">0</span> –
                    допустимое количество добавок в % (до 20%),{" "}
                    <span className="font-bold text-gray-800">ЦЕМ I</span> –
                    цемент, содержащий добавки,{" "}
                    <span className="font-bold text-gray-800">42,5</span> –
                    класс прочности на сжатие на 28 сутки, должен быть не менее
                    этого значения,{" "}
                    <span className="font-bold text-gray-800">Н</span> –
                    нормальнотвердеющий.{" "}
                    <span className="font-bold text-gray-800">Цвет:</span> серый
                  </p>
                </div>
              </div>
            </div>

       
            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
        
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <h3 className="mb-4 text-lg font-bold text-[#1E3A8A]">
                  Davlat soliq qo’mitasi
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center border-b border-dashed border-gray-200 pb-2 last:border-0">
                    <span className="text-gray-600">
                      O‘tgan oydagi savdolar hajmi:
                    </span>
                    <span className="font-bold text-gray-900">10</span>
                  </div>
                  <div className="flex justify-between items-center pt-1">
                    <span className="text-gray-600">O‘rtacha narx:</span>
                    <span className="font-bold text-gray-900">25</span>
                  </div>
                </div>
              </div>

              <div className="rounded-lg bg-white p-6 shadow-sm">
                <h3 className="mb-4 text-lg font-bold text-[#1E3A8A]">
                  Tovar xom-ashyo birjasi
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center border-b border-dashed border-gray-200 pb-2 last:border-0">
                    <span className="text-gray-600">
                      O‘tgan oydagi savdolar hajmi (4 hafta):
                    </span>
                    <span className="font-bold text-gray-900">10</span>
                  </div>
                  <div className="flex justify-between items-center pt-1">
                    <span className="text-gray-600">O‘rtacha narx:</span>
                    <span className="font-bold text-gray-900">25</span>
                  </div>
                </div>
              </div>

              <div className="rounded-lg bg-white p-6 shadow-sm">
                <h3 className="mb-4 text-lg font-bold text-[#1E3A8A]">
                  Statistika agentligi
                </h3>
                <div className="text-sm text-gray-500">
                  Ushbu resurs mavjud emas
                </div>
              </div>
            </div>
          </div>

          
          <div className="fixed right-0 top-1/2 z-50 flex origin-bottom-right translate-y-[-50%] translate-x-[42%] -rotate-90 cursor-pointer items-center justify-center rounded-t-lg bg-[#007BFF] px-6 py-2.5 text-white shadow-lg transition-colors hover:bg-blue-600">
            <span className="whitespace-nowrap font-semibold text-sm tracking-wide">
              Tizim bo’yicha qo’llanma
            </span>
          </div>
        </div>
        <div className="p-8">
         
          <div className="mb-6 flex flex-wrap gap-6">
            <div className="flex items-center gap-3">
              <label className="text-sm font-medium text-[#1E3A8A]">
                Shahar / viloyat
              </label>
              <div className="relative">
                <select className="w-40 appearance-none rounded-md bg-white px-3 py-2 text-sm shadow-sm outline-none focus:ring-1 focus:ring-blue-500 cursor-pointer">
                  <option>Barchasi</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
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
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <label className="text-sm font-medium text-[#1E3A8A]">
                Tuman
              </label>
              <div className="relative">
                <select className="w-40 appearance-none rounded-md bg-white px-3 py-2 text-sm shadow-sm outline-none focus:ring-1 focus:ring-blue-500 cursor-pointer">
                  <option>Barchasi</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
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
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

 
          <div className="overflow-hidden rounded-lg bg-white shadow-sm">
            <div className="overflow-x-auto">
              <table className="border-collapse text-left">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-4 text-sm font-bold text-gray-900">
                      №
                    </th>
                    <th className="px-4 py-4 text-sm font-bold text-gray-900">
                      Rasm
                    </th>
                    <th className="px-4 py-4 text-sm font-bold text-gray-900 cursor-pointer group">
                      <div className="flex items-center gap-1">
                        Kompaniya nomi
                        <svg
                          className="h-3 w-3 text-gray-400"
                          fill="currentColor"
                          viewBox="0 0 320 512"
                        >
                          <path d="M137.4 41.4c12.5-12.5 32.8-12.5 45.3 0l128 128c9.2 9.2 11.9 22.9 6.9 34.9s-16.6 19.8-29.6 19.8H32c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9l128-128zm0 429.3l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8H288c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128c-12.5 12.5-32.8 12.5-45.3 0z" />
                        </svg>
                      </div>
                    </th>
                    <th className="px-4 py-4 text-sm font-bold text-gray-900 cursor-pointer">
                      <div className="flex items-center gap-1">
                        E'lon tavsifi
                        <svg
                          className="h-3 w-3 text-gray-400"
                          fill="currentColor"
                          viewBox="0 0 320 512"
                        >
                          <path d="M137.4 41.4c12.5-12.5 32.8-12.5 45.3 0l128 128c9.2 9.2 11.9 22.9 6.9 34.9s-16.6 19.8-29.6 19.8H32c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9l128-128zm0 429.3l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8H288c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128c-12.5 12.5-32.8 12.5-45.3 0z" />
                        </svg>
                      </div>
                    </th>
                    <th className="px-4 py-4 text-center text-sm font-bold text-gray-900">
                      Ser
                      <br />
                      tifi
                      <br />
                      kat
                    </th>
                    <th className="px-4 py-4 text-sm font-bold text-gray-900 cursor-pointer">
                      <div className="flex items-center gap-1">
                        Narxi (so'm)
                        <svg
                          className="h-3 w-3 text-gray-400"
                          fill="currentColor"
                          viewBox="0 0 320 512"
                        >
                          <path d="M137.4 41.4c12.5-12.5 32.8-12.5 45.3 0l128 128c9.2 9.2 11.9 22.9 6.9 34.9s-16.6 19.8-29.6 19.8H32c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9l128-128zm0 429.3l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8H288c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128c-12.5 12.5-32.8 12.5-45.3 0z" />
                        </svg>
                      </div>
                    </th>
                    <th className="px-4 py-4 text-center text-sm font-bold text-gray-900">
                      Kompaniya
                      <br />
                      telefon
                      <br />
                      raqami
                    </th>
                    <th className="px-4 py-4 text-center text-sm font-bold text-gray-900 cursor-pointer">
                      <div className="flex items-center justify-center gap-1">
                        Miqdori,
                        <br />
                        kg
                        <svg
                          className="h-3 w-3 text-gray-400"
                          fill="currentColor"
                          viewBox="0 0 320 512"
                        >
                          <path d="M137.4 41.4c12.5-12.5 32.8-12.5 45.3 0l128 128c9.2 9.2 11.9 22.9 6.9 34.9s-16.6 19.8-29.6 19.8H32c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9l128-128zm0 429.3l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8H288c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128c-12.5 12.5-32.8 12.5-45.3 0z" />
                        </svg>
                      </div>
                    </th>
                    <th className="px-4 py-4 text-center text-sm font-bold text-gray-900 cursor-pointer">
                      <div className="flex items-center justify-center gap-1">
                        Joylan
                        <br />
                        gan vaqt
                        <svg
                          className="h-3 w-3 text-gray-400"
                          fill="currentColor"
                          viewBox="0 0 320 512"
                        >
                          <path d="M137.4 41.4c12.5-12.5 32.8-12.5 45.3 0l128 128c9.2 9.2 11.9 22.9 6.9 34.9s-16.6 19.8-29.6 19.8H32c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9l128-128zm0 429.3l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8H288c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128c-12.5 12.5-32.8 12.5-45.3 0z" />
                        </svg>
                      </div>
                    </th>
                    <th className="px-4 py-4 text-center text-sm font-bold text-gray-900">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {products.map((item) => (
                    <tr
                      key={item.id}
                      className="hover:bg-blue-50 transition-colors"
                    >
                      <td className="px-4 py-4 text-sm font-bold text-gray-800">
                        {item.id}
                      </td>
                      <td className="px-4 py-4">
                        <div className="h-26 w-26 bg-white p-1 shadow-sm rounded flex items-center justify-center">
                          <Image
                            src={item.image}
                            alt="product"
                            className="max-h-full max-w-full object-contain"
                          />
                        </div>
                      </td>
                      <td className="px-4 py-4 w-56">
                        <a
                          href="#"
                          className="text-sm font-medium text-blue-500 underline hover:text-blue-700"
                        >
                          {item.company}
                        </a>
                      </td>
                      <td className="px-4 py-4 w-80 text-xs text-gray-600 leading-relaxed">
                        {item.description}
                      </td>
                      <td className="px-4 py-4 text-center">
                        <button className="text-blue-500 hover:text-blue-700">
                       
                          <svg
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.5}
                              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                            />
                          </svg>
                        </button>
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-800 whitespace-nowrap">
                        {item.price}
                      </td>
                      <td className="px-4 py-4 text-center">
                        <a
                          href={`tel:${item.phone}`}
                          className="text-sm text-blue-500 hover:underline whitespace-nowrap"
                        >
                          {item.phone}
                        </a>
                      </td>
                      <td className="px-4 py-4 text-center text-sm text-gray-800">
                        {item.weight}
                      </td>
                      <td className="px-4 py-4 text-center text-sm text-gray-800 whitespace-nowrap">
                        <div>{item.date}</div>
                        <div className="text-xs text-gray-500">{item.time}</div>
                      </td>
                      <td className="px-4 py-4 text-center">
                        <button className="text-blue-500 hover:text-blue-700 p-2 rounded hover:bg-blue-100">
                       
                          <svg
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.5}
                              d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                            />
                          </svg>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

         
          <div className="mt-8 flex justify-center">
            <div className="flex items-center gap-4 text-sm font-sans">
              <button className="text-gray-500 hover:text-gray-900 transition-colors">
                Oldingi
              </button>

              <div className="flex gap-2">
                <button className="flex h-9 w-9 items-center justify-center rounded bg-blue-500 text-white shadow-md transition-colors">
                  1
                </button>
                <button className="flex h-9 w-9 items-center justify-center rounded bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors">
                  2
                </button>
                <button className="flex h-9 w-9 items-center justify-center rounded bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors">
                  3
                </button>
              </div>

              <button className="text-gray-600 hover:text-gray-900 transition-colors">
                Keyingi
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page7

