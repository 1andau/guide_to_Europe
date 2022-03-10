import React from 'react';
import PropTypes from 'prop-types';

const SortPopup = React.memo(
function SortPopup ({items, onClickSortType, activeSortType}){

    const [visiblePopup, setVisiblePopup] = React.useState(false);
    const sortRef = React.useRef();
    // делаем "по популярности"
    const activeLabel = items.find((obj) => obj.type === activeSortType ).name;
    
    //если вы хотите хранить ссылку на дом элемент -- используй useRef 
    //если отловить клик шде-то вне области компонента типа в бади, для этого нужно дождаться первого рендера и использовать хуй useEffect 
    //определяете первый рендер и никакие зависимости при этом не иминились, это значит произошел первый рендер и нужно вешать обработчик клика на body и добавлять вот эту функцию handleOutsideClick она юулет обращатсся к функции при каждом клике на body и выполнять что-то 
    //таким образом с тремя хуками sortRef, useState и useEffect -- мы создали такой вот компонент который может оторбражать и скрыыать компонент который вне области клика   
    
    
    //тут переменная visiblePopup которая открывает за скрытие и видимость 
    //а второй массив setVisiblePopup это какая функция должна менять значение переменной 
    //далее говорим что visiblePopup -- будет false по умслчанию, это значение перекидывается в 
    //VisiblePopup
    //функция setVisiblePopup будет менять значение VisiblePopup в зависимости от нужды 
    const toggleVisiblePopup = () => {
    setVisiblePopup(!visiblePopup);
    };
    
    
    const handleOutsideClick = (e) => {
      if (!e.path.includes(sortRef.current)){
    setVisiblePopup(false);
      }
    };
    
    const onSelectItem = (index) => {
     if (onClickSortType){
       onClickSortType(index)
     } //  тут мы указываем какой из li становится активным при клике 
      setVisiblePopup(false); //а тут говорим что когда кликаем на элемент наприемр "по алфавиту" скрывается блок
    };
    
    
    
    
    React.useEffect(() => {
    document.body.addEventListener('click', handleOutsideClick);
        //что делает useEffect? проверяет в принципе был ли
        // компонент обновлен и был ли смионтирован и долджен 
        //ли компонент удалится
        //если компонент в внедрился, оповести нас об этом 
    
    }, []);
    
      return (
    
        <div ref={sortRef} className="sort">
        <div className="sort__label">
          <svg
          className={visiblePopup ? 'rotated' : '' }
            width="10"
            height="6"
            viewBox="0 0 10 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
              fill="#2C2C2C"
            />
          </svg>
          <b>Сортировка по:</b>
          <span 
          onClick ={toggleVisiblePopup}>
            {activeLabel} </span>    
               </div>
    
          {/* за счет ! мы можнм делать true/false  */}
    {  visiblePopup && (
    
     <div className="sort__popup">
    {/* 
    если visiblePopup тру, то эти два амперсанта скажут что правая сторона должна отразиться 
    если false -- то не выполняет   
    теперь попап скрывается и при наведении появляется 
    */}
            <ul>
            {items &&
                 items.map((obj, index) => (
    
                     <li
                     onClick={() => onSelectItem(obj.type)} 
                     className = {activeSortType === index ? 'active' : ''} 
                     //мы сказали что oneSelectItem получает index
                     key = {`${obj.type}_${index}`}>
                       {obj.name}
                       </li>
                 ))}
            </ul>
            </div>
            )}
      </div>
      );
    })


    SortPopup.propTypes = {
activeSortType: PropTypes.string.isRequired,
items: PropTypes.arrayOf(PropTypes.object).isRequired,
onClickSortType: PropTypes.func.isRequired,

};

SortPopup.defaultProps = {
  items: []
}


export default SortPopup;