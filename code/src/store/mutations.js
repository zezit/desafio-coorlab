export default {
    SET_DATA(state, data) {
        state.data = data;
        state.loadingData = false;
    },

    SET_SELECTED_DESTINE(state, packet) {
        function parseNumberFromString(value) {
            if (typeof value !== "string") {
                value = String(value);
            }

            const numberPattern = /[^\d.-]/g;
            const cleanedValue = value.replace(numberPattern, "");
            return parseFloat(cleanedValue);
        }

        let maisRapido = {};
        let maisBarato = {};

        const cityName = state.data.find(item => item.id === packet.destino)?.city;

        if (cityName) {
            const cityOptions = state.data.filter(item => item.city === cityName);

            const compare = packet.peso > 100 ? 'cost_transport_heavy' : 'cost_transport_light';

            // fastest and cheapest option
            maisRapido = cityOptions.reduce((prev, current) => (
                parseNumberFromString(prev.lead_time) < parseNumberFromString(current.lead_time) ? prev : current
            ));

            maisBarato = cityOptions.reduce((prev, current) => (
                parseNumberFromString(prev[compare]) < parseNumberFromString(current[compare]) ? prev : current
            ));

            // parse to float
            maisRapido.cost_transport_light = parseNumberFromString(maisRapido.cost_transport_light);
            maisRapido.cost_transport_heavy = parseNumberFromString(maisRapido.cost_transport_heavy);
            maisBarato.cost_transport_light = parseNumberFromString(maisBarato.cost_transport_light);
            maisBarato.cost_transport_heavy = parseNumberFromString(maisBarato.cost_transport_heavy);

            state.selectedDestine = [
                {
                    name: maisBarato.name,
                    preco: packet.peso > 100 ? maisBarato.cost_transport_heavy * packet.peso : maisBarato.cost_transport_light * packet.peso,
                    lead_time: maisBarato.lead_time,
                },
                {
                    name: maisRapido.name,
                    preco: packet.peso > 100 ? maisRapido.cost_transport_heavy * packet.peso : maisRapido.cost_transport_light * packet.peso,
                    lead_time: maisRapido.lead_time,
                }
            ];
        }

        state.loadingState = false;
    },

    SET_ERROR_MODAL(state, error) {
        state.errorModal = error;
    },

    SET_LOADING_STATE(state, loadingState) {
        state.loadingState = loadingState;
    },

    CLEAR_ALL(state) {
        state.selectedDestine = [];
        state.errorModal = null;
        state.loadingState = false;
        state.clear = !state.clear
    }
}