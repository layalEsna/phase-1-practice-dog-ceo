
document.addEventListener('DOMContentLoaded', () => {
    //const li = ul.querySelector('li')
    // const li = document.createElement('li')

    const div = document.querySelector('#dog-image-container')
    const ul = document.createElement('ul')
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

    fetch(imgUrl)
        .then(res => {
            if (!res.ok) {
                throw new Error('Error!')
            } return res.json()
        })
        .then(data => {
            data.message.forEach(pic => {
                const img = document.createElement('img')
                li = document.createElement('li')
                li.innerHTML = `<img src="${pic}" alt="Dog" width="300px">`


                ul.appendChild(li)
                div.appendChild(ul)
            })
        })

})

document.addEventListener('DOMContentLoaded', () => {

    const breedUrl = "https://dog.ceo/api/breeds/list/all"

    fetch(breedUrl)
        .then(res => {
            if (!res.ok) {
                throw new Error('Error')
            } return res.json()
        })
        .then(data => {
            const breeds = data.message
            //console.log(data)
            const ul = document.querySelector('#dog-breeds')
            for (const breed in breeds) {
                //console.log(breeds)
                li = document.createElement('li')
                li.textContent = breed

                ul.appendChild(li)
                li.addEventListener('click', () => {

                    if (li.style.color === 'green') {
                        li.style.color = 'black'
                    } else {
                        li.style.color = 'green'
                    }
                })
            }

            const select = document.querySelector('#breed-dropdown');
            select.addEventListener('change', (e) => {
                const selectedLetter = e.target.value;
                const ul = document.querySelector('#dog-breeds')
                ul.innerHTML = ''
                for (const breed in breeds) {
                    //const li = ul.querySelector('li');
                    if (breed.startsWith(selectedLetter)) {
                        const li = document.createElement('li')
                        li.textContent = breed
                        li.addEventListener('click', () => {
                            if (li.style.color === 'blue') {
                                li.style.color = 'purple'
                            } else {
                                li.style.color = 'blue'
                            }
                        })
                        ul.appendChild(li)
                    }
                }
            });








        })
})







