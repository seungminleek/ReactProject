import { observable, action } from 'mobx';

export default class SideProjectStore {
    
    // 변수 정의
    @observable storeVal = 'start';

    // 메서드 정의 
    @action changeStoreValue = (value: string) => {
        this.storeVal = value;
    };
    @action changeToEnd = () => {
        this.storeVal = "end";
    }
    
}

