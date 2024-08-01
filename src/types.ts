

export interface Book {
 id: number;
 title: string;
 author: string;
 available: number;
 cover: string;
 summary: string;
}

export type UserContextType = {
 catalog: Book[];
 setCatalog: any;
 selectedBook: Book;
 setSelectedBook: any;
 updateBookInCatalog: any;
 addBookToCatalog: any;
}
