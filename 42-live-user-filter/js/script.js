const result = document.getElementById('result')
const filter = document.getElementById('filter')
const listItems = []

getData()

filter.addEventListener('input', (e) => filterData(e.target.value))


// Get users data
async function getData() {
    const res = await fetch('https://fakerapi.it/api/v1/persons?_quantity=30')
    const data = await res.json()

    const { data: results } = data  // Access the 'data' property

    // Clear result
    result.innerHTML = ''

    if ( results && Array.isArray(results) ) {
        results.forEach(user => {
            const li = document.createElement('li')

            listItems.push(li)

            li.innerHTML = `
                <div class="user-info">
                    <h4>${user.firstname} ${user.lastname}</h4>
                    <p>${user.address.city}, ${user.address.country}</p>
                </div>
            `

            result.appendChild(li)
        })
    } else {
        console.error('Invalid data structure:', data)
    }
    
}


// Filter list with searching term
function filterData( searchTerm ) {
    listItems.forEach(item => {
        if ( item.innerText.toLowerCase().includes(searchTerm.toLowerCase()) ) {
            item.classList.remove('hide')

        } else {
            item.classList.add('hide')
        }
    })
}
