import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import { ProtoGrpcType } from '../proto/library';
import path from 'path';
import { BookID } from '../proto/libraryPackage/BookID';
import { Book } from '../proto/libraryPackage/Book';
import express, { Request, Response } from 'express';
import { BookWithID } from '../proto/libraryPackage/BookWithID';

const PROTO_PATH: string = "../../../proto/library.proto";
const PORT: number = 5001;
const portClient = 3000

const options = {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
};

const protoBuf = protoLoader.loadSync(path.resolve(__dirname, PROTO_PATH), options);
const grpcObj = grpc.loadPackageDefinition(protoBuf) as unknown as ProtoGrpcType;

const client = new grpcObj.libraryPackage.LibraryService(
  `0.0.0.0:${PORT}`, grpc.credentials.createInsecure()
);

const deadline = new Date();
deadline.setSeconds(deadline.getSeconds() + 5);
client.waitForReady(deadline, (err: any) => {
  if (err) {
    console.error(err);
    return;
  }
  onClientReady();
});

const onClientReady = () => {
  console.log(`Server running on port ${PORT} & Client running on port ${portClient}`);
  const app = express();
  const corsMiddleware = require("../middleware/authCors");
  app.use(express.json());
  app.use(corsMiddleware);

  app.get('/library/books', (req: Request, res: Response) => {
    client.GetAllBooks({}, (err: any, _res: any) => {
      if (err) {
        console.error(err);
        return;
      }
      res.send(_res);
    });
  });

  app.post('/library/books', (req: Request, res: Response) => {
    const createInput: Book = req.body;
    const book: Book = createInput;
    client.AddBook(book, (err: any, _res: any) => {
      if (err) {
        console.error(err);
        return;
      }
      res.send(_res);
    });
  });

  app.patch('/library/books/:id', (req : Request, res : Response) => {
    const book : BookWithID = {
      bookId : {
        id : req.params.id 
      },
      book : req.body 
    }

    client.updateBook(book, 
      (err, _res) => {
        if(err) {
          console.error(err)
          return
        }
        res.send(_res)
      }
    )
  })

  app.delete('/library/books/:id', (req: Request, res: Response) => {
    const bookID: BookID = { id: req.params.id };
    client.DeleteBook(bookID, (err: any, _res: any) => {
      if (err) {
        console.error(err);
        return;
      }
      res.send(_res);
    });
  });

  app.listen(portClient, () => {
    console.log("Express is started");
  });
};
