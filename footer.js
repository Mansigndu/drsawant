document.getElementById("footer").innerHTML = `
<footer class="relative bg-[#0A2E3D] text-white">

    <!-- SOFT GLOW BACKGROUND -->
    <div class="absolute inset-0 overflow-hidden">
        <div class="absolute -top-40 -left-40 w-96 h-96 bg-[#18A558]/10 rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#0B5D8C]/20 rounded-full blur-3xl"></div>
    </div>

    <div class="relative max-w-7xl mx-auto px-6 lg:px-12 py-20">

        <!-- TOP BADGE -->
        <div class="text-center mb-14">
            <span class="inline-block px-6 py-2 rounded-full bg-white/10 text-white/80 text-sm tracking-wide backdrop-blur">
                Trusted • Ethical • Advanced Medical Care
            </span>
        </div>

        <!-- GRID -->
        <div class="grid md:grid-cols-3 gap-12">

            <!-- DOCTOR INFO -->
            <div>
                <h2 class="text-2xl font-bold text-white">
                    Dr. Prof. Mahendra Sawant
                </h2>

                <p class="mt-5 text-white/70 leading-7">
                    Senior Diabetologist & Physician with 31+ years of experience in diabetes management,
                    hypertension care, obesity treatment, and preventive healthcare.
                </p>

                <div class="mt-6 flex items-center gap-3 text-[#18A558] font-medium">
                    <i class="fa-solid fa-heart-pulse"></i>
                    Compassionate Patient Care
                </div>
            </div>

            <!-- QUICK LINKS -->
            <div>
                <h3 class="text-lg font-semibold">Quick Links</h3>

                <ul class="mt-6 space-y-4 text-white/70">

                    <li><a href="#about" class="hover:text-[#18A558] transition">About Doctor</a></li>
                    <li><a href="#services" class="hover:text-[#18A558] transition">Services</a></li>
                    <li><a href="#why-choose" class="hover:text-[#18A558] transition">Why Choose</a></li>
                    <li><a href="#appointment" class="hover:text-[#18A558] transition">Book Appointment</a></li>
                    <li><a href="#contact" class="hover:text-[#18A558] transition">Contact</a></li>

                </ul>
            </div>

            <!-- CONTACT -->
            <div>
                <h3 class="text-lg font-semibold">Contact Info</h3>

                <div class="mt-6 space-y-5 text-white/70">

                    <p class="flex items-center gap-3">
                        <i class="fa-solid fa-phone text-[#18A558]"></i>
                        <a href="tel:+919833206879" class="hover:text-white">
                            +91 9833206879
                        </a>
                    </p>

                    <p class="flex items-center gap-3">
                        <i class="fa-solid fa-envelope text-[#18A558]"></i>
                        info@drmahendrasawant.com
                    </p>

                    <p class="flex items-start gap-3">
                        <i class="fa-solid fa-location-dot text-[#18A558] mt-1"></i>
                        Mumbai, Maharashtra, India
                    </p>

                    <p class="flex items-center gap-3">
                        <i class="fa-solid fa-clock text-[#18A558]"></i>
                        Mon - Sat : 10:00 AM - 6:00 PM
                    </p>

                </div>
            </div>

        </div>

        <!-- BOTTOM -->
        <div class="mt-16 border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">

            <p class="text-white/60 text-sm text-center md:text-left">
                © ${new Date().getFullYear()} Dr. Prof. Mahendra Sawant. All Rights Reserved.
            </p>

            <p class="text-white/60 text-sm flex items-center gap-2">
                Designed with
                <i class="fa-solid fa-heart text-red-400"></i>
                for better healthcare experience
            </p>

        </div>

    </div>
</footer>
`;