export default {
  global: {
    componenteFormativo:
      'Componente Formativo con un nombre extremadamente largo y extenso',
    descripcionCurso:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis vestibulum quam bibendum varius.<br/><br/>Quisque pretium at nulla sit amet placerat. Vestibulum consequat suscipit accumsan. Proin pharetra congue enim et tempus. Sed sodales dui volutpat, placerat tellus accumsan, semper est. Phasellus nec lorem elementum, mattis quam eget, vestibulum nibh. Sed.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/banner-principal-decorativo-2.svg'),
      },
    ],
    numeroUnidad: '2',
    tituloUnidad: 'Análisis de datos y visualización',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Análisis descriptivo, predictivo y prescriptivoocios  ',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Análisis predictivo: fundamentos y aplicaciones',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo:
              'Análisis prescriptivo: guía para la optimización de decisiones',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Unidad',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo:
              'Infraestructura y tecnologías para la gestión de Big Data ',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Aplicaciones de Big Data en la inteligencia de negocios',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Davenport, T. H., & Harris, J. G. (2007). Competing on Analytics: The New Science of Winning. Harvard Business Press.',
      link: '',
    },
    {
      referencia:
        'Inmon, W. H. (1992). Building the Data Warehouse. QED Technical Publishing.',
      link: '',
    },
    {
      referencia:
        'Laney, D. (2001). 3D Data Management: Controlling Data Volume, Velocity and Variety. META Group.',
      link: '',
    },
    {
      referencia:
        'Mayer-Schönberger, V., & Cukier, K. (2013). Big Data: A Revolution That Will Transform How We Live, Work, and Think. Houghton Mifflin Harcourt.',
      link: '',
    },
    {
      referencia:
        'Watson, M., & Jaynes, P. (2012). Supply Chain Network Design: Applying Optimization and Analytics to the Global Supply Chain. Pearson Education.',
      link: '',
    },
    {
      referencia:
        'Zikopoulos, P., & Eaton, C. (2011). Understanding Big Data: Analytics for Enterprise Class Hadoop and Streaming Data. McGraw-Hill.',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Análisis descriptivo',
      significado:
        'Técnica que interpreta datos históricos para identificar patrones y tendencias.',
    },
    {
      termino: 'Análisis predictivo',
      significado:
        'Método que utiliza algoritmos y datos históricos para anticipar eventos futuros.',
    },
    {
      termino: 'Análisis prescriptivo',
      significado:
        'Proceso que recomienda acciones óptimas basadas en predicciones y modelos matemáticos.',
    },
    {
      termino: 'Aprendizaje automático',
      significado:
        'Rama de la inteligencia artificial que permite a los sistemas aprender y mejorar automáticamente a partir de datos.',
    },
    {
      termino: 'Big Data',
      significado:
        'Conjunto de datos masivos caracterizados por volumen, velocidad, variedad, veracidad y valor.',
    },
    {
      termino: 'Data warehouse',
      significado:
        'Almacén centralizado que integra datos de múltiples fuentes para análisis.',
    },
    {
      termino: 'Inteligencia de negocios (BI)',
      significado:
        'Estrategias y herramientas que convierten datos en información útil para la toma de decisiones.',
    },
    {
      termino: 'KPI (Indicador clave)',
      significado:
        'Métrica utilizada para evaluar el desempeño y el logro de objetivos estratégicos.',
    },
    {
      termino: 'Power BI',
      significado:
        'Plataforma de Microsoft para el análisis de datos y la creación de informes interactivos.',
    },
    {
      termino: 'Tableau',
      significado:
        'Herramienta de visualización de datos que crea gráficos interactivos y personalizados.',
    },
  ],
  complementario: [
    {
      tema: 'Estrategias para la segmentación de mercados',
      referencia:
        'Cámara de Comercio de Medellín. (2020). <em>Suftware</em> Tendencias de negocios - Mercadeo y ventas',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
    {
      tema: 'Estrategias para la segmentación de mercados',
      referencia:
        'Cámara de Comercio de Medellín. (2020). <em>Suftware</em> Tendencias de negocios - Mercadeo y ventas',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
    {
      tema: 'Estrategias para la segmentación de mercados',
      referencia:
        'Cámara de Comercio de Medellín. (2020). <em>Suftware</em> Tendencias de negocios - Mercadeo y ventas',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Maria Camila Garcia Santamaria',
          cargo: 'Líder del equipo',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Asesor metodológico y pedagógico',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Francisco José Lizcano Reyes',
          cargo: 'Responsable del equipo',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Leyson Fabian Castaño Perez',
          cargo: 'Soporte organizacional',
          centro: 'Centro de Comercio y Servicios Regional Tolima',
        },
        {
          nombre: ['Nombre 1', 'Nombre 2'],
          cargo: 'Diseño web',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Nombre',
          cargo: 'Desarrollo Front-End',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Nombre',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Nombre',
          cargo: 'Validación de diseño y contenido',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
      ],
    },
    {
      titulo: 'GESTORES DE REPOSITORIO',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro: 'Centro de Comercio y Servicios Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
