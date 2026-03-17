import multer from 'multer';
import path from 'path';
import fs from 'fs';

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadDir = 'public/uploads/';
    // Cria a pasta automaticamente se ela não existir
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir);
    }
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    // Define o nome do arquivo: timestamp + nome original
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

// 2. Inicializar o Multer com a configuração
export const upload = multer({ storage: storage });
