<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2.Big Data y su relevancia para la inteligencia de negocios'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p.mb-4 Big Data  ha revolucionado la manera en que las empresas toman decisiones estratégicas. A través de sus cinco características clave: volumen, velocidad, variedad, veracidad y valor, permite transformar grandes cantidades de datos en información útil. Esta capacidad, respaldada por tecnologías avanzadas y herramientas de análisis, redefine la competitividad empresarial en un mundo impulsado por la información.
    figure.mb-4
      .video
        <iframe width="1903" height="748" src="https://www.youtube.com/embed/10gEJkynf3E" title="Trastorno por Déficit de Atención e Hiperactividad TDAH" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    
    h2 Impacto del Big Data  en la inteligencia de negocios (BI)
    .row.mb-5
      .d-none.d-xl-block.col-xl-5.col-xxl-4.mx-auto.mt-4.mt-xl-0(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-44.png', alt='Texto que describa la imagen')  
      .col-12.col-xl-7.col-xxl-8.d-flex.flex-column
        p.mb-4  
        .d-flex.align-items-start.bg-amarillo.p-4(data-aos="fade-left")
          img.me-3(style="width: 90px" src='@/assets/curso/unidad/img-45.svg', alt='Texto que describa la imagen')
          .d-flex.flex-column
            p.pe-xl-3.mb-0(data-aos="fade-up") El Big Data ha transformado profundamente la inteligencia de negocios al permitir el análisis de grandes volúmenes de datos en tiempo real. Sus características —volumen, velocidad, variedad, veracidad y valor— ofrecen a las organizaciones herramientas avanzadas para tomar decisiones informadas, mejorar procesos y personalizar servicios. Cada característica tiene aplicaciones prácticas en sectores clave.


    .bg-fondo-1.bg-full-width
      .px-5.pb-md-3.py-4
        .row.mb-4
          .col-10.col-md-6.col-lg-4.col-xl-3.mb-4.mx-auto(data-aos="fade-right")
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-46.png', alt='Texto que describa la imagen')
              div.mb-4
                p.text-bold.text-center Volumen y velocidad
                p.text-small.px-4.text-center.pb-2 Permiten analizar grandes volúmenes de datos en tiempo real, como Uber ajustando tarifas dinámicas según la demanda.
          .col-10.col-md-6.col-lg-4.col-xl-3.mb-4.mx-auto(data-aos="fade-up")
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-47.png', alt='Texto que describa la imagen')
              div.mb-4
                p.text-bold.text-center Variedad
                p.text-small.px-4.text-center.pb-2 Integra datos de diversas fuentes para personalizar productos, como Netflix recomendando contenido basado en hábitos de visualización.
          .col-10.col-md-6.col-lg-4.col-xl-3.mb-4.mx-auto(data-aos="fade-up")
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-48.png', alt='Texto que describa la imagen')
              div.mb-4
                p.text-bold.text-center Veracidad
                p.text-small.px-4.text-center.pb-2 Garantiza decisiones basadas en datos confiables, esenciales para sectores como banca, donde mitigan riesgos crediticios.
          .col-10.col-md-6.col-lg-4.col-xl-3.mb-4.mx-auto(data-aos="fade-left")
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-49.png', alt='Texto que describa la imagen')
              div.mb-4
                p.text-bold.text-center Valor
                p.text-small.px-4.text-center.pb-2 Ofrece insights accionables para optimizar procesos, como Tesla utilizando mantenimiento predictivo en sus vehículos.

    h2 Herramientas clave para el análisis de Big Data
    p.mb-4(data-aos="fade-up") El análisis de datos masivos se apoya en herramientas especializadas que facilitan su procesamiento, visualización y aplicación estratégica. Estas herramientas varían según las necesidades organizacionales y los objetivos del análisis.

    .row.position-relative.mb-5.py-4.bg-azul-oscuro.bg-full-width
      div.px-4.px-md-5.py-md-3
        SlyderA(tipo="b").bg-white
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0(data-aos="zoom-in-right")
              p.text-bold Hadoop 
              p Plataforma para almacenar y procesar grandes volúmenes de datos de manera distribuida.
            .d-none.d-lg-block.col-md-6.col-lg-4(data-aos="zoom-in-left")
              figure
                img(src='@/assets/curso/unidad/img-50.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0
              p.text-bold Apache Spark
              p Ofrece procesamiento en tiempo real con alta velocidad y eficiencia.
            .d-none.d-lg-block.col-md-6.col-lg-4
              figure
                img(src='@/assets/curso/unidad/img-51.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0
              p.text-bold Tableau
              p Facilita la creación de gráficos interactivos para transformar datos complejos en insights accionables.
            .d-none.d-lg-block.col-md-6.col-lg-4
              figure
                img(src='@/assets/curso/unidad/img-52.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0
              p.text-bold Power BI
              p Herramienta de Microsoft para análisis de datos interactivo y creación de reportes detallados.
            .d-none.d-lg-block.col-md-6.col-lg-4
              figure
                img(src='@/assets/curso/unidad/img-53.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0
              p.text-bold AWS (Amazon Web Services)
              p Proporciona soluciones como Amazon Redshift para análisis escalable de datos en la nube.
            .d-none.d-lg-block.col-md-6.col-lg-4
              figure
                img(src='@/assets/curso/unidad/img-54.png', alt='Texto que describa la imagen')

    .bg-fondo-1.bg-full-width
      .px-5.pb-md-3.py-4
        h2 Casos de éxito del Big Data  en BI
        p.mb-4 Empresas líderes han implementado estrategias basadas en Big Data para optimizar procesos, reducir costos y mejorar la experiencia del cliente. Estos casos ilustran su impacto en sectores diversos.
        .row.mb-5.justify-content-center 
          .col-10.col-md-8.col-lg-6.col-xl-4.mb-4.mb-xl-0
            .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
              img.mx-auto.mb-4(src='@/assets/curso/unidad/img-55.svg', style="width: 80px")
              p.text-bold.mb-4.text-center Walmart
              p.px-1.text-small.mb-0.d-flex.text-center Utiliza Big Data para predecir demandas y ajustar inventarios, reduciendo costos operativos en un 15%. 
          .col-10.col-md-8.col-lg-6.col-xl-4.mb-4.mb-xl-0
            .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
              img.mx-auto.mb-4(src='@/assets/curso/unidad/img-56.svg', style="width: 80px")
              p.text-bold.mb-4.text-center Netflix
              p.px-1.text-small.mb-0.d-flex.text-center Personaliza recomendaciones basadas en patrones de visualización, incrementando la retención de usuarios. 
          .col-10.col-md-8.col-lg-6.col-xl-4
            .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
              img.mx-auto.mb-4(src='@/assets/curso/unidad/img-57.svg', style="width: 80px")
              p.text-bold.mb-4.text-center Tesla
              p.px-1.text-small.mb-0.d-flex.text-center Implementa mantenimiento predictivo mediante el análisis de datos de sensores en sus vehículos.

    h2 Ejercicio de simulación: análisis de opiniones en redes sociales
    p.mb-4(data-aos="fade-up") El Big Data  también transforma la forma en que las empresas entienden las percepciones de sus clientes. Supongamos que una empresa de retail desea evaluar la recepción de un nuevo producto en redes sociales. El proceso incluiría:
    img(src='@/assets/curso/unidad/img-58.png', alt='Texto que describa la imagen').mb-5
    p.mb-4 Este enfoque permite transformar las opiniones de los usuarios en estrategias de marketing más efectivas y dirigidas.

    h2 Fases posteriores al análisis de Big Data 
    p.mb-4(data-aos="fade-up") Después de procesar los datos masivos, es esencial integrarlos en los sistemas de BI y utilizarlos para optimizar procesos mediante análisis predictivos y prescriptivos.

    .row.bg-azul-claro.py-5.mb-4
      .col-12.col-md-10.mx-auto
        .row
          .col-5.d-none.d-xl-block(data-aos="fade-right")
            img.h-100(src='@/assets/curso/unidad/img-59.png', alt='Texto que describa la imagen')
          .col-12.col-xl-7.mx-auto(data-aos="fade-left")
            p.text-bold.mb-4(data-aos="fade-up")
            .row
              .col-12
                ol.lista-ol--cuadro
                  li.d-flex(data-aos="fade-up")
                    .lista-ol--cuadro__vineta.bg-rojo
                      span 1
                    p.mb-0 <strong>Integración en BI.</strong> Incorporar insights en plataformas de BI para su monitoreo y análisis continuo.
                  li.d-flex(data-aos="fade-up")
                    .lista-ol--cuadro__vineta.bg-rojo
                      span 2
                    p.mb-0 <strong>Análisis predictivo.</strong> Utilizar datos procesados para anticipar tendencias y comportamientos futuros.
                  li.d-flex(data-aos="fade-up")
                    .lista-ol--cuadro__vineta.bg-rojo
                      span 3
                    p.mb-0 <strong>Análisis prescriptivo.</strong> Proporcionar recomendaciones específicas basadas en predicciones previas.
                  li.d-flex(data-aos="fade-up")
                    .lista-ol--cuadro__vineta.bg-rojo
                      span 4
                    p.mb-0 <strong>Optimización.</strong> Ajustar procesos clave, como gestión de inventarios o campañas de marketing.

    h2 Indicadores clave de rendimiento (KPI)
    p.mb-4(data-aos="fade-up") Los KPIs son fundamentales para medir el impacto del Big Data  en la inteligencia de negocios, evaluando su efectividad y el retorno de inversión.

    .row.mb-5
      .col-12.col-lg-7(data-aos="fade-right")
        LineaTiempoD.color-secundario
          p(numero="1" titulo="Tasa de adopción de datos") General Electric asegura que el 80% de los datos recopilados se utilicen en decisiones estratégicas.  
          p(numero="2" titulo="ROI de Big Data") Procter & Gamble evalúa el retorno de inversión de sus modelos predictivos en campañas publicitarias.  
          p(numero="3" titulo="Latencia de datos") Spotify garantiza recomendaciones en tiempo real basadas en hábitos recientes de los  usuarios.  
          p(numero="4" titulo="Reducción de costos operativos") FedEx optimiza rutas de transporte con Big Data, disminuyendo costos en un 10%.  
      .col-12.col-lg-5.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-60.png', alt='Texto que describa la imagen')

    p.mb-4 El Big Data  redefine la inteligencia de negocios, proporcionando una ventaja competitiva mediante el análisis de grandes volúmenes de datos para optimizar procesos, mejorar servicios y personalizar experiencias. Empresas en sectores como logística, marketing y tecnología continúan demostrando su potencial transformador.

    #t_2_1.titulo-segundo
      div.d-flex
        span.me-3 2.1  
        h2 Infraestructura y tecnologías para la gestión de Big Data 

    .row.mb-5.mx-0
      .d-none.d-xl-block.col-4.px-0(data-aos="fade-right")
        img.h-100(src='@/assets/curso/unidad/img-61.png', alt='Texto que describa la imagen')
      .col-12.col-xl-8.d-flex.align-items-center.bg-rosa.p-4(data-aos="fade-left")
        p.mb-0(data-aos="fade-up") La gestión de Big Data ha evolucionado para responder a la creciente demanda de procesar y analizar grandes volúmenes de datos en un entorno digital. Tecnologías avanzadas como Hadoop y Apache Spark han transformado las capacidades de las organizaciones, permitiéndoles convertir datos complejos en información accionable. Este cambio ha sido posible gracias a infraestructuras modernas diseñadas para soportar la magnitud y velocidad de los datos.

    h2 Evolución de la gestión de Big Data 
    p.mb-4(data-aos="fade-up")      El concepto de las "3 V" —volumen, velocidad y variedad—, introducido por Douglas Laney en 2001, marcó el inicio de una nueva era en la gestión de datos. Desde entonces, herramientas como Hadoop, desarrollado en 2006, y Apache Spark, lanzado en 2014, han permitido a las empresas abordar los desafíos del Big Data. Según Zikopoulos y Eaton (2011), estas tecnologías representan la base de los sistemas modernos de gestión de datos masivos. 

    TabsC.mb-4
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Hadoop", :iconUrl="require('@/assets/curso/unidad/img-18.svg')")
        .row
          .d-none.d-lg-block.col-md-12.col-lg-5.col-xl-4(data-aos="fade-right")
            figure
              img(src='@/assets/curso/unidad/img-62.png', alt='Texto que describa la imagen')
          .col-md-12.col-lg-7.col-xl-8.mb-4.mb-md-0(data-aos="fade-left")
            h4 Hadoop
            p(data-aos="fade-up") Framework de código abierto que utiliza HDFS para almacenamiento distribuido y MapReduce para procesamiento paralelo.
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Apache Spark", :iconUrl="require('@/assets/curso/unidad/img-19.svg')")
        .row
          .d-none.d-lg-block.col-md-12.col-lg-5.col-xl-4(data-aos="fade-right")
            figure
              img(src='@/assets/curso/unidad/img-63.png', alt='Texto que describa la imagen')
          .col-md-12.col-lg-7.col-xl-8.mb-4.mb-md-0(data-aos="fade-left")
            h4 Apache Spark
            p(data-aos="fade-up") Plataforma para procesamiento en memoria, ideal para análisis en tiempo real y aprendizaje automático.
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Bases de datos NoSQL", :iconUrl="require('@/assets/curso/unidad/img-19.svg')")
        .row
          .d-none.d-lg-block.col-md-12.col-lg-5.col-xl-4(data-aos="fade-right")
            figure
              img(src='@/assets/curso/unidad/img-64.png', alt='Texto que describa la imagen')
          .col-md-12.col-lg-7.col-xl-8.mb-4.mb-md-0(data-aos="fade-left")
            h4 Bases de datos NoSQL
            p(data-aos="fade-up") Diseñadas para manejar datos no estructurados, como MongoDB y Cassandra.
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Infraestructuras en la nube", :iconUrl="require('@/assets/curso/unidad/img-19.svg')")
        .row
          .d-none.d-lg-block.col-md-12.col-lg-5.col-xl-4(data-aos="fade-right")
            figure
              img(src='@/assets/curso/unidad/img-65.png', alt='Texto que describa la imagen')
          .col-md-12.col-lg-7.col-xl-8.mb-4.mb-md-0(data-aos="fade-left")
            h4 Infraestructuras en la nube
            p(data-aos="fade-up") Proveen servicios escalables como AWS, Azure y Google Cloud para análisis y almacenamiento.

    .bg-fondo-1.bg-full-width
      .px-5.pb-md-3.py-4

        h2 Aplicaciones empresariales
        p.mb-4(data-aos="fade-up") El impacto del Big Data  se refleja en ejemplos concretos de empresas líderes que han adoptado estas tecnologías para mejorar procesos y optimizar decisiones.
        .row.mb-4
          .col-10.col-md-6.col-lg-4.mb-4.mx-auto(data-aos="fade-right")
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-66.png', alt='Texto que describa la imagen')
              div.mb-4
                p.text-bold.text-center Walmart
                p.text-small.px-4.text-center.pb-2 Mejora la gestión de inventarios y predicción de demandas mediante análisis masivo de datos.
          .col-10.col-md-6.col-lg-4.mb-4.mx-auto(data-aos="fade-right")
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-67.png', alt='Texto que describa la imagen')
              div.mb-4
                p.text-bold.text-center Amazon
                p.text-small.px-4.text-center.pb-2 Implementa Hadoop y bases NoSQL para personalizar recomendaciones y mejorar la experiencia del cliente.
          .col-10.col-md-6.col-lg-4.mb-4.mx-auto(data-aos="fade-right")
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-68.png', alt='Texto que describa la imagen')
              div.mb-4
                p.text-bold.text-center Coca-Cola
                p.text-small.px-4.text-center.pb-2 Analiza datos de múltiples fuentes para identificar tendencias de mercado y optimizar campañas de marketing.

    h2 Caso aplicado: infraestructura para un minorista
    p.mb-4(data-aos="fade-up") Un ejemplo práctico es el diseño de una infraestructura para una cadena de supermercados. Este sistema incluiría:
    img.mb-4(src='@/assets/curso/unidad/img-69.png', alt='Texto que describa la imagen')
    
    p.mb-4 Este enfoque mejora la experiencia del cliente al tiempo que optimiza las operaciones internas mediante decisiones basadas en datos.
    h2 Fases posteriores al análisis de Big Data
    p.mb-4(data-aos="fade-up") Tras implementar sistemas de Big Data, las empresas deben integrarlos con sus plataformas de inteligencia de negocios (BI) para maximizar su impacto.

    .row.mb-4.bg-gris.py-4.py-md-5
      .col-11.col-md-8.col-xl-6.mx-auto(data-aos="fade-right")
        img.h-100(src='@/assets/curso/unidad/img-70.png', alt='Texto que describa la imagen')

    h2  KPIs para evaluar la infraestructura de Big Data
    p.mb-4(data-aos="fade-up") La efectividad de la infraestructura de Big Data se mide mediante indicadores clave que evalúan el desempeño y la escalabilidad de los sistemas.

    .row.mb-4.bg-gris.py-4.py-md-5
      .col-10.col-md-8.col-lx-6.mx-auto(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-71.png', alt='Texto que describa la imagen')

    p.mb-4 La infraestructura moderna para la gestión de Big Data  permite a las organizaciones almacenar, procesar y analizar datos masivos de manera eficiente. Al adoptar tecnologías avanzadas como Hadoop, Spark y bases de datos NoSQL, las empresas pueden mejorar la toma de decisiones, optimizar operaciones y ofrecer experiencias personalizadas a sus clientes. Los KPIs bien definidos aseguran la evaluación y mejora continua de estas herramientas, garantizando su impacto positivo en el entorno empresarial.


    #t_2_2.titulo-segundo
      div.d-flex
        span.me-3 2.2  
        h2 Aplicaciones de Big Data en la inteligencia de negocios


    .row.mb-5
      .d-none.d-xl-block.col-xl-5.col-xxl-4.mx-auto.mt-4.mt-xl-0(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-72.png', alt='Texto que describa la imagen')  
      .col-12.col-xl-7.col-xxl-8.d-flex.flex-column
        .d-flex.align-items-start.bg-azul.p-4(data-aos="fade-left")
          img.me-3(style="width: 90px" src='@/assets/curso/unidad/img-73.svg', alt='Texto que describa la imagen')
          .d-flex.flex-column
            p.pe-xl-3.mb-0(data-aos="fade-up") El Big Data  ha transformado la inteligencia de negocios (BI), permitiendo que las empresas obtengan insights detallados para mejorar sus estrategias y operaciones. Al analizar grandes volúmenes de datos en tiempo real, las organizaciones pueden optimizar procesos, personalizar experiencias y anticipar comportamientos del mercado, fortaleciendo su competitividad.  

    .bg-fondo-1.bg-full-width
      .px-5.pb-md-3.py-4
        h2 Impacto de Big Data  en BI
        p.mb-4(data-aos="fade-up") Las principales áreas de impacto incluyen:
        .row.mb-5
          .col-12.col-lg-7.col-xl-8(data-aos="fade-right")
            AcordionA(tipo="b")
              .div(titulo="Identificación de patrones y tendencias")
                p Big Data  revela relaciones ocultas, mejorando la personalización. Ejemplo: Amazon y Netflix optimizan recomendaciones.
              .div(titulo="Optimización de costos operativos")
                p Mejora la eficiencia en sectores como logística. Ejemplo: UPS optimiza rutas, reduciendo tiempo y combustible.
              .div(titulo="Segmentación del mercado y personalización")
                p Permite campañas dirigidas a microsegmentos de clientes. Ejemplo: Starbucks ajusta promociones en tiempo real.
              .div(titulo="Innovación y desarrollo de productos")
                p Identifica oportunidades emergentes. Ejemplo: el sector salud utiliza Big Data  para medicina personalizada.
          .col-12.col-lg-5.col-xl-4.d-none.d-lg-block(data-aos="fade-left")
            img(src='@/assets/curso/unidad/img-74.png', alt='Texto que describa la imagen')

    h2 Beneficios económicos y estratégicos
    p.mb-4(data-aos="fade-up") El uso de Big Data  en BI no solo mejora la rentabilidad, sino que también impulsa la sostenibilidad empresarial al:

    .row.mb-4.bg-gris.py-4.py-md-5
      .col-12.col-md-10.mx-auto(data-aos="fade-up")
        img(src='@/assets/curso/unidad/img-75.png', alt='Texto que describa la imagen')

    h2 Ejemplo práctico: cadena de supermercados
    p.mb-4(data-aos="fade-up") Una cadena de supermercados puede aplicar      Big Data  para segmentar clientes y diseñar estrategias efectivas:

    .row.mb-4.justify-content-center
      .col-10.col-md-8.col-lg-6.col-xl-4.mb-4.mb-xl-0
        .custom-image-card.d-flex.p-3
          img.pe-2(src='@/assets/curso/unidad/img-76.svg', style="width: 80px")
          .d-flex.flex-column
            p.text-bold.mb-4 Recolección de datos
            p.px-1.text-small.mb-0 Analizar transacciones, ubicación y comportamientos de compra. 
      .col-10.col-md-8.col-lg-6.col-xl-4.mb-4.mb-xl-0
        .custom-image-card.d-flex.p-3
          img.pe-2(src='@/assets/curso/unidad/img-77.svg', style="width: 80px")
          .d-flex.flex-column
            p.text-bold.mb-4 Segmentación y análisis
            p.px-1.text-small.mb-0 Identificar patrones de microsegmentos en temporadas específicas. 
      .col-10.col-md-8.col-lg-6.col-xl-4.mb-4.mb-xl-0
        .custom-image-card.d-flex.p-3
          img.pe-2(src='@/assets/curso/unidad/img-78.svg', style="width: 80px")
          .d-flex.flex-column
            p.text-bold.mb-4 Acción
            p.px-1.text-small.mb-0 Crear promociones personalizadas para maximizar ventas y fidelizar clientes.

    p.mb-4(data-aos="fade-up") Las aplicaciones de Big Data  en la inteligencia de negocios están transformando la competitividad empresarial. Al permitir a las organizaciones anticipar tendencias, personalizar servicios y optimizar operaciones, Big Data no solo mejora la rentabilidad, sino que también posiciona a las empresas para generar valor sostenible y liderar en un entorno globalizado. La capacidad de aprovechar estas tecnologías es esencial para mantenerse relevante en un mercado dinámico y orientado por los datos.

    .row.bg-amarillo.bg-full-width.py-4.mb-5
      div.px-5.pb-md-3.py-4.d-flex
        .col-12.col-xl-7.col-xxl-8.d-flex.pe-4.pe-xl-5.align-items-center.flex-column(data-aos="fade-right")
          h2.mb-4.pb-2.me-auto Herramientas de visualización de datos: Power BI, Tableau y Qlik
          p.mb-5 En el documento Herramientas de visualización de datos: Power BI, Tableau, Qlik, se exploran las principales características, costos y aplicaciones de estas herramientas clave en inteligencia empresarial. Cada una ofrece soluciones únicas para transformar datos en visualizaciones interactivas, adaptándose a diferentes necesidades y sectores. Se invita a profundizar en estas plataformas para aprovechar al máximo su potencial en la toma de decisiones estratégicas. ¡Descubre cómo estas herramientas pueden optimizar tus análisis y presentaciones!
          a.d-flex.me-auto.w-fit.bg-white.box-shadow.cursor-pointer(data-aos="zoom-in" :href="obtenerLink('/downloads/Anexos_Herramientas de visualización de datos.pdf')" target="_blank")
            img.h-100(style="width: 48px" src='@/assets/componentes/pdf-icon-square.svg', alt='Texto que describa la imagen')
            p.text-small.fs-14px.my-auto.px-2 <strong>Anexo.</strong> Herramientas de visualización de datos: Power BI, Tableau y Qlik
             
        .d-none.d-xl-block.col-xl-5.col-xxl-4.mx-auto.mt-4.mt-xl-0(data-aos="fade-left")
          img.h-100(src='@/assets/curso/unidad/img-79.png', alt='Texto que describa la imagen')

    .bg-full-width.border-top-9-azul
      .px-4.px-md-5.pt-5.pb-0
        h2 Material complementario
        .row
          .col-12.col-md-6.col-lg-8
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/117744") Casas Roma, J. Nin Guerrero, J. & Julbe López, F. (2019). Big data: análisis de datos en entornos masivos. Editorial UOC.

            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://www.youtube.com/watch?v=4F8G87Ho7SI") Analítica descriptiva, analítica predictiva y analítica prescriptiva. [Vídeo]

            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://youtu.be/DHMhobOoNdA") INDEE. (2022). Análiticas descriptivas. [Vídeo]
          .col-12.col-md-6.col-lg-3
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='Imagen de material complementario')

    .bg-full-width.border-top.actividad(style='background-color: #ebf1f5; border-top: 5px solid #f5c145 !important')
      .p-4.p-md-5
        #Actividad
          <Actividad :cuestionario='cuestionario'/>

</template>

<script>
import BannerInterno from '../../components/plantilla/BannerInterno'
export default {
  name: 'Tema2',
  components: {
    BannerInterno,
  },
  data: () => ({
    cuestionario: {
      tema: 'Business Intelligence y gestión de datos',
      titulo: 'Ponte a prueba',
      introduccion:
        'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
      barajarPreguntas: true,
      preguntas: [
        {
          id: 1,
          texto: '¿Qué es Business Intelligence (BI)?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Un conjunto de herramientas para la creación de bases de datos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Un proceso de análisis de datos sin tecnología avanzada.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Un conjunto de tecnologías y procesos que convierten datos en información útil para la toma de decisiones.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Un tipo de lenguaje de programación para bases de datos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto: '¿Qué caracteriza a Big Data?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Datos pequeños y fáciles de analizar.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Datos con gran volumen, velocidad y variedad que requieren tecnologías avanzadas para su análisis.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Datos no estructurados almacenados en una sola fuente.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Un software para procesar datos de empresas pequeñas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto: '¿Qué es un Cuadro de Mando (Dashboard)?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Una herramienta de visualización de datos que muestra indicadores clave de rendimiento en tiempo real.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Un repositorio de datos sin procesar.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Un programa de programación de bases de datos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Un proceso de transformación de datos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto: '¿Qué es un Data Lake?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Un tipo de base de datos relacional.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Un repositorio que almacena grandes volúmenes de datos en su forma original, estructurada y no estructurada.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Un panel para ver datos en tiempo real.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Un proceso de analizar datos para encontrar patrones.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto: '¿Qué caracteriza a un Data Mart?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Es un repositorio de datos que almacena grandes volúmenes de información sin procesar.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Es un subconjunto de un data warehouse que se centra en un área específica de una organización.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Es una herramienta de visualización de datos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Es un proceso para convertir datos en información útil.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
