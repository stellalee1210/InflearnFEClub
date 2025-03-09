const food = [
    {
      "name": "햄버거",
      "type": "breakfast",
      "price": 10000,
      "description": "직접 만든 브리오슈, 100% 소고기 패티, 베이컨, 토마토, 로메인, 아메리칸 치즈, 적양파, 렐리쉬 피클, WNM소스",
      "image" : "img/hamburger.png"
    },
    {
      "name": "에그 베이컨 샌드위치",
      "type": "breakfast",
      "price": 8000,
      "description": "구운 베이컨, 계란, 체다 치즈, 허니 머스터드 소스를 곁들인 크로와상 샌드위치",
      "image" : "img/egg_bacon_sandwich.jpg"
    },
    {
      "name": "팬케이크 세트",
      "type": "breakfast",
      "price": 9000,
      "description": "부드러운 팬케이크 3장, 메이플 시럽, 버터, 스크램블 에그, 베이컨",
      "image" : "img/pancakes.jpg"
    },
    {
      "name": "프렌치 토스트",
      "type": "breakfast",
      "price": 9500,
      "description": "달콤한 메이플 시럽과 슈가 파우더를 뿌린 바삭한 프렌치 토스트",
      "image" : "img/french_toast.jpeg"
    },
    {
      "name": "클럽 샌드위치",
      "type": "lunch",
      "price": 11000,
      "description": "칠면조 햄, 베이컨, 토마토, 로메인, 체다 치즈, 마요네즈가 들어간 더블 레이어 샌드위치",
      "image" : "img/club_sandwich.jpeg"
    },
    {
      "name": "스테이크 샐러드",
      "type": "lunch",
      "price": 13500,
      "description": "미디엄 레어로 구운 스테이크와 신선한 채소, 발사믹 드레싱을 곁들인 샐러드",
      "image" : "img/steak_salad.jpeg"
    },
    {
      "name": "치킨 시저 샐러드",
      "type": "lunch",
      "price": 10500,
      "description": "구운 닭가슴살, 로메인, 파마산 치즈, 크루통, 시저 드레싱",
      "image" : "img/chicken_caesar_salad.jpg"
    },
    {
      "name": "파스타 볼로네제",
      "type": "lunch",
      "price": 13000,
      "description": "토마토와 소고기로 만든 풍미 가득한 볼로네제 소스의 스파게티",
      "image" : "img/pasta_bolognese.jpg"
    },
    {
      "name": "딸기 바나나 쉐이크",
      "type": "shakes",
      "price": 7500,
      "description": "신선한 딸기와 바나나, 우유, 바닐라 아이스크림이 어우러진 쉐이크",
      "image" : "img/strawberry_banana_shake.jpg"
    },
    {
      "name": "초콜릿 밀크쉐이크",
      "type": "shakes",
      "price": 8000,
      "description": "진한 초콜릿 아이스크림과 우유로 만든 달콤한 밀크쉐이크",
      "image" : "img/chocolate_milkshake.avif"
    },
    {
      "name": "바닐라 밀크쉐이크",
      "type": "shakes",
      "price": 7000,
      "description": "부드러운 바닐라 아이스크림과 우유로 만든 클래식 쉐이크",
      "image" : "img/vanilla_milkshake.jpg"
    },
    {
      "name": "오레오 쿠키 쉐이크",
      "type": "shakes",
      "price": 8500,
      "description": "오레오 쿠키 크럼블이 들어간 달콤하고 바삭한 쉐이크",
      "image" : "img/oreo_cookie_shake.jpg"
    },
    {
      "name": "스테이크 플래터",
      "type": "dinner",
      "price": 25000,
      "description": "미디엄 레어로 구운 프리미엄 등심 스테이크, 매쉬드 포테이토, 구운 채소",
      "image" : "img/steak_platter.jpeg"
    },
    {
      "name": "연어 스테이크",
      "type": "dinner",
      "price": 22000,
      "description": "레몬 버터 소스로 구운 연어 스테이크, 아스파라거스, 감자 퓌레",
      "image" : "img/salmon_steak.jpeg"
    },
    {
      "name": "버팔로 윙 플래터",
      "type": "dinner",
      "price": 18000,
      "description": "매콤한 버팔로 윙, 블루치즈 딥 소스, 감자튀김",
      "image" : "img/buffalo_wing_platter.png"
    },
    {
      "name": "바베큐 폭립",
      "type": "dinner",
      "price": 27000,
      "description": "슬로우 쿠킹한 바베큐 폭립, 콜슬로, 감자튀김",
      "image" : "img/bbq_porkrib.jpg"
    },
    {
      "name": "치킨 너겟",
      "type": "dinner",
      "price": 10000,
      "description": "겉은 바삭하고 속은 촉촉한 치킨 너겟과 감자튀김, 허니 머스타드 소스",
      "image" : "img/chicken_nuggets.jpg"
    },
    {
      "name": "치즈버거",
      "type": "dinner",
      "price": 12000,
      "description": "두툼한 소고기 패티, 아메리칸 치즈, 토마토, 양상추, 특제 소스가 들어간 치즈버거",
      "image" : "img/cheese_burger.jpg"
    },
    {
      "name": "베이컨 치즈 프라이",
      "type": "lunch",
      "price": 9000,
      "description": "바삭한 감자튀김 위에 체다 치즈와 바삭한 베이컨 토핑",
      "image" : "img/bacon_cheese_fries.jpg"
    },
    {
      "name": "망고 요거트 쉐이크",
      "type": "shakes",
      "price": 7800,
      "description": "신선한 망고와 요거트를 넣어 달콤하고 상큼한 맛이 어우러진 쉐이크",
      "image" : "img/mango_yogurt_shake.jpeg"
    }
  ]





function setMenu(menu){
    const foodOptions = document.querySelector('.food-details');
    foodOptions.innerHTML = ''; 

    if(menu === 'all'){
      food.forEach(item => {
        const foodInfo = document.createElement('div');
        foodInfo.className = 'food-info';
  
        foodInfo.innerHTML = `
        <img src = "${item.image}" width="200" height="200">
        <div class ='food-detail'>
          <h3 class="name">${item.name}</h3>
          <div class="price">${item.price}원</div>
          <div class="description">${item.description}</div>
          </div>
        `;
        foodOptions.appendChild(foodInfo);
      });
    }

    
    food.filter(item => item.type === menu).forEach(item => {
      const foodInfo = document.createElement('div');
      foodInfo.className = 'food-info';

      foodInfo.innerHTML = `
      <img src = "${item.image}" width="200" height="200">
      <div class ='food-detail'>
        <h3 class="name">${item.name}</h3>
        <div class="price">${item.price}원</div>
        <div class="description">${item.description}</div>
        </div>
      `;
      foodOptions.appendChild(foodInfo);
  })
}


const btns = document.querySelectorAll('.menu-buttons button');

btns.forEach( item => item.addEventListener('click', function() {
    const menuType = this.getAttribute('data-menu');
    setMenu(menuType);
}));
