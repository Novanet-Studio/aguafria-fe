<template>
    <navBar />
    <!-- Hero Start -->

    <section class="py-36 lg:py-64 w-full table relative bg-[url('../../assets/images/bg/1.jpg')] bg-center bg-cover"
        id="inicio">
        <div class="absolute inset-0 bg-black opacity-80"></div>
        <div class="container relative">
            <div class="grid grid-cols-1 mt-12">
                <h4
                    class="text-white lg:text-5xl text-4xl lg:leading-tight leading-tight font-medium mb-7 position-relative">
                    Altos de Agua Fría.<br> Región cafetalera por
                    <vue-typewriter-effect class="typewrite relative text-type-element" data-period="2000"
                        :strings='["Cultura", "Tradición", "Historia", "Más de 200 años"]' />
                </h4>

                <p class="text-2xl text-white opacity-75 mb-0 max-w-3xl font-light">Nuestro producción de café ha sido
                    premiada por su excelente calidad en ferias en España y Bélgica. Conoce nuestra variedades de café,
                    paseos guiados y eventos corporativos pensadas en dar a conocer nuestra cultura cafetalera.</p>

                <div class="relative mt-10">
                    <a href=""
                        class="btn bg-red-primary hover:bg-red-secondary border-red-primary hover:border-red-secondary text-white rounded-md">Contáctanos</a>
                </div>
            </div>
        </div><!--end container-->
    </section><!--end section-->
    <!-- Hero End -->
    <about />
    <products />
    <services />
    <heroBox />
    <!-- Start -->
    <section class="w-full h-[32rem]">

        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3925.1844683867957!2d-66.89434282414202!3d10.327117667318877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c2af1e29b2778bd%3A0xc8ee9465d2b2dd1a!2sAltos%20de%20Agua%20Fr%C3%ADa%20(Agua%20Fr%C3%ADa%20Coffee)!5e0!3m2!1sen!2sve!4v1728856603789!5m2!1sen!2sve"
            style="border:0; width: 100%; height: 100%;" allowfullscreen="" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframe>

    </section><!--end section-->
    <!-- End -->
    <getintouch />
    <fooTer />


</template>

<script>

import navBar from '@/components/navbar/navbar-light.vue';
import VueTypewriterEffect from "vue-typewriter-effect";
import about from '@/components/about.vue';
import products from '@/components/products.vue';
import services from '@/components/services.vue';
import heroBox from '@/components/heroLightbox.vue'
import getintouch from '@/components/getInTouch.vue'
import fooTer from '@/components/footer.vue';



export default {
    name: 'indexOne',
    data() {
        return {

        }
    },
    components: {
        navBar,
        VueTypewriterEffect,
        about,
        products,
        services,
        heroBox,
        getintouch,
        fooTer,
    }
}
</script>

<style lang="scss" scoped></style>