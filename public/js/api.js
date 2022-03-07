const cityName=document.getElementById('cityName');
const city_name=document.getElementById('city_name');

const submitBtn=document.getElementById('submitBtn');

const temp_real_val= document.getElementById('temp_real_val');
const temp_status=document.getElementById('temp_status');
const datahide=document.querySelector('.middle_layer');

const info=async(event) =>{ 
    event.preventDefault();
    let cityVal=cityName.value;
    if(cityVal===""){
        city_name.innerText="Plz! Write the location name before search";
        datahide.classList.add('data_hide');
    }else{

        try{
        let url=`http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=03b1f4fffb283da6ac60dbadde6b08a3`;
        const resp=await fetch(url);
        const data = await resp.json();
        const arrData=[data];

        city_name.innerText=`${arrData[0].name},${arrData[0].sys.country}`;
        temp_real_val.innerText=arrData[0].main.temp;
        // temp_status.innerText=arrData[0].weather[0].main;
        const tempmood=arrData[0].weather[0].main;

         if(tempmood==="clear"){
             temp_status.innerHTML="<i class='fas fa-sun' style='color : #eccc68;' ></i>";
         }else if(tempmood==="clouds"){
             temp_status.innerHTML="<i class='fas fa-cloud' style='color: #f1f2f6'></i>";
         }else if(tempmood==="Rain"){
             temp_status.innerHTML="<i class='fas fa-cloud-rain' style='color: #a4b0be' ></i>";
         }else {
            temp_status.innerHTML="<i class='fas fa-sun' style='color: #eccc68'></i>";
        }

        datahide.classList.remove('data_hide');
        }catch{
            city_name.innerText=`Plz! Enter the proper city name`;
            datahide.classList.add('data_hide');
        }
    }  
}

submitBtn.addEventListener('click',info);