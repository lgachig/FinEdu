// Definir la interfaz para los Subapartados
export interface ISubapartado {
  titulo: string;
  items: string[];
}

// Definir la interfaz para el Contenido
export interface IContenido {
  titulo: string;
  descripcion: string;
  subapartados: ISubapartado[];
}
