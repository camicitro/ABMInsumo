import * as React from 'react';

import DataLayer from '../lib/data-layer';
import ArticuloInsumo from '../Types/articuloInsumo';

type UseInsumosState = {
    data: ArticuloInsumo[];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    error: any;
    loading: boolean;
};

const initialState: UseInsumosState = {
    data: [],
    error: null,
    loading: true,
};

const useInsumos = () => {
  // State
    const [state, setState] = React.useState<UseInsumosState>(initialState);

  // Effects
    React.useEffect(function fetchInsumos() {
    DataLayer.fetch.insumos()
        .then((data: ArticuloInsumo[]) => setState({ data, error: null, loading: false }))
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        .catch((error: any) => setState({ data: [], error, loading: false }));
    }, [setState]);

    return state;
};

export default useInsumos;