// 1. Select the section with an id of container without using querySelector.
const contain = document.getElementById("container");

// 2. Select the section with an id of container using querySelector.
const contain2 = document.querySelector("#container")

// 3. Select all of the list items with a class of "second".
const seco = document.querySelectorAll(".second")

// 4. Select a list item with a class of third, but only the list item inside of the ol tag.
const trd = document.querySelector("ol .third");

// 5. Give the section with an id of container the text "Hello!".

const text = document.querySelector("#container")
text.innerText = "Hello!"

// 6. Add the class main to the div with a class of footer.
const foot = document.querySelector(".footer")
foot.classList.add("main")

// 7. Remove the class main on the div with a class of footer.
foot.classList.remove("main")

// 8. Create a new li element.
const list = document.querySelector("ul");
const elem = document.createElement("li")

// 9. Give the li the text "four".
elem.innerText = "four"

// 10. Append the li to the ul element.
list.append(elem)

// 12. Loop over all of the lis inside the ol tag and give them a background color of "green".
const liInsideOl = document.querySelectorAll("ol li");
for(var i = 0; i < liInsideOl.length; i++){
    liInsideOl[i].style.backgroundColor = "green";
}

// 13. Remove the div with a class of footer.
const rem = document.querySelector(".footer")
rem.remove()
