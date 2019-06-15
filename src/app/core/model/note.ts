import { Collaborator } from './collaborator';
import { Image } from './image';

export interface Note {
     discription: string;
     title: string;
     intrash: boolean;
     ispinned: boolean;
     isarchive: boolean;
     id: Number;
     labelList: String[];
     labelName: String;
     colore: String;
     userId: number;
     reminder: string;
     collaboraters: Collaborator[];
     colorMenu: number;
     images: Image[];
}
