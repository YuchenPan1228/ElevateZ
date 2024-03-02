import Link from "next/link"

const NAV_ITEMS = [
    {
        item: "关于",
        src: '/'
    },
    {
        item: "影响力",
        src: '/#impact'
    },
    {
        item: "KOL招募",
        src: '/kol-recruitment',
    },
    {
        item: "KOL奖励",
        src: '/#reward',
    },
    {
        item: "联系",
        src: '/#contact'
    }
]

export default function Navbar() {
    return (
        <header className="bg-black fixed top-0 left-0 w-full py-6 z-10 text-white">
            <div className="max-w-6xl mx-auto flex justify-between items-center">
                <Link 
                href={'/'}
                className="text-2xl">
                    ElevateZ
                </Link>
                <nav className="block">
                    <ul className="gap-x-10 flex">
                        {
                            NAV_ITEMS.map((item) => (
                                <li key={item.src}>
                                    <Link href={item.src} className="hover:bg-gradient-to-r hover:from-fuchsia-600 hover:to-purple-600 hover:bg-clip-text hover:text-transparent">
                                        {item.item}
                                    </Link>
                                </li>
                            ))
                        }

                    </ul>

                </nav>
                <Link href={'/#contact'} 
                className="py-2 px-4 bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white rounded-xl text-sm font-bold">
                    现在申请
                </Link>


            </div>
        </header>
    )
}