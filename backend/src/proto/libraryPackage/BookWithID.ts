// Original file: ../proto/library.proto

import type { BookID as _libraryPackage_BookID, BookID__Output as _libraryPackage_BookID__Output } from '../libraryPackage/BookID';
import type { Book as _libraryPackage_Book, Book__Output as _libraryPackage_Book__Output } from '../libraryPackage/Book';

export interface BookWithID {
  'bookId'?: (_libraryPackage_BookID | null);
  'book'?: (_libraryPackage_Book | null);
}

export interface BookWithID__Output {
  'bookId'?: (_libraryPackage_BookID__Output);
  'book'?: (_libraryPackage_Book__Output);
}
