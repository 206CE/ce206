/* 1.0.1


  Explanation:

  [{ label: "Contact", href: "/engagement" },
  { label: "Services", dropdown: [
   { label: "service1", href: "/sarvice1" }
    ]},];

*/


"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem
} from "./ui/dropdown-menu";

interface NavItem {
  label: string;
  href?: string;
  dropdown?: { label: string; href: string }[];
}

interface NavigationProps {
  items: NavItem[];
  itemClassName?: string;
}

export default function Navigation({ items, itemClassName = "" }: NavigationProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const commonLinkClass = `flex  ${itemClassName}`;

  const renderItem = (item: NavItem, closeOnClick = false) =>
    item.dropdown ? (
      <DropdownMenu key={item.label}>
        <DropdownMenuTrigger asChild>
          <button className={`cursor-pointer ${commonLinkClass}`}
            type="button"
          >
            {item.label}
            <FaChevronDown className="mt-2 ml-2 h-4 w-4" aria-hidden="true" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="absolute z-10 w-max cursor-pointer">
          {item.dropdown.map((drop) => (
            <DropdownMenuItem asChild key={drop.label}>
              <Link
                href={drop.href}
                className={commonLinkClass}
                onClick={closeOnClick ? () => setOpen(false) : undefined}
              >
                {drop.label}
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    ) : (
      <Link
        key={item.label}
        href={
          item.href ||
          `/${
            item.label === "Home" ? "" : item.label.toLowerCase().replace(/\s+/g, "-")
          }`
        }
        className={commonLinkClass}
        onClick={closeOnClick ? () => setOpen(false) : undefined}
      >
        {item.label}
      </Link>
    );

  return (
    <nav className="relative">
      {/* Desktop Menu */}
      <div className="hidden md:flex py-4 gap-2 items-center text-2xl font-extrabold z-10">
        {items.map((item) => renderItem(item))}
      </div>

      {/* Hamburger */}
      <button
        className={`md:hidden fixed top-0 right-0 z-10 p-2 cursor-pointer bg-(--bg-primary) ${commonLinkClass}`}
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        {open ? <FaTimes size={12} /> : <FaBars size={12} />}
      </button>

      {/* Overlay */}
      {open && (
        <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-2 right-0 z-50 w-2/3 mr-2 p-2 h-full transform transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-2   bg-(--bg-primary)">
          {items.map((item) => renderItem(item, true))}
        </div>
      </div>
    </nav>
  );
}
