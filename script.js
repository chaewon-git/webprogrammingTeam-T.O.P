/*
function showInfo(item) {
  const guide = {
    pet: "라벨을 제거하고 물로 헹군 후 투명 플라스틱으로 배출하세요.",
    milk: "내용물을 비우고 물로 헹군 후 종이팩 전용 수거함에 버리세요."
  };
  document.getElementById('info').innerText = guide[item];
}
*/


// 검색 결과 표시
function showItem(item) {
    const itemName = document.getElementById("item-name");
    const itemCategory = document.getElementById("item-category");

    if (itemName) itemName.textContent = item.name;
    if (itemCategory) itemCategory.textContent = item.category.join(", ");
}

// 검색
function searchGarbage(queryParam) {
    const query = queryParam || document.getElementById("search-input").value.trim();

    if (!query) return;

    const lowerQuery = query.toLowerCase();

    const found = garbageData.find(item => {
        const nameMatch = item.name.toLowerCase().includes(lowerQuery);
        const categoryMatch = item.category.some(cat => cat.toLowerCase().includes(lowerQuery));
        return nameMatch || categoryMatch;
    });

    const guideTitle = document.querySelector(".guide-title");
    const methodTitle = document.querySelector(".method-title");
    const contentsContainer = document.getElementById("item-contents");

    if (found) {
      if (methodTitle) methodTitle.style.display = "block";
      if (contentsContainer) {
          contentsContainer.style.display = "block";
          showItem(found);
      }
    } else {
      if (methodTitle) methodTitle.style.display = "none";
      if (contentsContainer) {
          contentsContainer.innerHTML = "";
          contentsContainer.style.display = "none";
      }
      if (guideTitle) {
          guideTitle.innerHTML = `
            <div class="not-found">${query}에 대한 검색 결과가 없습니다.</div>
            <div class="not-found-sub">추가를 원하시면 고객센터로 문의해 주세요.</div>
          `;
      }
    }
}

//
window.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("search-input");
    const searchButton = document.getElementById("search-button");

    // recycle.html로 이동
    if (searchButton && searchInput) {
        searchButton.addEventListener("click", () => {
            const query = searchInput.value.trim();
            if (!query) {
                alert("검색어를 입력해 주세요.");
                return;
            }
            window.location.href = `recycle.html?query=${encodeURIComponent(query)}`;
        });

        searchInput.addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
                const query = searchInput.value.trim();
                if (!query) {
                    alert("검색어를 입력해 주세요.");
                    return;
                }
                window.location.href = `recycle.html?query=${encodeURIComponent(query)}`;
            }
        });
    }

    const params = new URLSearchParams(window.location.search);
    const query = params.get("query");
    if (query) {
        const interval = setInterval(() => {
            // garbageData가 로드되었는지 확인
            if (window.garbageData && window.garbageData.length > 0) {
                clearInterval(interval);
                if (searchInput) searchInput.value = query;
                searchGarbage(query);
            }
        }, 100);
    }
});