export const selectedDestineOptions = (state) => {
    if (state.selectedDestine === null) {
        return [];
    } else {
        return state.data.filter((item) => item.city === state.selectedDestine);
    }
}