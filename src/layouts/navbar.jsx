import React from "react";

import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, NavbarMenuToggle, NavbarMenu, Image } from "@nextui-org/react";
import Logo from "../images/Logo.png"
import Inicio from "../routes/inicio";
import Nosotros from "../routes/nosotros";
import Pie from "./footer";
import Productos from "../routes/productos";
import Contact from "../routes/contacto";

export default function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const closeMenu = () => {
        setIsMenuOpen(false)
    }

    return (
        <>
            <Navbar
                disableAnimation maxWidth="lg" height={'6rem'}
                isBordered
                isMenuOpen={isMenuOpen}
                onMenuOpenChange={setIsMenuOpen}
            >
                <NavbarContent className="sm:hidden" justify="start">
                    <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
                </NavbarContent>
                <NavbarContent className="sm:hidden pr-3" justify="center">
                    <NavbarBrand>
                        <a href="#">
                            <img
                                width={100}
                                height={50}
                                src={Logo}
                                className="cursor-pointer" />
                        </a>
                    </NavbarBrand>
                </NavbarContent>
                <NavbarContent className="hidden sm:flex gap-3" justify="start">
                    <NavbarBrand>
                        <a href="#">
                            <img
                                width={100}
                                height={50}
                                src={Logo}
                                className="cursor-pointer" />
                        </a>
                    </NavbarBrand>
                </NavbarContent>
                <NavbarContent className="hidden sm:flex gap-9" justify="end">
                    <NavbarItem>
                        <Link color="foreground" className="font-semibold" href="#Inicio">
                            Inicio
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link color="foreground" className="font-semibold" href="#Nosotros">
                            Nosotros
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link color="foreground" className="font-semibold" href="#Productos">
                            Productos
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link color="foreground" className="font-semibold" href="#Contacto">
                            Contactos
                        </Link>
                    </NavbarItem>
                </NavbarContent>

                <NavbarContent className="sm:hidden pr-3" justify="end">

                </NavbarContent>

                <NavbarMenu>
                    <NavbarItem>
                        <Link color="foreground" className="font-semibold" href="#Inicio"
                            onClick={closeMenu}>
                            Inicio
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link color="foreground" className="font-semibold" href="#Nosotros" onClick={closeMenu}>
                            Nosotros
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link color="foreground" className="font-semibold" href="#Productos" onClick={closeMenu}>
                            Productos
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link color="foreground" className="font-semibold" href="#Contacto" onClick={closeMenu}>
                            Contactos
                        </Link>
                    </NavbarItem>
                </NavbarMenu>
            </Navbar>
            <Inicio />
            <Nosotros />
            <Productos />
            <Contact />
            <Pie />
        </>
    );
}
