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