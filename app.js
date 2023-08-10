const consumption = document.getElementById("consumption");

consumption.onclick = () => {
    document.body.style.background = "url('https://kq-storage.s3.ap-south-1.amazonaws.com/Github/earth/food-wastage-bg%5B1%5D.png')";
    document.getElementById("save").innerText = "Do your bit! Shop only what you need,eat only what you need and always save the left overs.";
    document.getElementById("frame").src = "https://www.theworldcounts.com/embed/challenges/107?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=20";
    consumption.style.backgroundColor = "green";
    climate.style.backgroundColor = "transparent";
    resources.style.backgroundColor = "transparent";
    people.style.backgroundColor = "transparent";
}

climate.onclick = () => {
    document.body.style.background = "url('https://kq-storage.s3.ap-south-1.amazonaws.com/Github/earth/climate-change-bg%5B1%5D.png')";
    document.getElementById("save").innerText = "Do your bit! Save trees, use renewable energy soureces and prefer to travel green";
    document.getElementById("frame").src = "https://www.theworldcounts.com/embed/challenges/23?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=20";
    climate.style.backgroundColor = "green";
    consumption.style.backgroundColor = "transparent";
    resources.style.backgroundColor = "transparent";
    people.style.backgroundColor = "transparent";
}

resources.onclick = () => {
    document.body.style.background = "url('https://kq-storage.s3.ap-south-1.amazonaws.com/Github/earth/natural-resources-bg%5B1%5D.png')";
    document.getElementById("save").innerText = "Do your bit! Avoid all things plastic. Believe in Reduce, Reuse and Recycle";
    document.getElementById("frame").src = "https://www.theworldcounts.com/embed/challenges/5?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=20";
    resources.style.backgroundColor = "green";
    climate.style.backgroundColor = "transparent";
    consumption.style.backgroundColor = "transparent";
    people.style.backgroundColor = "transparent";
}

people.onclick = () => {
    document.body.style.background = "url('https://kq-storage.s3.ap-south-1.amazonaws.com/Github/earth/poverty-bg%5B1%5D.png')";
    document.getElementById("save").innerText = "Do your bit! Never waste food.Rather offer it to people or animals who are in need. resources and people";
    document.getElementById("frame").src = "https://www.theworldcounts.com/embed/challenges/2?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Aria";
    people.style.backgroundColor = "green";
    climate.style.backgroundColor = "transparent";
    consumption.style.backgroundColor = "transparent";
    resources.style.backgroundColor = "transparent";
}

