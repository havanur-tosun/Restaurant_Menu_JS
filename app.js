const menu = [
    {
        id: 1,
        title: "Adana Kebap",
        category: "Dinner",
        price: 21.99,
        img: "./img/adanakebap.png",
        desc: "Adana kebap is a long, hand-minced meat kebab mounted on a wide iron skewer and grilled on an open mangal filled with burning charcoal.Grilled adana kebabs are flavored with cumin, sharp sumac and spicy red chili peppers."
    },
    {
        id: 2,
        title: "Döner",
        category: "Lunch",
        price: 15.99,
        img: "./img/doner.jpg",
        desc: "Seasoned lamb or mutton or chicken is fried on a vertical skewer. When cooked, the meat is sliced, served with pita bread and roasted tomatoes and peppers."
    },
    {
        id: 3,
        title: "Sucuklu Yumurta",
        category: "Breakfast",
        price: 12.99,
        img: "./img/sucukluyumurta.jpg",
        desc: "Sucuk is a dried sausage made of ground beef with garlic and a variety of spices like red pepper, cumin, and sumac.Before breaking the eggs, the chopped sausage is sautéed, then the eggs are added."
    },
    {
        id: 4,
        title: "Sütlaç",
        category: "Dessert",
        price: 8.99,
        img: "./img/sutlac.jpg",
        desc: "Sutlac is made with water, milk, sugar, rice, and rice flour. It is a simple, light dessert. After cooking, fırın sütlaç is browned in a salamander broiler, and it is usually topped with either ground cinnamon or chopped hazelnuts before serving."
    },
    {
        id: 5,
        title: "Iskender",
        category: "Dinner",
        price: 18.99,
        img: "./img/iskender.jpg",
        desc: "Iskender kebab is normally consists of thin strips of lamb or beef, greased with tomato sauce which is then served over the bed of pita bread pieces along with the yogurt."
    },
    {
        id: 6,
        title: "Yaprak Sarma",
        category: "Lunch",
        price: 10.99,
        img: "./img/yapraksarma.jpg",
        desc: "Yaprak sarma is grape vine leaves rolled and filled with minced meat. This vegan version has a rice filling that is seasoned well with lemon, fresh parsley, paprika, mint, and pepper paste."
    },
    {
        id: 7,
        title: "Simit",
        category: "Breakfast",
        price: 6.99,
        img: "./img/simit.jpg",
        desc: "Simit is a circular bread, typically encrusted with sesame seeds or, less commonly, poppy, flax or sunflower seeds.Served with ayran."
    },
    {
        id: 8,
        title: "Baklava",
        category: "Dessert",
        price: 4.99,
        img: "./img/baklava.jpg",
        desc: " Baklava is a rich, sweet dessert pastry made of layers of filo filled with chopped nuts and sweetened and held together with syrup or honey."
    },
]

function displayMenuItems(menuList) {
    
    let sectionContent = "";
    
    menuList.forEach((item) => {
        sectionContent += `<article class="menu-item">
        <img src=${item.img} alt="menu item" class="photo">
        <div class="item-info">
            <header>
                <h4>${item.title}</h4>
                <h4>$ ${item.price}</h4>
            </header>
            <p class="item-text"> ${item.desc}</p>
        </div>
        </article>
        <br>
        <hr>
        <br>`;
    });
    
    document.querySelector(".section-center").innerHTML = sectionContent;
}
displayMenuItems(menu);



function displayCategories() {
    
    let categoryContent = `<button type="button" class="filter-button" data-id="all">All</button>`;
    
    const categorySet = new Set();
   
    menu.forEach((item) => categorySet.add(item.category));
    categorySet.forEach((item) => {
        categoryContent += `<button type="button" class="filter-button" data-id=${item}>${item}</button>`
    })
    
    document.querySelector(".btn-container").innerHTML = categoryContent;
    
    const filterButtons = document.querySelectorAll(".filter-button");
    
    filterButtons.forEach((button) => {
        button.addEventListener("click", function(event){
            console.log(event.target.getAttribute("data-id"));
            const selectedCategoryName = event.target.getAttribute("data-id");
            const filteredMenu = menu.filter( item => item.category == selectedCategoryName);
            
            if (selectedCategoryName == "all") displayMenuItems(menu);
            else displayMenuItems(filteredMenu);
        })
    });
}
displayCategories();