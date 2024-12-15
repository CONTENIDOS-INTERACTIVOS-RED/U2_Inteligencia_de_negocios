<template lang="pug">
.curso-main-container.introduccion
  BannerInterno(subTitulo="Introducción")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5

    p.mb-4 En un mundo empresarial impulsado por datos, los análisis descriptivo, predictivo y prescriptivo son fundamentales para tomar decisiones estratégicas. Cada uno aporta una perspectiva clave: comprender el pasado, prever el futuro y optimizar acciones.


    .row.mb-5
      .col-12.col-xl-7.col-xxl-8.d-flex.flex-column
        .d-flex.align-items-start.bg-rosa.p-4.mb-4(data-aos="fade-right")
          img.me-3(style="width: 90px" src='@/assets/curso/unidad/img-1.svg', alt='Texto que describa la imagen')
          .d-flex.flex-column
            p.pe-xl-3.mb-0(data-aos="fade-up") El análisis descriptivo interpreta datos históricos, mientras que el predictivo anticipa escenarios futuros mediante algoritmos avanzados. Finalmente, el prescriptivo recomienda las mejores acciones para alcanzar objetivos específicos.

        span Estos enfoques, apoyados en tecnologías como la inteligencia artificial y el Big Data, han transformado sectores como logística, marketing y finanzas, permitiendo a las organizaciones adaptarse y destacar en un entorno dinámico.

      .d-none.d-xl-block.col-xl-5.col-xxl-4.mx-auto.mt-4.mt-xl-0(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-2.png', alt='Texto que describa la imagen')



</template>

<script>
import BannerInterno from '../components/plantilla/BannerInterno'
import Muestras from '../components/muestras/Muestras.vue'

export default {
  name: 'Introduccion',
  components: {
    BannerInterno,
    Muestras,
  },
  data: () => ({
    globalData: global,
  }),
}
</script>

<style lang="sass"></style>
