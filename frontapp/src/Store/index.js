import LoginStore from './LoginStore';

/** 전체 store 모음 
*/
class RootStore {
  constructor(){
    this.loginStore = new LoginStore(this);
  }
}
export default RootStore;