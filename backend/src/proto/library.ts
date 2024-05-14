import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { LibraryServiceClient as _libraryPackage_LibraryServiceClient, LibraryServiceDefinition as _libraryPackage_LibraryServiceDefinition } from './libraryPackage/LibraryService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  libraryPackage: {
    Book: MessageTypeDefinition
    BookID: MessageTypeDefinition
    BookWithID: MessageTypeDefinition
    Books: MessageTypeDefinition
    Empty: MessageTypeDefinition
    LibraryService: SubtypeConstructor<typeof grpc.Client, _libraryPackage_LibraryServiceClient> & { service: _libraryPackage_LibraryServiceDefinition }
    Response: MessageTypeDefinition
  }
}

