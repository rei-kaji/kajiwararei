import Top from './Pages/Top'
import Menu from './Menu/Menu';

export default function Home(props) {
    return(
        <div className="Home">
            {/* <Menu/> */}
            <p>Hello React</p>
            <Top/>
        </div>
    );
}