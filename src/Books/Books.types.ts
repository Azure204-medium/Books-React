export type Book = {
    id : number,
    title : string,
    author : string,
    genre : string,
    publishedYear : number,
    price : number,
    inStock : boolean
}

export type BookListProps = {
    books : Book[]
}
