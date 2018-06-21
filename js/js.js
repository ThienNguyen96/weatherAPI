document.getElementById('btnSearch').addEventListener('click',(e) => {
  e.preventDefault();

  const city = document.getElementById('txtCity').value;
  const national = document.getElementById('txtNational').value;

  if(city.length !=0 && national.length!=0){
  	fetch(
  		`https://api.openweathermap.org/data/2.5/weather?q=${city},${national}&appid=47a880b6e127b09958bc7e2275a818ac&units=metric`
	  )
	  .then((res)=>res.json())
	  .then((data)=>{
	  	const temp = data.main.temp;
	  	const name = data.name;
	  	const humidity = data.main.humidity;
	  	const description = data.weather[0].description;

	  	const right = document.getElementsByClassName('right')[0];

	  	document.getElementById('result').innerText=`
			Thành Phố: ${name}
			Nhiệt Độ: ${temp} Độ C
			Độ Ẩm: ${humidity} %
			Thời Tiết: ${description}
	  	`;

	  	//set img bg 

	  	const imgLink = `https://source.unsplash.com/1600x900/?${name}`;
	  	right.style.background = `url(${imgLink})`;
	  	console.log(imgLink);

	  })
	  .catch(err=>console.log('something Wrong !'));
  }
  else{
  	alert('Vui Lòng Nhập Đầy Đủ Thông Tin !');
  }

});