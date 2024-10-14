<template>
    <!-- Start Footer -->
    <footer class="py-8 bg-slate-800 dark:bg-gray-900">
        <div class="container">
            <div class="grid md:grid-cols-12 items-center">
                <div class="md:col-span-3">
                    <a href="#" class="logo-footer">
                        <img src="assets/images/logo-dark.png" class="md:ms-0 mx-auto" alt="">
                    </a>
                </div>

                <div class="md:col-span-5 md:mt-0 mt-8">
                    <div class="text-center">
                        <p class="text-gray-400">Agua Fría Coffe © {{ date }}. Publicado por <a
                                href="https://novanet.studio/" target="_blank" class="text-reset">Novanet Studio</a> <i
                                class="mdi mdi-rocket-launch text-orange-700"></i> </p>
                    </div>
                </div>

                <div class="md:col-span-4 md:mt-0 mt-8">
                    <ul class="list-none foot-icon ltr:md:text-right rtl:md:text-left text-center">
                        <li class="inline"><a href="https://www.facebook.com/profile.php?id=100095421798175"
                                target="_blank"
                                class="btn btn-icon btn-sm border rounded-md border-slate-700 dark:border-slate-800 hover:border-orange-600 bg-slate-800 dark:bg-gray-900 hover:bg-orange-600 dark:hover:bg-orange-600 text-gray-400 hover:text-white"><i
                                    class="uil uil-facebook-f align-middle" title="facebook"></i></a></li>
                        <li class="inline"><a href="https://www.instagram.com/aguafriacoffee" target="_blank"
                                class="btn btn-icon btn-sm border rounded-md border-slate-700 dark:border-slate-800 hover:border-orange-600 bg-slate-800 dark:bg-gray-900 hover:bg-orange-600 dark:hover:bg-orange-600 text-gray-400 hover:text-white"><i
                                    class="uil uil-instagram align-middle" title="instagram"></i></a></li>
                    </ul><!--end icon-->
                </div><!--end col-->
            </div><!--end row-->
        </div><!--end container-->
    </footer><!--end footer-->
    <!-- End Footer -->


</template>

<script>
export default {
    data() {
        return {
            date: new Date().getFullYear(),
        }
    },

}
</script>

<style lang="scss" scoped></style>