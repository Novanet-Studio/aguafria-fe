<template>
    <section class="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800" id="contacto">
        <div class="container">
            <div class="grid grid-cols-1 pb-8 text-center">
                <h6 class="text-cobalt-1 text-base font-medium uppercase mb-2">Contáctanos</h6>
                <h3 class="mb-4 md:text-2xl text-xl font-medium dark:text-white">¡Esperamos saber de ti pronto!</h3>

                <p class="text-slate-400 dark:text-slate-300 max-w-xl mx-auto">Para información, por favor llene el
                    formulario de contacto:</p>
            </div><!--end grid-->

            <div class="grid grid-cols-1 lg:grid-cols-12 md:grid-cols-2 mt-8 items-center gap-6">
                <div class="lg:col-span-8">
                    <div class="p-6 rounded-md shadow bg-white dark:bg-slate-900">
                        <form name="contacto" method="post" action="/gracias" netlify> 
                            <input type="hidden" name="form-name" value="contacto">                           
                            <div class="grid lg:grid-cols-12 lg:gap-6">
                                <div class="lg:col-span-6 mb-5">
                                    <input type="text" name="nombre" v-model="name" class="form-input"
                                        placeholder="Nombre y apellido :">
                                </div>

                                <div class="lg:col-span-6 mb-5">
                                    <input type="email" name="email" v-model="email" class="form-input"
                                        placeholder="Email :">
                                </div><!--end col-->
                            </div>

                            <div class="grid grid-cols-1">
                                <div class="mb-5">
                                    <input type="text" name="asunto" class="form-input" placeholder="Asunto :">
                                </div>

                                <div class="mb-5">
                                    <textarea name="mensaje" v-model="message" class="form-input textarea h-28"
                                        placeholder="Mensaje :"></textarea>
                                </div>
                            </div>
                            <button type="submit" id="submit" name="send"
                                class="btn bg-cobalt-primary hover:bg-cobalt-secondary border-cobalt-primary hover:border-cobalt-secondary text-white rounded-md h-11 justify-center flex items-center">Enviar
                                mensaje</button>
                        </form>
                    </div>
                </div>

                <div class="lg:col-span-4">
                    <div class="lg:ms-8">
                        <div class="flex">
                            <div class="icons text-center mx-auto">
                                <i class="uil uil-phone block rounded text-2xl dark:text-white mb-0"></i>
                            </div>

                            <div class="flex-1 ms-6">
                                <h5 class="text-lg dark:text-white mb-2 font-medium">Teléfono</h5>
                                <a href="tel:+584143661545" class="text-slate-400">+58 414-3661545</a>
                            </div>
                        </div>

                        <div class="flex mt-4">
                            <div class="icons text-center mx-auto">
                                <i class="uil uil-envelope block rounded text-2xl dark:text-white mb-0"></i>
                            </div>

                            <div class="flex-1 ms-6">
                                <h5 class="text-lg dark:text-white mb-2 font-medium">Email</h5>
                                <a href="mailto:aguafriacoffee@gmail.com"
                                    class="text-slate-400">aguafriacoffee@gmail.com</a>
                            </div>
                        </div>

                        <div class="flex mt-4">
                            <div class="icons text-center mx-auto">
                                <i class="uil uil-map-marker block rounded text-2xl dark:text-white mb-0"></i>
                            </div>

                            <div class="flex-1 ms-6">
                                <h5 class="text-lg dark:text-white mb-2 font-medium">Ubicación</h5>
                                <p class="text-slate-400 mb-2">Carr. Nacional Cortada del Guayabo - Cortada de Maturín,
                                    Agua Fría 1203, Miranda</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div><!--end grid-->
        </div><!--end container-->
    </section><!--end section-->
    <!-- End -->
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped></style>