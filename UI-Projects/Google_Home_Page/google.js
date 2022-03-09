function search() {
    let query = document.getElementById('search').value
    console.log(query)
    let url = 'https://www.google.com/search?q=' + query;

    window.open(url,'_self')
}