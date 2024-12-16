import { MainPage, ProductPage, CartPage} from "../pages_ui/index";

export class App {
    constructor(page) {
        this.page = page;
        this.mainPage = new MainPage (page);
        this.productPage = new ProductPage (page); 
        this.cartPage = new CartPage (page); 
}
};