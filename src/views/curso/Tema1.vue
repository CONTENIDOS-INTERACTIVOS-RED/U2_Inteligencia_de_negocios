<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Análisis descriptivo, predictivo y prescriptivoocios '")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5.mx-0
      .col-12.col-xl-8.d-flex.align-items-center.bg-amarillo.p-4(data-aos="fade-right")
        p.mb-0(data-aos="fade-up") El análisis descriptivo examina y resume datos históricos para proporcionar una comprensión clara de eventos previos en el entorno empresarial. Su principal objetivo es interpretar patrones y tendencias que permitan evaluar el desempeño y las operaciones organizacionales. Este enfoque se ha fortalecido con el desarrollo de la inteligencia de negocios (Business Intelligence, BI) y el Big Data, que permiten gestionar grandes volúmenes de datos con mayor eficiencia.
      .d-none.d-xl-block.col-4.px-0(data-aos="fade-left")
        img.h-100(src='@/assets/curso/unidad/img-3.png', alt='Texto que describa la imagen')

    h2 Evolución del análisis descriptivo
    p.mb-4(data-aos="fade-up") Desde los años 70, los sistemas de procesamiento de datos comenzaron a recopilar y gestionar información empresarial. En los 90, con el surgimiento de BI y herramientas como los data warehouses, el análisis descriptivo se consolidó. William Inmon, "padre del data warehousing", destacó la centralización de datos como clave para el análisis y la toma de decisiones. En años posteriores, autores como Davenport y Harris (2007) demostraron cómo el análisis descriptivo aporta ventajas competitivas al interpretar patrones históricos y evaluar rendimientos.

    .row.justify-content-center.bg-gris.mb-4
      .col-12.col-md-10.col-xl-8.col-xxl-6.py-5.mx-auto
        img.h-100(src='@/assets/curso/unidad/img-4.png', alt='Texto que describa la imagen')
            

    .bg-fondo-1.bg-full-width.mb-4
      .px-5.pb-md-3.py-4
        h2 Aplicaciones del análisis descriptivo
        p.mb-4 En entornos empresariales, el análisis descriptivo se usa para explorar datos históricos, identificar tendencias y tomar decisiones fundamentadas. Por ejemplo, en comercio electrónico, esta técnica ayuda a comprender patrones de compra y ajustar estrategias de marketing.
        .row.mb-4
          .col-10.col-md-6.col-lg-4.mb-4.mx-auto(data-aos="fade-right")
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-5.png', alt='Texto que describa la imagen')
              div.mb-4
                p.text-bold.text-center Comercio electrónico
                p.text-small.px-4.text-center.pb-2 Identificar preferencias de clientes y optimizar campañas de marketing.
          .col-10.col-md-6.col-lg-4.mb-4.mx-auto(data-aos="fade-up")
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-6.png', alt='Texto que describa la imagen')
              div.mb-4
                p.text-bold.text-center Retail
                p.text-small.px-4.text-center.pb-2 Ajustar inventarios según patrones estacionales y picos de demanda.
          .col-10.col-md-6.col-lg-4.mb-4.mx-auto(data-aos="fade-left")
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-7.png', alt='Texto que describa la imagen')
              div.mb-4
                p.text-bold.text-center Servicios financieros
                p.text-small.px-4.text-center.pb-2 Analizar patrones históricos para evaluar riesgos y planificar estrategias de inversión.

    h2 Herramientas clave
    p.mb-4 El análisis descriptivo se facilita mediante herramientas de BI que permiten crear visualizaciones y reportes interactivos. Entre las más utilizadas están:

    .bg-azul.bg-full-width.mb-4
      .px-5.pb-md-3.py-4

        .row
          .col-12.col-md-10.col-xl-8.col-xxl-6.py-5.mx-auto
            ImagenInfografica.color-secundario.mb-5.bg-transparent
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/unidad/img-8.png', alt='Texto que describa la imagen')

        
              .tarjeta.bg-white.p-4(x="8.4%" y="87%" numero="+")
                .h5.mb-2 Power BI
                p Visualizaciones interactivas, conexión con múltiples fuentes de datos.
              .tarjeta.bg-white.p-4(x="34.4%" y="87%" numero="+")
                .h5.mb-2 Tableau
                p Gráficos avanzados y tableros personalizados.
              .tarjeta.bg-white.p-4(x="59.4%" y="87%" numero="+")
                .h5.mb-2 Excel
                p Análisis básicos, tablas dinámicas y gráficos. Ideal para pequeñas empresas.
              .tarjeta.bg-white.p-4(x="85.4%" y="87%" numero="+")
                .h5.mb-2 Google Data Studio
                p Plataforma gratuita para informes interactivos.

    h2 Ejemplo práctico: Amazon
    p.mb-4 Amazon emplea análisis descriptivo para observar patrones históricos de ventas, lo que le permite ajustar inventarios y diseñar estrategias de marketing basadas en datos concretos.

    .row.bg-azul-claro.py-5.mb-4
      .col-12.col-md-10.mx-auto
        .row
          .col-5.d-none.d-xl-block(data-aos="fade-right")
            img(src='@/assets/curso/unidad/img-9.png', alt='Texto que describa la imagen')
          .col-12.col-xl-7.mx-auto(data-aos="fade-left")
            p.text-bold.mb-4(data-aos="fade-up") Simulación práctica: Cadena minorista
            .row
              .col-12
                ol.lista-ol--cuadro
                  li.d-flex(data-aos="fade-up")
                    .lista-ol--cuadro__vineta.bg-rojo
                      span 1
                    p.mb-0 Extraer datos de ventas mensuales de los últimos tres años.
                  li.d-flex(data-aos="fade-up")
                    .lista-ol--cuadro__vineta.bg-rojo
                      span 2
                    p.mb-0 Generar un gráfico de líneas para visualizar tendencias.
                  li.d-flex(data-aos="fade-up")
                    .lista-ol--cuadro__vineta.bg-rojo
                      span 3
                    p.mb-0 Identificar picos de ventas asociados a eventos específicos.
                  li.d-flex(data-aos="fade-up")
                    .lista-ol--cuadro__vineta.bg-rojo
                      span 4
                    p.mb-0 Proponer decisiones estratégicas, como ajustar inventarios o lanzar promociones.
                span Este ejercicio ilustra cómo el análisis descriptivo guía decisiones basadas en información histórica.

    h2 Fases posteriores: predictivo y prescriptivo
    p.mb-4 El análisis descriptivo es solo el primer paso en un ciclo de análisis más amplio:

    .row.justify-content-center.bg-gris.mb-4
      .col-12.col-md-10.col-xl-8.col-xxl-6.py-5.mx-auto
        img.h-100(src='@/assets/curso/unidad/img-10.png', alt='Texto que describa la imagen')

    .bg-fondo-1.bg-full-width.mb-4
      .px-5.pb-md-3.py-4
        h2 KPI en análisis descriptivo
        p.mb-4 Los indicadores clave de rendimiento (Key Performance Indicators, KPI) permiten medir el impacto del análisis descriptivo. Algunos ejemplos incluyen:
        .row.mb-5.justify-content-center 
          .col-10.col-md-8.col-lg-6.col-xl-4.col-xxl-3.mb-4.mb-xl-0
            .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
              img.mx-auto.mb-4(src='@/assets/curso/unidad/img-11.svg', style="width: 80px")
              p.text-bold.mb-4.text-center Frecuencia de compra
              p.px-1.text-small.mb-0.d-flex.text-center Mide la frecuencia de compras por cliente. Ejemplo: Walmart planifica inventarios estacionales.
          .col-10.col-md-8.col-lg-6.col-xl-4.col-xxl-3.mb-4.mb-xl-0
            .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
              img.mx-auto.mb-4(src='@/assets/curso/unidad/img-12.svg', style="width: 80px")
              p.text-bold.mb-4.text-center CSAT (Customer Satisfaction Score)
              p.px-1.text-small.mb-0.d-flex.text-center Evalúa la satisfacción del cliente. Ejemplo: Amazon usa el CSAT para identificar problemas en las entregas.
          .col-10.col-md-8.col-lg-6.col-xl-4.col-xxl-3
            .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
              img.mx-auto.mb-4(src='@/assets/curso/unidad/img-13.svg', style="width: 80px")
              p.text-bold.mb-4.text-center ARPU (Average Revenue per User)
              p.px-1.text-small.mb-0.d-flex.text-centerCalcula el ingreso promedio por cliente. Ejemplo: Netflix mide estrategias de retención.
          .col-10.col-md-8.col-lg-6.col-xl-4.col-xxl-3
            .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
              img.mx-auto.mb-4(src='@/assets/curso/unidad/img-14.svg', style="width: 80px")
              p.text-bold.mb-4.text-center Tiempo de respuesta
              p.px-1.text-small.mb-0.d-flex.text-center Evalúa el tiempo promedio en atender solicitudes. Ejemplo: Verizon optimiza tiempos de espera.

    p.mb-4 El análisis descriptivo es fundamental para construir estrategias basadas en datos, constituyendo un pilar clave para mejorar el desempeño organizacional y tomar decisiones más informadas.

    #t_1_1.titulo-segundo
      div.d-flex
        span.me-3 1.1  
        h2 Análisis predictivo: fundamentos y aplicaciones

    .row.mb-4
      .col-12.col-xl-7(data-aos="fade-right")
        span El análisis predictivo es una herramienta que utiliza datos históricos, algoritmos avanzados y aprendizaje automático para anticipar resultados futuros. Este enfoque, que comenzó a popularizarse en los años 90, representa un salto cualitativo en el uso de la información, permitiendo a las organizaciones pasar de interpretar el pasado a prever tendencias futuras y diseñar estrategias proactivas. Autores como Davenport y Harris (2007) y Eric Siegel (2013) han resaltado su importancia como ventaja competitiva en mercados globalizados.
      .d-none.d-xl-block.col-4.px-0(data-aos="fade-left")
        img.h-100(src='@/assets/curso/unidad/img-15.png', alt='Texto que describa la imagen')

    .row.bg-amarillo.bg-full-width.py-4.mb-4
      .px-5.pb-md-3.py-4.d-flex
        .d-none.d-xl-block.col-xl-5.col-xxl-4.mx-auto.mt-4.mt-xl-0(data-aos="fade-right")
          img.h-100(src='@/assets/curso/unidad/img-16.png', alt='Texto que describa la imagen')
        .col-12.col-xl-7.col-xxl-8.d-flex.ps-4.ps-xl-5.align-items-center.flex-column(data-aos="fade-left")
          h2.mb-4.pb-2.me-auto Origen y evolución del análisis predictivo 
          p.mb-5 En el documento Origen y evolución del análisis predictivo , se explora cómo esta disciplina ha avanzado desde los primeros sistemas de soporte para decisiones en los años 70 hasta su democratización actual gracias a herramientas accesibles como Python y R. También se analizan sus aplicaciones clave en marketing, finanzas y logística, además de presentar herramientas como IBM SPSS Modeler y SAS Predictive Analytics que facilitan su implementación.
          a.d-flex.me-auto.w-fit.bg-white.box-shadow.cursor-pointer(data-aos="zoom-in" :href="obtenerLink('/downloads/.pdf')" target="_blank")
            img.h-100(style="width: 48px" src='@/assets/componentes/pdf-icon-square.svg', alt='Texto que describa la imagen')
            p.text-small.fs-14px.my-auto.px-2 <strong>Anexo.</strong> Origen y evolución del análisis predictivo
             
    h2 Ejemplo práctico
    p.mb-4 Netflix utiliza análisis predictivo para recomendar contenido personalizado. Basándose en el historial de visualización, anticipa las preferencias del usuario, mejorando la experiencia y aumentando la retención. Walmart, por su parte, emplea esta técnica para prever demandas estacionales, ajustando inventarios y optimizando su cadena de suministro.

    .row.mb-4.bg-azul-claro.py-4.py-md-5
      .col-11.col-md-8.col-xl-5.mx-auto
        p.text-bold.mb-4 Simulación: predicción de ventas
        p.mb-4 Imagina que gestionas datos en una tienda minorista y deseas predecir ventas del próximo mes:
        ol.lista-ol--cuadro
          li.d-flex(data-aos="fade-up")
            .lista-ol--cuadro__vineta.bg-rojo
              span 1
            p.mb-0 Recopila datos históricos: usa registros de ventas de al menos dos años.
          li.d-flex(data-aos="fade-up")
            .lista-ol--cuadro__vineta.bg-rojo
              span 2
            p.mb-0 Selecciona un modelo: aplica una regresión lineal para identificar tendencias.
          li.d-flex(data-aos="fade-up")
            .lista-ol--cuadro__vineta.bg-rojo
              span 3
            p.mb-0 Analiza variables externas: incluye eventos como promociones y temporadas altas.
          li.d-flex(data-aos="fade-up")
            .lista-ol--cuadro__vineta.bg-rojo
              span 4
            p.mb-0 Proyecta resultados: usa el modelo para prever ventas futuras, ajustando estrategias de inventario y marketing.
      .d-none.d-xl-block.col-5.mx-auto(data-aos="fade-left")
        img.h-100(src='@/assets/curso/unidad/img-17.png', alt='Texto que describa la imagen')        
    
    h2 KPI clave en el análisis predictivo
    p.mb-4(data-aos="fade-up") Para medir el éxito de los modelos predictivos, es esencial monitorear indicadores clave:

    TabsC.mb-4
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Accuracy Rate", :iconUrl="require('@/assets/curso/unidad/img-18.svg')")
        .row
          .d-none.d-lg-block.col-md-12.col-lg-5.col-xl-4(data-aos="fade-right")
            figure
              img(src='@/assets/curso/unidad/img-20.png', alt='Texto que describa la imagen')
          .col-md-12.col-lg-7.col-xl-8.mb-4.mb-md-0(data-aos="fade-left")
            h4 Accuracy Rate
            p(data-aos="fade-up") Mide cuán precisas son las predicciones comparadas con los datos reales.
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Prediction Confidence Level", :iconUrl="require('@/assets/curso/unidad/img-19.svg')")
        .row
          .d-none.d-lg-block.col-md-12.col-lg-5.col-xl-4(data-aos="fade-right")
            figure
              img(src='@/assets/curso/unidad/img-21.png', alt='Texto que describa la imagen')
          .col-md-12.col-lg-7.col-xl-8.mb-4.mb-md-0(data-aos="fade-left")
            h4 Prediction Confidence Level
            p(data-aos="fade-up") Indica la probabilidad de que las predicciones sean correctas.
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Recall y Precision", :iconUrl="require('@/assets/curso/unidad/img-19.svg')")
        .row
          .d-none.d-lg-block.col-md-12.col-lg-5.col-xl-4(data-aos="fade-right")
            figure
              img(src='@/assets/curso/unidad/img-22.png', alt='Texto que describa la imagen')
          .col-md-12.col-lg-7.col-xl-8.mb-4.mb-md-0(data-aos="fade-left")
            h4 Recall y Precision
            p(data-aos="fade-up") Evalúan la efectividad de los modelos para identificar elementos clave.
      .tabs-content.border.px-4.p-md-5.py-3(titulo="MAPE (Mean Absolute Percentage Error)", :iconUrl="require('@/assets/curso/unidad/img-19.svg')")
        .row
          .d-none.d-lg-block.col-md-12.col-lg-5.col-xl-4(data-aos="fade-right")
            figure
              img(src='@/assets/curso/unidad/img-23.png', alt='Texto que describa la imagen')
          .col-md-12.col-lg-7.col-xl-8.mb-4.mb-md-0(data-aos="fade-left")
            h4 MAPE (Mean Absolute Percentage Error)
            p(data-aos="fade-up") Calcula el error promedio en términos porcentuales.

    h2 Ejemplo práctico de KPI
    p.mb-4(data-aos="fade-up") Una empresa de comercio electrónico analiza el ARPU (ingreso promedio por usuario) durante promociones y detecta que las conversiones aumentan un 20%. Usando un modelo predictivo, ajusta la frecuencia de campañas para maximizar ingresos, calculando la efectividad con el MAPE. 

    h2 Fases complementarias
    p.mb-4(data-aos="fade-up") El análisis predictivo no opera aislado. Se complementa con:

    .bg-fondo-1.bg-full-width
      .px-5.pb-md-3.py-4
        .row.mb-4
          .col-10.col-md-6.col-lg-4.mb-4.mx-auto(data-aos="fade-right")
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-24.png', alt='Texto que describa la imagen')
              div.mb-4
                p.text-bold.text-center Análisis descriptivo
                p.text-small.px-4.text-center.pb-2 Interpreta datos históricos como base para modelos predictivos.
          .col-10.col-md-6.col-lg-4.mb-4.mx-auto(data-aos="fade-right")
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-25.png', alt='Texto que describa la imagen')
              div.mb-4
                p.text-bold.text-center Análisis prescriptivo
                p.text-small.px-4.text-center.pb-2 Sugiere acciones óptimas basadas en predicciones.
          .col-10.col-md-6.col-lg-4.mb-4.mx-auto(data-aos="fade-right")
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-26.png', alt='Texto que describa la imagen')
              div.mb-4
                p.text-bold.text-center Evaluación y retroalimentación
                p.text-small.px-4.text-center.pb-2 Ajusta modelos según resultados reales para mejorar precisión.

    p.mb-4 El análisis predictivo va más allá de anticipar resultados; guía estrategias proactivas, optimiza recursos y crea ventajas competitivas. Su integración con herramientas modernas y la combinación de KPI permiten una gestión inteligente en entornos empresariales dinámicos. Este enfoque transforma datos en conocimiento accionable, fortaleciendo la toma de decisiones estratégicas.

    #t_1_2.titulo-segundo
      div.d-flex
        span.me-3 1.2 
        h2 Análisis prescriptivo: guía para la optimización de decisiones

    .row.mb-5
      .col-12.col-xl-7.col-xxl-8.d-flex.flex-column
        p.mb-4 El análisis prescriptivo es el nivel más avanzado de la analítica de datos. No solo interpreta lo ocurrido ni predice lo que sucederá, sino que ofrece recomendaciones concretas sobre las mejores acciones a tomar para alcanzar objetivos específicos. Este enfoque combina la minería de datos, simulaciones y modelos matemáticos de optimización, y se sustenta en tecnologías como inteligencia artificial y aprendizaje automático.
        h2.mb-4 Evolución del análisis prescriptivo
        .d-flex.align-items-start.bg-amarillo.p-4(data-aos="fade-right")
          img.me-3(style="width: 90px" src='@/assets/curso/unidad/img-27.svg', alt='Texto que describa la imagen')
          .d-flex.flex-column
            p.pe-xl-3.mb-0(data-aos="fade-up") El análisis prescriptivo ha avanzado en paralelo con el desarrollo de la analítica avanzada. Desde mediados de los años 2000, herramientas como la inteligencia artificial y el Big Data han facilitado su adopción en diferentes industrias. En 2007, Davenport y Harris destacaron su impacto en la diferenciación competitiva, mientras que en 2012, Watson y Jaynes lo posicionaron como esencial en la optimización de cadenas de suministro.
      .d-none.d-xl-block.col-xl-5.col-xxl-4.mx-auto.mt-4.mt-xl-0(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-28.png', alt='Texto que describa la imagen')  

    img(src='@/assets/curso/unidad/img-29.png', alt='Texto que describa la imagen')

    .bg-fondo-1.bg-full-width
      .px-5.pb-md-3.py-4
        h2 Aplicaciones del análisis prescriptivo en empresas
        p.mb-4 El análisis prescriptivo tiene aplicaciones estratégicas en múltiples sectores:
        .row.mb-5.justify-content-center.card_hover
          .col-10.col-md-8.col-lg-6.col-xl-4.col-xxl-3.mb-4.mb-xl-0(data-aos="fade-right")
            .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
              img.mx-auto.mb-4(src='@/assets/curso/unidad/img-30.svg', style="width: 80px")
              p.text-bold.mb-4.text-center Logística
              p.px-1.text-small.mb-0.d-flex.text-center Optimización de rutas, gestión de inventarios y reducción de costos operativos (ej. UPS, Amazon). 
          .col-10.col-md-8.col-lg-6.col-xl-4.col-xxl-3.mb-4.mb-xl-0(data-aos="fade-up")
            .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
              img.mx-auto.mb-4(src='@/assets/curso/unidad/img-31.svg', style="width: 80px")
              p.text-bold.mb-4.text-center Marketing y Ventas
              p.px-1.text-small.mb-0.d-flex.text-center Personalización de recomendaciones y aumento de la retención de clientes (ej. Netflix).
          .col-10.col-md-8.col-lg-6.col-xl-4.col-xxl-3(data-aos="fade-up")
            .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
              img.mx-auto.mb-4(src='@/assets/curso/unidad/img-32.svg', style="width: 80px")
              p.text-bold.mb-4.text-center Finanzas
              p.px-1.text-small.mb-0.d-flex.text-center Optimización de portafolios financieros y predicción de riesgos.
          .col-10.col-md-8.col-lg-6.col-xl-4.col-xxl-3(data-aos="fade-left")
            .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
              img.mx-auto.mb-4(src='@/assets/curso/unidad/img-33.svg', style="width: 80px")
              p.text-bold.mb-4.text-center Salud
              p.px-1.text-small.mb-0.d-flex.text-center Recomendación de tratamientos personalizados basados en datos del paciente (ej. IBM Watson Health).

    h2 Herramientas y tecnologías
    p.mb-4 El análisis prescriptivo se apoya en herramientas diseñadas para resolver problemas complejos de manera eficiente:

    TabsC.mb-4
      .tabs-content.border.px-4.p-md-5.py-3(titulo="IBM Decision Optimization", :iconUrl="require('@/assets/curso/unidad/img-18.svg')")
        .row
          .d-none.d-lg-block.col-md-12.col-lg-5.col-xl-4(data-aos="fade-right")
            figure
              img(src='@/assets/curso/unidad/img-34.png', alt='Texto que describa la imagen')
          .col-md-12.col-lg-7.col-xl-8.mb-4.mb-md-0(data-aos="fade-left")
            h4 IBM Decision Optimization
            p(data-aos="fade-up") Diseña modelos de optimización para maximizar el rendimiento de las operaciones.
      .tabs-content.border.px-4.p-md-5.py-3(titulo="SAS Optimization", :iconUrl="require('@/assets/curso/unidad/img-19.svg')")
        .row
          .d-none.d-lg-block.col-md-12.col-lg-5.col-xl-4(data-aos="fade-right")
            figure
              img(src='@/assets/curso/unidad/img-35.png', alt='Texto que describa la imagen')
          .col-md-12.col-lg-7.col-xl-8.mb-4.mb-md-0(data-aos="fade-left")
            h4 SAS Optimization
            p(data-aos="fade-up") Ayuda en la planificación de recursos y la gestión de operaciones estratégicas.
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Gurobi Optimizer", :iconUrl="require('@/assets/curso/unidad/img-19.svg')")
        .row
          .d-none.d-lg-block.col-md-12.col-lg-5.col-xl-4(data-aos="fade-right")
            figure
              img(src='@/assets/curso/unidad/img-36.png', alt='Texto que describa la imagen')
          .col-md-12.col-lg-7.col-xl-8.mb-4.mb-md-0(data-aos="fade-left")
            h4 Gurobi Optimizer
            p(data-aos="fade-up") Resolver problemas matemáticos complejos en tiempo real, ideal para logística y manufactura.
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Python y R", :iconUrl="require('@/assets/curso/unidad/img-19.svg')")
        .row
          .d-none.d-lg-block.col-md-12.col-lg-5.col-xl-4(data-aos="fade-right")
            figure
              img(src='@/assets/curso/unidad/img-37.png', alt='Texto que describa la imagen')
          .col-md-12.col-lg-7.col-xl-8.mb-4.mb-md-0(data-aos="fade-left")
            h4 Python y R
            p(data-aos="fade-up") Ofrecen bibliotecas avanzadas como PuLP y SciPy para modelos de optimización.

    h2 Ejemplo práctico

    .row.mb-4.bg-azul-claro.py-4.py-md-5
      .col-11.col-md-8.col-xl-5.mx-auto
      
        p.mb-4.text-bold Caso: UPS y la optimización de rutas 
        p.mb-4 UPS utiliza su sistema ORION (On-Road Integrated Optimization and Navigation) para optimizar rutas de entrega en tiempo real. Este sistema considera factores como condiciones climáticas y tráfico, permitiendo ahorrar tiempo y reducir costos operativos.
        p.text-bold.mb-4 Resultados obtenidos:
        ol.lista-ol--cuadro
          li.d-flex(data-aos="fade-up")
            .lista-ol--cuadro__vineta.bg-rojo
              span 1
            p.mb-0 Ahorro de 10 millones de galones de combustible al año.
          li.d-flex(data-aos="fade-up")
            .lista-ol--cuadro__vineta.bg-rojo
              span 2
            p.mb-0 Reducción de 100,000 toneladas métricas de emisiones de CO₂.
      .d-none.d-xl-block.col-5.mx-auto(data-aos="fade-left")
        img.h-100(src='@/assets/curso/unidad/img-38.png', alt='Texto que describa la imagen')       

    h2 Ejercicio de simulación
    p.mb-4 <strong>Contexto:</strong> Imagina que gestionas una cadena de restaurantes y deseas optimizar la compra de insumos.
    .row.mb-4.bg-gris.py-4.py-md-5
      .col-11.col-md-8.mx-auto(data-aos="fade-right")
        img.h-100(src='@/assets/curso/unidad/img-39.png', alt='Texto que describa la imagen')

    .bg-fondo-1.bg-full-width.mb-4
      .px-5.pb-md-3.py-4

        h2 KPIs para el análisis prescriptivo
        p.mb-4 Los indicadores clave de desempeño son esenciales para evaluar la efectividad del análisis prescriptivo:

        .row.mb-5
          .col-12.col-lg-7(data-aos="fade-right")
            AcordionA(tipo="b")
              .div(titulo="ROI (Return on Investment)")
                p Mide el retorno financiero de las estrategias recomendadas.
              .div(titulo="Tasa de cumplimiento")
                p Evalúa el porcentaje de recomendaciones implementadas.
              .div(titulo="Tiempo de implementación")
                p Tiempo promedio desde la recomendación hasta su aplicación.
              .div(titulo="Utilización de recursos")
                p Analiza la eficiencia en el uso de recursos durante la implementación.
              .div(titulo="Satisfacción del cliente")
                p Impacto en la experiencia del cliente tras implementar las recomendaciones.
          .col-12.col-lg-5.d-none.d-lg-block(data-aos="fade-left")
            img(src='@/assets/curso/unidad/img-40.png', alt='Texto que describa la imagen')
    p.mb-4 Conexión con otros tipos de análisis El análisis prescriptivo funciona en conjunto con:

    .row.mb-4.justify-content-center
      .col-10.col-md-8.col-lg-6.col-xl-4.mb-4.mb-xl-0
        .custom-image-card.d-flex.p-3
          img.pe-2(src='@/assets/curso/unidad/img-41.svg', style="width: 80px")
          .d-flex.flex-column
            p.text-bold.mb-4 Análisis descriptivo
            p.px-1.text-small.mb-0 Proporciona la base de datos históricos.
      .col-10.col-md-8.col-lg-6.col-xl-4.mb-4.mb-xl-0
        .custom-image-card.d-flex.p-3
          img.pe-2(src='@/assets/curso/unidad/img-42.svg', style="width: 80px")
          .d-flex.flex-column
            p.text-bold.mb-4 Análisis predictivo
            p.px-1.text-small.mb-0 Estima los posibles escenarios futuros.
      .col-10.col-md-8.col-lg-6.col-xl-4.mb-4.mb-xl-0
        .custom-image-card.d-flex.p-3
          img.pe-2(src='@/assets/curso/unidad/img-43.svg', style="width: 80px")
          .d-flex.flex-column
            p.text-bold.mb-4 Análisis prescriptivo
            p.px-1.text-small.mb-0 Ofrece recomendaciones óptimas basadas en los resultados previos.

    .bg-rosa.p-4.mb-5
      span El análisis prescriptivo permite a las organizaciones no solo entender y prever, sino actuar de manera óptima para alcanzar objetivos estratégicos. Su integración con herramientas avanzadas y su aplicación en diversos sectores lo convierten en una herramienta indispensable para empresas que buscan mantenerse competitivas y adaptarse rápidamente a un entorno dinámico.

    .bg-full-width.border-top-9-azul
      .px-4.px-md-5.pt-5.pb-0
        h2 Material complementario
        .row
          .col-12.col-md-6.col-lg-8
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/59093") López Murphy, J. J. & Zarza, G. (2017). La ingeniería del big data: cómo trabajar con datos. Editorial UOC.

            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://www.youtube.com/watch?v=M26iIqmqWkI") ¿Qué es el Big Data? - La mejor explicación en español. [Vídeo]

            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://youtu.be/JornOr_W6LA") Alberto Lopez TECH TIPS. (2022). ¿Qué es el BIG DATA? ¿Para qué sirve el BIG DATA? [Vídeo]
          .col-12.col-md-6.col-lg-3
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='Imagen de material complementario')

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.tabs-content
  background-color: $color-sistema-h
.img-infografica
  background-color: $color-adicional-1
</style>
