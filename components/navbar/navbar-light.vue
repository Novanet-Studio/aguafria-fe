<template>
    <nav class="navbar" id="navbar" @scroll="handleScroll">
        <div class="container flex flex-wrap items-center justify-end">
            <NuxtLink class="navbar-brand" to="/">
                <span class="inline-block dark:hidden">
                    <img src="assets/images/logo-light.png" class="l-dark w-[6em] md:w-auto" alt="">
                    <img src="assets/images/logo-dark.png" class="l-light " alt="">
                </span>
                <img src="assets/images/logo-light.png" class="hidden dark:inline-block" alt="">
            </NuxtLink>

            <div class="nav-icons flex items-center lg_992:order-2 ms-auto">
                <!-- Navbar Button -->
                <ul class="list-none menu-social mb-0 space-x-1">
                    <li class="inline">
                        <a href="https://www.instagram.com/aguafriacoffee" target="_blank">
                            <span class="login-btn-primary"><span
                                    class="btn btn-sm btn-icon rounded-full bg-green-secondary hover:bg-green-primary border-green-secondary hover:border-green-primary text-white"><i
                                        class="uil uil-instagram"></i></span></span>
                            <span class="login-btn-light"><span
                                    class="btn btn-sm btn-icon rounded-full bg-gray-50 hover:bg-gray-200 dark:bg-slate-900 dark:hover:bg-gray-700 hover:border-gray-100 dark:border-gray-700 dark:hover:border-gray-700"><i
                                        class="uil uil-instagram"></i></span></span>
                        </a>
                    </li>
                    <li class="inline">
                        <a href="https://www.facebook.com/profile.php?id=100095421798175" target="_blank">
                            <span class="login-btn-primary"><span
                                    class="btn btn-sm btn-icon rounded-full bg-green-secondary hover:bg-green-primary border-green-secondary hover:border-green-primary text-white"><i
                                        class="uil uil-facebook"></i></span></span>
                            <span class="login-btn-light"><span
                                    class="btn btn-sm btn-icon rounded-full bg-gray-50 hover:bg-gray-200 dark:bg-slate-900 dark:hover:bg-gray-700 hover:border-gray-100 dark:border-gray-700 dark:hover:border-gray-700"><i
                                        class="uil uil-facebook"></i></span></span>
                        </a>
                    </li>
                </ul>
                <!-- Navbar Collapse Manu Button -->
                <button data-collapse="menu-collapse" type="button"
                    class="collapse-btn inline-flex items-center ms-3 text-dark dark:text-white lg_992:hidden"
                    aria-controls="menu-collapse" aria-expanded="false" @click="handler">
                    <span class="sr-only">Navigation Menu</span>
                    <i class="mdi mdi-menu mdi-24px"></i>
                </button>
            </div>

            <!-- Navbar Manu -->
            <div class="navigation lg_992:order-1 lg_992:flex" id="menu-collapse" :class="{ hidden: !toggle }">
                <ul class="navbar-nav nav-light" id="navbar-navlist">
                    <li class="nav-item active inicio">
                        <a class="nav-link" href="#inicio">Inicio</a>
                    </li>
                    <li class="nav-item historia">
                        <a class="nav-link" href="#historia">Historia</a>
                    </li>
                    <li class="nav-item productos">
                        <a class="nav-link" href="#productos">Productos</a>
                    </li>
                    <li class="nav-item servicios">
                        <a class="nav-link" href="#servicios">Servicios</a>
                    </li>
                    <li class="nav-item contacto">
                        <a class="nav-link" href="#contacto">Contacto</a>
                    </li>

                </ul>
            </div>
        </div>
    </nav>
    <!-- Navbar End -->
</template>

<script>
export default {
    components: {

    },
    data() {
        return {
            toggle: false,
            scroll: true,
            isBrowser: typeof window !== "undefined",
            sections: () => { if (!isBrowser) document.querySelectorAll("section") },
            navLi: () => { if (!isBrowser) document.querySelectorAll("nav .container .navigation ul li") },
            current: "",
            sectionTop: null,

        }
    },
    created() {
        window.addEventListener('scroll', this.handleScroll);
        window.addEventListener('scroll', this.onscroll);
    },

    unmounted() {
        window.removeEventListener('scroll', this.handleScroll);
        window.removeEventListener('scroll', this.onscroll);
    },

    methods: {
        handler: function () {
            this.toggle = !this?.toggle;
        },
        handleScroll(event) {
            const navbar = document.getElementById("navbar");
            if (
                document.body.scrollTop >= 50 ||
                document.documentElement.scrollTop >= 50
            ) {
                navbar.classList.add("is-sticky");
            } else {
                navbar.classList.remove("is-sticky");
            }
        },

        onscroll() {
             if (!isBrowser) document.querySelectorAll("section").forEach((section) => {
                this.sectionTop = section.offsetTop;
                if (pageYOffset >= this.sectionTop - 60) {
                    this.current = section.getAttribute("id");
                } else { }
            });
            if (!isBrowser) document.querySelectorAll("nav .container .navigation ul li").forEach((li) => {
                if (li.classList.contains(this.current)) {
                    li.classList.add("active");
                } else {
                    li.classList.remove("active");
                }
            });
        }
    },


}
</script>

<style lang="scss" scoped></style>