<template>
    <navBar />
    <!-- Hero Start -->

    <section class="py-36 lg:py-64 w-full table relative bg-[url('../../assets/images/bg/2.jpg')] bg-center bg-cover"
        id="gracias">
        <div class="absolute inset-0 bg-black opacity-80"></div>
        <div class="container relative">
            <div class="grid grid-cols-1 mt-12">
                <h4
                    class="text-white lg:text-5xl text-4xl lg:leading-tight leading-tight font-medium mb-7 position-relative">
                    Gracias por contactarnos.
                </h4>

                <p class="text-2xl text-white opacity-75 mb-0 max-w-3xl font-light"> Tu mensaje ha sido recibido, te
                    responderemos a la brevedad posible</p>

                <div class="relative mt-10">
                    <NuxtLink to="/"
                        class="btn bg-red-primary hover:bg-red-secondary border-red-primary hover:border-red-secondary text-white rounded-md">
                        Volver al inicio</NuxtLink>
                </div>
            </div>
        </div><!--end container-->
    </section><!--end section-->
    <!-- Hero End -->
    <fooTer />
</template>

<script>

import navBar from '@/components/navbar/navbar-light.vue';
import fooTer from '@/components/footer.vue';



export default {
    name: 'indexOne',
    data() {
        return {

        }
    },
    components: {
        navBar,
        fooTer,
    }
}
</script>

<style lang="scss" scoped></style>