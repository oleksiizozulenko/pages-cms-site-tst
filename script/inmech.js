//змінити контакти телефон факс пошта
function change_main_data(){
	let formData = new FormData();
	formData.append('mail', document.getElementById("im_mail").value);
	formData.append('phone', document.getElementById("im_phone").value);
	formData.append('fax', document.getElementById("im_fax").value);
	formData.append('name_ua', document.getElementById("name_ua").value);
	formData.append('name_en', document.getElementById("name_en").value);
	formData.append('address_ua', document.getElementById("address_ua").value);
	formData.append('address_en', document.getElementById("address_en").value);

	fetch(protocol+s_name+"/modules/ajax/change_main_info.php", {
		method: "POST",
		body: formData
	})
	.then(response => response.text())
	.then(data => {
		if (data[0]+data[1]!='er'){
			alert("Дані оновлено!");
			window.location.reload();
		}
		else{
			alert("Помилка зміни даних");
		}                
	})
	.catch(error => {
		alert("Помилка зміни даних");
		console.error("Помилка:", error);
	});
}