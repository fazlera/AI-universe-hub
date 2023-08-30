const apiLoad     = async () => {
    const res     = await fetch('https://openapi.programming-hero.com/api/ai/tools')
    const dataAll = await res.json();
    const data    = dataAll.data.tools;
    displayData(data);
    // console.log(data);
};

const displayData = (dataArr) => {
    // console.log(dataArr);
    const displayDataShow = document.getElementById('display-container')
    dataArr.forEach(dataElement => {
        console.log(dataElement);
        const createElementContainer = document.createElement('div')
        createElementContainer.classList = `mt-10  mb-10 card w-80 bg-base-100 shadow-xl mx-auto`
        createElementContainer.innerHTML = `
        <figure><img src="${dataElement.image}" alt="Shoes" /></figure>
        <div class="card-body">

          <h2 class="card-title text-2xl font-bold">Features
          </h2>
          <div class="text-sm text-gray-500 mt-2 mb-4">
          <h4>1: <span>${dataElement.features[0]}</span></h4>
          <h4>2: <span>${dataElement.features[1]}</span></h4>
          <h4>3: <span>${dataElement.features[2]}</span></h4>
          </div>
           <hr>
          <h1 class="card-title text-3xl font-bold">${dataElement.name}</h1>

          <div class="card-actions flex justify-between items-center">
          <span>12/12/2000</span>

          <span class=""><i class="p-2 rounded-full bg-red-200 text-red-400 hover:text-red-500  fa-solid fa-arrow-right"></i></span>
          </div>
        </div>
        
        `
        displayDataShow.appendChild(createElementContainer);
        
    });
};

// const date = (time) => {
//     const d = new Date();
//     d.setFullYear(2020, 11, 3);
// }
apiLoad()