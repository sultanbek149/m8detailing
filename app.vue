<template>
  <NuxtLoadingIndicator color="#4b34a7" />
  <a-config-provider :theme="th">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </a-config-provider>
</template>

<script setup>
// import { theme } from 'ant-design-vue';

// const th = {
// algorithm: theme.darkAlgorithm,

//   // components: {
//   //   Button: {
//   //     colorPrimary: '#1fd678',
//   //     colorBgElevated: '#4b34a7',
//   //     colorBgContainer: '#4b34a7',
//   //   },
//   // },
// };
</script>
