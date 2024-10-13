<template>
    <!-- Start -->
    <section class="relative md:pt-24 py-16" id="productos">
        <div class="container lg mx-auto">
            <div class="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 pb-8 items-center">
                <div>
                    <h6 class="text-red-primary text-base font-medium uppercase mb-2">¿Qué hacemos?</h6>
                    <h3 class="mb-4 md:text-2xl text-xl font-semibold dark:text-white md:mb-0">Cafés de especialidad
                        mediante <br> los procesos más sofisticados</h3>
                </div>

                <div>
                    <p class="text-lg text-slate-600 dark:text-slate-300 max-w-xl">Con el apoyo de expertos cafetaleros
                        tanto en la producción como en el proceso de beneficio.</p>
                </div>
            </div><!--end grid-->

            <div class="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6">
                <div v-for="data in datas" :key="data" :class="data.class">
                    <div
                        class="size-20 bg-orange-600/5 text-orange-600 rounded-xl text-3xl flex align-middle justify-center items-center shadow-sm">
                        <img :src="data.image" class="size-64" alt="">
                    </div>

                    <div class="content mt-7">
                        <a href=""
                            class="text-lg hover:text-orange-600 dark:text-white dark:hover:text-orange-600 transition-all duration-500 ease-in-out font-medium">{{
                                data.name }}</a>
                        <p class="text-slate-400 mt-3">{{ data.desc }}</p>

                        <!-- <div class="mt-5">
                            <a href=""
                                class="btn btn-link hover:text-orange-600 dark:hover:text-orange-600 after:bg-orange-600 dark:text-white transition duration-500">Read
                                More <i class="uil uil-arrow-right"></i></a>
                        </div> -->
                    </div>
                </div>
            </div><!--end grid-->
        </div><!--end container-->
    </section><!--end section-->
    <!-- End -->
</template>

<script>
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
        }
    },


}
</script>

<style lang="scss" scoped></style>