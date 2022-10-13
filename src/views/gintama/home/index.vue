<!--
 * @Description: 
 * @Author: zhengqi
 * @Date: 2022-10-09 10:29:24
 * @LastEditTime: 2022-10-09 11:18:06
-->
<template>
  <div class="home">
    homehomehomehomehomehomehomehome
    <a-button color="success" @click="test">test</a-button>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  // import { PageWrapper } from '/@/components/Page';
  // import { BasicForm, useForm } from '/@/components/Form';

  // import { formSchema } from './pwd.data';
  import { getWlqdInfoApi } from '/@/api/gintama/home';
  export default defineComponent({
    name: 'ChangePassword',
    // components: { BasicForm, PageWrapper },
    setup() {
      async function test(event: MouseEvent) {
        console.log('[ test ] >', event);
        const res = await getWlqdInfoApi();
        console.log('getWlqdInfoApi:', res);
      }
      // const [register, { validate, resetFields }] = useForm({
      //   size: 'large',
      //   baseColProps: { span: 24 },
      //   labelWidth: 100,
      //   showActionButtonGroup: false,
      //   schemas: formSchema,
      // });
      // async function handleSubmit() {
      //   try {
      //     const values = await validate();
      //     const { passwordOld, passwordNew } = values;
      //     // TODO custom api
      //     console.log(passwordOld, passwordNew);
      //     // const { router } = useRouter();
      //     // router.push(pageEnum.BASE_LOGIN);
      //   } catch (error) {}
      // }
      return { test };
    },
  });
</script>
