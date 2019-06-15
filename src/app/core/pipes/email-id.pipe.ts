import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'emailFilter'
})
export class EmailIdPipe implements PipeTransform {

  transform(notes: String[], searchText: string): any[] {
    console.log(notes)
    return notes.filter((email) => {
      return email.includes(searchText);
    });
  }
}

