import type { Request, Response } from 'express';
import createMenuObject from '../helpers/createMenuObject.js';
import z from 'zod';
import PetRepository from '../repository/petRepository.ts';

const pet = new PetRepository();

type AdoptFormData = {
  petName: string;
  petBreed: string;
  petSex: string;
  petColor: string;
  reason: string;
  petPhoto?: string;
};

export const adopt = (req: Request, res: Response) => {
  res.render('adopt/form', {
    user: req.session.user,
    message: req.flash('error'),
    menu: createMenuObject(''),
    extraCss: '/css/auth.css',
  });
};

export const adoptPets = async (req: Request, res: Response) => {
  const list = await pet.getAllPets();
  console.log('List of pets for adoption:', list);
  res.render('page/petAdoption', {
    menu: createMenuObject('all'),
    user: req.session.user,
    banner: {
      title: 'Pets para adoção',
      background: 'allanimals.jpg',
    },
    list,
  });
};

export const adoptAction = async (req: Request, res: Response) => {
  const { petName, petBreed, petSex, petColor, reason } =
    req.body as AdoptFormData;
  const petPhoto = req.file ? req.file.filename : '';

  console.log('Received form data:', {
    petName,
    petBreed,
    petSex,
    petColor,
    reason,
    petPhoto,
  });

  const zodSchema = z.object({
    petName: z.string().min(1, 'Pet name is required'),
    petBreed: z.string().min(1, 'Pet breed is required'),
    petSex: z.string().min(1, 'Pet sex is required'),
    petColor: z.string().min(1, 'Pet color is required'),
    reason: z.string().min(1, 'Reason for adoption is required'),
    petPhoto: z.string().optional(),
  });

  try {
    const { success, error } = zodSchema.safeParse({
      petName,
      petBreed,
      petSex,
      petColor,
      reason,
      petPhoto,
    });

    if (!success) {
      const errorMessages = error.issues.map(err => err.message).join(', ');
      req.flash('error', errorMessages);
      res.redirect('/adopt');
      return;
    }

    // Here you would typically save the adoption request to a database

    await pet.createPet(petName, petBreed, petColor, petSex, petPhoto, reason);

    res.redirect('/adopt/pets');
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errorMessages = error.issues.map(err => err.message).join(', ');
      req.flash('error', errorMessages);
      res.redirect('/adopt');
    }
  }
};
