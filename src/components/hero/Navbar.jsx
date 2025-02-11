import React from 'react'
import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
    { name: 'Home', id:'Home', href:"/" },
    { name: 'Reviews', id:'menu', href:"#reviews"},
    { name: 'Menu', id:'about', href:"#full-menu" },
    { name: 'Contact Us', id:'contact', href:"#contact" },
  ]  

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  return (
    <header className="inset-x-0 top-0 z-50 absolute">
        <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1  lg:items-center">
            <a href="/" className="ml-1.5 p-1.5">
              <h2 className='text-3xl font-semibold text-gray-900'>Diamond<span className='text-primary'>Pizza</span></h2>
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12 lg:justify-center lg:items-center">
            {navigation.map((item) => (
              <div key={item.name} onClick={() =>  window.location.href = `${item.href}`} className="text-lg font-semibold text-gray-800 hover:underline hover:text-gray-700">
                {item.name}
              </div>
            ))}
          </div>
          <div onClick={() =>  window.location.href = "#full-menu"} className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center ">
            <a className="btn-primary relative cursor-pointer group transition-all">
            View Our Menu <span className='absolute right-0 opacity-0 group-hover:opacity-100' aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">

            <a href="#" className="ml-1.5 p-1.5">
              <h2 className='text-2xl font-semibold text-gray-900'>Diamond<span className='text-2xl font-bold text-primary'>Pizza</span></h2>
            </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      onClick={() => {setMobileMenuOpen(false),smoothScroll(item.id)}}
                      
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-800 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>

                <div className="py-6">
                  <a
                  onClick={() => {setMobileMenuOpen(false),smoothScroll('Contact')}}
                    className="-mx-3 block btn-primary"
                  >
                    View Our Menu <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>

              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
  )
}

export default Navbar