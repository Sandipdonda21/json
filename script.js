
let json = [{
  "destination_addresses": [
    "Washington, DC, USA",
    "Philadelphia, PA, USA",
    "Santa Barbara, CA, USA",
    "Miami, FL, USA",
    "Austin, TX, USA",
    "Napa County, CA, USA"
  ],
  "origin_addresses": ["New York, NY, USA"],
  "rows": [
    {
      "elements": [
        {
          "distance": {
            "text": "227 mi",
            "value": 365468
          },
          "duration": {
            "text": "3 hours 54 mins",
            "value": 14064
          },
          "status": "OK"
        },
        {
          "distance": {
            "text": "94.6 mi",
            "value": 152193
          },
          "duration": {
            "text": "1 hour 44 mins",
            "value": 6227
          },
          "status": "OK"
        },
        {
          "distance": {
            "text": "2,878 mi",
            "value": 4632197
          },
          "duration": {
            "text": "1 day 18 hours",
            "value": 151772
          },
          "status": "OK"
        },
        {
          "distance": {
            "text": "1,286 mi",
            "value": 2069031
          },
          "duration": {
            "text": "18 hours 43 mins",
            "value": 67405
          },
          "status": "OK"
        },
        {
          "distance": {
            "text": "1,742 mi",
            "value": 2802972
          },
          "duration": {
            "text": "1 day 2 hours",
            "value": 93070
          },
          "status": "OK"
        },
        {
          "distance": {
            "text": "2,871 mi",
            "value": 4620514
          },
          "duration": {
            "text": "1 day 18 hours",
            "value": 152913
          },
          "status": "OK"
        }
      ]
    }
  ],
  "status": "OK"
}
]

 const visi = () =>{
//fot the list formet

  let add = "";
  for(let i = 0 ; i<json[0]['destination_addresses'].length ; i++){
     add += `
                 <ul>${json[0]['destination_addresses'][i]}
                   <li>Distance : ${json[0]['rows'][0]['elements'][i]['distance']['text']}</li>
                   <li>Duration :${json[0]['rows'][0]['elements'][i]['duration']['text']}</li>
                   </ul>`;                 
   }
   const hh = document.getElementById("list_formet");
   hh.innerHTML = add;

   //fot the table formet
   let added = "";
 for(let i = 0 ; i<json[0]['destination_addresses'].length ; i++){
    added += `
                <tr>
                  <td>${i+1}</td>
                  <td>${json[0]['destination_addresses'][i]}</td>
                  <td>${json[0]['rows'][0]['elements'][i]['distance']['text']}</td>
                  <td>${json[0]['rows'][0]['elements'][i]['duration']['text']}</td>
                  </tr>`;                 
  }
  const gg = document.getElementById("heros");
  gg.innerHTML = added;
}
  visi();
console.log(json[0]['rows'][0]['elements'])
  $('#table1').DataTable({
  
  columns: [
      { data: 'text' },
      { data: 'text' },
      { data: 'text' },
      { data: 'text' }
  ],
"pageLength": 3
});
