// cypress/integration/library_spec.js

describe('Library API Tests', () => {
    
    
    it.only('should add a new book', () => {
      const newBook = {
        name: 'API testing in Cypresss',
        isbn: 'bcde',
        aisle: '228',
        author: 'John foee',
      };
  
      cy.request('POST', 'http://216.10.245.166/Library/Addbook.php', newBook)
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body.Msg).to.eq('successfully added');
          expect(response.body.ID).to.eq('bcd227');
        });
    });
  
    it('should get books by author name', () => {
      cy.request('GET', '/Library/GetBook.php?AuthorName=John foe')
        .then((response) => {
          expect(response.status).to.eq(200);
          // Assuming the response contains an array of book objects
          expect(Array.isArray(response.body)).to.be.true;
          // Add assertions to verify the structure and content of each book object
          // Example:
          response.body.forEach((book) => {
            expect(book).to.have.property('name');
            expect(book).to.have.property('isbn');
            expect(book).to.have.property('aisle');
            expect(book).to.have.property('author');
            expect(book.author).to.eq('somename'); // Adjust the expected author name
          });
        });
    });
  });