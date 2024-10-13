<template>

    <!-- Start -->
    <section class="relative md:pb-24 md:pt-0 py-16" id="servicios">
        <div class="container md:mt-24 mt-16">
            <div class="grid grid-cols-1 pb-8 text-center">
                <h6 class="text-green-primary  text-base font-medium uppercase mb-2">Servicios</h6>
                <h3 class="mb-4 md:text-2xl text-xl font-medium dark:text-white">Paseos y eventos</h3>

                <p class="text-lg text-slate-400 dark:text-slate-300 max-w-xl mx-auto">Sumérgete en la belleza de
                    nuestros cafetales con nuestros exclusivos paseos y eventos ecoturísticos. Descubre el proceso
                    artesanal del café desde la planta hasta la taza, mientras disfrutas de la naturaleza y la
                    biodiversidad que nos rodea.</p>
            </div><!--end grid-->

            <div class="grid grid-cols-1 mt-8">
                <div v-for="item in items" :key="item" class="timeline relative">
                    <div class="timeline-item">
                        <div v-if="item.id === '1'" class="grid sm:grid-cols-2">
                            <div>
                                <div class="duration date-label-left ltr:float-right rtl:float-left md:me-7 relative">
                                    <img :src="item.image" class="size-64 rounded-lg shadow-lg relative" alt="">
                                </div>
                            </div><!--end col-->
                            <div class="mt-4 md:mt-0">
                                <div
                                    class="event event-description-right ltr:float-left rtl:float-right ltr:text-left rtl:text-right md:ms-7">
                                    <h5 class="text-lg dark:text-white mb-1 font-medium">{{ item.name }}</h5>
                                    <p class="timeline-subtitle mt-3 mb-0 text-slate-400">{{ item.desc }}</p>
                                </div>
                            </div><!--end col-->
                        </div><!--end grid-->
                    </div><!--end timeline item-->

                    <div class="timeline-item pt-4">
                        <div v-if="item.id === '2'" class="grid sm:grid-cols-2">
                            <div class="md:order-1 order-2">
                                <div
                                    class="event event-description-left ltr:float-left rtl:float-right ltr:text-right rtl:text-left md:me-7">
                                    <h5 class="text-lg dark:text-white mb-1 font-medium">{{ item.name }}</h5>
                                    <p class="timeline-subtitle mt-3 mb-0 text-slate-400">{{ item.desc }}</p>
                                </div>
                            </div><!--end col-->
                            <div class="md:order-2 order-1">
                                <div class="duration duration-right md:ms-7 relative">
                                    <img :src="item.image" class="size-64 rounded-lg shadow-lg relative" alt="">
                                </div>
                            </div><!--end col-->
                        </div><!--end grid-->
                    </div><!--end timeline item-->

                    <div class="timeline-item  pt-4">
                        <div v-if="item.name === 'Launch'" class="grid sm:grid-cols-2">
                            <div class="mt-4 mt-sm-0">
                                <div class="duration date-label-left ltr:float-right rtl:float-left md:me-7 relative">
                                    <img src="assets/images/svg/office-desk.svg" class="size-64" alt="">
                                </div>
                            </div><!--end col-->
                            <div class="mt-4 mt-sm-0">
                                <div
                                    class="event event-description-right ltr:float-left rtl:float-right ltr:text-left rtl:text-right md:ms-7">
                                    <h5 class="text-lg dark:text-white mb-1 font-medium">{{ item.name }}</h5>
                                    <p class="timeline-subtitle mt-3 mb-0 text-slate-400">{{ item.desc }}</p>
                                </div>
                            </div><!--end col-->
                        </div><!--end grid-->
                    </div><!--end timeline item-->
                </div>
            </div>
        </div><!--end container-->
    </section><!--end section-->
    <!-- End -->

</template>

<script>
import image from 'assets/images/services-1.jpg';
import image2 from 'assets/images/services-2.jpg';
import icon1 from 'assets/images/svg/cerezas-borbon-rosado.svg';
import icon2 from 'assets/images/svg/cerezas-geishas.svg';
import icon3 from 'assets/images/svg/cerezas-monteclaro.svg';
import icon4 from 'assets/images/svg/cerezas-tabi.svg';



export default {
    data() {
        return {
            datas: [
                {
                    image: icon1,
                    name: 'Borbón Rosado',
                    desc: 'Se destaca por su perfil de sabor complejo y equilibrado. Este café es conocido por sus notas suaves y dulces, que incluyen frutos amarillos, cereza en almíbar, caramelo y panela',
                    class: 'features p-6 shadow-xl shadow-slate-100 dark:shadow-slate-800 transition duration-500 rounded-3xl mt-8'
                },
                {
                    image: icon2,
                    name: 'Geishas',
                    desc: ' Se ha ganado una reputación mundial por su sabor excepcional y su aroma floral único. Originario de la región de Boquete, en Panamá, este café se caracteriza por su perfil de sabor delicado y complejo',
                    class: 'features p-6 shadow-xl shadow-slate-100 dark:shadow-slate-800 transition duration-500 rounded-3xl mt-8'
                },
                {
                    image: icon3,
                    name: 'Monteclaro',
                    desc: 'Originaria de Venezuela, conocida por su alta calidad y perfil de sabor distintivo. Este café se caracteriza por su acidez equilibrada, cuerpo medio y un final afrutado y flora',
                    class: 'features p-6 shadow-xl shadow-slate-100 dark:shadow-slate-800 transition duration-500 rounded-3xl mt-8'

                },
                {
                    image: icon4,
                    name: 'Tabi',
                    desc: 'Es un cruce entre las variedades Timor, Typica y Bourbon, lo que le confiere un aroma y sabor únicos. Se caracteriza por su cuerpo medio, acidez cítrica de manzana y notas de chocolate, naranja y frutos rojos',
                    class: 'features p-6 shadow-xl shadow-slate-100 dark:shadow-slate-800 transition duration-500 rounded-3xl mt-8'


                },
            ],
            items: [
                {
                    id: '1',
                    image: image,
                    name: 'Eventos corporativos',
                    desc: 'Adéntrate en la historia y en la exuberante naturaleza de nuestros eventos exclusivos en la hacienda de café. Desde actividades particulares hasta reuniones corporativas inspiradoras.'
                },
                {
                    id: '2',
                    image: image2,
                    name: 'Paseos guiados por los cafetales',
                    desc: 'Descubre el corazón aromático de nuestras tierras en un viaje único a través de los cafetales de nuestra histórica hacienda. Sumérgete en la magia de la cultura del café mientras exploras cada rincón de nuestros cultivos cuidadosamente seleccionados.'
                },
            ]
        }
    },


}
</script>

<style lang="scss" scoped></style>