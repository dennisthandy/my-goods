'use client';
import { stuff } from '@/utils/data';
import dayjs from 'dayjs';
import 'dayjs/locale/id'
import { getAge } from '@/utils/common';
import StuffSlider from '@/components/StuffSlider';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 lg:p-24">
      <section className="mb-8 lg:mb-12">
        <h1 className="font-bold text-lg lg:text-2xl">
          Dennis Thandy <i>GOODS</i> 🛍️
        </h1>
      </section>
      <section className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {stuff.map(
          ({
            category,
            color,
            description,
            images,
            link,
            manufacture,
            name,
            orderDate,
            isLocal,
          }) => (
            <div
              key={name}
              className={[isLocal ? 'local-pride' : '', 'overflow-hidden'].join(
                ' '
              )}
            >
              <StuffSlider data={images} />
              <div className="flex items-center justify-between mt-3">
                <h4 className="flex items-center font-semibold uppercase">
                  <div className="border rounded-full w-5 h-5 mr-2" style={{backgroundColor: color}}/>
                  <a
                    href={link}
                    target="_blank"
                    className="hover:text-blue-400 hover:underline"
                  >
                    {name}
                  </a>
                </h4>
                <span className="border px-3 py-0.5 rounded-full text-xs bg-blue-500">
                  {category}
                </span>
              </div>
              <p className="max-w-xs my-2 text-sm">{description}</p>
              <ul className="text-sm">
                <li>
                  <p>
                    Tanggal Pesan:{' '}
                    <span className="font-semibold">
                      {dayjs(orderDate).locale('id').format('MMMM DD, YYYY')}
                    </span>
                  </p>
                </li>
                <li>
                  <p>
                    Usia:{' '}
                    <span className="font-semibold">{getAge(orderDate)}</span>
                  </p>
                </li>
                <li>
                  <p>
                    Produsen:{' '}
                    <a
                      href={manufacture.url}
                      className="hover:text-blue-400 hover:underline font-semibold"
                      target="_blank"
                    >
                      {manufacture.name}
                    </a>
                  </p>
                </li>
              </ul>
            </div>
          )
        )}
      </section>
    </main>
  );
}
