let books = [
	{title:'The Reckoning', author:'John Grisham', year:2018, cover:'https://is4-ssl.mzstatic.com/image/thumb/Publication125/v4/cb/7a/2f/cb7a2f8a-57a2-919f-af20-b0d8b1f70021/source/225x225bb.jpg'},
	{title:'Killing Floor', author:'Lee Child', year:1997, cover:'https://is1-ssl.mzstatic.com/image/thumb/Publication71/v4/3d/f9/22/3df922f5-17c9-c182-1264-a875908089cd/source/225x225bb.jpg'},
	{title:'Every Breath', author:'Nicholas Sparks', year:2018, cover:'https://is3-ssl.mzstatic.com/image/thumb/Publication128/v4/c1/5f/52/c15f52b6-2519-6a96-34cf-92b1e1434efc/source/225x225bb.jpg'},
	{title:'Elevation', author:'Stephen King', year:2018, cover:'https://is5-ssl.mzstatic.com/image/thumb/Publication118/v4/c7/3b/f0/c73bf0b5-d318-e3c9-a186-3ca506e4f8d8/source/225x225bb.jpg'},
	{title:'Fun Home', author:'Alison Bechdel', year:2007, cover:'https://is2-ssl.mzstatic.com/image/thumb/Publication3/v4/b1/4e/13/b14e1324-9adb-0df4-0b5d-4a692d1714cd/source/225x225bb.jpg'},
	{title:'Nine Pints', author:'Rose George', year:2018, cover:'https://is5-ssl.mzstatic.com/image/thumb/Publication118/v4/f0/bc/45/f0bc453c-7bac-e676-8bdf-8f0c3091b946/source/225x225bb.jpg'},
	{title:'Antigone', author:'Sophocles', year:2012, cover:'https://is3-ssl.mzstatic.com/image/thumb/Publication/v4/49/fc/4c/49fc4cb2-7706-dd12-46e3-a312e99e26a0/source/225x225bb.jpg'},
	{title:'Fooling Houdini', author:'Alex Stone', year:2012, cover:'https://is5-ssl.mzstatic.com/image/thumb/Publication3/v4/5e/24/4b/5e244b6d-1770-cc84-d022-e8d5a2f9798d/source/225x225bb.jpg'},
	{title:'Red Notice', author:'Bill Browder', year:2015, cover:'https://is5-ssl.mzstatic.com/image/thumb/Publication69/v4/d3/01/f2/d301f229-6297-d5ad-d7c2-df089bfd4552/source/225x225bb.jpg'},
	{title:'Paperless', author:'David Sparks', year:2012, cover:'https://is4-ssl.mzstatic.com/image/thumb/Publication/v4/cd/dd/81/cddd810b-f3f2-fca4-6865-fcc164308d8f/source/225x225bb.jpg'},
	{title:'Lincoln The Unknown', author:'Dale Carnegie', year:2014, cover:'https://is3-ssl.mzstatic.com/image/thumb/Publication2/v4/ef/c7/08/efc708c5-111c-2836-46c3-e66b6fd5b4fb/source/225x225bb.jpg'},
	{title:'The Elite', author:'Kiera Cass', year:2013, cover:'https://is5-ssl.mzstatic.com/image/thumb/Publication2/v4/4a/f3/60/4af36058-627d-3517-4a22-45b4748ce118/source/225x225bb.jpg'},
	{title:'I Am Error', author:'Nathan Altice', year:2015, cover:'https://is3-ssl.mzstatic.com/image/thumb/Publication1/v4/6c/7a/de/6c7ade24-5f0c-d963-5609-c4dd43cdb5c7/source/225x225bb.jpg'},
	{title:'The Idealist', author:'Justin Peters', year:2016, cover:'https://is3-ssl.mzstatic.com/image/thumb/Publication111/v4/cc/b0/5c/ccb05c03-66ee-b99f-7260-8892d52a1b43/source/225x225bb.jpg'},
	{title:'Simply Keto', author:'Suzanne Ryan', year:2017, cover:'https://is5-ssl.mzstatic.com/image/thumb/Publication128/v4/bd/1d/3e/bd1d3e85-3ed5-51d3-7a8b-436eea1a90bd/source/225x225bb.jpg'}
	
];

/*-----------------------------------------------------------------------*/

function addBook(){
	let bookName = document.getElementById('bookName').value;
	let bookAuthor = document.getElementById('bookAuthor').value;
	let bookYear = document.getElementById('bookYear').value;
	let bookCover = document.getElementById('bookCover').value;

	books.push({
		title: bookName,
		author: bookAuthor,
		year: bookYear,
		cover: bookCover
	});

	sortBooks();
	displayBooks();
	document.getElementById('bookName').value="";
	document.getElementById('bookAuthor').value="";
	 document.getElementById('bookYear').value="";
	document.getElementById('bookCover').value="";
} 

/*-----------------------------------------------------------------------*/

function displayBooks(){
	
	document.getElementById('quantityDisplay').innerHTML = ' _WE HAVE ' + books.length + ' BOOKS';
	document.getElementById('rentDisplay').innerHTML = ' _BORROWED ' + rentBooks.length;

	document.getElementById('display').innerHTML = '';
	for(let i = 0; i < books.length; i++){
		document.getElementById('display').innerHTML += `
			<h2> 
				<img src="${books[i].cover}">
				${books[i].title} by ${books[i].author} in ${books[i].year} 
				<input type="button" class="btn btn-success btn-sm" data-toggle="button" aria-pressed="true" value="READ" onclick="tapButton(this)">
				<input type="button" class="btn btn-danger btn-sm" value="DELETE" onclick="deleteBook(${i})" />
				<input type="button" class="btn btn-outline-primary btn-sm" value="CHECKOUT" onclick="addRentBook(${i})">			
			</h2>
			<hr>
		`;
	}
	
}


/*-----------------------------------------------------------------------*/


function tapButton(readButton){
	
	if (readButton.value === 'READ') {
		readButton.value = 'NOT READ';
	}else{
		readButton.value = 'READ';
	}
}

/*-----------------------------------------------------------------------*/

function deleteBook(index){
	
	books.splice(index, 1);

	displayBooks();
}

/*-----------------------------------------------------------------------*/

function sortBooks(index){
	books.sort(function(a, b){
		return a.title > b.title
	});
	displayBooks();
}

/*-----------------------------------------------------------------------*/

function bookAlert(){
	let date=new Date().toDateString()
	alert("Thank You for borrowing our Book! Please return this Book 2 Weeks from Today, " + date );
}

/*-----------------------------------------------------------------------*/

let rentBooks = []; 

function addRentBook(index){
	// let bookName = document.getElementById('bookName').value;
	// let bookAuthor = document.getElementById('bookAuthor').value;
	// let bookYear = document.getElementById('bookYear').value;
	// let bookCover = document.getElementById('bookCover').value;
	rentBooks.push({
		title: books[index].title,
		author: books[index].author,
		year: books[index].year,
		cover: books[index].cover
	});
	


	bookAlert();
	deleteBook(index);
	displayBooks();
	console.log(rentBooks);
} 

/*-----------------------------------------------------------------------*/

window.onscroll = function() {myFunction()};

var navBar = document.getElementById("navBar");
var sticky = navBar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navBar.classList.add("sticky")
  } else {
    navBar.classList.remove("sticky");
  }
}




