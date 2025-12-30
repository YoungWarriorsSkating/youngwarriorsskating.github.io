<template>
<div class="pt-24">
    <div class="bg-main-black">
        <div class="w-full text-center pt-8 opacity-25">
            <a href="#" v-scroll-to="'#app'"><img src="./../assets/up-arrow.svg" alt="" class="h-6"></a>
        </div>

        <div class="w-full text-center">
            <div>
                <img src="./../assets/logo-bg-2.png" alt="Young Warriors Speed Skating Academy Logo" class="h-16 mt-8">
            </div>
            <div class=" fond-bold text-2xl">
                Young Warriors Speed Skating Academy
            </div>
            
        </div>
        <div class="flex items-start justify-center text-center text-grey-lightest mt-24">
            <div class="md:w-1/5 xs:w-1/3">
                <div class="font-bold text-lg">Useful Links</div>
                <div class="flex flex-col items-center font-thin text-sm opacity-75 mt-4">
                    <a href="#About" class="no-underline text-grey-lightest">About Us</a>
                    <a href="#Programs" class="no-underline text-grey-lightest mt-2">Programs</a>
                    <a href="#app" class="no-underline text-grey-lightest mt-2">Home</a>
                </div>
                
            </div>
        </div>
        <div class="flex flex-wrap mt-12 items-center justify-between p-3">
            <div class="text-grey-lightest opacity-75">
                © {{ new Date().getFullYear() }} Young Warriors Speed Skating Academy. All rights reserved.
            </div>

        </div>
        
    </div>
</div>
</template>

<script>
export default {

};
</script>