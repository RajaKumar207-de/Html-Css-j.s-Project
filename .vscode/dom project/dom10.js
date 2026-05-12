var status = document.querySelector("#status");
var addBtn = document.querySelector("#add");
var removeBtn = document.querySelector("#remove");
var darkBtn = document.querySelector("#dark");
var img = document.querySelector("#profile");
var heart = document.querySelector("#heart");
var likeText = document.querySelector("#likes");

var check = 0;
var likes = 0;

// Add Friend (with loading)
addBtn.addEventListener("click", function(){
    addBtn.innerHTML = "Loading...";

    setTimeout(function(){
        if(check === 0){
            status.innerHTML = "Friends";
            status.style.color = "green";
            addBtn.innerHTML = "Following";
            check = 1;
        }else{
            status.innerHTML = "Stranger";
            status.style.color = "red";
            addBtn.innerHTML = "Add Friend";
            check = 0;
        }
    },800);
});

// Remove
removeBtn.addEventListener("click", function(){
    status.innerHTML = "Stranger";
    status.style.color = "red";
    addBtn.innerHTML = "Add Friend";
    check = 0;
});

// Double click like ❤️
img.addEventListener("dblclick", function(){
    likes++;
    likeText.innerHTML = "❤️ Likes: " + likes;

    heart.classList.add("show");

    setTimeout(function(){
        heart.classList.remove("show");
    },500);
});

// Dark mode 🌙
darkBtn.addEventListener("click", function(){
    document.body.classList.toggle("dark");
});