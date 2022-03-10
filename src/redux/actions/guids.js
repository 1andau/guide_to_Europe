import axios from 'axios';

export const fetchGuids = (sortBy, category) => (dispatch) => {
   console.log(category, sortBy );

   dispatch({
      type: 'SET_LOADED',
      payload: false,    
});

 //если вызывается fetchGuids то сразу ставь (setLoaded(false) и когда выполнится второй запрос, выполняется второй action setGuids, он сохраняет пиццы и ставит фдаг о том что все загружено 
   axios.get(`http://localhost:3001/guids?${category !==null ? `category=${category}` : ''}&_sort=${sortBy}&_order=desc`).then(({data}) => {
dispatch(setGuids(data));
   });  
};

export const setGuids = (items) => ({ //этот объект возвращает нам объект 
    type: 'SET_GUIDS', 
    payload: items,
});
