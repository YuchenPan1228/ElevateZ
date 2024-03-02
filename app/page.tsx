'use client'

export default function Home() {
  return (
    <main className="mt-44 max-w-5xl mx-auto">
      <div className="px-12 ">
        <h1 className="text-9xl font-bold bg-gradient-to-r from-fuchsia-600 to-pink-600 bg-clip-text text-transparent">
          ElevateZ
        </h1>
        <h1 className="flex text-6xl font-bold text-white text-right">
          一站式AI教育平台
          <span className="ml-1.5 block">| 全球KOL征集令</span>
        </h1>
      </div>
      <div className="py-40 text-center">
        <button
          className="py-2 px-4 bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white rounded-xl text-sm font-bold">
          现在申请


        </button>
      </div>
      <div className="mt-12">
        <h2>
          ElevateZ与
        </h2>
      </div>

      <section className="mt-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl text-white text-center">

            <span className="font-bold bg-gradient-to-r from-fuchsia-600 to-pink-600 bg-clip-text text-transparent">
              ElevateZ
            </span>
            是什么？
          </h2>
        </div>
      </section>


      <section className="mt-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl text-white text-center">

            <span className="font-bold bg-gradient-to-r from-fuchsia-600 to-pink-600 bg-clip-text text-transparent">
              ElevateZ
            </span>
            的影响力
          </h2>
        </div>
      </section>
    </main>
  );
}
