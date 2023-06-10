export default {
    selectedDestine(state) {
        return state.selectedDestine.length > 0 ? state.selectedDestine : [];
    },
    loadingState(state) {
        return state.loadingState;
    },
    showErrorModal(state) {
        return state.errorModal;
    }
}