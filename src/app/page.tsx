import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import img from "./image.png"
import CardCarousel from "@/components/CardCaroussel"
import BellIcon from "@/components/icons/BellIcon"
import Package2Icon from "@/components/icons/Package2Icon"
import HomeIcon from "@/components/icons/HomeIcon"
import ShoppingBagIcon from "@/components/icons/ShoppingBag"
import UsersIcon from "@/components/icons/UsersIcon"
import SearchIcon from "@/components/icons/SearchIcon"


export default function Component() {
  return (
    <div className="grid min-h-screen bg-white md:grid-cols-[250px_1fr] dark:bg-gray-800">
      <div className="flex flex-col border-r bg-gray-50 md:bg-transparent md:border-r-0 border-gray-200 dark:border-gray-800 m-6">
        <div className="flex items-center h-16 px-4 border-b md:px-6">
          <Link className="flex items-center gap-2 text-lg font-semibold" href="#">
            <Package2Icon className="w-6 h-6" />
            <span className="sr-only">Acme Inc</span>
          </Link>
        </div>
        <nav className="flex-1">
          <div className="grid w-full items-stretch">
            <Link className="flex items-center gap-4 p-4 text-sm font-medium text-gray-500 dark:text-gray-400" href="#">
              <HomeIcon className="w-4 h-4" />
              Home
            </Link>
            <Link className="flex items-center gap-4 p-4 text-sm font-medium text-gray-500 dark:text-gray-400" href="#">
              <ShoppingBagIcon className="w-4 h-4" />
              Products
            </Link>
            <Link className="flex items-center gap-4 p-4 text-sm font-medium text-gray-500 dark:text-gray-400" href="#">
              <UsersIcon className="w-4 h-4" />
              Customers
            </Link>
          </div>
        </nav>
      </div>
      <div className="flex flex-col w-full">
        <header className="flex items-center h-16 px-4 border-b md:px-6 mt-6">
          <form className="flex-1">
            <div className="flex items-center h-8 rounded-lg bg-gray-100/50 dark:bg-gray-800/50">
              <SearchIcon className="ml-2.5 mr-2.5 w-4 h-4 text-gray-500 dark:text-gray-400" />
              <Input className="w-full h-8 rounded-lg text-sm bg-transparent" placeholder="Search..." type="search" />
            </div>
          </form>
          <Button className="rounded-full ml-auto" size="icon" variant="ghost">
            <BellIcon className="w-4 h-4" />
            <span className="sr-only">Toggle notifications</span>
          </Button>
          <Button className="rounded-full" size="icon" variant="ghost">
            <Image
              alt="Avatar"
              className="rounded-full"
              height="32"
              src={img}
              style={{
                aspectRatio: "32/32",
                objectFit: "cover",
              }}
              width="32"
            />
            <span className="sr-only">Toggle user menu</span>
          </Button>
        </header>
        <main className="flex-1 p-4 md:p-6 m-16">
          <div className="grid w-full gap-4 md:grid-cols-3 md:gap-6">
            <div className="flex flex-col gap-2 md:col-span-2">
              <h1 className="text-2xl font-semibold">Search results</h1>
              <p className="text-sm text-gray-500 dark:text-gray-400">Showing results for acme inc</p>
            </div>
            <div className="flex items-center justify-end gap-2 text-right md:text-left md:col-start-3 md:col-span-1">
              <Button variant="outline">Add Product</Button>
            </div>
          </div>
          <div className="m-24 flex-1 flex items-center justify-center">
            <div>
              <CardCarousel />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}