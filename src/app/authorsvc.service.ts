import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorsvcService {

  getAuthors() {
    return ['author1', 'author2', 'author3'];
  }
}
