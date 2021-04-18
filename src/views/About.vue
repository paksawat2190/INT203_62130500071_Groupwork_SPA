<template>
  <div class="about">
    <background>
      <navbar />
      <div class="pt-16"></div>
      <div class="pb-14">
        <a
          href="#"
          class="text-2xl block mt-1 text-lg leading-tight font-medium text-black hover:underline"
        >My name is Doraemon.</a>
      </div>
      <div
        class="pl-14 max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl"
      >
        <div class="md:flex">
          <div class="md:flex-shrink-0">
            <img
              class="h-48 w-full object-cover md:w-48"
              src="https://i.pinimg.com/564x/73/43/ef/7343efd37f03c290b359c7d25d6fe81d.jpg"
              alt="Doraemon img"
            />
          </div>
          <div class="p-8">
            <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Doraemon ☺</div>
            <a
              href="#"
              class="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
            >Doraemon: A cat-like robot of the 22nd century.</a>
            <p
              class="mt-2 text-gray-500"
            >Doraemon came to the present age to help Nobita. Doraemon has a four-dimensional pocket which holds a lot of gadgets. He loves Japanese traditional sweet Dorayaki (also called Bean Jam Buns) and suffers from musophobia (fear of mice).</p>
          </div>
        </div>
      </div>
      <div class="pt-20"></div>

      <div class="flex">
        <div class="mx-auto flex flex-row pb-20">
          <img
            src="https://i.pinimg.com/564x/f4/c5/45/f4c54553b15c96095b7a9c9efa544f99.jpg"
            width="360"
            hight="24"
            class="pl-5 shadow-xl"
          />
          <img
            src="https://i.pinimg.com/564x/af/76/66/af7666e26204103fe635e853c12ca5f7.jpg"
            width="360"
            hight="24"
            class="pl-5 shadow-xl"
          />
          <img
            src="https://i.pinimg.com/564x/07/c9/50/07c9505425b3c356708ba106be7b8c54.jpg"
            width="360"
            hight="24"
            class="pl-5 shadow-xl"
          />
        </div>
      </div>

      <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div class="md:flex">
          <div class="p-8">
            <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">I am Doraemon</div>
            <p class="mt-2 text-gray-500">
              Doraemon (ドラえもん) is a Japanese manga and anime series. It was written by Fujiko F. Fujio. It was started in a children’s magazine in 1969. Doraemon is the name of a robot cat that came from the future to help a boy named Nobita Nobi. Doraemon is about the life of Nobita Nobi. In a typical story Doramon uses a gadget to solve a problem for Nobita, but Nobita goes too far and ends up being punished and learning a lesson.
              Doraemon was turned into an anime television show in 1979. It still is being shown on television. As of 1996, about 100 million comic books have been sold. A Japanese-to-English version of the original called Doraemon: Gadget Cat from the Future was published from 2002. A local translation is published in each Asian country such as Hong Kong, Taiwan, Korea and Vietnam. It is in the United States, Canada, the United Kingdom, and Australia, but it is not as popular as it is in Asia. Doraemon is endorsed by 7-11 in Thailand as a mascot.
            </p>
          </div>
        </div>
      </div>
      <div class="pt-28"></div>
    </background>
  </div>
  <bot />
</template>

<script>
// @ is an alias to /src
import navbar from '@/components/navbar.vue'
import background from '@/components/background.vue'

export default {
  name: 'Home',
  components: {
    navbar,
    background
  },
}

</script> 