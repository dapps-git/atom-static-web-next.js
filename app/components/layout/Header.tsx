"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Menu, X, ChevronRight, MessageCircle, Smartphone, AtSign, Navigation } from "lucide-react";
import Image from "next/image";
import { contactInfo, navLinks } from "@/app/data/contactData";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();

    // Get active tab based on pathname
    const getActiveTab = () => {
        const currentLink = navLinks.find(link => {
            if (link.href === "/") return pathname === "/";
            return pathname.startsWith(link.href);
        });
        return currentLink?.name || "Home";
    };

    const activeTab = getActiveTab();

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu on resize
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setIsOpen(false);
            }
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    return (
        <header className="w-full font-sans fixed top-0 left-0 right-0 z-50">
            {/* --- TOP BAR --- */}
            <motion.div
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-r from-[#EB1414] to-[#C00E0E] text-white py-2 sm:py-2.5 px-4 sm:px-6 md:px-8 lg:px-12"
            >
                <div className="max-w-[1400px] mx-auto flex flex-wrap justify-center items-center gap-3 sm:gap-4 md:gap-0 text-[11px] sm:text-[12px] md:text-[13px] font-medium">
                    {/* Phone - WhatsApp Link */}
                    <a
                        href={contactInfo.whatsapp.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 sm:gap-2 hover:opacity-80 transition-opacity"
                    >
                        <Smartphone size={14} className="sm:w-[15px] sm:h-[15px]" strokeWidth={2.5} />
                        <span>{contactInfo.phone}</span>
                    </a>

                    <div className="hidden md:block h-4 w-[1px] bg-white/30 mx-4 lg:mx-8" />

                    {/* Email */}
                    <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-1.5 sm:gap-2 hover:opacity-80 transition-opacity">
                        <AtSign size={14} className="sm:w-[15px] sm:h-[15px]" strokeWidth={2.5} />
                        <span className="hidden xs:inline">{contactInfo.email}</span>
                        <span className="xs:hidden">Email Us</span>
                    </a>

                    <div className="hidden md:block h-4 w-[1px] bg-white/30 mx-4 lg:mx-8" />

                    {/* Location - Google Maps Link */}
                    <a
                        href={contactInfo.maps.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden sm:flex items-center gap-1.5 sm:gap-2 hover:opacity-80 transition-opacity"
                    >
                        <Navigation size={14} className="sm:w-[15px] sm:h-[15px]" strokeWidth={2.5} />
                        <span>Calicut Road, Valanchery</span>
                    </a>
                </div>
            </motion.div>

            {/* --- MAIN NAVIGATION --- */}
            <nav
                className={`bg-white transition-all duration-300 ${isScrolled
                    ? "shadow-lg shadow-gray-200/50 border-b border-gray-100"
                    : "shadow-sm border-b border-gray-100"
                    }`}
            >
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 h-16 sm:h-18 md:h-20 flex justify-between items-center">

                    {/* Logo */}
                    <motion.div
                        className="flex-shrink-0"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <Link href="/" className="flex items-center">
                            <Image
                                src="/logo.png"
                                alt="Atom Logo"
                                width={130}
                                height={100}
                                className="w-[100px] sm:w-[115px] md:w-[130px] h-auto"
                                priority
                            />
                        </Link>
                    </motion.div>

                    {/* Desktop Nav Links */}
                    <div className="hidden lg:flex items-center gap-5 xl:gap-7">
                        {navLinks.map((link) => {
                            const isActive = activeTab === link.name;
                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="relative group py-2"
                                >
                                    <span className={`text-[15px] xl:text-[16px] font-semibold transition-colors duration-300 ${isActive ? "text-[#EB1414]" : "text-gray-800 group-hover:text-[#EB1414]"
                                        }`}>
                                        {link.name}
                                    </span>
                                    {/* Animated Underline */}
                                    {isActive ? (
                                        <motion.div
                                            layoutId="activeNavUnderline"
                                            className="absolute -bottom-0.5 left-0 right-0 h-[3px] bg-[#EB1414] rounded-full"
                                            transition={{
                                                type: "spring",
                                                stiffness: 400,
                                                damping: 30,
                                                mass: 1
                                            }}
                                        />
                                    ) : (
                                        <span className="absolute -bottom-0.5 left-0 w-0 h-[3px] bg-[#EB1414]/40 rounded-full transition-all duration-300 group-hover:w-full" />
                                    )}
                                </Link>
                            );
                        })}
                    </div>

                    {/* WhatsApp Button & Mobile Toggle */}
                    <div className="flex items-center gap-3 sm:gap-4">
                        <motion.a
                            href={contactInfo.whatsapp.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            className="hidden md:flex items-center gap-2 cursor-pointer bg-black text-white px-5 lg:px-6 py-2 lg:py-2.5 rounded-md font-bold text-sm lg:text-base hover:shadow-lg transition-all duration-300"
                        >
                            <MessageCircle size={18} />
                            <span className="hidden xl:inline">Connect Us</span>
                        </motion.a>

                        <motion.button
                            whileTap={{ scale: 0.9 }}
                            className="lg:hidden p-2 text-gray-800 hover:bg-gray-100 rounded-lg transition-colors"
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label="Toggle menu"
                        >
                            <AnimatePresence mode="wait" initial={false}>
                                {isOpen ? (
                                    <motion.div
                                        key="close"
                                        initial={{ rotate: -90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: 90, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <X size={26} />
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="menu"
                                        initial={{ rotate: 90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: -90, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <Menu size={26} />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.button>
                    </div>
                </div>

                {/* --- MOBILE MENU --- */}
                <AnimatePresence>
                    {isOpen && (
                        <>
                            {/* Backdrop */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setIsOpen(false)}
                                className="lg:hidden fixed inset-0 top-[calc(4rem+2.5rem)] bg-black/40 z-40"
                            />

                            {/* Menu Panel */}
                            <motion.div
                                initial={{ opacity: 0, x: "100%" }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: "100%" }}
                                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                                className="lg:hidden fixed right-0 top-[calc(4rem+2.5rem)] w-[85%] max-w-[320px] h-[calc(100vh-6.5rem)] bg-white shadow-2xl z-50 overflow-y-auto"
                            >
                                <div className="flex flex-col p-5 sm:p-6 gap-1">
                                    {navLinks.map((link, index) => {
                                        const isActive = activeTab === link.name;
                                        return (
                                            <motion.div
                                                key={link.name}
                                                initial={{ opacity: 0, x: 20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: index * 0.05 }}
                                            >
                                                <Link
                                                    href={link.href}
                                                    onClick={() => setIsOpen(false)}
                                                    className={`flex items-center justify-between text-base sm:text-lg font-semibold p-3.5 sm:p-4 rounded-lg transition-all duration-200 ${isActive
                                                        ? "bg-[#EB1414] text-white"
                                                        : "text-black hover:bg-black/5"
                                                        }`}
                                                >
                                                    <span>{link.name}</span>
                                                    <ChevronRight
                                                        size={18}
                                                        className={`transition-transform ${isActive ? "text-white" : "text-black/40"}`}
                                                    />
                                                </Link>
                                            </motion.div>
                                        );
                                    })}

                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3 }}
                                        className="mt-6 pt-6 border-t border-black/10"
                                    >
                                        <a
                                            href={contactInfo.whatsapp.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-full flex items-center justify-center gap-2.5 bg-black text-white py-3.5 sm:py-4 rounded-lg font-bold text-base sm:text-lg hover:bg-black/90 transition-all active:scale-[0.98]"
                                        >
                                            <MessageCircle size={20} />
                                            Connect with Us
                                        </a>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>
            </nav>
        </header>
    );
};

export default Header;