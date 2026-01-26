type AnimalCategories = 'dog' | 'cat' | 'fish';

type Pet = {
  type: AnimalCategories;
  image: string;
  name: string;
  color: string;
  sex: 'Masculino' | 'Feminino';
};

export const pet: Pet[] = [
  {
    type: 'dog',
    image: 'labrador.jpg',
    name: 'Labrador Retriever',
    color: 'Amarelo',
    sex: 'Masculino',
  },
  {
    type: 'dog',
    image: 'bulldog.jpg',
    name: 'Bulldog Francês',
    color: 'Branco com manchas pretas',
    sex: 'Feminino',
  },
  {
    type: 'dog',
    image: 'poodle.jpg',
    name: 'Poodle',
    color: 'Caramelo',
    sex: 'Feminino',
  },
  {
    type: 'dog',
    image: 'golden.jpg',
    name: 'Golden Retriever',
    color: 'Dourado',
    sex: 'Masculino',
  },
  {
    type: 'dog',
    image: 'pastor-alemao.jpg',
    name: 'Pastor Alemão',
    color: 'Preto e bege',
    sex: 'Masculino',
  },
  {
    type: 'dog',
    image: 'labrador.jpg',
    name: 'Labrador Preto',
    color: 'Preto',
    sex: 'Masculino',
  },
  {
    type: 'dog',
    image: 'husky.jpg',
    name: 'Husky Siberiano',
    color: 'Branco e cinza',
    sex: 'Masculino',
  },
  {
    type: 'dog',
    image: 'zwergspitz.jpg',
    name: 'São Bernardo',
    color: 'Marrom e branco',
    sex: 'Masculino',
  },

  {
    type: 'cat',
    image: 'persa.jpg',
    name: 'Gato Persa',
    color: 'Branco',
    sex: 'Feminino',
  },
  {
    type: 'cat',
    image: 'siames.jpg',
    name: 'Gato Siamês',
    color: 'Amarelo e marrom',
    sex: 'Masculino',
  },
  {
    type: 'cat',
    image: 'mainecoon.jpg',
    name: 'Maine Coon',
    color: 'Cinza',
    sex: 'Masculino',
  },

  {
    type: 'cat',
    image: 'sphynx.jpg',
    name: 'Sphynx',
    color: 'Cinza',
    sex: 'Feminino',
  },
  {
    type: 'cat',
    image: 'bengal.jpg',
    name: 'Gato Bengal',
    color: 'Amarelo e marrom',
    sex: 'Masculino',
  },
  {
    type: 'fish',
    image: 'tanictis.jpg',
    name: 'Tanictis',
    color: 'Dourado',
    sex: 'Feminino',
  },
  {
    type: 'fish',
    image: 'matogrosso.jpg',
    name: 'Matogrosso',
    color: 'Marrom',
    sex: 'Masculino',
  },
  {
    type: 'fish',
    image: 'neon.jpg',
    name: 'Neon',
    color: 'Azul e vermelho',
    sex: 'Feminino',
  },
  {
    type: 'fish',
    image: 'limpavidro.jpg',
    name: 'Limpvidro',
    color: 'Branco',
    sex: 'Feminino',
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
