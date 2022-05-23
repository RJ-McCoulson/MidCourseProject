const hamburger = document.querySelector(".hamburger");
const filterMenu = document.querySelector(".filter-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    filterMenu.classList.toggle("active");
}

const filterLink = document.querySelectorAll(".filter-link");

filterLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    filterMenu.classList.remove("active");
}

//Array 

const toyArray = [
    {
        
        title: "play set",
        catergory: "Chew toys ",
        price: 3.99,
        img: './img/ChewToys2.jpg',
        desc: `Lorem ipsum dolor, sit amet consectetur 
        adipisicing elit. Et sequi iste veritatis rem 
        accusantium dolores reprehenderit, aliquam quidem esse? 
        Excepturi!`,
    },
    {
        id: 2,
        title: "play set",
        catergory: "Ladders ",
        price: 3.99,
        img: './img/ChewToys1.jpg',
        desc: `Lorem ipsum dolor, sit amet consectetur 
        adipisicing elit. Et sequi iste veritatis rem 
        accusantium dolores reprehenderit, aliquam quidem esse? 
        Excepturi!`,
    },
    {
        id: 3,
        title: "play set",
        catergory: "Chew toys ",
        price: 3.99,
        img: './img/Ladders1.jpg',
        desc:`Lorem ipsum dolor, sit amet consectetur 
        adipisicing elit. Et sequi iste veritatis rem 
        accusantium dolores reprehenderit, aliquam quidem esse? 
        Excepturi!`,
    },
    {
        id: 4,
        title: "play set ",
        catergory: "Ladders ",
        price: 3.99,
        img: './img/Ladders2.jpg',
        desc:`Lorem ipsum dolor, sit amet consectetur 
        adipisicing elit. Et sequi iste veritatis rem 
        accusantium dolores reprehenderit, aliquam quidem esse? 
    Excepturi!`,
},
    {
        id: 5,
        title: "play set",
        catergory: "Hammocks ",
        price: 3.99,
        img: './img/ChewToys2.jpg',
        desc:`Lorem ipsum dolor, sit amet consectetur 
        adipisicing elit. Et sequi iste veritatis rem 
        accusantium dolores reprehenderit, aliquam quidem esse? 
        Excepturi!`,
    },
    {
        id: 6,
        title: "play set",
        catergory: "Hammocks ",
        price: 3.99,
        img: './img/ChewToys2.jpg',
        desc:`Lorem ipsum dolor, sit amet consectetur 
        adipisicing elit. Et sequi iste veritatis rem 
        accusantium dolores reprehenderit, aliquam quidem esse? 
        Excepturi!`,
    },
    
];

//edit

const toyList = document.querySelector('.cards');
const filterList = document.querySelector('.filter-menu');

//display all items when page loads

window.addEventListener('DOMContentLoaded', function() {
    displayToyType(toyArray);
    displayToyLinks();
});

//dynamically populate a string

function displayToyType(toyTypes) {
    let displayToys = toyTypes.map(function (item) {
    //console.log(item);
    return `<article class='card-container'>
    <img src=${item.img} class='photo' alt=${item.title}>
    <div class="item-info">
    <header>
        <h4>${item.title}</h4>
        <h4 class='price'>£${item.price}</h4>
    </header>
    <p class='item-desc'>${item.desc}</p>
        </div>
        </article>`;
    });
    displayToys = displayToys.join("");
//console.log(displayToys);
 toyList.innerHTML = displayToys;
}



//filter function


/*    function displayToyLinks() {
        const catergories = toyArray.reduce(
            function (values, item) {
                if (!values.includes(item.catergory)) {
                    values.push(item.catergory);
                }
                return values;
            },
            ["all"]
        );
        const catergoryLinks = catergories.map(function (catergory) {
            return `<p class="filter-link" data-id='${catergory}'>${catergory}</p>` ;
        })
        .join("");

        filterList.innerHTML = catergoryLinks;
        const filterOptions = filterList.querySelectorAll(".filter-menu");
        console.log(filterOptions);
//filter links
        filterOptions.forEach(function (link) {
            link.addEventListener("click", function (e) {
                console.log(e.currentTarget.dataset);
                const catergory = e.currentTarget.dataset.id;
                const toyCatergory = toyArray.filter(function (toyTypes) {
                    if (toyTypes.catergory === catergory) {
                        return toyTypes;
                    }
                });
                if (catergory === "all") {
                    displayToy(toyArray);
                } else {
                    displayToyType(toyCatergory);
                }
                
            });
        });
    }*/



