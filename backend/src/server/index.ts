import * as grpc from '@grpc/grpc-js'
import * as protoLoader from '@grpc/proto-loader'
import { ProtoGrpcType} from '../proto/library'
import { LibraryServiceHandlers } from '../proto/libraryPackage/LibraryService'
import { Empty } from '../proto/libraryPackage/Empty'
import { Books } from '../proto/libraryPackage/Books'
import { Book } from '../proto/libraryPackage/Book'
import { databaseConnection } from './services/db.service' 
import path from 'path'
import { BookServerService } from './services/library.service'
import { Response } from '../proto/libraryPackage/Response'
import { BookWithID } from '../proto/libraryPackage/BookWithID'
import { BookID } from '../proto/libraryPackage/BookID'

const PROTO_PATH : string = "../../../proto/library.proto"
const PORT : number = 5001

const options : protoLoader.Options = {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
}

const protoBuf : protoLoader.PackageDefinition = protoLoader.loadSync(path.resolve(__dirname, PROTO_PATH), options)
const grpcObj : ProtoGrpcType = (grpc.loadPackageDefinition(protoBuf) as unknown) as ProtoGrpcType
const libraryService = grpcObj.libraryPackage

const main = () => {
  databaseConnection().then(() => {
    const server = getServer()
    server.bindAsync(`0.0.0.0:${PORT}`, grpc.ServerCredentials.createInsecure(),
      (err : Error | null, port : number) => {
        if(err) {
          console.error(err.message)
          return
        }
        console.log(`Server started on port ${port}`)
        
        server.start()
      }
    )
  })
}

const getServer = () => {
  const server : grpc.Server = new grpc.Server()
  server.addService(libraryService.LibraryService.service, {
    'GetAllBooks' : (call : grpc.ServerUnaryCall<Empty, Books>, callback : grpc.sendUnaryData<Books>) => {
      console.log('Server success get all Data')
      BookServerService.getAll().then((books : Books | undefined) => {
        callback(null, books)
      }) 
    },
    'AddBook' : (call : grpc.ServerUnaryCall<Book, Response>, callback : grpc.sendUnaryData<Response>) => {
      const book = call.request
      console.log('Server success Create Data')
      BookServerService.createBook(book).then((res : Response | undefined) => {
        callback(null, res)
      })
    },
    'UpdateBook' : (call : grpc.ServerUnaryCall<BookWithID, Response>, callback : grpc.sendUnaryData<Response>) => {
      const book = call.request
      console.log('Server succed get all Data')
      BookServerService.updateBook(book).then((res : Response | undefined) => {
        callback(null, res)
      })
    },
    'DeleteBook' : (call : grpc.ServerUnaryCall<BookID, Response>, callback : grpc.sendUnaryData<Response>) => {
      const BookId = call.request
      BookServerService.deleteBook(BookId).then((res : Response | undefined) => {
        callback(null, res)
      })
    }
  } as LibraryServiceHandlers ) 
  return server
}

main()