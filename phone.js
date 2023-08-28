const loadPhone = async (searchText, isShowAll) =>{
  const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
  const data = await res.json();
  const phones = data.data;
  // console.log(phones);
  displayPhones(phones, isShowAll);
}

const displayPhones = (phones, isShowAll) =>{
  const phoneContainer = document.getElementById('phone-container');
  phoneContainer.textContent = '';
  const showAllContainer = document.getElementById('show-all-container');
  if(phones.length > 12 && !isShowAll){
    showAllContainer.classList.remove('hidden');
  }
  else{
    showAllContainer.classList.add('hidden');
  }

  if(!isShowAll){
    phones = phones.slice(0,12);
  }
  
  // console.log(phones);
  phones.forEach(phone =>{
    // console.log(phone);
    const phoneCard = document.createElement('div');
    phoneCard.classList = `card p-4 mt-2 bg-base-100 shadow-xl`;
    phoneCard.innerHTML = `
    <figure><img src="${phone.image}" alt="Shoes" /></figure>
                <div class="card-body">
                  <h2 class="card-title">${phone.phone_name}</h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                  <div class="card-actions justify-center">
                    <button onclick="handleShowDetails('${phone.slug}')" class="btn btn-primary">Show Details</button>
                  </div>
                </div>
    `;
    phoneContainer.appendChild(phoneCard);
  })
  toggleLoadingSpinner(false);
}

const handleShowDetails = async (id) =>{
  const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`)
  const data = await res.json();
  const phone = data.data;
  showPhoneDetails(phone);
}

const showPhoneDetails = (phone) =>{
  console.log(phone);
  const phoneName = document.getElementById('show-detail-phone-name');
  phoneName.innerText = phone.name;
  const showDetailContainer = document.getElementById('show-detail-container');
  showDetailContainer.innerHTML = `
  <h2 class ="text-center font-bold text-4xl">${phone.brand}</h2>
  <img class="mx-auto mt-5" src ="${phone.image}">
  <p class="font-bold mt-5">Display Size:<span class="text-center font-semibold">${phone.mainFeatures.displaySize}</span></p>
  <p class="font-bold mt-5">Sensors:<span class="text-center font-semibold">${phone.mainFeatures.sensors}</span></p>
  <p class="font-bold mt-5">Storage:<span class="text-center font-semibold">${phone?.mainFeatures?.storage}</span></p>
  <p class="font-bold mt-5">Release Date:<span class="text-center font-semibold">${phone?.releaseDate}</span></p>
  `
  show_modal.showModal();
}

// handle search
const handleSearch = (isShowAll) =>{
  toggleLoadingSpinner(true);
  const searchField = document.getElementById('search-field');
  const searchText = searchField.value;
  console.log(searchText);
  loadPhone(searchText, isShowAll);
}

const toggleLoadingSpinner = (isLoading) =>{
  const loadingSpinner = document.getElementById('loading-spinner');
 if(isLoading){
  loadingSpinner.classList.remove('hidden');
 }
 else{
  loadingSpinner.classList.add('hidden');
 }
}


const handleShowAll = () => {
  handleSearch(true);

}
// loadPhone();


document.getElementById('btn-sign').addEventListener('click',function(){
  window.location.href= 'signup.html';
})