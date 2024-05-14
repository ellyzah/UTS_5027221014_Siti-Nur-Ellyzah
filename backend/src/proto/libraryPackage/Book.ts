// Original file: ../proto/library.proto

import type { Long } from '@grpc/proto-loader';

export interface Book {
  'title'?: (string);
  'author'?: (string);
  'publisher'?: (string);
  'yearPublication'?: (number | string | Long);
  'ISBN'?: (number | string | Long);
  'loanBooks'?: (string);
  'description'?: (string);
}

export interface Book__Output {
  'title'?: (string);
  'author'?: (string);
  'publisher'?: (string);
  'yearPublication'?: (Long);
  'ISBN'?: (Long);
  'loanBooks'?: (string);
  'description'?: (string);
}
