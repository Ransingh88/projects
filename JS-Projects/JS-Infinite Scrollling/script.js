const container = document.querySelector(".container")
const loading = document.querySelector(".loading")

let limit = 25
let page = 1

function getData() {
    
    fetch(`http://jsonplaceholder.typicode.com/comments?_page=${page}&_limit=${limit}`)
        .then(res => res.json())
        .then(result => {
            console.log(result)
             result.map((ele) => {
                 const htmlData = `
                        <div class="container__card">
            <p class="card__id">${ele.id}</p>
            <h2 class="card__tit">${ele.name}</h2>
            <p class="card__body">${ele.body}</p>
        </div>
                 `;
                 container.insertAdjacentHTML('beforeend', htmlData);
    })
        })
    
   
    
    
}

getData()

function loadData() {
    loading.innerHTML = "Loading..."
    setTimeout(() => {
        loading.innerHTML = ""
        page++
        getData()
    },500)
    
}

window.addEventListener('scroll', () => {
    const { scrollHeight, scrollTop, clientHeight } = document.documentElement;

    if (scrollTop + clientHeight >= scrollHeight) {
        console.log("Loading more data...")
        loadData()
    }
})

