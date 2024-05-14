// Original file: ../proto/library.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { Book as _libraryPackage_Book, Book__Output as _libraryPackage_Book__Output } from '../libraryPackage/Book';
import type { BookID as _libraryPackage_BookID, BookID__Output as _libraryPackage_BookID__Output } from '../libraryPackage/BookID';
import type { BookWithID as _libraryPackage_BookWithID, BookWithID__Output as _libraryPackage_BookWithID__Output } from '../libraryPackage/BookWithID';
import type { Books as _libraryPackage_Books, Books__Output as _libraryPackage_Books__Output } from '../libraryPackage/Books';
import type { Empty as _libraryPackage_Empty, Empty__Output as _libraryPackage_Empty__Output } from '../libraryPackage/Empty';
import type { Response as _libraryPackage_Response, Response__Output as _libraryPackage_Response__Output } from '../libraryPackage/Response';

export interface LibraryServiceClient extends grpc.Client {
  AddBook(argument: _libraryPackage_Book, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_libraryPackage_Response__Output>): grpc.ClientUnaryCall;
  AddBook(argument: _libraryPackage_Book, metadata: grpc.Metadata, callback: grpc.requestCallback<_libraryPackage_Response__Output>): grpc.ClientUnaryCall;
  AddBook(argument: _libraryPackage_Book, options: grpc.CallOptions, callback: grpc.requestCallback<_libraryPackage_Response__Output>): grpc.ClientUnaryCall;
  AddBook(argument: _libraryPackage_Book, callback: grpc.requestCallback<_libraryPackage_Response__Output>): grpc.ClientUnaryCall;
  addBook(argument: _libraryPackage_Book, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_libraryPackage_Response__Output>): grpc.ClientUnaryCall;
  addBook(argument: _libraryPackage_Book, metadata: grpc.Metadata, callback: grpc.requestCallback<_libraryPackage_Response__Output>): grpc.ClientUnaryCall;
  addBook(argument: _libraryPackage_Book, options: grpc.CallOptions, callback: grpc.requestCallback<_libraryPackage_Response__Output>): grpc.ClientUnaryCall;
  addBook(argument: _libraryPackage_Book, callback: grpc.requestCallback<_libraryPackage_Response__Output>): grpc.ClientUnaryCall;
  
  DeleteBook(argument: _libraryPackage_BookID, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_libraryPackage_Response__Output>): grpc.ClientUnaryCall;
  DeleteBook(argument: _libraryPackage_BookID, metadata: grpc.Metadata, callback: grpc.requestCallback<_libraryPackage_Response__Output>): grpc.ClientUnaryCall;
  DeleteBook(argument: _libraryPackage_BookID, options: grpc.CallOptions, callback: grpc.requestCallback<_libraryPackage_Response__Output>): grpc.ClientUnaryCall;
  DeleteBook(argument: _libraryPackage_BookID, callback: grpc.requestCallback<_libraryPackage_Response__Output>): grpc.ClientUnaryCall;
  deleteBook(argument: _libraryPackage_BookID, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_libraryPackage_Response__Output>): grpc.ClientUnaryCall;
  deleteBook(argument: _libraryPackage_BookID, metadata: grpc.Metadata, callback: grpc.requestCallback<_libraryPackage_Response__Output>): grpc.ClientUnaryCall;
  deleteBook(argument: _libraryPackage_BookID, options: grpc.CallOptions, callback: grpc.requestCallback<_libraryPackage_Response__Output>): grpc.ClientUnaryCall;
  deleteBook(argument: _libraryPackage_BookID, callback: grpc.requestCallback<_libraryPackage_Response__Output>): grpc.ClientUnaryCall;
  
  GetAllBooks(argument: _libraryPackage_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_libraryPackage_Books__Output>): grpc.ClientUnaryCall;
  GetAllBooks(argument: _libraryPackage_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_libraryPackage_Books__Output>): grpc.ClientUnaryCall;
  GetAllBooks(argument: _libraryPackage_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_libraryPackage_Books__Output>): grpc.ClientUnaryCall;
  GetAllBooks(argument: _libraryPackage_Empty, callback: grpc.requestCallback<_libraryPackage_Books__Output>): grpc.ClientUnaryCall;
  getAllBooks(argument: _libraryPackage_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_libraryPackage_Books__Output>): grpc.ClientUnaryCall;
  getAllBooks(argument: _libraryPackage_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_libraryPackage_Books__Output>): grpc.ClientUnaryCall;
  getAllBooks(argument: _libraryPackage_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_libraryPackage_Books__Output>): grpc.ClientUnaryCall;
  getAllBooks(argument: _libraryPackage_Empty, callback: grpc.requestCallback<_libraryPackage_Books__Output>): grpc.ClientUnaryCall;
  
  GetBookByID(argument: _libraryPackage_BookID, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_libraryPackage_Book__Output>): grpc.ClientUnaryCall;
  GetBookByID(argument: _libraryPackage_BookID, metadata: grpc.Metadata, callback: grpc.requestCallback<_libraryPackage_Book__Output>): grpc.ClientUnaryCall;
  GetBookByID(argument: _libraryPackage_BookID, options: grpc.CallOptions, callback: grpc.requestCallback<_libraryPackage_Book__Output>): grpc.ClientUnaryCall;
  GetBookByID(argument: _libraryPackage_BookID, callback: grpc.requestCallback<_libraryPackage_Book__Output>): grpc.ClientUnaryCall;
  getBookById(argument: _libraryPackage_BookID, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_libraryPackage_Book__Output>): grpc.ClientUnaryCall;
  getBookById(argument: _libraryPackage_BookID, metadata: grpc.Metadata, callback: grpc.requestCallback<_libraryPackage_Book__Output>): grpc.ClientUnaryCall;
  getBookById(argument: _libraryPackage_BookID, options: grpc.CallOptions, callback: grpc.requestCallback<_libraryPackage_Book__Output>): grpc.ClientUnaryCall;
  getBookById(argument: _libraryPackage_BookID, callback: grpc.requestCallback<_libraryPackage_Book__Output>): grpc.ClientUnaryCall;
  
  UpdateBook(argument: _libraryPackage_BookWithID, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_libraryPackage_Response__Output>): grpc.ClientUnaryCall;
  UpdateBook(argument: _libraryPackage_BookWithID, metadata: grpc.Metadata, callback: grpc.requestCallback<_libraryPackage_Response__Output>): grpc.ClientUnaryCall;
  UpdateBook(argument: _libraryPackage_BookWithID, options: grpc.CallOptions, callback: grpc.requestCallback<_libraryPackage_Response__Output>): grpc.ClientUnaryCall;
  UpdateBook(argument: _libraryPackage_BookWithID, callback: grpc.requestCallback<_libraryPackage_Response__Output>): grpc.ClientUnaryCall;
  updateBook(argument: _libraryPackage_BookWithID, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_libraryPackage_Response__Output>): grpc.ClientUnaryCall;
  updateBook(argument: _libraryPackage_BookWithID, metadata: grpc.Metadata, callback: grpc.requestCallback<_libraryPackage_Response__Output>): grpc.ClientUnaryCall;
  updateBook(argument: _libraryPackage_BookWithID, options: grpc.CallOptions, callback: grpc.requestCallback<_libraryPackage_Response__Output>): grpc.ClientUnaryCall;
  updateBook(argument: _libraryPackage_BookWithID, callback: grpc.requestCallback<_libraryPackage_Response__Output>): grpc.ClientUnaryCall;
  
}

export interface LibraryServiceHandlers extends grpc.UntypedServiceImplementation {
  AddBook: grpc.handleUnaryCall<_libraryPackage_Book__Output, _libraryPackage_Response>;
  
  DeleteBook: grpc.handleUnaryCall<_libraryPackage_BookID__Output, _libraryPackage_Response>;
  
  GetAllBooks: grpc.handleUnaryCall<_libraryPackage_Empty__Output, _libraryPackage_Books>;
  
  GetBookByID: grpc.handleUnaryCall<_libraryPackage_BookID__Output, _libraryPackage_Book>;
  
  UpdateBook: grpc.handleUnaryCall<_libraryPackage_BookWithID__Output, _libraryPackage_Response>;
  
}

export interface LibraryServiceDefinition extends grpc.ServiceDefinition {
  AddBook: MethodDefinition<_libraryPackage_Book, _libraryPackage_Response, _libraryPackage_Book__Output, _libraryPackage_Response__Output>
  DeleteBook: MethodDefinition<_libraryPackage_BookID, _libraryPackage_Response, _libraryPackage_BookID__Output, _libraryPackage_Response__Output>
  GetAllBooks: MethodDefinition<_libraryPackage_Empty, _libraryPackage_Books, _libraryPackage_Empty__Output, _libraryPackage_Books__Output>
  GetBookByID: MethodDefinition<_libraryPackage_BookID, _libraryPackage_Book, _libraryPackage_BookID__Output, _libraryPackage_Book__Output>
  UpdateBook: MethodDefinition<_libraryPackage_BookWithID, _libraryPackage_Response, _libraryPackage_BookWithID__Output, _libraryPackage_Response__Output>
}
