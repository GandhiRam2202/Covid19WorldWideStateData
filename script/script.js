


const header = document.createElement('div')
header.setAttribute('class','container-fluid position-sticky')
document.body.append(header)


const heading1 = document.createElement('h1')
heading1.setAttribute('class','text-center d-block d-sm-none')
heading1.innerHTML = `Covid 19`
header.append(heading1)

const heading = document.createElement('h1')
heading.setAttribute('class','text-center d-none d-sm-block')
heading.innerHTML = 'COVID 19 WORLD WIDE DATA'
header.append(heading)

const container = document.createElement('div')
container.setAttribute('class','container inputDiv position-sticky')
document.body.append(container)



const searchRow = document.createElement('div')
searchRow.setAttribute('class','row col-lg-12 justify-content-center')
container.append(searchRow)

const searchCol = document.createElement('div')
searchCol.setAttribute('class','row col-8 col-sm-8 col-lg-8')
searchRow.append(searchCol)

const searchInput = document.createElement('input')
searchInput.setAttribute('class','border rounded-start-5 text-center')
searchInput.setAttribute('type','text')
searchInput.setAttribute('id','searchInput')
searchInput.setAttribute('onkeypress','handleKeyPress(event)')
searchInput.setAttribute('placeholder','Search By State Name')
searchCol.append(searchInput)

const searchBtnRow = document.createElement('div')
searchBtnRow.setAttribute('class','row col-4 col-sm-2 col-lg-2')
searchRow.append(searchBtnRow)

const searchBtn = document.createElement('button')
searchBtn.setAttribute('class','border rounded-end-5 m-0 p-0')
searchBtn.setAttribute('onclick','search()')
searchBtn.innerHTML = `<div class="fa-solid fa-magnifying-glass d-block d-sm-none"></div><div class='d-none d-sm-block d-md-block'>Search</div>`
searchBtnRow.append(searchBtn)


const searchContent = document.createElement('div')
searchContent.setAttribute('class','container d-flex justify-content-center p-0 position-absolute mt-5')


const card = document.createElement('div')
card.setAttribute('class','card rounded-5')
searchContent.append(card)

const stateRow = document.createElement('div')
stateRow.setAttribute('class','header row col-12 justify-content-center m-0 rounded-top-5')
card.append(stateRow)

const stateHeader = document.createElement('div')
stateHeader.setAttribute('class','card-header col-12 text-center m-0')
stateRow.append(stateHeader)


const caseRow = document.createElement('div')
caseRow.setAttribute('class','row col-12 text-center justify-content-center m-0')
card.append(caseRow)

const caseRatio = document.createElement('div')
caseRatio.setAttribute('class','col-12')
caseRow.append(caseRatio)

const confirmedRow = document.createElement('div')
confirmedRow.setAttribute('class','row col-12 text-center justify-content-center m-0')
card.append(confirmedRow)

const confirmedCase = document.createElement('div')
confirmedCase.setAttribute('class','col-12')
confirmedRow.append(confirmedCase)

const countryRegionRow = document.createElement('div')
countryRegionRow.setAttribute('class','row col-12 text-center justify-content-center m-0')
card.append(countryRegionRow)

const countryRegion = document.createElement('div')
countryRegion.setAttribute('class','col-12')
countryRegionRow.append(countryRegion)

const deathRow = document.createElement('div')
deathRow.setAttribute('class','row col-12 text-center justify-content-center m-0')
card.append(deathRow)

const death = document.createElement('div')
death.setAttribute('class','col-12')
deathRow.append(death)

const incidentRow = document.createElement('div')
incidentRow.setAttribute('class','row col-12 text-center justify-content-center m-0')
card.append(incidentRow)

const incident = document.createElement('div')
incident.setAttribute('class','col-12')
incidentRow.append(incident)

const lastUpdateRow = document.createElement('div')
lastUpdateRow.setAttribute('class','row col-12 text-center justify-content-center m-0')
card.append(lastUpdateRow)

const lastUpdate = document.createElement('div')
lastUpdate.setAttribute('class','col-12')
lastUpdateRow.append(lastUpdate)

const backBtn = document.createElement('button')
backBtn.setAttribute('class','border rounded-bottom-5')
card.append(backBtn)
backBtn.innerText = 'BACK'






function search(){
const inputState = document.getElementById('searchInput').value
fetch('https://coronavirus.m.pipedream.net/')
  .then(response => response.json())
  
  .then(data => {
    
    
    let lowerInputState = ((inputState).replace(/\s/g,'')).toLowerCase()


    for(let ind in data.rawData){
      let state = (data.rawData[ind].Combined_Key).split(',')
      let stateName = (state[0]).replace(/\s/g, '')
      if((stateName).toLowerCase() === lowerInputState)
      {
        stateHeader.innerText = `${state[0]}`
        caseRatio.innerText = `Case Ratio : ${data.rawData[ind].Case_Fatality_Ratio}`
        confirmedCase.innerText = `Confirmed Case : ${data.rawData[ind].Confirmed}`
        countryRegion.innerText = `Country Region : ${data.rawData[ind].Country_Region}`
        death.innerText = `Deaths : ${data.rawData[ind].Deaths}`
        incident.innerText = `Incident Rate : ${data.rawData[ind].Incident_Rate}`
        lastUpdate.innerText = `Last Update : ${data.rawData[ind].Last_Update}`
        searchRow.append(searchContent)
        break
      }
    }
    
  })
  .catch(error => {
    console.error('Fetch error:', error);
  });


}

function handleKeyPress(event){
  if(event.key === 'Enter')
  {
    search();
  }

}



backBtn.addEventListener('click',function(){ 
  searchRow.removeChild(searchContent)
})


const container1 = document.createElement('div')
container1.setAttribute('class','container')
document.body.append(container1)
// container1.innerText = 'tamilnadu'


const row = document.createElement('div')
row.setAttribute('class','row');
container1.append(row)




  
  fetch('https://coronavirus.m.pipedream.net/')
    .then(response => response.json())
    
    .then(data => {  
  
      for(let ind of data.rawData){
        // console.log(ind)
        const col = document.createElement('div')
        col.setAttribute('class','col-sm-6 col-md-6 col-lg-6 col-xl-4 ')
        row.append(col)
        
      

        const card = document.createElement('div')
        card.setAttribute('class','card forCard rounded-5')
        col.append(card)

        const cardHeader = document.createElement('div')
        cardHeader.setAttribute('class','card-header text-center rounded-top-5')
        card.append(cardHeader)
        cardHeader.innerText = (ind.Combined_Key).split(',')[0]

        const cardBody = document.createElement('div')
        cardBody.setAttribute('class','card-body text-center')
        card.append(cardBody)

        const caseRatio = document.createElement('div')
        caseRatio.innerText =`Case Ratio : ${ind.Case_Fatality_Ratio}`
        cardBody.append(caseRatio)
        const confirmedCase = document.createElement('div')
        confirmedCase.innerText =`Confirmed Case : ${ind.Confirmed}`
        cardBody.append(confirmedCase)
        const countryRegion = document.createElement('div')
        countryRegion.innerText =`Country Region : ${ind.Country_Region}`
        cardBody.append(countryRegion)
        const death = document.createElement('div')
        death.innerText =`Deaths : ${ind.Deaths}`
        cardBody.append(death)
        const incident = document.createElement('div')
        incident.innerText =`Incident : ${ind.Incident_Rate}`
        cardBody.append(incident)
        const lastUpdate = document.createElement('div')
        lastUpdate.innerText =`Last Update : ${ind.Last_Update}`
        cardBody.append(lastUpdate)



      }
    
    })
    .catch(error => {
      console.error('Fetch error:', error);
    });
