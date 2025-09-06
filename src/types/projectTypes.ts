export interface Tech {
  name: string;
}
export interface project {
  id?:number;
  image:string;
  name: string;
  description: string;
  linkDemo?:string;//juste le lien afficher 
  code?:string;
  tech: Tech[];
  category:string;
}