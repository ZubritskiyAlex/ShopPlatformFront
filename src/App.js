import './App.css';
import {Container} from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {BrowserRouter as Router, Route} from "react-router-dom";
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ShippingScreen from "./screens/ShippingScreen";


function App() {
  return (
    <Router>
        <Header/>
        <main className='py-3'>
            <Container>
                <Route path='/' component={HomeScreen} exact />
                <Route path='/product/:id' component={ProductScreen} exact />
                <Route path='/cart/:id?' component={CartScreen} exact />
                <Route path='/login' component={LoginScreen} exact />
                <Route path='/register' component={RegisterScreen} exact />
                <Route path='/profile' component={ProfileScreen} exact />
                <Route path='/shipping' component={ShippingScreen} exact />

            </Container>
        </main>
        <Footer/>
    </Router>
  );
}

export default App;
