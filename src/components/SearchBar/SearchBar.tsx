import React from 'react';
import { Photo } from '../../Interfaces/Photo';
import './SearchBar.css'
interface Props{
    data:Photo[];
    onSearchTerm:(list:Photo[]) => void;
}
const SearchBar:React.FC<Props> = ({onSearchTerm,data})=>{
    const onSubmit=(e:React.ChangeEvent<HTMLInputElement>):void=>{
        //we get only the items that start with theser input
        onSearchTerm(data.filter(i=>i.title.startsWith(e.target.value)));
    }
    return(
        <div>
            <input 
                className='searchBar'
                type="text" 
                placeholder='Search Photo'
                onChange={onSubmit}
            />
        </div>
    )
}


export default React.memo(SearchBar);