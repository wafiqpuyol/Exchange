"use client"
import { Logo, SearchIcon } from "@/components/icons"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export const TopBar = () => {
    const pathname = usePathname();

    return (
        <div className="bg-black px-5 py-3 flex justify-between items-center fixed w-full z-50">
            <div className="flex items-center gap-12">
                <Link href="/">
                    <div className="flex items-center gap-2">
                        <Logo />
                        <p className="text-white text-lg font-bold">Backpack</p>
                    </div>
                </Link>

                <div className="flex gap-10 items-center">
                    <Link href="/"
                        className={`font-[600] text-[15px] transition-all duration-200 ${pathname === "/" ? 'text-white hover:text-gray-200' : 'text-gray-400 hover:text-gray-500'}`}
                    >
                        Markets
                    </Link>

                    <Link href="/trade"
                        className={`font-[600] text-[15px] transition-all duration-200 ${pathname === "/trade" ? 'text-white hover:text-gray-200' : 'text-gray-400 hover:text-gray-500'}`}
                    >
                        Trade
                    </Link>

                    <div className="bg-gray-500 bg-opacity-30 w-60 px-3 py-1 rounded-xl flex items-center gap-[4px] justify-center">
                        <SearchIcon className="text-gray-400" />
                        <Input
                            name="search"
                            type="text"
                            placeholder="Search markets"
                            className="bg-transparent text-base text-white"
                        />
                    </div>
                </div>
            </div>

            <div className="flex gap-5">
                <Button
                    className="bg-green-600 text-green-500 bg-opacity-30 text-[15px] px-3 rounded-md py-1 transition-all duration-200 hover:text-green-600"
                >
                    <Link href="/signup"> Sign up</Link>
                </Button>

                <Button
                    className="bg-blue-600 text-blue-500 bg-opacity-30 text-[15px] px-3 rounded-md py-1 transition-all duration-200 hover:text-blue-600"
                >
                    <Link href="/signin"> Sign in</Link>
                </Button>
            </div>
        </div>
    )
}
