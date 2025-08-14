"use client"

import useCartStore from "@/store/cartStore";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiSearch, FiShoppingCart, FiUser, FiX } from "react-icons/fi";

function NavBar() {
    const navLinks = [
        { label: "Home", url: "/" },
        { label: "About Us", url: "/#about-us" },
        { label: "Shop", url: "/shop" },
        { label: "Customize your Cake", url: "/#customize" },
        { label: "Bakery Items", url: "/bakery-items" },
        { label: "FAQs", url: "/#faqs" },
        { label: "Contact Us", url: "/#about-us" },
    ];

    const [menuOpen, setMenuOpen] = useState(false);

    const cartCount = useCartStore((state) => state.cart.length);

    return (
        <header className="w-full bg-white shadow-md z-50 relative lg:px-9">
            <div className="max-w-[1920px] mx-auto flex items-center justify-between px-6 md:w-full
                md:px-2 md:mx-0  py-[22px] h-[108px]">

                {/* Logo */}
                <div className="flex items-center">
                    <Image
                        src="/logo.png"
                        alt="Logo"
                        width={80}
                        height={80}
                        className="object-contain"
                        priority
                    />
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex gap-[45px]">
                    {navLinks.map(({ label, url }) => (
                        <Link
                            key={label}
                            href={url}
                            className="text-[16px] font-poppins font-medium leading-none tracking-normal hover:text-[#8C1C32] transition-colors"
                        >
                            {label}
                        </Link>
                    ))}
                </nav>

                {/* Icons */}
                <div className="flex items-center justi-center gap-4 md:ml-2 md:gap-3">
                    <FiSearch className="text-[#353147] text-xl cursor-pointer hover:text-[#8C1C32]" />
                    <Link href={"/cart"} className="relative">
                        <FiShoppingCart className="text-[#353147] text-xl cursor-pointer hover:text-[#8C1C32]" />
                        {cartCount > 0 && (
                            <span className="absolute -top-2 -right-2 bg-[#8C1C32] text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                                {cartCount}
                            </span>
                        )}
                    </Link>
                    <FiUser className="text-[#353147] text-xl cursor-pointer hover:text-[#8C1C32]" />

                    {/* Mobile Menu Toggle */}
                    <div className="md:hidden">
                        {menuOpen ? (
                            <FiX
                                onClick={() => setMenuOpen(false)}
                                className="text-2xl cursor-pointer"
                            />
                        ) : (
                            <FiMenu
                                onClick={() => setMenuOpen(true)}
                                className="text-2xl cursor-pointer"
                            />
                        )}
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            {menuOpen && (
                <div className="md:hidden flex flex-col items-start gap-4 px-6 pb-6 bg-white shadow-md">
                    {navLinks.map(({ label, url }) => (
                        <Link
                            key={label}
                            href={url}
                            onClick={() => setMenuOpen(false)}
                            className="text-black text-[16px] font-medium font-poppins hover:text-[#8C1C32] transition-colors"
                        >
                            {label}
                        </Link>
                    ))}
                </div>
            )}
        </header>
    );
}
export default NavBar