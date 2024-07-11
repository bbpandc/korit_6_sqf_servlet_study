function handleSearchClick() {
			const searchInput = document.querySelector(".search-input");
			// 해당 주소로 이동
			location.href = `http://localhost:8080/dvd/search?searchText=${searchInput.value}`;
		}