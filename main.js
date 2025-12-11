var itemCount =0;


const backgroundMusic = new Audio("sounds/background.mp3");
backgroundMusic.loop = true;
backgroundMusic.volume = 0.2;
// Play on first user interaction
function startMusic() {
    backgroundMusic.play();
    document.removeEventListener('click', startMusic);
}

// Listen for first click or key press
document.addEventListener('click', startMusic);

window.onload = () => {
    const savedList = JSON.parse(localStorage.getItem("tasks")) || [];
    savedList.forEach(task => addToList(task, false)); // false = don't save again
};


function addToList() {
    itemCount ++; 
    var taskInput = document.getElementById('taskInput');  
    const task = taskInput.value.trim();
    let newDiv = document.createElement("div");
        newDiv.textContent = "🎄 " + task;
        newDiv.id = "item";
    let newButton = document.createElement("button");
        newButton.textContent = "Remove";
        newButton.id = "removeButton";
        newButton.onclick = function() {
            newDiv.remove();
            savedList();
        };
    if (task === '') {
        alert('Please enter a valid item.');
        return;
    }
    newDiv.appendChild(newButton);
    document.getElementById('list').appendChild(newDiv);

    if (save) saveList();

    taskInput.value = "";
   
}
// Save current list to localStorage
function saveList() {
    const tasks = [];
    const listItems = document.querySelectorAll('#list div');
    listItems.forEach(div => {
        // Remove the "🎄 " and get text only
        const text = div.firstChild.textContent.replace("🎄 ", "");
        tasks.push(text);
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}
function addTextToList(text) {
    document.getElementById('list').innerHTML += '🎄 ' + text + '<br>';
}


window.onload = () => {
    const r = document.getElementById("reindeer");
    r.classList.remove("hidden");


    function loopRun() {
        
        r.classList.add("hidden");     
        r.style.transition = "none";   
        r.style.left = "-100vw";       // moves back to the start
      

        requestAnimationFrame(() => {
            r.style.transition = "left 10s linear"; // movement speed
            r.classList.remove("hidden");         
                   

            requestAnimationFrame(() => {
                
                r.style.left = "100vw";  // run across screen
                        
            });
        });
        

    
        setTimeout(loopRun, 10000); //repeat after 10 seconds
    }

    loopRun();
};

function createSnowflake() {
    const snow = document.createElement("div");
    snow.classList.add("snowflake");
    snow.textContent = "❄";

    // Random horizontal start position
    snow.style.left = Math.random() * window.innerWidth + "px";

    // Random size
    snow.style.fontSize = (Math.random() * 15 + 10) + "px";

    // Random fall speed
    snow.style.animationDuration = (Math.random() * 3 + 3) + "s";

    // Small random horizontal drifting using rotate
    snow.style.animationTimingFunction = "ease-in-out";

    document.getElementById("snow-container").appendChild(snow);

    // Remove snowflake after it finishes falling
    setTimeout(() => snow.remove(), 6000);
}

// Make a new snowflake every 100 ms
setInterval(createSnowflake, 100);
