const navbar = document.querySelector("#navbar");

navbar.innerHTML = `
<header id="mainNavbar"
class="fixed top-0 left-0 w-full z-50 transition-all duration-500">

    <nav
    class="max-w-7xl mx-auto px-5 lg:px-8">

        <div
        class="flex items-center justify-between h-20">

            <!-- Logo -->

            <a href="index.html"
            class="flex items-center gap-3">

                <img
                src="https://ik.imagekit.io/5f5fo2fhm/sawantlogo.png"
                alt="Dr. Sawant Logo"
                class="w-14 h-14 lg:w-16 lg:h-16 object-contain">

                <div class="hidden sm:block">

                    <h2
                    class="text-xl font-bold text-[#0B5D8C]">

                        Dr. Sawant's

                    </h2>

                    <p
                    class="text-[11px] uppercase tracking-[3px] text-gray-600">

                        Diabetic Care Centre

                    </p>

                </div>

            </a>


            <!-- Desktop Menu -->

            <ul
            class="hidden lg:flex items-center gap-10 font-medium">

                <li>
                    <a href="index.html"
                    class="relative group text-slate-700 hover:text-[#0B5D8C] transition">

                        Home

                        <span
                        class="absolute left-0 -bottom-2 w-0 h-[2px] bg-[#18A558] transition-all duration-300 group-hover:w-full"></span>

                    </a>
                </li>

                <li>
                    <a href="about.html"
                    class="relative group text-slate-700 hover:text-[#0B5D8C] transition">

                        About

                        <span
                        class="absolute left-0 -bottom-2 w-0 h-[2px] bg-[#18A558] transition-all duration-300 group-hover:w-full"></span>

                    </a>
                </li>

                <li>
                    <a href="services.html"
                    class="relative group text-slate-700 hover:text-[#0B5D8C] transition">

                        Services

                        <span
                        class="absolute left-0 -bottom-2 w-0 h-[2px] bg-[#18A558] transition-all duration-300 group-hover:w-full"></span>

                    </a>
                </li>

                <li>
                    <a href="gallery.html"
                    class="relative group text-slate-700 hover:text-[#0B5D8C] transition">

                        Gallery

                        <span
                        class="absolute left-0 -bottom-2 w-0 h-[2px] bg-[#18A558] transition-all duration-300 group-hover:w-full"></span>

                    </a>
                </li>

                <li>
                    <a href="contact.html"
                    class="relative group text-slate-700 hover:text-[#0B5D8C] transition">

                        Contact

                        <span
                        class="absolute left-0 -bottom-2 w-0 h-[2px] bg-[#18A558] transition-all duration-300 group-hover:w-full"></span>

                    </a>
                </li>

            </ul>


            <!-- Right Side -->

            <div
            class="hidden lg:flex items-center gap-4">

                <a
                href="tel:+919833206879"
                class="px-5 py-3 rounded-full border border-[#0B5D8C] text-[#0B5D8C] font-medium hover:bg-[#0B5D8C] hover:text-white transition">

                    Call Now

                </a>

                <a
                href="contact.html"
                class="px-6 py-3 rounded-full bg-gradient-to-r from-[#0B5D8C] to-[#18A558] text-white font-medium shadow-lg hover:scale-105 transition">

                    Book Appointment

                </a>

            </div>


            <!-- Mobile Menu Button -->

            <button
            id="menuBtn"
            class="lg:hidden text-3xl text-[#0B5D8C]">

                <i class="fa-solid fa-bars"></i>

            </button>

        </div>

    </nav>

</header>



<!-- Overlay -->

<div
id="overlay"
class="fixed inset-0 bg-black/40 backdrop-blur-sm hidden z-40">
</div>



<!-- Mobile Drawer -->

<aside
id="mobileMenu"
class="fixed top-0 right-[-100%] w-[320px] max-w-full h-screen bg-white shadow-2xl z-50 transition-all duration-500">

    <!-- Header -->

    <div
    class="flex items-center justify-between border-b p-6">

        <h2
        class="font-bold text-xl text-[#0B5D8C]">

            Menu

        </h2>

        <button
        id="closeMenu"
        class="text-3xl">

            <i class="fa-solid fa-xmark"></i>

        </button>

    </div>


    <!-- Navigation -->

    <ul
    class="flex flex-col gap-6 p-6 font-medium">

        <li><a href="index.html">Home</a></li>

        <li><a href="about.html">About</a></li>

        <li><a href="services.html">Services</a></li>

        <li><a href="gallery.html">Gallery</a></li>

        <li><a href="contact.html">Contact</a></li>

    </ul>


    <!-- CTA -->

    <div
    class="px-6 mt-10 space-y-4">

        <a
        href="tel:+919833206879"
        class="block text-center py-3 rounded-full border border-[#0B5D8C] text-[#0B5D8C]">

            Call Now

        </a>

        <a
        href="contact.html"
        class="block text-center py-3 rounded-full bg-gradient-to-r from-[#0B5D8C] to-[#18A558] text-white">

            Book Appointment

        </a>

    </div>

</aside>
`;