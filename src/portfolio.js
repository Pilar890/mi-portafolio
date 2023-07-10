const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://rajshekhar26.github.io/cleanfolio',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Pilar Angelina Villarreal',
  role: 'Full Stack Developer',
  description:
    "Hello! I'm Pilar, Full Stack web programmer, as a Full Stack web developer, I have a passion for technology and web development, and I am always looking for opportunities, always looking to learn to improve my skills and knowledge. I am a committed and organized person, which allows me to work efficiently in a team and meet deadlines.",
  social: {
    linkedin: 'https://www.linkedin.com/in/pilar-villarreal/',
    github: 'https://github.com/Pilar890',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'ODYSSEY - ECOMMERCE',
    description:
      'Aplicación web de comercio especializada en la venta y personalización de paquetes turísticos de alta calidad y experiencias inolvidables.',
    stack: [
      'HTML',
      'CSS',
      'React',
      'Javascript',
      'API REST',
      'Nodejs',
      'MongoDb',
      'Redux',
      'React Native',
      'Express',
      'Git',
      'Github',
    ],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Minga',
    description:
      'Aplicación web de mangas, diseño app Web y Mobile para lectura, creación y edición de mangas',
    stack: [
      'HTML',
      'CSS',
      'React',
      'Javascript',
      'API REST',
      'Nodejs',
      'MongoDb',
      'Express',
      'Git',
      'Github',
    ],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'PetShop',
    description:
      'Aplicación web de comercio especializada en la venta de productos exclusivos para el cuidado y bienestar de mascotas.',
    stack: ['HTML', 'CSS', 'Javascript', 'API REST'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Amazing Events',
    description:
      'Aplicación web de gestión y organización de una amplia variedad de eventos.',
    stack: ['HTML', 'CSS', 'Javascript', 'API REST'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Sunflower',
    description:
      'Aplicación web especializada en plantas que ofrece una completa guía informativa sobre el cuidado y mantenimiento de jardines.',
    stack: ['HTML', 'CSS'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML5',
  'CSS',
  'JavaScript',
  'Trello',
  'React',
  'Redux.js',
  'POO',
  'Express.js',
  'Git',
  'GitHub',
  'Mongoose',
  'MongoDB',
  'Node.js',
  'Bootstrap',
  'React Native',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'pilarvillarreal546@gmail.com',
}

export { header, about, projects, skills, contact }
