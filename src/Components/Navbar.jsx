import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const navigation = [
  { name: "Home", to: "/" },
  { name: "About", to: "/about" },
  { name: "Project", to: "/project" },
  { name: "Education", to: "/education" },
  { name: "Skills", to: "/skills" },
  { name: "Contact", to: "/contact" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <Disclosure
      as="nav"
      className="bg-gradient-to-r from-gray-900 to-gray-700 fixed top-0 w-full z-50 font-display text-lg"
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center">
                <Link to="/" className="flex items-center space-x-2">
                  <img className="h-8 w-[100px]" src="./sign.png" alt="Logo" />
                  <span className="text-white text-2xl font-bold">
                    MyPortfolio
                  </span>
                </Link>
              </div>

              <div className="hidden sm:block">
                <div className="flex space-x-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.to}
                      className="text-white hover:text-yellow-400 px-3 py-2 rounded-md text-lg font-display font-semibold transition-colors duration-300"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="sm:hidden">
                <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </DisclosureButton>
              </div>
            </div>
          </div>
<DisclosurePanel className="sm:hidden">
  <div className="space-y-1 px-2 pt-2 pb-3">
    {navigation.map((item) => (
      <DisclosureButton
        key={item.name}
        as={Link}
        to={item.to}
        className="block rounded-md px-3 py-2 text-lg text-white hover:text-yellow-400 font-display font-semibold"
      >
        {item.name}
      </DisclosureButton>
    ))}
  </div>
</DisclosurePanel>

        </>
      )}
    </Disclosure>
  );
}
