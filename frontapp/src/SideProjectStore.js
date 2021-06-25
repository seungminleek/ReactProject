import { observable, action } from 'mobx';
import { autobind } from 'core-decorators';

@autobind
class SideProjectStore {
    
    // 변수 정의
    @observable userSession = {
		"id":"",
		"password":"",
		"admission":"user"	//default
	};

    // 메서드 정의 
    @action sessionSetter = (name, value) => {
        this.userSession = {
			... this.userSession,
			name: value
		};
    };


//     @action changeToEnd = () => {
//         this.storeVal = "end";
//     }
    
}

export default SideProjectStore;

