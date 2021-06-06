const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			planets: []
		},
		actions: {
			
			loadData: () => {
				let URL = "https://www.swapi.tech/api/";
				async function fnPeopleList() {
										const result = await fetch(
						"https://raw.githubusercontent.com/johmstone/files/main/peopleresponse.json"
					)
						.then(res => {
							if (res.status == 200) {
								return res.json();
							}
						})
						.then(response => {
							
							const newData = response.results.map(item => ({ ...item, favorite: false }));
							setStore({ people: newData });
						})
						.catch(err => console.error(err));
				}
				async function fnPLanetsList() {
										const result = await fetch(
						"https://raw.githubusercontent.com/johmstone/files/main/JSONResultPlanets.json"
					)
						.then(res => {
							if (res.status == 200) {
								return res.json();
							}
						})
						.then(response => {
							
							const newData = response.results.map(item => ({ ...item, favorite: false }));
							setStore({ planets: newData });
						})
						.catch(err => console.error(err));
									}
				fnPeopleList();
				fnPLanetsList();
			},
			changeFavoritePlanet: PlanetID => {
				const store = getStore();
				const newData = store.planets.map(item => {
					if (item.uid === PlanetID) {
						if (item.favorite) {
							item.favorite = false;
						} else {
							item.favorite = true;
						}
						return item;
					} else {
						return item;
					}
				});

				setStore({ planets: newData });
			},
			changeFavoritePeople: PersonID => {
				const store = getStore();
				const newData = store.people.map(item => {
					if (item.uid === PersonID) {
						if (item.favorite) {
							item.favorite = false;
						} else {
							item.favorite = true;
						}
						return item;
					} else {
						return item;
					}
				});

				setStore({ people: newData });
			}
		}
	};
};

export default getState;
