<template>
    <!-- Start -->
    <section class="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800" id="historia">
        <div class="container mx-auto">
            <div class="grid grid-cols-1 lg:grid-cols-12 md:grid-cols-2 gap-10 items-center">
                <div class="lg:col-span-5">
                    <div class="relative">
                        <img src="assets/images/about.jpg" class="rounded-lg shadow-lg relative" alt="">
                        <div class="absolute bottom-2/4 translate-y-2/4 start-0 end-0 text-center">
                            <a @click="toggle" data-type="youtube" data-id="S_CGed6E610"
                                class="cursor-pointer lightbox cursor-pointer size-20 rounded-full shadow-lg shadow-slate-100 dark:shadow-slate-800 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-red-primary">
                                <i class="mdi mdi-play inline-flex items-center justify-center text-2xl"></i>
                            </a>
                        </div>
                    </div>
                </div><!--end col-->

                <div class="lg:col-span-7">
                    <div class="lg:ms-7">
                        <h6 class="text-red-primary text-base font-medium uppercase mb-2">Nuestra historia</h6>
                        <h3 class="mb-4 md:text-2xl text-xl font-medium dark:text-white">Conócenos</h3>

                        <p class="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">La producción de café en
                            la zona
                            de la hacienda Agua Fría se remonta entre los siglos XVIII y XVII; fue en el año 1926 que la
                            propiedad de la hacienda pasó a manos de nuestro abuelo el Doctor Jose Tomas Carrillo
                            Márquez. </p>
                        <br />
                        <p class="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                            La hacienda se encuentra en una región de tradición cafetalera de más de 200 años, que
                            debido a la aparición del petróleo en el siglo pasado, al crecimiento poblacional de la zona
                            y entre otros motivos, se fue olvidando el cultivo de esta especie tan importante en la
                            economía del lugar al igual que en otras regiones de nuestro país.</p>

                        <div class="relative mt-10">
                            <a href="#portfolio"
                                class="btn bg-red-primary hover:bg-red-secondary border-red-primary hover:bg-red-secondary text-white rounded-md">Contáctanos</a>
                        </div>
                    </div>
                </div><!--end col-->
            </div><!--end grid-->
        </div><!--end container-->
    </section><!--end section-->
    <section class="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800" id="about">
        <div class="container mx-auto">
            <div class="grid grid-cols-1 lg:grid-cols-12 md:grid-cols-2 gap-10 items-center">
                <div class="lg:col-span-7">
                    <div class="lg:ms-7">
                        <p class="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto"> Es importante destacar
                            que la
                            producción de la antigua hacienda Agua Fría en su mejor época producía gran cantidad de
                            quintales al año y dichos cafés fueron objeto de premios por su excelente calidad en ferias
                            en España y Bélgica en los años 1929 y 1930.</p>
                        <br />
                        <p class="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                            Nuestro nuevo emprendimiento espera tener en producción de altos volúmenes de café verde
                            para finales de este año, siguiendo un plan para sembrar por los próximos años el restante
                            de las hectáreas hasta llegar a 25, con un aproximado de 100.000 plántulas. Actualmente
                            tenemos sembradas unas 22.000 plántulas en 5 hectáreas.</p>
                    </div>
                </div><!--end col-->
                <div class="lg:col-span-5">
                    <div class="relative">
                        <img src="assets/images/about-2.jpg" class="rounded-lg shadow-lg relative" alt="">
                    </div>
                </div><!--end col-->
            </div><!--end grid-->
        </div><!--end container-->
    </section><!--end section-->
    <!-- End -->
    <div :class="isActive ? 'fixed' : 'hidden'" class="bg-black/[0.9] top-0 left-0 bottom-0 w-[100%] h-[100%] z-999">
        <div class="h-[100%] flex items-center justify-center">
            <div class="relative inline-block">
                <iframe
                    src="https://res.cloudinary.com/novanet-studio/video/upload/v1728914287/aguafriacoffee/public/aguafriacoffee-presentacion-lbr_kqrmcv.mp4"
                    width="960" height="540" frameborder="0"></iframe>
                <a class="mdi mdi-close text-white absolute top-1 right-1 text-xl cursor-pointer" @click="toggle"></a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isActive: false
        }
    },
    methods: {
        toggle() {
            if (!this.isActive) {
                this.isActive = true;
            } else {
                this.isActive = false;
            }
        },
    },
}
</script>

<style lang="scss" scoped></style>