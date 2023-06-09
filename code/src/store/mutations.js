export const SET_DATA = (state, data) => {
    state.data = data;
}

export const SET_SELECTED_DESTINE = (state, packet) => {
    let cityName = state.data.find(item => item.id == packet.destino);
    cityName = cityName ? cityName.city : null;

    console.log(cityName);

    const cityOptions = state.data.filter(item => {
        if (item.city === cityName) {
            return item;
        }
    });
    console.log(cityOptions);
}