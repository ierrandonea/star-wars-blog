const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            people: null,
            planets: null
        },
        actions: {
            getPeople: () => {
                fetch("https://swapi.dev/api/people/", {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                    .then(resp => resp.json())
                    .then(data => {
                        setStore({
                            people: data.results
                        })
                    });
            },
            getPlanets: () => {
                fetch("https://swapi.dev/api/planets/", {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                    .then(resp => resp.json())
                    .then(data => {
                        setStore({
                            planets: data.results
                        })
                    });
            }
        }
    }
}

export default getState;