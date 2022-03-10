import React from 'react';
import {Categories, SortPopup, Block} from '../components';
import { useSelector, useDispatch } from 'react-redux'
import {setCategory, setSortBy} from '../redux/actions/filters'

import {fetchGuids} from '../redux/actions/guids';
import LoadingBlock from '../components/GuidsBlock/LoadingBlock';


const categoryNames = ['Туристические','Нетуристические', 'Specialty'];
const sortItems = [
  { name:'Популярности', type: 'popular', order: 'desc'},
  { name:'Бюджету', type: 'price', order: 'desc'},
 ]


 function Home() {
const dispatch = useDispatch();
const items = useSelector(({guids})=> guids.items);
const isLoaded = useSelector(({guids})=> guids.isLoaded);
const {category, sortBy } = useSelector(({filters})=>filters );



  React.useEffect(() => {
    dispatch(fetchGuids(sortBy, category));
   }, [ category, sortBy]); 


  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index));
  }, []);

  const onSelectSortType = React.useCallback((type) => {
    dispatch(setSortBy(type));
  }, []);

return (
    <div className="container">
    <div className="content__top">

<Categories 
activeCategory = {category}
onClickCategory = {onSelectCategory}
items = {categoryNames}/>
{/* теперь делаем сортировку по категориям, для этого в SortPopup создаем массив  */}

<SortPopup
activeSortType = {sortBy}
 items = {sortItems} 
 onClickSortType = {onSelectSortType}/> 

    </div>
    <h2 className="content__title">All</h2>
    <div className="content__items">
     
{isLoaded
? items.map((obj) => <Block key={obj.id}
 isLoading={true} {...obj} />)
  :Array(12)
  .fill(0)
  .map((_,index) => <LoadingBlock key ={index}/>)}


    </div>
  </div>
  );
}




export default Home;
