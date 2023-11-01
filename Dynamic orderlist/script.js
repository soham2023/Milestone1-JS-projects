const items = [
    "HTML and Semantics",
    "Starting with CSS",
    "Working Template",
    "Mobile responsive webpages",
    "Grid and Flex-box in CSS",
    "Projects using HTML & CSS",
    "Version Control and Git",
    "Getting Started with JavaScript",
    "Advance JavaScript",
    "Working with DOM",
    "Making Projects using HTML, CSS and JavaScript",
    "Understanding Fundamental of Computer Science",
    "Getting Started with Database",
    "Understanding the Database",
    "Starting with NodeJS and Express",
    "Understanding React and its Fundamentals",
    "Understanding Hooks and Routers",
    "Starting and Completing Full Fledge Projects",
  ];

  let index = 0;
  let list = document.getElementById("list");
  let add =  document.getElementById("add");
  let remove = document.getElementById("remove");
  let msg =  document.getElementById("msg");

  add.addEventListener("click" , ()=>
  {
        if(index < items.length)
        {
            let addItem = document.createElement("li");
            addItem.textContent = items[index];
            list.appendChild(addItem)
            index++;
            msg.textContent = ""
        }
        else 
        {
            msg.textContent ="All Items Are Added!"
            add.style.display= 
            "none";
            remove.style.display = "block";
        }

  });

  remove.addEventListener("click", () => {
    if (list.children.length > 0) {
      list.removeChild(list.lastElementChild);
      msg.textContent = "";
  
      if (list.children.length === 0) {
        msg.textContent = "All items have been removed.";
        add.style.display = "block";
        remove.style.display = "none";
      }
    } else {
      msg.textContent = "No items to remove.";
    }
  });