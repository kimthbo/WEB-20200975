document.getElementById("search_btn").addEventListener('click', search_message);

let F_word = ["비속어1", "비속어2", "비속어3"];
var search_array = []; // 빈 배열 - 전역 변수

function search_message(){
	let search_str = document.querySelector("#search_txt"); // 변수에 저장
		if(search_str.value.length === 0){
			alert("검색어가 비었습니다. 입력해주세요");
		}
		else{
			if(F_word.includes(search_str.value)){
				alert(search_str.value+"은(는) 검색할 수 없습니다.");
			}
			else{
				alert("검색을 수행합니다!");
				search_array.push(search_str.value); 
				if (search_array.length > 10) { 
  				search_array.shift(); 
				}
				let text = document.getElementById("search_message").innerHTML = search_array.toString(); //값 변환
				
				document.querySelector("#form_main").submit();
			}
		}
	console.log(search_str.value); // 콘솔에 출력

}
