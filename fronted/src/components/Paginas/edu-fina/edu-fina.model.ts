interface Format {
  type: string;
  link: string; // Puede ser un array si se requiere soportar múltiples enlaces
}

export interface Course {
  title: string;
  description: string;
  topics: string[];
  duration: string;
  formats: Format[];
}

