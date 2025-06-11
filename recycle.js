// 쓰레기 분리수거 관련 데이터
const garbageData = [
    {
        "name": "페트병",
        "category": ["재활용"],
        "contents": [
          "페트병은 크게 페트병 본체, 뚜껑, 라벨로 분류됩니다.",
          "페트병 본체와 뚜껑은 플라스틱류 재활용 쓰레기로 분리 배출해 주세요. 이때, 페트병 뚜껑은 닫고 버려도, 따로 분리해서 버려도 무방합니다.",
          "겉에 붙어 있는 라벨은 떼어 내서 비닐류 재활용 쓰레기로 버려 주세요."
        ]
    },
    {
      "name": "스티로폼",
      "category": ["재활용"],
      "contents": [
        "스티로폼 박스 내부 내용물을 모두 비우고, 이물질을 깨끗이 세척해 주세요.",
        "박스에 붙어 있는 송장, 테이프 등은 완전히 제거해서 일반 쓰레기로 버려 주세요.",
        "과일 개별 포장에 쓰이는 스티로폼은 재활용 가치가 낮아 모두 폐기된다고 하니 일반 쓰레기로 버려 주세요."
      ]
    },
    {
      "name": "닭 뼈",
      "category": ["일반"],
      "contents": [
        "동물의 단단한 뼈는 음식물 쓰레기로 분류되지 않습니다.",
        "종량제 봉투에 담아 일반 쓰레기로 버려 주세요."
      ]
    },
    {
      "name": "생선 뼈",
      "category": ["일반"],
      "contents": [
        "동물의 단단한 뼈는 음식물 쓰레기로 분류되지 않습니다.",
        "종량제 봉투에 담아 일반 쓰레기로 버려 주세요."
      ]
    },
    {
      "name": "동물 뼈",
      "category": ["일반"],
      "contents": [
        "동물의 단단한 뼈는 음식물 쓰레기로 분류되지 않습니다.",
        "종량제 봉투에 담아 일반 쓰레기로 버려 주세요."
      ]
    },
    {
      "name": "물티슈",
      "category": ["일반"],
      "contents": [
        "사용한 물티슈는 반드시 일반 쓰레기로 버려 주세요.",
        "일반 물티슈는 화장실 변기에 버리는 것을 절대 금합니다.",
        "다 쓴 물티슈 포장재는 다른 재질을 비닐 포장재에서 떼어낸 후 재질별로 분리 배출해야 합니다."
      ]
    },
    {
      "name": "수박 껍질",
      "category": ["음식물"],
      "contents": [
        "수박 껍질과 씨는 모두 음식물 쓰레기로 분류됩니다.",
        "부피가 큰 수박 껍질은 잘라서 버려 주세요."
      ]
    },
    {
      "name": "아보카도",
      "category": ["일반"],
      "contents": [
        "다 먹은 아보카도 껍질은 일반 쓰레기로 버려 주세요.",
        "아보카도의 씨도 일반 쓰레기로 분류됩니다."
      ]
    },
    {
      "name": "라이터",
      "category": ["일반"],
      "contents": [
        "일회용 라이터, 가스 라이터, 기름 라이터는 모두 복합 재질 제품입니다.",
        "재질별로 열심히 분리하더라도 너무 작은 조각이기 때문에 재활용이 어려우니 일반 쓰레기로 버려 주세요."
      ]
    },
    {
      "name": "칫솔",
      "category": ["일반"],
      "contents": [
        "칫솔은 부피가 작고, 칫솔모, 고무 손잡이 등 여러 재질이 혼합되어 있어서 재활용이 어렵습니다.",
        "모두 일반 쓰레기로 버려 주시면 됩니다."
      ]
    },
    {
      "name": "계란 껍질",
      "category": ["일반"],
      "contents": [
        "계란의 단단한 껍질은 종량제 봉투에 넣어서 일반 쓰레기로 버려 주세요.",
        "상한 계란의 경우 껍질을 까서 내용물만 음식물 쓰레기로 버려 주세요."
      ]
    },
    {
      "name": "우유팩",
      "category": ["재활용"],
      "contents": [
        "내용물을 비우고, 물로 깨끗이 세척하여 배출합니다.",
        "기름이나 음식물에 오염되어 세척이 불가능한 종이팩은 일반 쓰레기로 버려 주세요.",
        "부피가 줄어들 수 있게 압착시키거나 찢어서 배출하면 좋습니다."
      ]
    },
    {
      "name": "텀블러",
      "category": ["일반", "재활용"],
      "contents": [
        "스테인리스 단일 소재로 만들어진 텀블러는 깨끗이 씻어서 캔류로 버려 주세요.",
        "실리콘 소재의 텀블러는 일반 쓰레기로 버려 주세요.",
        "내부는 스테인리스지만 외부는 플라스틱이나 실리콘으로 된 텀블러는 재질별로 분리하지 않는 이상 재활용이 불가능합니다.",
        "플라스틱 뚜껑과 같은 다른 재질은 재질별로 분리 배출해 주세요."
      ]
    },
    {
      "name": "쿠킹 호일",
      "category": ["일반"],
      "contents": [
        "쿠킹 호일은 재질과 관계없이 모두 일반 쓰레기로 분류됩니다.",
        "알루미늄 호일은 얇게 특수 가공되었기 때문에 알루미늄류로 재활용이 불가능합니다.",
        "종이 호일도 열에 강한 특수 재질이 포함된 혼합 종이이므로 일반 종이와 함께 재활용이 불가능합니다."
      ]
    },
    {
      "name": "죽은 식물",
      "category": ["일반"],
      "contents": [
        "죽은 식물은 일반 쓰레기로 버려 주세요",
        "화분 흙은 집 밖 화단이나 야산에 버려도 되지만 흙이 오염이 심하다면 불연성 쓰레기 봉투에 담아서 버려 주세요."
      ]
    },
    {
      "name": "핸드폰 케이스",
      "category": ["일반"],
      "contents": [
        "핸드폰 케이스는 보통 TPU, 실리콘, 복합 플라스틱, 가죽 등의 재질로 만들어지는데 모두 재활용이 불가능하므로 일반 쓰레기로 버려 주세요."
      ]
    },
    {
      "name": "과자 봉지",
      "category": ["재활용"],
      "contents": [
        "다 먹은 과자 봉지는 내부의 기름기와 음식물을 깨끗이 세척한 후 재활용 쓰레기로 버립니다.",
        "스티커, 테이프 등이 붙어 있다면 모두 떼어 내고 버려 주세요."
      ]
    },
    {
      "name": "빨대",
      "category": ["일반"],
      "contents": [
        "플라스틱 빨대는 부피가 작아서 재활용이 불가능합니다. 일반 쓰레기로 분리 배출해 주세요.",
        "종이 빨대는 혼합 종이로 제조되었거나 음료 등의 이물질이 묻어 있기 때문에 일반 쓰레기로 버려야 합니다."
      ]
    },
    {
      "name": "고무줄",
      "category": ["일반"],
      "contents": [
        "고무 재질은 재활용이 어렵습니다. 일반 쓰레기로 분리 배출해 주세요.",
        "대부분의 고무 제품은 합성 고무 제품으로 재활용이 불가합니다.",
        "천연 고무는 재활용이 가능하나, 합성 고무를 제외한 천연 고무만을 선별 및 수거하는 일이 번거롭기 때문에 재활용이 어렵습니다."
      ]
    }
];



// 분리수거 가이드 화면
const item = garbageData[0];
document.getElementById("item-name").textContent = item.name;
document.getElementById("item-category").textContent = item.category.join(", ");

const contentsContainer = document.getElementById("item-contents");
contentsContainer.innerHTML = "";

const ul = document.createElement("ul");
ul.className = "checklist";

item.contents.forEach(text => {
  const li = document.createElement("li");
  li.textContent = text;
  ul.appendChild(li);
});

contentsContainer.appendChild(ul);

window.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const query = params.get("query");

    if (query) {
        document.getElementById("search-input").value = query;
        searchGarbage();
    }
});