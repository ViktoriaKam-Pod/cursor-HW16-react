
import './App.css';

import contents from './contents';
import {Main_Content} from './main'



export default function App(){
    return (
        <div className='App'>
            {contents.map(contents => (
                <Main_Content
                    key={contents.id}
                    photo={contents.photo}
                    name={contents.name}
                    nickname={contents.nickname}
                    content={contents.content}
                    date={contents.date}
                />
            ))}
        </div>
    )
}
