<!--
 * @Description: 
 * @Author: zhengqi
 * @Date: 2022-10-09 10:29:24
 * @LastEditTime: 2022-10-09 10:30:43
-->
<template>
  <div class="home"> homehomehomehomehomehomehomehome </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  // import { PageWrapper } from '/@/components/Page';
  // import { BasicForm, useForm } from '/@/components/Form';

  // import { formSchema } from './pwd.data';
  export default defineComponent({
    name: 'ChangePassword',
    // components: { BasicForm, PageWrapper },
    setup() {
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
      // return { register, resetFields, handleSubmit };
    },
  });
</script>
