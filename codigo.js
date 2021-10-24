const userSocialMedias = {
    github: 'andrey00005',
    youtube: '258001233',
    facebook: 'andrey.euu',
    instagram: 'andrey.euu',
    twitter: 'AndreyP92624617'
}

function troca(){
    for (let li of socialLinks.children){
    let redes = (li.getAttribute('class'))
    li.children[0].href = `https://${redes}.com/${userSocialMedias[redes]}`
    }
}

function addInfos() {
    let link = 'https://api.github.com/users/andrey00005'

    fetch(link)
    .then(response => response.json())
    .then(data => {
        photoProfile.src = data.avatar_url
        userName.textContent = data.name
        userProfile.textContent = userSocialMedias.github
        userLink.href = data.html_url
        bio.textContent = data.bio
    })
}
addInfos()
troca()


