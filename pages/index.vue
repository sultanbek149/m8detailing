<template>
  <div class="relative pb-[100px]">
    <LandingNavbar />

    <LandingContainer>
      <LandingHero />
    </LandingContainer>
  </div>

  <LandingContainer>
    <LandingFeatures />
    <LandingLogos />
    <div class="py-20">
      <LandingContactCard />
    </div>
  </LandingContainer>
  <LandingFooter />
</template>

<script setup lang="ts">
useSeoMeta({
  title: '8 Миля Детейлинг - Вернём безупречный первозданный вид вашему авто ',
  ogTitle: '8 Миля Детейлинг - Вернём безупречный первозданный вид вашему авто ',
  description:
    'Вcе виды работ по детейлингу авто, Пленки: Hexis, Stek, Suntek. Гарантия 10 лет',
  ogDescription:
    'Вcе виды работ по детейлингу авто, Пленки: Hexis, Stek, Suntek. Гарантия 10 лет',
  ogImage: 'https://detailing.8milya.kz/og-detailing.webp',
  ogType: 'website',
  ogUrl: 'https://detailing.8milya.kz/',
});
</script>