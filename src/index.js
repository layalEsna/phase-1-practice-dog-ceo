
document.addEventListener('DOMContentLoaded', () => {

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
                const li = document.createElement('li')
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
            const ul = document.querySelector('#dog-breeds')
            for (const breed in data.message) {
                const li = document.createElement('li')
                li.textContent = breed

                ul.appendChild(li)
                li.addEventListener('click', () => {
                    li.style.color = 'green'
                })
            }

            const select = document.querySelector('#breed-dropdown')
            //console.log(select)
            for (const letter of select) {
                for (const breed in data.message) {
                    const li = document.createElement('li')
                    if (breed.startsWith(letter)) {

                        li.textContent = breed
                    } else {
                        li.textContent = ''
                    }
                }
            }




        })
})

// document.addEventListener('DOMContentLoaded', () => {

//     const select = document.querySelector('#breed-dropdown')
//     const breedUrl = "https://dog.ceo/api/breeds/list/all"
//     const ul = document.querySelector('#dog-breeds')

//     fetch(breedUrl)
//         .then(res => {
//             if (!res.ok) {
//                 throw new Error('Error')
//             } return res.json()
//         })
//         .then(data => {
//             for (const breed in data.message) {
//                 const li = document.createElement('li')
//                 select.addEventListener('change', () => {
//                     const selected = select.value
//                     if (breed.startsWith(selected)) {
//                         li.textContent = breed
//                     } else { li.textContent = '' }
//                 })
//             }
//         })

// })






