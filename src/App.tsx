import './App.css';
import headerImage from './assets/headerImage.svg';
import { ItemForm } from './components/ItemForm/ItemForm';
import { ItemTable } from './components/ItemTable.tsx/ItemTable';
import { ShopContext } from './contexts/shopContext';
import { useShop } from './hooks/useShop';

function App() {
    const shop = useShop();

    return (
        <ShopContext.Provider value={shop}>
            <div className="container">
                <div className="header-container">
                    <img className="img-header" src={headerImage} alt="" />
                    <h1>MoonShop</h1>
                </div>
                <div className="content-container">
                    <ItemForm />
                    <ItemTable />
                </div>
            </div>
        </ShopContext.Provider>
    );
}

export default App;
