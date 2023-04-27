const body = document.body
const div = document.createElement ('div')
div.classList.add('container')
body.append(div)
div.style.maxWidth = "400px"
div.style.backgroundColor = "grey"

const title = document.createElement ('h1')
title.innerHTML = "Programing"
div.appendChild(title)
title.style.textAlign = "center"

const image = document.createElement ('img')
image.src ="./programing.jpeg"
div.appendChild(image)
image.style.margin = "50px"

const text = document.createElement ('p')
text.innerHTML ="Programming refers to a technological process for telling a computer which tasks to perform in order to solve problems. You can think of programming as a collaboration between humans and computers, in which humans create instructions for a computer to follow (code) in a language computers can understand"
div.appendChild (text)
text.style.color ="white"

const button = document.createElement ('button')
button.innerHTML = "reed more"
div.appendChild (button)
button.style.marginLeft = "150px"