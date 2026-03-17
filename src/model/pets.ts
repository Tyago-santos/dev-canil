type AnimalCategories = 'dog' | 'cat' | 'fish';

type Pet = {
  type: AnimalCategories;
  image: string;
  name: string;
  color: string;
  sex: 'Masculino' | 'Feminino';
  story: string;
};

export const pet: Pet[] = [
  {
    type: 'dog',
    image: 'labrador.jpg',
    name: 'Labrador Retriever',
    color: 'Amarelo',
    sex: 'Masculino',
    story:
      'Foi encontrado no parque do bairro, seguindo crianças e abanando o rabo até encontrar alguém que o ajudasse.',
  },
  {
    type: 'dog',
    image: 'bulldog.jpg',
    name: 'Bulldog Francês',
    color: 'Branco com manchas pretas',
    sex: 'Feminino',
    story:
      'Chegou ao abrigo após ser resgatada de uma mudança, ficou para trás e foi acolhida pela vizinhança.',
  },
  {
    type: 'dog',
    image: 'poodle.jpg',
    name: 'Poodle',
    color: 'Caramelo',
    sex: 'Feminino',
    story:
      'Foi encontrada próxima a uma escola, bem cuidada, mas sem identificação, e virou xodó do time de resgate.',
  },
  {
    type: 'dog',
    image: 'golden.jpg',
    name: 'Golden Retriever',
    color: 'Dourado',
    sex: 'Masculino',
    story:
      'Apareceu na porta de uma padaria pedindo carinho, com coleira antiga e sem endereço.',
  },
  {
    type: 'dog',
    image: 'pastor-alemao.jpg',
    name: 'Pastor Alemão',
    color: 'Preto e bege',
    sex: 'Masculino',
    story:
      'Foi resgatado em uma área rural após se perder durante uma tempestade.',
  },
  {
    type: 'dog',
    image: 'labrador.jpg',
    name: 'Labrador Preto',
    color: 'Preto',
    sex: 'Masculino',
    story:
      'Foi encontrado na orla seguindo corredores; estava cansado, mas amigável e bem treinado.',
  },
  {
    type: 'dog',
    image: 'husky.jpg',
    name: 'Husky Siberiano',
    color: 'Branco e cinza',
    sex: 'Masculino',
    story:
      'Fugiu durante os fogos de fim de ano e ficou vagando até ser acolhido por voluntários.',
  },
  {
    type: 'dog',
    image: 'zwergspitz.jpg',
    name: 'São Bernardo',
    color: 'Marrom e branco',
    sex: 'Masculino',
    story:
      'Chegou ao abrigo após ser encontrado em uma estrada, molhado e com frio, mas muito dócil.',
  },

  {
    type: 'cat',
    image: 'persa.jpg',
    name: 'Gato Persa',
    color: 'Branco',
    sex: 'Feminino',
    story:
      'Foi deixada em uma clínica veterinária e, desde então, busca um lar tranquilo.',
  },
  {
    type: 'cat',
    image: 'siames.jpg',
    name: 'Gato Siamês',
    color: 'Amarelo e marrom',
    sex: 'Masculino',
    story:
      'Foi resgatado de um telhado após dias miando, super carinhoso com humanos.',
  },
  {
    type: 'cat',
    image: 'mainecoon.jpg',
    name: 'Maine Coon',
    color: 'Cinza',
    sex: 'Masculino',
    story:
      'Apareceu no jardim de uma casa e se aproximou sozinho pedindo comida e colo.',
  },

  {
    type: 'cat',
    image: 'sphynx.jpg',
    name: 'Sphynx',
    color: 'Cinza',
    sex: 'Feminino',
    story:
      'Foi encontrada em um estacionamento, sem chip, e se adaptou rápido ao abrigo.',
  },
  {
    type: 'cat',
    image: 'bengal.jpg',
    name: 'Gato Bengal',
    color: 'Amarelo e marrom',
    sex: 'Masculino',
    story:
      'Chegou ao resgate após ser visto sozinho em um condomínio, sempre curioso e brincalhão.',
  },
  {
    type: 'fish',
    image: 'tanictis.jpg',
    name: 'Tanictis',
    color: 'Dourado',
    sex: 'Feminino',
    story:
      'Foi entregue por uma família que mudou de cidade e precisava de um novo lar responsável.',
  },
  {
    type: 'fish',
    image: 'matogrosso.jpg',
    name: 'Matogrosso',
    color: 'Marrom',
    sex: 'Masculino',
    story:
      'Veio de um aquário desativado e agora procura um ambiente calmo e bem cuidado.',
  },
  {
    type: 'fish',
    image: 'neon.jpg',
    name: 'Neon',
    color: 'Azul e vermelho',
    sex: 'Feminino',
    story:
      'Foi resgatada com outros peixes após uma queda de energia que danificou o aquário antigo.',
  },
  {
    type: 'fish',
    image: 'limpavidro.jpg',
    name: 'Limpvidro',
    color: 'Branco',
    sex: 'Feminino',
    story:
      'Chegou ao abrigo após ser doado por um aquarista que não podia mais cuidar.',
  },
];

export const data = {
  getAllPets: (): Pet[] => pet,
  getFromType: (type: AnimalCategories): Pet[] =>
    pet.filter(item => item.type === type),
  getFromName: (name: string): Pet[] =>
    pet.filter(item =>
      item.name.toLocaleLowerCase().includes(name.toLocaleLowerCase())
    ),
};
