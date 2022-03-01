const games = [
    {
        img:"https://i5.walmartimages.com/asr/afd341a0-735f-43b0-b917-07f3bd14622a_2.46f3410af681994543dddb67ec00ad4b.jpeg",
        price:"$19.99",
        name:"God of War",
        description:"Dad of war discovers how to be a father by chucking his axe at giant nordic creatures and yell BOY many many times.",
        platform:"playstation"
    },
    {
        img:"https://www.gamerevolution.com/assets/uploads/2014/07/file_8759_killer-instinct-box.jpg",
        price:"$14.99",
        name:"Killer Instinct",
        description:"Bunch of crazy 80s and 90s knock offs fighting using breakers and instinct senses.",
        platform:"xbox"
    },
    {
        img:"https://upload.wikimedia.org/wikipedia/en/thumb/f/fb/DKC5_box_art.jpg/220px-DKC5_box_art.jpg",
        price:"$49.99",
        name:"Donkey Kong Country: Tropical Freeze",
        description:"A giant gorilla and possibly apes quest to unfeeze their island form a bunch of icey animals and collect lots of bananas.",
        platform:"switch"
    }
];

let elements = [];
let popUps = [];
eleMaker();



function eleMaker(){
  for(let obj in games){
    let x = games[obj];
    elements.push(new game(obj, x.price, x.img, x.platform))
    popUps.push(new gamePopUp(obj, x.price, x.img, x.platform, x.name, x.description))
  }
}

function game(ID, Price, Image, Platform){

  const playstationImg = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/PlayStation_logo.svg/2560px-PlayStation_logo.svg.png";
  const switchImg = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Nintendo_Switch_Logo.svg/1024px-Nintendo_Switch_Logo.svg.png";
  const xboxImg = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Xbox_logo_%282019%29.svg/1200px-Xbox_logo_%282019%29.svg.png";

  let that = this;

  this.id = ID;
  this.price = Price;
  this.platform = Platform;
  this.img = Image;

  //Making Elements
  this.ele=document.createElement("div");
  this.elePrice=document.createElement("div");
  this.eleImage=document.createElement("img");
  this.eleImagePlatform=document.createElement("img");
  this.elePlatform=document.createElement("div");
  
  
  //assigning source
  this.eleImage.src = Image;
  this.eleImagePlatform.classList.add("plat");
  
  //adding css
  this.eleImage.classList.add("prdImg");
  this.ele.classList.add("product");
  

  //Adding proper color boarder
  if(Platform === "playstation"){
    this.ele.classList.add("playstation");
    this.eleImagePlatform.src = playstationImg;
    

  }else if(Platform === "xbox"){
    this.ele.classList.add("xbox");
    this.eleImagePlatform.src = xboxImg;
   

  }else if(Platform === "switch"){
    this.ele.classList.add("switch");
    this.eleImagePlatform.src = switchImg;
  }

  //Puts in div
  this.elePrice.innerHTML = Price;
  this.ele.append(this.eleImage);
  this.ele.append(this.eleImagePlatform);
  this.ele.append(this.elePrice);
  document.body.append(this.ele);
  
  // Click that allows for popup to show
  this.ele.addEventListener("click", function() {
    that.popUp(that.id);
});
}

game.prototype.popUp = function(id) {
  popUps[id].ele.style.display = "flex";
}


function gamePopUp(ID, Price, Image, Platform, Name, Description){
  let that = this;

  this.id = ID;

  //Making Elements
  this.ele = document.createElement("div");
  this.eleImage = document.createElement("img");
  this.elePrice = document.createElement("h2");
  this.eleName = document.createElement("h1");
  this.elePlatform = document.createElement("h3");
  this.eleDescription = document.createElement("p");

  //Puts shit on screen
  this.ele.classList.add("popUp");
  this.eleImage.src = Image;
  this.elePrice.innerHTML = Price;
  this.eleName.innerHTML = Name;
  this.elePlatform.innerHTML = Platform;
  this.eleDescription.innerHTML = Description;

  //color coding stuff
  if(Platform === "playstation"){
    this.elePlatform.style.color = "blue";
  }else if(Platform === "xbox"){
    this.elePlatform.style.color = "green";
  }else
    this.elePlatform.style.color = "red";

  //appends stuff
  this.ele.append(this.eleImage);
  this.ele.append(this.eleName);
  this.ele.append(this.elePrice);
  this.ele.append(this.eleDescription);
  this.ele.append(this.elePlatform);
  document.body.append(this.ele);

  this.ele.addEventListener("click", function() {
    that.closePopUp(that.id);
  });

}

gamePopUp.prototype.closePopUp = function(id) {
  popUps[id].ele.style.display = "none";
}
