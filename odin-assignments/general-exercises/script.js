function theHobbit() {
    this.info = "The Hobbit by J.R.R. Tolkien, 295 pages, not read yet";
};

window.onload = () =>{
    const print = new theHobbit();
    console.log(print.info);
}