let apidata;

const getdata =async () =>{ await  fetch('https://api.covid19api.com/summary')
  .then(Response => Response.json()).then(data => {apidata= data
  })
console.log(apidata)
}
getdata();
let json = [
    {
      "name": "Thor",
      "age": 49,
      "secretIdentity": "Dan Jukes",
      "powers": [
        "Radiation resistance",
        "Turning tiny",
        "Radiation blast"
      ]
    },
    {
      "name": "Hulk",
      "age": 39,
      "secretIdentity": "Jane Wilson",
      "powers": [
        "Miltdon tonne punch",
        "Damage resistance",
        "Superhuman reflexes"
      ]
    },
    {
      "name": "Ironman",
      "age": 50,
      "secretIdentity": "Tony stark",
      "powers": [
        "Miltdon tonne punch",
        "Damage resistance",
        "Superhuman reflexes"
      ]
    }
  ]

 const visi = () =>{ 
   let added = "";
 json.map((e)=>{
    added += `
                <tr>
                  <td>${e.name}</td>
                  <td>${e.age}</td>
                  <td>${e.secretIdentity}</td>
                  <td>${e.powers}</td>
                  <td><button name=${e.name} onclick={delethero(this.name)}>&#9747</button></td>
                  </tr>`
  })
  const gg = document.getElementById("heros");
  gg.innerHTML = added;
  console.log(added);
}

  visi();

  const clearInput =()=>{
    document.getElementById('name').value = "";
    document.getElementById('age').value = "";
     document.getElementById('SecretIdentity').value ="";
     document.getElementById('power').value ="";
  }

  const addHero=()=>{
    let name  = document.getElementById('name').value;
    let age  = document.getElementById('age').value;
    let SecretIdentity  = document.getElementById('SecretIdentity').value;
    let power  = document.getElementById('power').value.split(',');
    json = [...json , {"name":name, "age": age,
    "secretIdentity": SecretIdentity,
    "powers": power}]
    console.log(json)
    let added = ""
       added = `
                   <tr>
                     <td>${name}</td>
                     <td>${age}</td>
                     <td>${SecretIdentity}</td>
                     <td>${power}</td>
                     <td><button  name=${name} onclick={delethero(this.name)}>&#9747</button></td>
                     </tr>
                     `
     
     document.getElementById('heros').innerHTML += added;
   clearInput();
     
  }

 const delethero = (id) =>{
  json = json.filter(e => e.name!=id);
  console.log(json);
  visi();
 }